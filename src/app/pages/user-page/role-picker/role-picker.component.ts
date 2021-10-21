import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';
import {BaseControlValueAccessor, ProvideThisValueAccessor} from '../../../shared/base-control-value-accessor';
import {Role, RolesGQL} from '../../../../generated/types.graphql-gen';
import {ControlValueAccessor} from '@angular/forms';
import {IonicSelectableComponent} from '../../../shared/ionic-selectable/ionic-selectable.component';
import {catchError, map, takeUntil, tap} from 'rxjs/operators';
import {Observable, of, timer} from 'rxjs';


@Component({
    selector: 'app-role-picker',
    templateUrl: './role-picker.component.html',
    styleUrls: ['./role-picker.component.scss'],
    providers: [
        ProvideThisValueAccessor(RolePickerComponent)
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolePickerComponent extends BaseControlValueAccessor<Role> implements ControlValueAccessor, OnInit, OnDestroy {
    public roles: Observable<Role[]>;


    constructor(
        changeDetectorRef: ChangeDetectorRef,
        private rolesGQL: RolesGQL
    ) {
        super(changeDetectorRef);
    }

    @ViewChild('_ionicSelectableComponent') ionicSelectableComponent: IonicSelectableComponent<Role>;
    itemTextField = 'nom';
    itemValueField = 'id';

    ngOnInit() {

        //
    }

    onOpen($event: { component?: IonicSelectableComponent<Role> }) {
        const {component} = $event;
        if (this.roles) {
            return;
        }
        component?.showLoading();
        this.roles = (this.rolesGQL.watch().valueChanges.pipe(
            takeUntil(this.onDestroy$),
            map(value => value.data.roles.data),
            catchError(err => of([] as any)),
            tap(x => {
                component?.hideLoading();
            }),
        )) as Observable<Role[]>;
        this.changeDetectorRef.markForCheck();
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    modelChange(value: { component: IonicSelectableComponent<Role>; value: Role }) {
        // console.log(value);
        this.onChange(value.value);
        this.onTouched(value.value);
        timer(50)
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(() => {
                this.changeDetectorRef.markForCheck();
            });
    }
}
