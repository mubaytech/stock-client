import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ImageLoaderConfig = class ImageLoaderConfig {
    constructor() {
        this.debugMode = false;
        this.spinnerEnabled = true;
        this.fallbackAsPlaceholder = false;
        this.backgroundSize = 'contain';
        this.backgroundRepeat = 'no-repeat';
        this.display = 'block';
        this.width = '100%';
        this.height = '100%';
        this.useImg = false;
        this.concurrency = 5;
        this.maxCacheSize = -1;
        this.maxCacheAge = -1;
        this.imageReturnType = 'uri';
        this.fileNameCachedWithExtension = false;
        this.fallbackFileNameCachedExtension = '.jpg';
        this.cacheDirectoryType = 'cache';
        this._cacheDirectoryName = 'image-loader-cache';
    }
    get cacheDirectoryName() {
        return this._cacheDirectoryName;
    }
    set cacheDirectoryName(name) {
        name.replace(/\W/g, '');
        this._cacheDirectoryName = name;
    }
    /**
     * Enables debug mode to receive console logs, errors, warnings
     */
    enableDebugMode() {
        this.debugMode = true;
    }
    /**
     * Enable/Disable the spinner by default. Defaults to true.
     * @param {boolean} enable set to true to enable
     */
    enableSpinner(enable) {
        this.spinnerEnabled = enable;
    }
    /**
     * Enable/Disable the fallback image as placeholder instead of the spinner. Defaults to false.
     * @param {boolean} enable set to true to enable
     */
    enableFallbackAsPlaceholder(enable) {
        this.fallbackAsPlaceholder = enable;
    }
    /**
     * Sets the cache directory name. Defaults to 'image-loader-cache'
     * @param {string} name name of directory
     */
    setCacheDirectoryName(name) {
        this.cacheDirectoryName = name;
    }
    /**
     * Set default height for images that are not using <img> tag
     * @param {string} height height
     */
    setHeight(height) {
        this.height = height;
    }
    /**
     * Set default width for images that are not using <img> tag
     * @param {string} width Width
     */
    setWidth(width) {
        this.width = width;
    }
    /**
     * Enable display mode for images that are not using <img> tag
     * @param {string} display Display mode
     */
    setDisplay(display) {
        this.display = display;
    }
    /**
     * Use <img> tag by default
     * @param {boolean} use set to true to use <img> tag by default
     */
    useImageTag(use) {
        this.useImg = use;
    }
    /**
     * Set default background size for images that are not using <img> tag
     * @param {string} backgroundSize Background size
     */
    setBackgroundSize(backgroundSize) {
        this.backgroundSize = backgroundSize;
    }
    /**
     * Set background repeat for images that are not using <img> tag
     * @param {string} backgroundRepeat Background repeat
     */
    setBackgroundRepeat(backgroundRepeat) {
        this.backgroundRepeat = backgroundRepeat;
    }
    /**
     * Set fallback URL to use when image src is undefined or did not resolve.
     * This image will not be cached. This should ideally be a locally saved image.
     * @param {string} fallbackUrl The remote or local URL of the image
     */
    setFallbackUrl(fallbackUrl) {
        this.fallbackUrl = fallbackUrl;
    }
    /**
     * Set the maximum number of allowed connections at the same time.
     * @param {number} concurrency
     */
    setConcurrency(concurrency) {
        this.concurrency = concurrency;
    }
    /**
     * Sets the maximum allowed cache size
     * @param {number} cacheSize Cache size in bytes
     */
    setMaximumCacheSize(cacheSize) {
        this.maxCacheSize = cacheSize;
    }
    /**
     * Sets the maximum allowed cache age
     * @param {number} cacheAge Maximum cache age in milliseconds
     */
    setMaximumCacheAge(cacheAge) {
        this.maxCacheAge = cacheAge;
    }
    /**
     * Set the return type of cached images
     * @param imageReturnType {string} The return type; either 'base64' or 'uri'
     */
    setImageReturnType(imageReturnType) {
        this.imageReturnType = imageReturnType;
    }
    /**
     * Set the default spinner name
     * @param {string} name
     */
    setSpinnerName(name) {
        this.spinnerName = name;
    }
    /**
     * Set the default spinner color
     * @param {string} color
     */
    setSpinnerColor(color) {
        this.spinnerColor = color;
    }
    /**
     * Set headers options for the HttpClient transfers.
     * @param {HttpHeaders} headers
     */
    setHttpHeaders(headers) {
        this.httpHeaders = headers;
    }
    /**
     * Set options for the FileTransfer plugin
     * @param options
     * @deprecated FileTransfer plugin removed.
     */
    setFileTransferOptions(options) {
        // do nothing, plugin deprecated.
    }
    /**
     * Enable/Disable the save filename of cached images with extension.  Defaults to false.
     * @param {boolean} enable set to true to enable
     */
    setFileNameCachedWithExtension(enable) {
        this.fileNameCachedWithExtension = enable;
    }
    /**
     * Set fallback extension filename of cached images.  Defaults to '.jpg'.
     * @param {string} extension fallback extension (e.x .jpg)
     */
    setFallbackFileNameCachedExtension(extension) {
        this.fallbackFileNameCachedExtension = extension;
    }
};
ImageLoaderConfig = __decorate([
    Injectable()
], ImageLoaderConfig);
export { ImageLoaderConfig };
//# sourceMappingURL=image-loader-config.js.map