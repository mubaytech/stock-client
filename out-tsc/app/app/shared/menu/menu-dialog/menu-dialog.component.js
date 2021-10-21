import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let MenuDialogComponent = class MenuDialogComponent {
    constructor(modalController, popoverController) {
        this.modalController = modalController;
        this.popoverController = popoverController;
    }
    ngOnInit() {
    }
    dismiss() {
        if (this.dialogType === 'modal') {
            this.modalController.dismiss();
        }
        if (this.dialogType === 'modal') {
            this.popoverController.dismiss();
        }
    }
};
__decorate([
    Input()
], MenuDialogComponent.prototype, "menuComponent", void 0);
__decorate([
    Input()
], MenuDialogComponent.prototype, "dialogType", void 0);
MenuDialogComponent = __decorate([
    Component({
        selector: 'app-menu-dialog',
        templateUrl: './menu-dialog.component.html',
        styleUrls: ['./menu-dialog.component.scss'],
    })
], MenuDialogComponent);
export { MenuDialogComponent };
//# sourceMappingURL=menu-dialog.component.js.map