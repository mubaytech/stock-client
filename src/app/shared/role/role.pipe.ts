import {Pipe, PipeTransform} from '@angular/core';

import {AuthGuardsService} from '../../core/auth/auth-guards.service';

import {Observable, of} from 'rxjs';
import {NetworkService} from '../../core/network/network.service';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  constructor(public net: NetworkService, public authGuard: AuthGuardsService) {
  }

  transform(role: any, ...args: unknown[]): Observable<boolean> {
    return of(false).pipe(this.authGuard.hasRole(role));
  }
}
