import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {LoadingController, PopoverController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Subject, timer} from 'rxjs';
import {distinctUntilChanged, filter, takeUntil} from 'rxjs/operators';
import {AuthGuardsService} from '../../core/auth/auth-guards.service';
import {AuthService} from '../../core/auth/auth.service';

@Component({
    selector: 'app-user-options',
    templateUrl: './user-options.component.html',
    styleUrls: ['./user-options.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserOptionsComponent implements OnInit, OnDestroy {
    destroy$ = new Subject();
    private loading: HTMLIonLoadingElement;

    constructor(
        private authGuardsService: AuthGuardsService,
        private  authService: AuthService,
        private loadingController: LoadingController,
        private popoverController:PopoverController,
        private router: Router,
    ) {
    }

    ngOnInit() {
      this.authService.authenticated.pipe(
        distinctUntilChanged(),
        filter(v=>!v),
        takeUntil(this.destroy$)
      ).subscribe(_=>{
        this.loading?.dismiss();
        this.popoverController.dismiss().then();
      })
    }

    logout() {
        this.loadingController.create({
            message: 'Deconnection en cours...',
            backdropDismiss: false,
            keyboardClose: false,
        }).then(loading => {
            this.loading = loading;
            return loading.present();
        }).then(() => {
            timer(300).pipe(takeUntil(this.destroy$)).subscribe(value => {
                this.authGuardsService.logout();
            });
        });

    }
    get user() {
        return this.authGuardsService.authService.user;
    }
    ngOnDestroy(): void {
        if (this.loading) {
            this.loading.dismiss().then();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }

}
