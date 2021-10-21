import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RedirectLoggedToHomeGuard} from '../../core/auth/redirect-logged-to-home.guard';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        // canActivate: [RedirectLoggedToHomeGuard]
    },
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthPageRoutingModule {
}
