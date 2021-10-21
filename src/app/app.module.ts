import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {createAnimation, IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IonicStorageModule} from '@ionic/storage';
import {CoreService} from './core/core.service';
import {RouteService} from './core/route.service';
import {StorageService} from './core/storage.service';
import {TimeService} from './core/time.service';
import {AuthModule} from './core/auth/auth.module';
import {NetworkModule} from './core/network/network.module';
import {FormModule} from './core/form/form.module';
import {GraphQLModule} from './graphql.module';
import {IonicImageLoader} from './shared/ionic-image-loader/image-loader.module';
import * as moment from 'moment';
import 'moment/locale/fr';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeExtra from '@angular/common/locales/extra/fr';

import {TextFieldModule} from '@angular/cdk/text-field';
import {ImageModule} from "./shared/image/image.module";
import {CurrentUserModule} from "./shared/current-user/current-user.module";
import {
    IoniconBookmarksOutlineModule, IoniconCalendarOutlineModule,
    IoniconCloseOutlineModule,
    IoniconCopyOutlineModule,
    IoniconCubeModule, IoniconEllipsisVerticalCircleOutlineModule,
    IoniconHomeOutlineModule,
    IoniconPersonModule,
    IoniconPinModule,
    IoniconPinOutlineModule,
    IoniconPrintOutlineModule,
    IoniconRemoveOutlineModule,
    IoniconScanOutlineModule,
    IoniconSchoolOutlineModule
} from "../generated-icons/ionic";
import {NgxElectronModule} from 'ngx-electron';
import {ScrollbarThemeModule} from './shared/scrollbar-theme/scrollbar-theme.module';
import {ModalBaseModule} from "./shared/modal-base/modal-base.module";
import {LoginModule} from "./pages/auth-page/login/login.module";
import {SettingItemModule} from "./pages/settings/setting-item/setting-item.module";
import {EtudiantSearchModule} from "./pages/etudiant/etudiant-search/etudiant-search.module";
import {TuiModeModule, TuiRootModule, TuiScrollbarModule, TuiThemeNightModule} from "@taiga-ui/core";
import {TUI_LANGUAGE, TUI_FRENCH_LANGUAGE} from '@taiga-ui/i18n';
import {of} from "rxjs";
import {EtudiantFilterFormServiceService} from "./pages/etudiant/etudiant-filter-form/etudiant-filter-form-service.service";
import {HasLevelModule} from "./shared/has-level/has-level.module";
import {QrScannerModule} from "./shared/qr-scanner/qr-scanner.module";
import {IntersectionObserverModule} from "@ng-web-apis/intersection-observer";

// setCulture('fr');
moment.locale('fr');
registerLocaleData(localeFr, 'fr', localeExtra);

const enterAnimation = (baseEl: any) => {
  const backdropAnimation = createAnimation()
    .addElement(baseEl.querySelector('ion-backdrop')!)
    .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

  const wrapperAnimation = createAnimation()
    .addElement(baseEl.querySelector('.modal-wrapper')!)
    .fromTo('transform', 'translateY(-1.5%)', 'translateY(0%)');

  return createAnimation()
    .addElement(baseEl)
    .easing('cubic-bezier(0.7,0,0.3,1)')
    .duration(200)
    .addAnimation([backdropAnimation, wrapperAnimation]);
}
const leaveAnimation = (baseEl: any) => {
  return enterAnimation(baseEl).duration(150).direction('reverse');
}

export const customAnimation = (_: HTMLElement, opts: any) => {
  // create root transition
  const rootTransition = createAnimation()
    .duration(opts.duration || 333)
    .easing('cubic-bezier(0.7,0,0.3,1)');

  const enterTransition = createAnimation().addElement(opts.enteringEl);
  const exitTransition = createAnimation().addElement(opts.leavingEl);

  enterTransition.fromTo('opacity', '0', '1');
  exitTransition.fromTo('opacity', '1', '0');

  if (opts.direction === 'forward') {
    enterTransition.fromTo('transform', 'translateX(-1.5%)', 'translateX(0%)');
    exitTransition.fromTo('transform', 'translateX(0%)', 'translateX(1.5%)');
  } else {
    enterTransition.fromTo('transform', 'translateX(1.5%)', 'translateX(0%)');
    exitTransition.fromTo('transform', 'translateX(0%)', 'translateX(-1.5%)');
  }

  rootTransition.addAnimation([enterTransition, exitTransition]);
  return rootTransition;
}

const localServices = [

  CoreService,
  RouteService,
  StorageService,
  TimeService,
  EtudiantFilterFormServiceService

];

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios',
      backButtonText: null,
      // animated: false,
      swipeBackEnabled: false,
      navAnimation: customAnimation,
      modalEnter: enterAnimation,
      modalLeave: leaveAnimation

    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    // HttpClientModule,
    AuthModule.forRoute(),
    FormModule.forRoot(),
    IonicStorageModule.forRoot({}),
    IonicImageLoader.forRoot(),
    NetworkModule.forRoot(),
    GraphQLModule,

    TextFieldModule,
    ImageModule,
    CurrentUserModule,
    IoniconCubeModule,
    IoniconPersonModule,
    NgxElectronModule,
    ScrollbarThemeModule,
    IoniconPinModule,
    IoniconPinOutlineModule,
    ModalBaseModule,
    LoginModule,
    SettingItemModule,
    EtudiantSearchModule,
    TuiRootModule,
    TuiModeModule,
    TuiThemeNightModule,
    IoniconHomeOutlineModule,
    HasLevelModule,
    IoniconRemoveOutlineModule,
    IoniconCopyOutlineModule,
    IoniconCloseOutlineModule,
    IoniconScanOutlineModule,
    QrScannerModule,
    IoniconPrintOutlineModule,
    IoniconBookmarksOutlineModule,
    IoniconSchoolOutlineModule,
    IoniconEllipsisVerticalCircleOutlineModule,
    IoniconCalendarOutlineModule,
    TuiScrollbarModule,
    IntersectionObserverModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_FRENCH_LANGUAGE),
    },
    ...localServices,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
