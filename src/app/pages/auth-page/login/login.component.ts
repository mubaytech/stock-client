import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, Optional} from '@angular/core';
import {IFormBuilder, IFormGroup} from '@rxweb/types';
import {LoginForm} from './login-form';
import {IS_FORM_VALID} from '../../../core/form/utils';
import {INPUT_MASKS} from '../../../core/form/form-validation.service';
import {AuthService} from "../../../core/auth/auth.service";
import {catchError, takeUntil} from "rxjs/operators";
import {of} from "rxjs";
import {AppOnDestroy} from "../../../core/types";
import {FormBuilder, Validators} from '@angular/forms';
import {RouteService} from "../../../core/route.service";
import {NavParams} from "@ionic/angular";
import {CoreService} from "../../../core/core.service";
import {ModalBaseService} from 'src/app/shared/modal-base/modal-base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent extends AppOnDestroy implements OnInit {


  constructor(
    formBuilder: FormBuilder,
    public auth: AuthService,
    public routeService: RouteService,
    @Optional() private navParams: NavParams,
    public _element: ElementRef,
    public changeDetectorRef: ChangeDetectorRef,
    public coreService: CoreService,
    @Optional() public modalBaseService: ModalBaseService,
  ) {
    super();
    this.formBuilder = formBuilder;
  }

  private formBuilder: IFormBuilder;
  inputMasks = INPUT_MASKS;
  formGroup: IFormGroup<LoginForm>;
  loading: boolean;

  ngOnInit() {
    this.formGroup = this.formBuilder.group<LoginForm>({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }) as IFormGroup<LoginForm>;
  }

  submit() {
    if (!IS_FORM_VALID(this.formGroup)) {
      return;
    }
    const data: any = this.formGroup.getRawValue();
    this.loading = true;
    this.changeDetectorRef.markForCheck();
    this.auth.login(data).pipe(
      takeUntil(this.onDestroy$),
    ).subscribe(
      _ => {
        if (!this.modalBaseService) {
          this.routeService.router.navigate([this.routeService.appRoutes.inscription()], {replaceUrl: true}).then()
        }
      },
      _ => {
        this.loading = false;
        this.changeDetectorRef.markForCheck();
      }
    );
  }

}
