import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { Subject } from 'rxjs';
let CoreTableMenuComponent = class CoreTableMenuComponent {
    constructor() {
        this.clear = new Subject();
    }
};
__decorate([
    Output()
], CoreTableMenuComponent.prototype, "clear", void 0);
CoreTableMenuComponent = __decorate([
    Component({
        selector: 'app-core-table-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], CoreTableMenuComponent);
export { CoreTableMenuComponent };
//# sourceMappingURL=menu.component.js.map