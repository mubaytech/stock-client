var HasSlugDirective_1;
import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { AppOnDestroy } from '../../core/types';
let HasSlugDirective = HasSlugDirective_1 = class HasSlugDirective extends AppOnDestroy {
    constructor() {
        super();
        this.slug = 'slug';
    }
    set appHasSlug(slug) {
        if (slug) {
            this.slug = slug;
        }
    }
    validate(control) {
        var _a;
        (_a = control.parent.get(this.slug)) === null || _a === void 0 ? void 0 : _a.setValue((control.value || '').replace(/ /g, '_'));
        return {};
    }
};
__decorate([
    Input('appHasSlug')
], HasSlugDirective.prototype, "appHasSlug", null);
HasSlugDirective = HasSlugDirective_1 = __decorate([
    Directive({
        selector: '[appHasSlug]',
        providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: HasSlugDirective_1,
                multi: true
            }
        ]
    })
], HasSlugDirective);
export { HasSlugDirective };
//# sourceMappingURL=has-slug.directive.js.map