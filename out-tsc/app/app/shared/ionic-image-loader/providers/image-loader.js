import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import { first } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
let ImageLoader = class ImageLoader {
    constructor(config, file, http, platform) {
        this.config = config;
        this.http = http;
        this.platform = platform;
        /**
         * Indicates if the cache service is ready.
         * When the cache service isn't ready, images are loaded via browser instead.
         * @type {boolean}
         */
        this.isCacheReady = false;
        /**
         * Indicates if this service is initialized.
         * This service is initialized once all the setup is done.
         * @type {boolean}
         */
        this.isInit = false;
        /**
         * Number of concurrent requests allowed
         * @type {number}
         */
        this.concurrency = 5;
        /**
         * Queue items
         * @type {Array}
         */
        this.queue = [];
        this.processing = 0;
        /**
         * Fast accessible Object for currently processing items
         */
        this.currentlyProcessing = {};
        this.cacheIndex = [];
        this.currentCacheSize = 0;
        this.indexed = false;
        this.file = file;
        if (!platform.is('cordova')) {
            // we are running on a browser, or using livereload
            // plugin will not function in this case
            this.isInit = true;
            this.throwWarning('You are running on a browser or using livereload, IonicImageLoader will not function, falling back to browser loading.');
        }
        else {
            fromEvent(document, 'deviceready')
                .pipe(first())
                .subscribe(res => {
                if (this.nativeAvailable) {
                    this.initCache();
                }
                else {
                    // we are running on a browser, or using livereload
                    // plugin will not function in this case
                    this.isInit = true;
                    this.throwWarning('You are running on a browser or using livereload, IonicImageLoader will not function, falling back to browser loading.');
                }
            });
        }
    }
    get nativeAvailable() {
        // @ts-ignore
        return File.installed();
    }
    get isCacheSpaceExceeded() {
        return (this.config.maxCacheSize > -1 &&
            this.currentCacheSize > this.config.maxCacheSize);
    }
    get isWKWebView() {
        return (this.platform.is('ios') &&
            window.webkit &&
            window.webkit.messageHandlers);
    }
    get isIonicWKWebView() {
        return ((this.isWKWebView || this.platform.is('android')) &&
            (location.host === 'localhost:8080' || window.LiveReload));
    }
    get isDevServer() {
        return window.IonicDevServer !== undefined;
    }
    /**
     * Check if we can process more items in the queue
     * @returns {boolean}
     */
    get canProcess() {
        return this.queue.length > 0 && this.processing < this.concurrency;
    }
    /**
     * Preload an image
     * @param {string} imageUrl Image URL
     * @returns {Promise<string>} returns a promise that resolves with the cached image URL
     */
    preload(imageUrl) {
        return this.getImagePath(imageUrl);
    }
    getFileCacheDirectory() {
        if (this.config.cacheDirectoryType === 'data') {
            return this.file.dataDirectory;
        }
        return this.file.cacheDirectory;
    }
    /**
     * Clears cache of a single image
     * @param {string} imageUrl Image URL
     */
    clearImageCache(imageUrl) {
        if (!this.platform.is('cordova')) {
            return;
        }
        const clear = () => {
            if (!this.isInit) {
                // do not run this method until our service is initialized
                setTimeout(clear.bind(this), 500);
                return;
            }
            const fileName = this.createFileName(imageUrl);
            const route = this.getFileCacheDirectory() + this.config.cacheDirectoryName;
            // pause any operations
            this.isInit = false;
            this.file.removeFile(route, fileName)
                .then(() => {
                if (this.isWKWebView && !this.isIonicWKWebView) {
                    this.file.removeFile(this.file.tempDirectory + this.config.cacheDirectoryName, fileName)
                        .then(() => {
                        this.initCache(true);
                    }).catch(err => {
                        // Handle error?
                    });
                }
                else {
                    this.initCache(true);
                }
            }).catch(this.throwError.bind(this));
        };
        clear();
    }
    /**
     * Clears the cache
     */
    clearCache() {
        if (!this.platform.is('cordova')) {
            return;
        }
        const clear = () => {
            if (!this.isInit) {
                // do not run this method until our service is initialized
                setTimeout(clear.bind(this), 500);
                return;
            }
            // pause any operations
            this.isInit = false;
            this.file.removeRecursively(this.getFileCacheDirectory(), this.config.cacheDirectoryName)
                .then(() => {
                if (this.isWKWebView && !this.isIonicWKWebView) {
                    // also clear the temp files
                    this.file
                        .removeRecursively(this.file.tempDirectory, this.config.cacheDirectoryName)
                        .catch(error => {
                        // Noop catch. Removing the tempDirectory might fail,
                        // as it is not persistent.
                    })
                        .then(() => {
                        this.initCache(true);
                    });
                }
                else {
                    this.initCache(true);
                }
            })
                .catch(this.throwError.bind(this));
        };
        clear();
    }
    /**
     * Gets the filesystem path of an image.
     * This will return the remote path if anything goes wrong or if the cache service isn't ready yet.
     * @param {string} imageUrl The remote URL of the image
     * @returns {Promise<string>} Returns a promise that will always resolve with an image URL
     */
    getImagePath(imageUrl) {
        if (typeof imageUrl !== 'string' || imageUrl.length <= 0) {
            return Promise.reject('The image url provided was empty or invalid.');
        }
        return new Promise((resolve, reject) => {
            const getImage = () => {
                if (this.isImageUrlRelative(imageUrl)) {
                    resolve(imageUrl);
                }
                else {
                    this.getCachedImagePath(imageUrl)
                        .then(resolve)
                        .catch(() => {
                        // image doesn't exist in cache, lets fetch it and save it
                        this.addItemToQueue(imageUrl, resolve, reject);
                    });
                }
            };
            const check = () => {
                if (this.isInit) {
                    if (this.isCacheReady) {
                        getImage();
                    }
                    else {
                        this.throwWarning('The cache system is not running. Images will be loaded by your browser instead.');
                        resolve(imageUrl);
                    }
                }
                else {
                    setTimeout(() => check(), 250);
                }
            };
            check();
        });
    }
    /**
     * Returns if an imageUrl is an relative path
     * @param {string} imageUrl
     */
    isImageUrlRelative(imageUrl) {
        return !/^(https?|file):\/\/\/?/i.test(imageUrl);
    }
    /**
     * Add an item to the queue
     * @param {string} imageUrl
     * @param resolve
     * @param reject
     */
    addItemToQueue(imageUrl, resolve, reject) {
        this.queue.push({
            imageUrl,
            resolve,
            reject,
        });
        this.processQueue();
    }
    /**
     * Processes one item from the queue
     */
    processQueue() {
        // make sure we can process items first
        if (!this.canProcess) {
            return;
        }
        // increase the processing number
        this.processing++;
        // take the first item from queue
        const currentItem = this.queue.splice(0, 1)[0];
        // function to call when done processing this item
        // this will reduce the processing number
        // then will execute this function again to process any remaining items
        const done = () => {
            this.processing--;
            this.processQueue();
            // only delete if it's the last/unique occurrence in the queue
            if (this.currentlyProcessing[currentItem.imageUrl] !== undefined && !this.currentlyInQueue(currentItem.imageUrl)) {
                delete this.currentlyProcessing[currentItem.imageUrl];
            }
        };
        const error = (e) => {
            currentItem.reject();
            this.throwError(e);
            done();
        };
        if (this.currentlyProcessing[currentItem.imageUrl] === undefined) {
            this.currentlyProcessing[currentItem.imageUrl] = new Promise((resolve, reject) => {
                // process more items concurrently if we can
                if (this.canProcess) {
                    this.processQueue();
                }
                const localDir = this.getFileCacheDirectory() + this.config.cacheDirectoryName + '/';
                const fileName = this.createFileName(currentItem.imageUrl);
                this.http.get(currentItem.imageUrl, {
                    responseType: 'blob',
                    headers: this.config.httpHeaders
                }).subscribe((data) => {
                    this.file.writeFile(localDir, fileName, data, { replace: true }).then((file) => {
                        if (this.isCacheSpaceExceeded) {
                            this.maintainCacheSize();
                        }
                        this.addFileToIndex(file).then(() => {
                            this.getCachedImagePath(currentItem.imageUrl).then((localUrl) => {
                                currentItem.resolve(localUrl);
                                resolve();
                                done();
                                this.maintainCacheSize();
                            });
                        });
                    }).catch((e) => {
                        // Could not write image
                        error(e);
                        reject(e);
                    });
                }, (e) => {
                    // Could not get image via httpClient
                    error(e);
                    reject(e);
                });
            });
        }
        else {
            // Prevented same Image from loading at the same time
            this.currentlyProcessing[currentItem.imageUrl].then(() => {
                this.getCachedImagePath(currentItem.imageUrl).then(localUrl => {
                    currentItem.resolve(localUrl);
                });
                done();
            }, (e) => {
                error(e);
            });
        }
    }
    /**
     * Search if the url is currently in the queue
     * @param imageUrl {string} Image url to search
     * @returns {boolean}
     */
    currentlyInQueue(imageUrl) {
        return this.queue.some(item => item.imageUrl === imageUrl);
    }
    /**
     * Initialize the cache service
     * @param [boolean] replace Whether to replace the cache directory if it already exists
     */
    initCache(replace) {
        this.concurrency = this.config.concurrency;
        // create cache directories if they do not exist
        this.createCacheDirectory(replace)
            .catch(e => {
            this.throwError(e);
            this.isInit = true;
        })
            .then(() => this.indexCache())
            .then(() => {
            this.isCacheReady = true;
            this.isInit = true;
        });
    }
    /**
     * Adds a file to index.
     * Also deletes any files if they are older than the set maximum cache age.
     * @param {FileEntry} file File to index
     * @returns {Promise<any>}
     */
    addFileToIndex(file) {
        return new Promise((resolve, reject) => file.getMetadata(resolve, reject)).then(metadata => {
            if (this.config.maxCacheAge > -1 &&
                Date.now() - metadata.modificationTime.getTime() >
                    this.config.maxCacheAge) {
                // file age exceeds maximum cache age
                return this.removeFile(file.name);
            }
            else {
                // file age doesn't exceed maximum cache age, or maximum cache age isn't set
                this.currentCacheSize += metadata.size;
                // add item to index
                this.cacheIndex.push({
                    name: file.name,
                    modificationTime: metadata.modificationTime,
                    size: metadata.size,
                });
                return Promise.resolve();
            }
        });
    }
    /**
     * Indexes the cache if necessary
     * @returns {Promise<void>}
     */
    indexCache() {
        this.cacheIndex = [];
        return this.file.listDir(this.getFileCacheDirectory(), this.config.cacheDirectoryName)
            .then(files => Promise.all(files.map(this.addFileToIndex.bind(this))))
            .then(() => {
            // Sort items by date. Most recent to oldest.
            this.cacheIndex = this.cacheIndex.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
            this.indexed = true;
            return Promise.resolve();
        })
            .catch(e => {
            this.throwError(e);
            return Promise.resolve();
        });
    }
    /**
     * This method runs every time a new file is added.
     * It checks the cache size and ensures that it doesn't exceed the maximum cache size set in the config.
     * If the limit is reached, it will delete old images to create free space.
     */
    maintainCacheSize() {
        if (this.config.maxCacheSize > -1 && this.indexed) {
            const maintain = () => {
                if (this.currentCacheSize > this.config.maxCacheSize) {
                    // called when item is done processing
                    const next = () => {
                        this.currentCacheSize -= file.size;
                        maintain();
                    };
                    // grab the first item in index since it's the oldest one
                    const file = this.cacheIndex.splice(0, 1)[0];
                    if (typeof file === 'undefined') {
                        return maintain();
                    }
                    // delete the file then process next file if necessary
                    this.removeFile(file.name)
                        .then(() => next())
                        .catch(() => next()); // ignore errors, nothing we can do about it
                }
            };
            maintain();
        }
    }
    /**
     * Remove a file
     * @param {string} file The name of the file to remove
     * @returns {Promise<any>}
     */
    removeFile(file) {
        return this.file
            .removeFile(this.getFileCacheDirectory() + this.config.cacheDirectoryName, file)
            .then(() => {
            if (this.isWKWebView && !this.isIonicWKWebView) {
                return this.file
                    .removeFile(this.file.tempDirectory + this.config.cacheDirectoryName, file)
                    .catch(() => {
                    // Noop catch. Removing the files from tempDirectory might fail, as it is not persistent.
                });
            }
        });
    }
    /**
     * Get the local path of a previously cached image if exists
     * @param {string} url The remote URL of the image
     * @returns {Promise<string>} Returns a promise that resolves with the local path if exists, or rejects if doesn't exist
     */
    getCachedImagePath(url) {
        return new Promise((resolve, reject) => {
            // make sure cache is ready
            if (!this.isCacheReady) {
                return reject();
            }
            // if we're running with livereload, ignore cache and call the resource from it's URL
            if (this.isDevServer) {
                return resolve(url);
            }
            // get file name
            const fileName = this.createFileName(url);
            // get full path
            const dirPath = this.getFileCacheDirectory() + this.config.cacheDirectoryName;
            const tempDirPath = this.file.tempDirectory + this.config.cacheDirectoryName;
            // check if exists
            this.file
                .resolveLocalFilesystemUrl(dirPath + '/' + fileName)
                .then((fileEntry) => {
                // file exists in cache
                if (this.config.imageReturnType === 'base64') {
                    // read the file as data url and return the base64 string.
                    // should always be successful as the existence of the file
                    // is already ensured
                    this.file
                        .readAsDataURL(dirPath, fileName)
                        .then((base64) => {
                        base64 = base64.replace('data:null', 'data:*/*');
                        resolve(base64);
                    })
                        .catch(reject);
                }
                else if (this.config.imageReturnType === 'uri') {
                    // now check if iOS device & using WKWebView Engine.
                    // in this case only the tempDirectory is accessible,
                    // therefore the file needs to be copied into that directory first!
                    if (this.isIonicWKWebView) {
                        // Use Ionic convertFileSrc to generate the right URL for Ionic WKWebView
                        resolve(Ionic.WebView.convertFileSrc(fileEntry.nativeURL));
                    }
                    else if (this.isWKWebView) {
                        // check if file already exists in temp directory
                        this.file
                            .resolveLocalFilesystemUrl(tempDirPath + '/' + fileName)
                            .then((tempFileEntry) => {
                            // file exists in temp directory
                            // return native path
                            resolve(Ionic.WebView.convertFileSrc(tempFileEntry.nativeURL));
                        })
                            .catch(() => {
                            // file does not yet exist in the temp directory.
                            // copy it!
                            this.file
                                .copyFile(dirPath, fileName, tempDirPath, fileName)
                                .then((tempFileEntry) => {
                                // now the file exists in the temp directory
                                // return native path
                                resolve(Ionic.WebView.convertFileSrc(tempFileEntry.nativeURL));
                            })
                                .catch(reject);
                        });
                    }
                    else {
                        // return native path
                        resolve(Ionic.WebView.convertFileSrc(fileEntry.nativeURL));
                    }
                }
            })
                .catch(reject); // file doesn't exist
        });
    }
    /**
     * Throws a console error if debug mode is enabled
     * @param {any[]} args Error message
     */
    throwError(...args) {
        if (this.config.debugMode) {
            args.unshift('ImageLoader Error: ');
            console.error.apply(console, args);
        }
    }
    /**
     * Throws a console warning if debug mode is enabled
     * @param {any[]} args Error message
     */
    throwWarning(...args) {
        if (this.config.debugMode) {
            args.unshift('ImageLoader Warning: ');
            console.warn.apply(console, args);
        }
    }
    /**
     * Check if the cache directory exists
     * @param directory {string} The directory to check. Either this.file.tempDirectory or this.getFileCacheDirectory()
     * @returns {Promise<boolean|FileError>} Returns a promise that resolves if exists, and rejects if it doesn't
     */
    cacheDirectoryExists(directory) {
        return this.file.checkDir(directory, this.config.cacheDirectoryName);
    }
    /**
     * Create the cache directories
     * @param replace {boolean} override directory if exists
     * @returns {Promise<DirectoryEntry|FileError>} Returns a promise that resolves if the directories were created, and rejects on error
     */
    createCacheDirectory(replace = false) {
        let cacheDirectoryPromise;
        let tempDirectoryPromise;
        if (replace) {
            // create or replace the cache directory
            cacheDirectoryPromise = this.file.createDir(this.getFileCacheDirectory(), this.config.cacheDirectoryName, replace);
        }
        else {
            // check if the cache directory exists.
            // if it does not exist create it!
            cacheDirectoryPromise = this.cacheDirectoryExists(this.getFileCacheDirectory())
                .catch(() => this.file.createDir(this.getFileCacheDirectory(), this.config.cacheDirectoryName, false));
        }
        if (this.isWKWebView && !this.isIonicWKWebView) {
            if (replace) {
                // create or replace the temp directory
                tempDirectoryPromise = this.file.createDir(this.file.tempDirectory, this.config.cacheDirectoryName, replace);
            }
            else {
                // check if the temp directory exists.
                // if it does not exist create it!
                tempDirectoryPromise = this.cacheDirectoryExists(this.file.tempDirectory).catch(() => this.file.createDir(this.file.tempDirectory, this.config.cacheDirectoryName, false));
            }
        }
        else {
            tempDirectoryPromise = Promise.resolve();
        }
        return Promise.all([cacheDirectoryPromise, tempDirectoryPromise]);
    }
    /**
     * Creates a unique file name out of the URL
     * @param {string} url URL of the file
     * @returns {string} Unique file name
     */
    createFileName(url) {
        // hash the url to get a unique file name
        return (this.hashString(url).toString() +
            (this.config.fileNameCachedWithExtension
                ? this.getExtensionFromUrl(url)
                : ''));
    }
    /**
     * Converts a string to a unique 32-bit int
     * @param {string} string string to hash
     * @returns {number} 32-bit int
     */
    hashString(str) {
        let hash = 0;
        let char;
        if (str.length === 0) {
            return hash;
        }
        for (let i = 0; i < str.length; i++) {
            char = str.charCodeAt(i);
            // tslint:disable-next-line
            hash = (hash << 5) - hash + char;
            // tslint:disable-next-line
            hash = hash & hash;
        }
        return hash;
    }
    /**
     * Extract extension from filename or url
     *
     * @param {string} url
     * @returns {string}
     */
    getExtensionFromUrl(url) {
        const urlWitoutParams = url.split(/\#|\?/)[0];
        return (
        // tslint:disable-next-line:no-bitwise
        urlWitoutParams.substr((~-urlWitoutParams.lastIndexOf('.') >>> 0) + 1) ||
            this.config.fallbackFileNameCachedExtension);
    }
};
ImageLoader = __decorate([
    Injectable()
], ImageLoader);
export { ImageLoader };
//# sourceMappingURL=image-loader.js.map