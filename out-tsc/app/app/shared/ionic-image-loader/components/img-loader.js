import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
const propMap = {
    display: 'display',
    height: 'height',
    width: 'width',
    backgroundSize: 'background-size',
    backgroundRepeat: 'background-repeat',
};
let ImgLoaderComponent = class ImgLoaderComponent {
    constructor(_element, renderer, imageLoader, config) {
        this._element = _element;
        this.renderer = renderer;
        this.imageLoader = imageLoader;
        this.config = config;
        /**
         * Fallback URL to load when the image url fails to load or does not exist.
         */
        this.fallbackUrl = this.config.fallbackUrl;
        /**
         * Whether to show a spinner while the image loads
         */
        this.spinner = this.config.spinnerEnabled;
        /**
         * Whether to show the fallback image instead of a spinner while the image loads
         */
        this.fallbackAsPlaceholder = this.config.fallbackAsPlaceholder;
        /**
         * Attributes to pass through to img tag if _useImg == true
         */
        this.imgAttributes = [];
        /**
         * Enable/Disable caching
         * @type {boolean}
         */
        this.cache = true;
        /**
         * Width of the image. This will be ignored if using useImg.
         */
        this.width = this.config.width;
        /**
         * Height of the image. This will be ignored if using useImg.
         */
        this.height = this.config.height;
        /**
         * Display type of the image. This will be ignored if using useImg.
         */
        this.display = this.config.display;
        /**
         * Background size. This will be ignored if using useImg.
         */
        this.backgroundSize = this.config.backgroundSize;
        /**
         * Background repeat. This will be ignored if using useImg.
         */
        this.backgroundRepeat = this.config.backgroundRepeat;
        /**
         * Name of the spinner
         */
        this.spinnerName = this.config.spinnerName;
        /**
         * Color of the spinner
         */
        this.spinnerColor = this.config.spinnerColor;
        /**
         * Notify on image load..
         */
        // tslint:disable-next-line:no-output-native
        this.load = new EventEmitter();
        /**
         * Indicates if the image is still loading
         * @type {boolean}
         */
        this.isLoading = true;
        this._useImg = this.config.useImg;
    }
    /**
     * Use <img> tag
     */
    set useImg(val) {
        this._useImg = val !== false;
    }
    /**
     * Convenience attribute to disable caching
     * @param val
     */
    set noCache(val) {
        this.cache = val !== false;
    }
    get src() {
        return this._src;
    }
    /**
     * The URL of the image to load.
     */
    set src(imageUrl) {
        this._src = this.processImageUrl(imageUrl);
        this.updateImage(this._src);
    }
    ngOnInit() {
        if (this.fallbackAsPlaceholder && this.fallbackUrl) {
            this.setImage(this.fallbackUrl, false);
        }
        if (!this.src) {
            // image url was not passed
            // this can happen when [src] is set to a variable that turned out to be undefined
            // one example could be a list of users with their profile pictures
            // in this case, it would be useful to use the fallback image instead
            // if fallbackUrl was used as placeholder we do not need to set it again
            if (!this.fallbackAsPlaceholder && this.fallbackUrl) {
                // we're not going to cache the fallback image since it should be locally saved
                this.setImage(this.fallbackUrl);
            }
            else {
                this.isLoading = false;
            }
        }
    }
    updateImage(imageUrl) {
        this.imageLoader
            .getImagePath(imageUrl)
            .then((url) => this.setImage(url))
            .catch((error) => this.setImage(this.fallbackUrl || imageUrl));
    }
    /**
     * Gets the image URL to be loaded and disables caching if necessary
     * @returns {string}
     */
    processImageUrl(imageUrl) {
        if (this.cache === false) {
            // need to disable caching
            if (imageUrl.indexOf('?') === -1) {
                // add ? if doesn't exists
                imageUrl += '?';
            }
            if (['&', '?'].indexOf(imageUrl.charAt(imageUrl.length)) === -1) {
                // add & if necessary
                imageUrl += '&';
            }
            // append timestamp at the end to make URL unique
            imageUrl += 'cache_buster=' + Date.now();
        }
        return imageUrl;
    }
    /**
     * Set the image to be displayed
     * @param imageUrl {string} image src
     * @param stopLoading {boolean} set to true to mark the image as loaded
     */
    setImage(imageUrl, stopLoading = true) {
        this.isLoading = !stopLoading;
        if (this._useImg) {
            // Using <img> tag
            if (!this.element) {
                // create img element if we dont have one
                this.element = this.renderer.createElement('img');
                this.renderer.appendChild(this._element.nativeElement, this.element);
            }
            // set it's src
            this.renderer.setAttribute(this.element, 'src', imageUrl);
            // if imgAttributes are defined, add them to our img element
            this.imgAttributes.forEach((attribute) => {
                this.renderer.setAttribute(this.element, attribute.element, attribute.value);
            });
            if (this.fallbackUrl && !this.imageLoader.nativeAvailable) {
                this.renderer.listen(this.element, 'error', () => this.renderer.setAttribute(this.element, 'src', this.fallbackUrl));
            }
        }
        else {
            // Not using <img> tag
            this.element = this._element.nativeElement;
            for (const prop in propMap) {
                if (this[prop]) {
                    this.renderer.setStyle(this.element, propMap[prop], this[prop]);
                }
            }
            this.renderer.setStyle(this.element, 'background-image', `url("${imageUrl || this.fallbackUrl}")`);
        }
        if (stopLoading) {
            this.load.emit(this);
        }
    }
};
__decorate([
    Input()
], ImgLoaderComponent.prototype, "fallbackUrl", void 0);
__decorate([
    Input()
], ImgLoaderComponent.prototype, "spinner", void 0);
__decorate([
    Input()
], ImgLoaderComponent.prototype, "fallbackAsPlaceholder", void 0);
__decorate([
    Input( /*'imgAttributes'*/)
], ImgLoaderComponent.prototype, "imgAttributes", void 0);
__decorate([
    Input()
], ImgLoaderComponent.prototype, "cache", void 0);
__decorate([
    Input()
], ImgLoaderComponent.prototype, "width", void 0);
__decorate([
    Input()
], ImgLoaderComponent.prototype, "height", void 0);
__decorate([
    Input()
], ImgLoaderComponent.prototype, "display", void 0);
__decorate([
    Input()
], ImgLoaderComponent.prototype, "backgroundSize", void 0);
__decorate([
    Input()
], ImgLoaderComponent.prototype, "backgroundRepeat", void 0);
__decorate([
    Input()
], ImgLoaderComponent.prototype, "spinnerName", void 0);
__decorate([
    Input()
], ImgLoaderComponent.prototype, "spinnerColor", void 0);
__decorate([
    Output()
], ImgLoaderComponent.prototype, "load", void 0);
__decorate([
    Input()
], ImgLoaderComponent.prototype, "useImg", null);
__decorate([
    Input()
], ImgLoaderComponent.prototype, "noCache", null);
__decorate([
    Input()
], ImgLoaderComponent.prototype, "src", null);
ImgLoaderComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'img-loader',
        template: '<ion-spinner *ngIf="spinner && isLoading && !fallbackAsPlaceholder" [name]="spinnerName" [color]="spinnerColor"></ion-spinner>' +
            '<ng-content></ng-content>',
        styles: [
            'ion-spinner { float: none; margin-left: auto; margin-right: auto; display: block; }',
        ],
    })
], ImgLoaderComponent);
export { ImgLoaderComponent };
//# sourceMappingURL=img-loader.js.map