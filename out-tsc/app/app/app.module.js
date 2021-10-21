import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { CoreService } from './core/core.service';
import { RouteService } from './core/route.service';
import { StorageService } from './core/storage.service';
import { TimeService } from './core/time.service';
import { AuthModule } from './core/auth/auth.module';
import { NetworkModule } from './core/network/network.module';
import { FormModule } from './core/form/form.module';
import { GraphQLModule } from './graphql.module';
import { IonicImageLoader } from './shared/ionic-image-loader/image-loader.module';
import { ModalBaseModule } from './shared/modal-base/modal-base.module';
const localServices = [
    CoreService,
    RouteService,
    StorageService,
    TimeService,
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent],
        entryComponents: [],
        imports: [
            BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            BrowserAnimationsModule,
            HttpClientModule,
            AuthModule.forRoute(),
            NetworkModule.forRoot(),
            FormModule.forRoot(),
            IonicStorageModule.forRoot({}),
            IonicImageLoader.forRoot(),
            GraphQLModule,
            ModalBaseModule
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
            ...localServices
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map