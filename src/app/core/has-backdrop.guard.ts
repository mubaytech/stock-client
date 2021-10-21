import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CoreService} from './core.service';
import {RouteService} from './route.service';

@Injectable({
    providedIn: 'root'
})
export class HasBackdropGuard implements CanDeactivate<unknown> {

    constructor(
        public core: CoreService,
        public routeService: RouteService,
        private readonly location: Location,
        private readonly router: Router,
    ) {

    }

    canDeactivate(
        component: unknown,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.core.isNative || this.routeService.lastTrigger !== 'popstate') {
            return true
        }
        return this.core.closeModals().then(value => {
            const ret = !value;
            if (!ret) {
                const currentUrlTree = this.router.createUrlTree([], currentRoute);
                const currentUrl = currentUrlTree.toString();
                this.location.go(currentUrl);
            }
            return ret
        })
    }

}
