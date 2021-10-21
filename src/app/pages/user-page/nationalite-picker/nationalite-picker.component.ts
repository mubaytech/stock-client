import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BaseControlValueAccessor, ProvideThisValueAccessor} from '../../../shared/base-control-value-accessor';
import {Nationalite, NationalitesGQL} from '../../../../generated/types.graphql-gen';
import {Observable, of} from 'rxjs';
import {IonicSelectableComponent} from '../../../shared/ionic-selectable/ionic-selectable.component';
import {catchError, map, takeUntil, tap} from 'rxjs/operators';
import {ControlValueAccessor} from '@angular/forms';

@Component({
    selector: 'app-nationalite-picker',
    templateUrl: './nationalite-picker.component.html',
    styleUrls: ['./nationalite-picker.component.scss'],
    providers: [
        ProvideThisValueAccessor(NationalitePickerComponent)
    ]
})
export class NationalitePickerComponent extends BaseControlValueAccessor<Nationalite> implements OnInit, ControlValueAccessor, OnDestroy {
    public nationalites: Observable<Nationalite[]>;


    constructor(
        changeDetectorRef: ChangeDetectorRef,
        private nationalitesGQL: NationalitesGQL
    ) {
        super(changeDetectorRef);
    }

    @ViewChild('_ionicSelectableComponent') ionicSelectableComponent: IonicSelectableComponent<Nationalite>;

    ngOnInit() {

        //
    }

    onOpen($event: { component?: IonicSelectableComponent<Nationalite> }) {
        const {component} = $event;
        if (this.nationalites) {
            return;
        }
        component?.showLoading();
        this.nationalites = (this.nationalitesGQL.watch().valueChanges.pipe(
            takeUntil(this.onDestroy$),
            map(value => value.data.nationalites.data),
            catchError(err => of([] as any)),
            tap(x => {
                component?.hideLoading();
            }),
        )) as Observable<Nationalite[]>;
        this.changeDetectorRef.markForCheck();
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }
}
