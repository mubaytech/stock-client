import {Directive, Input} from '@angular/core';
import {AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {AppOnDestroy} from '../../core/types';

@Directive({
    selector: '[appHasSlug]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: HasSlugDirective,
            multi: true
        }
    ]
})
export class HasSlugDirective extends AppOnDestroy implements Validator {
    @Input('appHasSlug') set appHasSlug(slug) {
        if (slug) {
            this.slug = slug;
        }
    }

    slug = 'slug';

    constructor() {
        super();
    }

    validate(control: AbstractControl): ValidationErrors | null {
        control.parent.get(this.slug)?.setValue(((control.value || '') as string).replace(/ /g, '_'));
        return {};
    }


}
