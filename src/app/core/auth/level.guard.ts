import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthGuardsService} from "./auth-guards.service";
import {take, tap} from "rxjs/operators";
import {RouteService} from "../route.service";

@Injectable()
export class LevelGuard implements CanActivate {

  constructor(
    public authGuard: AuthGuardsService,
    public routeService: RouteService
  ) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authGuard.userHasLevel(route.data.level || this.authGuard.LEVELS.Renseignement).pipe(
      take(1),
      tap(hasLevel => {
        if (!hasLevel) {
          this.routeService.router.navigate([this.routeService.routesauth.login()], {replaceUrl: true}).then();
        }
      }));
  }

}
