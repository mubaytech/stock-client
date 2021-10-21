import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let UserOptionsComponent = class UserOptionsComponent {
    constructor(authGuard, auth, loadingController, router) {
        this.authGuard = authGuard;
        this.auth = auth;
        this.loadingController = loadingController;
        this.router = router;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
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
                this.authGuard.logout();
            });
        });
    }
    ngOnDestroy() {
        if (this.loading) {
            this.loading.dismiss().then();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
};
UserOptionsComponent = __decorate([
    Component({
        selector: 'app-user-options',
        templateUrl: './user-options.component.html',
        styleUrls: ['./user-options.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], UserOptionsComponent);
export { UserOptionsComponent };
//# sourceMappingURL=user-options.component.js.map