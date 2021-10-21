import { __decorate } from "tslib";
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { MenuHeaderDirective } from '../menu-header.directive';
import { MenuContentDirective } from '../menu-content.directive';
import { MenuFooterDirective } from '../menu-footer.directive';
let MenuComponent = class MenuComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], MenuComponent.prototype, "items", void 0);
__decorate([
    Input()
], MenuComponent.prototype, "key", void 0);
__decorate([
    Input()
], MenuComponent.prototype, "title", void 0);
__decorate([
    ContentChild(MenuHeaderDirective, { read: TemplateRef })
], MenuComponent.prototype, "header", void 0);
__decorate([
    ContentChild(MenuContentDirective, { read: TemplateRef })
], MenuComponent.prototype, "content", void 0);
__decorate([
    ContentChild(MenuFooterDirective, { read: TemplateRef })
], MenuComponent.prototype, "footer", void 0);
__decorate([
    ContentChild(MenuFooterDirective, { read: TemplateRef })
], MenuComponent.prototype, "trigger", void 0);
__decorate([
    Input()
], MenuComponent.prototype, "dialog", void 0);
__decorate([
    Input()
], MenuComponent.prototype, "showHideOnHover", void 0);
MenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss'],
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map