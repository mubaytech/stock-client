import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    Injector, Input,
    OnInit
} from '@angular/core';

import {Apollo} from 'apollo-angular';


import {UploadService} from './upload.service';
import {AppOnDestroy} from '../types';
import {Upload} from './upload';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadComponent extends AppOnDestroy implements AfterViewInit, OnInit {


    constructor(
        public uploadService: UploadService,
        injector: Injector,
        el: ElementRef<any>,
        apollo: Apollo,
        changeDetectorRef: ChangeDetectorRef,
    ) {
        super();

    }

    @Input() upload: Upload;

    ngOnInit() {
        //
    }

    ngAfterViewInit(): void {
        //
    }


}
