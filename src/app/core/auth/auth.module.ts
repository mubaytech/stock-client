import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {AuthGuardsService} from './auth-guards.service';
import {UserService} from './user.service';
import {RedirectLoggedToHomeGuard} from './redirect-logged-to-home.guard';
import {RedirectUnauthorizedToLoginGuard} from './redirect-unauthorized-to-login.guard';
import {AdminOnlyGuard} from './admin-only.guard';
import {RouterModule} from "@angular/router";
import {LevelGuard} from "./level.guard";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule {
  public static forRoute(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuardsService,
        UserService,
        RedirectLoggedToHomeGuard,
        RedirectUnauthorizedToLoginGuard,
        AdminOnlyGuard,
        LevelGuard
      ],

    };
  }

}
