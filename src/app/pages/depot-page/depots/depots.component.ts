import {Component, OnInit} from '@angular/core';
import {CoreTableBaseComponent} from '../../../shared/material-table-virtual-scroll/core-table';
import {Depot} from '../../../../generated/types.graphql-gen';


@Component({
    selector: 'app-depots',
    templateUrl: './depots.component.html',
    styleUrls: ['./depots.component.scss'],
})
export class DepotsComponent extends CoreTableBaseComponent<Depot> implements OnInit {

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

}

