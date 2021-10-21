import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CoreTableBaseComponent } from '../../../shared/material-table-virtual-scroll/core-table';
let DepotComponent = class DepotComponent extends CoreTableBaseComponent {
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
    }
};
DepotComponent = __decorate([
    Component({
        selector: 'app-depot',
        templateUrl: './depot.component.html',
        styleUrls: ['./depot.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], DepotComponent);
export { DepotComponent };
//# sourceMappingURL=depot.component.js.map