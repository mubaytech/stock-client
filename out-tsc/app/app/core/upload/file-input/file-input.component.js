var FileInputComponent_1;
import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, forwardRef, HostBinding, HostListener, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { UploadDirective } from '../upload.directive';
import { takeUntil } from 'rxjs/operators';
let FileInputComponent = FileInputComponent_1 = class FileInputComponent extends UploadDirective {
    constructor(el, changeDetectorRef, formBuilder, uploadService, core, apollo) {
        super(uploadService, el, apollo, changeDetectorRef);
        this.el = el;
        this.formBuilder = formBuilder;
        this.core = core;
        this.$fileImageConfig = { minWidth: 400, minHeight: 400 };
        this.$fileSizeConfig = { maxSize: 2000 };
        this.$fileConfig = { maxFiles: 4 };
        this.fileInputForm = this.formBuilder.group({ fileInput: [null] });
    }
    set size(size) {
        this.$fileSizeConfig = Object.assign(Object.assign({}, this.$fileSizeConfig), size);
        this.updateValidators();
    }
    set fileConfig(fileConfig) {
        this.$fileConfig = Object.assign(Object.assign({}, this.$fileConfig), fileConfig);
        this.updateValidators();
    }
    set image(image) {
        this.$fileImageConfig = Object.assign(Object.assign({}, this.$fileImageConfig), image);
        this.updateValidators();
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.onDragOverClass = true;
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.onDragOverClass = false;
    }
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.files = files;
            this.fileInput.nativeElement.files = files;
        }
    }
    /*@HostListener(`change`, [`$event.target`])*/
    onInputChange(evt) {
        const target = evt.target;
        // console.log(evt);
        // evt.preventDefault();
        // evt.stopPropagation();
        if (target.files) {
            this.files = target.files;
        }
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.uploads.pipe().subscribe(_ => {
            this.fileInput.nativeElement.value = null;
        });
        timer(300).pipe(takeUntil(this.onDestroy$)).subscribe(_ => this.updateValidators());
    }
    writeValue(obj) {
        super.writeValue(obj);
        // console.log(obj);
    }
    ngOnInit() {
        super.ngOnInit();
    }
    updateValidators() {
        // console.log(this.$fileSizeConfig);
        this.fileInputForm.controls.fileInput.setValidators([
            Validators.required,
            RxwebValidators.image(this.$fileImageConfig),
            RxwebValidators.fileSize(this.$fileSizeConfig),
            RxwebValidators.file(this.$fileConfig)
        ]);
        this.fileInputForm.updateValueAndValidity();
    }
};
__decorate([
    Input()
], FileInputComponent.prototype, "size", null);
__decorate([
    ViewChild('fileInput')
], FileInputComponent.prototype, "fileInput", void 0);
__decorate([
    Input()
], FileInputComponent.prototype, "fileConfig", null);
__decorate([
    Input()
], FileInputComponent.prototype, "image", null);
__decorate([
    HostBinding('class.on-drag-over')
], FileInputComponent.prototype, "onDragOverClass", void 0);
__decorate([
    HostListener(`dragover`, [`$event`])
], FileInputComponent.prototype, "onDragOver", null);
__decorate([
    HostListener('dragleave', ['$event'])
], FileInputComponent.prototype, "onDragLeave", null);
__decorate([
    HostListener('drop', ['$event'])
], FileInputComponent.prototype, "ondrop", null);
FileInputComponent = FileInputComponent_1 = __decorate([
    Component({
        selector: 'app-file-input',
        templateUrl: './file-input.component.html',
        styleUrls: ['./file-input.component.scss'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => FileInputComponent_1),
                multi: true
            },
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FileInputComponent);
export { FileInputComponent };
//# sourceMappingURL=file-input.component.js.map