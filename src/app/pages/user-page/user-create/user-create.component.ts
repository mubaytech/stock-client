import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';
import {IFormGroup} from '@rxweb/types';
import {RxFormBuilder} from '@rxweb/reactive-form-validators';
import {UserCreateForm} from './user-create-form';
import {AppOnDestroy} from '../../../core/types';
import {
    CreateUserGQL,
    Depot,
    Personne,
    Role,
} from '../../../../generated/types.graphql-gen';
import {IS_FORM_VALID} from '../../../core/form/utils';
import {INPUT_MASKS} from '../../../core/form/form-validation.service';
import {map} from 'rxjs/operators';
import {from, Observable} from 'rxjs';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateComponent extends AppOnDestroy implements OnInit {
    get controls() {
        return this.formGroup.controls as IFormGroup<UserCreateForm>['controls'];
    }

    constructor(
        private formBuilder: RxFormBuilder,
        public changeDetectorRef: ChangeDetectorRef,
        private createUserGQL: CreateUserGQL
    ) {
        super();
    }

    formGroup: IFormGroup<UserCreateForm>;
    loading: boolean;
    inputMasks = INPUT_MASKS;

    ngOnInit() {
        this.formGroup = this.formBuilder.formGroup<UserCreateForm>(
            UserCreateForm
        ) as IFormGroup<UserCreateForm>;
        // this.formGroup.valueChanges.subscribe(console.log);
    }

    onSubmit() {
        if (!IS_FORM_VALID(this.formGroup)) {
            return;
        }
        // console.log(this.formGroup.getRawValue());
        const {
            identite: {
                nom,
                contact_1,
                contact_2,
                email,
                image,
                adresse_1,
                adresse_2,
                cni,
                date_de_naiss,
                sexe,
                nationalite,
            },
            depot,
            password,
            permissions,
            roles,
            username,
        }: {
            identite: Personne;
            depot: Depot;
            password: string;
            permissions: Array<{ id: string; date_expiration: string }>;
            roles: /*Array<Role>*/Role;
            username: string;
        } = this.formGroup.getRawValue() as any;

        this.createUserGQL
            .mutate({
                identite: {
                    create: {
                        nom,
                        contact_1,
                        cni,
                        image: {
                            connect: image?.id || null,
                        },
                        adresse_1,
                        sexe,
                        email,
                        contact_2,
                        nationalite: {
                            connect: nationalite?.id || null,
                        },
                        date_de_naiss,
                        adresse_2,
                    },
                },
                username,
                depot: {
                    connect: depot?.id || null,
                },
                roles: {
                    connect: [roles.id]/*.map((value) => value.id)*/,
                },
                password,
                permissions: {
                    connect: permissions,
                },
            })
            .subscribe(
                () => {
                    this.loading = false;
                },
                () => this.loading = false,
                () => this.loading = false,
            );
    }

    get selectedRole() {
        return from(this.controls.roles.valueChanges) as unknown as Observable<any> as Observable<Role|null>;
    }
}
