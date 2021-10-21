import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {normalizeRoute, ROUTES_APP} from "../../app-routing.module";
import {SettingsAllPageComponent} from "./settings-all-page/settings-all-page.component";

export const ROUTES_PARAMETTRE = normalizeRoute<{
  home: () => string,
  _root: string,
  _home: ''
}>({
  _root: ROUTES_APP.paramettres() + '/',
  _home: ''
})

const routes: Routes = [
  {
    path: ROUTES_APP._home,
    component: SettingsAllPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
