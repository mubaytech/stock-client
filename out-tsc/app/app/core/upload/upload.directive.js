var UploadDirective_1;
import { __decorate } from "tslib";
import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { combineLatest, Subject } from 'rxjs';
import { Upload } from './upload';
import { BaseControlValueAccessor } from '../../shared/base-control-value-accessor';
let UploadDirective = UploadDirective_1 = class UploadDirective extends BaseControlValueAccessor {
    constructor(uploadService, el, apollo, changeDetectorRef) {
        super(changeDetectorRef);
        this.uploadService = uploadService;
        this.el = el;
        this.apollo = apollo;
        this.onDestroy$ = new Subject();
        this.filter = uploads => {
            const $uploads = new Array();
            for (const u of Object.keys(uploads)) {
                if (uploads[u].viewId === this.id) {
                    $uploads.push(uploads[u]);
                }
            }
            return $uploads;
        };
        this.id = Upload.getRandom();
    }
    get value() {
        return this.val;
    }
    set value(value) {
        if (this.checkDiff(value)) {
            this.val = !this.multiple ? ((value === null || value === void 0 ? void 0 : value.length) ? value[0] : value) : value;
            this.onChange(!this.multiple ? ((value === null || value === void 0 ? void 0 : value.length) ? value[0] : value) : value);
            this.onTouched();
        }
    }
    get models() {
        return this.uploads.pipe(switchMap(uploads => combineLatest(uploads.map(u => u.onModel))), filter(us => !us.find(u => { var _a; return !((_a = u) === null || _a === void 0 ? void 0 : _a.created_at); })));
    }
    get uploads() {
        return this.uploadService.uploads.pipe(map(this.filter), distinctUntilChanged());
    }
    set files(files) {
        // console.log(files);
        if (!files) {
            // files = new FileList;
            files = new DataTransfer().files;
        }
        let uploads = [];
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < files.length; i++) {
            uploads = [(new Upload(this.apollo, files[i], this.id)), ...uploads];
        }
        this.setUploads([...uploads]);
    }
    ngAfterViewInit() {
        //
    }
    ngOnInit() {
        this.models.subscribe(value => {
            this.value = (value === null || value === void 0 ? void 0 : value.length) ? value : null;
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        // this.uploadService.remove();
    }
    setUploads($uploads) {
        const uploads = this.filter(this.uploadService.uploadsObject);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < uploads.length; i++) {
            this.uploadService.cancel(uploads[i]);
        }
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < $uploads.length; i++) {
            this.uploadService.push($uploads[i]);
        }
    }
};
__decorate([
    Input()
], UploadDirective.prototype, "name", void 0);
__decorate([
    Input('value')
], UploadDirective.prototype, "val", void 0);
__decorate([
    Input()
], UploadDirective.prototype, "disabled", void 0);
__decorate([
    Input()
], UploadDirective.prototype, "multiple", void 0);
UploadDirective = UploadDirective_1 = __decorate([
    Directive({
        selector: '[appUpload]',
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UploadDirective_1),
                multi: true
            },
        ],
    })
], UploadDirective);
export { UploadDirective };
//# sourceMappingURL=upload.directive.js.map