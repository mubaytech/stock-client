import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';

@Injectable()
export class RedirectLoggedToHomeGuard implements CanActivate {
    constructor(
        public auth: AuthService,
        public router: Router
    ) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.auth.authenticated.pipe(map(authenticated => {
            if (authenticated) {
                this.router.navigate(['/'], {replaceUrl: true}).then();
                return false;
            }
            return true;
        }));
    }

}
