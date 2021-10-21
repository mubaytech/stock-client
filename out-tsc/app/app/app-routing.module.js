import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
const routes = [
    {
        path: '',
        loadChildren: () => import('./pages/dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule)
    },
    {
        path: 'depots',
        loadChildren: () => import('./pages/depot-page/depot-page.module').then(m => m.DepotPageModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth-page/auth-page.module').then(m => m.AuthPageModule)
    },
    {
        path: 'utilisateurs',
        loadChildren: () => import('./pages/user-page/user-page.module').then(m => m.UserPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            QuicklinkModule,
            RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy }),
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map