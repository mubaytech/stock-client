import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CoreTableBaseComponent } from '../../../shared/material-table-virtual-scroll/core-table';
let DepotsComponent = class DepotsComponent extends CoreTableBaseComponent {
    constructor() {
        super([
            'adresse_1',
            'adresse_2',
            'contact_1',
            'contact_2',
            'created_at',
            'deleted_at',
            'id',
            'image',
            'imageSmall',
            'nom',
            'slug',
            'updated_at',
            'ville',
            'web'
        ]);
    }
    ngOnInit() {
        //
    }
};
DepotsComponent = __decorate([
    Component({
        selector: 'app-depots',
        templateUrl: './depots.component.html',
        styleUrls: ['./depots.component.scss'],
    })
], DepotsComponent);
export { DepotsComponent };
//# sourceMappingURL=depots.component.js.map