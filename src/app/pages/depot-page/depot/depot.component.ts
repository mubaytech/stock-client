import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CoreTableBaseComponent} from '../../../shared/material-table-virtual-scroll/core-table';
import {Depot} from '../../../../generated/types.graphql-gen';


@Component({
    selector: 'app-depot',
    templateUrl: './depot.component.html',
    styleUrls: ['./depot.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class DepotComponent extends CoreTableBaseComponent<Depot> implements OnInit {

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

}
