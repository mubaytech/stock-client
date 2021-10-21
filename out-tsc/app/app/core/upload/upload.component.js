import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AppOnDestroy } from '../types';
let UploadComponent = class UploadComponent extends AppOnDestroy {
    constructor(uploadService, injector, el, apollo, changeDetectorRef) {
        super();
        this.uploadService = uploadService;
    }
    ngOnInit() {
        //
    }
    ngAfterViewInit() {
        //
    }
};
__decorate([
    Input()
], UploadComponent.prototype, "upload", void 0);
UploadComponent = __decorate([
    Component({
        selector: 'app-upload',
        templateUrl: './upload.component.html',
        styleUrls: ['./upload.component.scss'],
        providers: [],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], UploadComponent);
export { UploadComponent };
//# sourceMappingURL=upload.component.js.map