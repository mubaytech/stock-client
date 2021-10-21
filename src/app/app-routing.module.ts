import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


export const normalizeRoute = <R extends { _root }>($routes: any) => new Proxy<R>($routes, {
  get(target: R, p: string | symbol, receiver: any): any {
    if (('_' + (p as any)) in target) {
      return  (...params: string[]) => {
        const path = target._root + target[('_' + (p as any))];
        let paramPosition = 0;
        return path.split('/').map((value) => {
          if (value.indexOf(':') === 0) {
            const ret = params[paramPosition];
            paramPosition += 1;
            return ret;
          } else {
            return value;
          }
        }).join('/');
      };
    } else {
      return target[p];
    }

  }
});
export const ROUTES_APP = normalizeRoute<{
  home: () => string,
  _root: '/',
  _home: '',
}>({
  _root: '/',
  _home: '',
});
const routes: Routes = [
  {
    path: ROUTES_APP._home,
    redirectTo: ROUTES_APP.home(),
    pathMatch: 'full'
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


