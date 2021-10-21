import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ModalBaseComponent = class ModalBaseComponent {
    constructor(navParams) {
        this.navParams = navParams;
        this.rootParams = this.navParams.data;
    }
    ngOnInit() {
        //
    }
};
ModalBaseComponent = __decorate([
    Component({
        selector: 'app-modal-base',
        templateUrl: './modal-base.component.html',
        styleUrls: ['./modal-base.component.scss'],
    })
], ModalBaseComponent);
export { ModalBaseComponent };
//# sourceMappingURL=modal-base.component.js.map