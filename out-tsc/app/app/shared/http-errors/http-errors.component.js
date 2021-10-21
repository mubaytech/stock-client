import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let HttpErrorsComponent = class HttpErrorsComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    dismiss($event) {
        const { tagName } = $event.target;
        if (tagName === 'ION-ROW' || tagName === 'ION-COL' || tagName === 'ION-CONTENT') {
            this.modal.dismiss().then();
        }
    }
};
__decorate([
    Input()
], HttpErrorsComponent.prototype, "errors", void 0);
HttpErrorsComponent = __decorate([
    Component({
        selector: 'app-http-errors',
        templateUrl: './http-errors.component.html',
        styleUrls: ['./http-errors.component.scss'],
    })
], HttpErrorsComponent);
export { HttpErrorsComponent };
//# sourceMappingURL=http-errors.component.js.map