import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthGuardsService} from './auth-guards.service';
import {TypeRole} from '../../../generated/types.graphql-gen';

@Injectable()
export class AdminOnlyGuard implements CanActivate {
    constructor(
        public authGuard: AuthGuardsService
    ) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return of(false).pipe(
            this.authGuard.hasRole(TypeRole.Administrateur)
        );
    }

}
