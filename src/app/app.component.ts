import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {NetworkService} from './core/network/network.service';
import {CoreService} from './core/core.service';
import {ThemeService} from './core/theme.service';
import {RouteService} from './core/route.service';
import {DomController, IonRouterOutlet, MenuController, PopoverController, ToastController} from '@ionic/angular';
import {TimeService} from './core/time.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageLoader} from './shared/ionic-image-loader/providers/image-loader';
import {ImageLoaderConfig} from './shared/ionic-image-loader/providers/image-loader-config';
import {AuthGuardsService} from './core/auth/auth-guards.service';
import {BreakpointService} from './core/breakpoint.service';
import {MessagingService} from './core/messaging.service';
import {SettingsService} from './core/settings.service';
import {skip, take} from 'rxjs/operators';
import {ElectronService} from 'ngx-electron';
import {IonicDialogService} from "./shared/ionic-dialog.service";
import {LoginComponent} from "./pages/auth-page/login/login.component";
import {Apollo} from "apollo-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  private loginModal: HTMLIonModalElement;

  constructor(
    public coreService: CoreService,
    public networkService: NetworkService,
    public theme: ThemeService,
    public routeService: RouteService,
    public electronService: ElectronService,
    public menu: MenuController,
    public moment: TimeService,
    public route: ActivatedRoute,
    public router: Router,
    public dom: DomController,
    public renderer: Renderer2,
    public imageLoaderConfig: ImageLoaderConfig,
    public imageLoader: ImageLoader,
    public popoverController: PopoverController,
    public changeDetectorRef: ChangeDetectorRef,
    public breakPoint: BreakpointService,
    public messaging: MessagingService,
    public settingsService: SettingsService,
    public breakpointService: BreakpointService,
    public toastController: ToastController,
    public apollo: Apollo,
    public authGuardsService: AuthGuardsService,
    public ionicDialogService: IonicDialogService
  ) {

    // this.selectedSegment = router.events.pipe(filter(e => e instanceof NavigationEnd)).pipe(map((e: RouterEvent) => {
    //   return this.segments.find(({url}) => {
    //     return (typeof (
    //       url.find(u => e.url.startsWith(u))
    //     )) !== "undefined"
    //   })?.label;
    // }));
    if (typeof Worker !== 'undefined') {
      // Create a new
      this.coreService.worker = new Worker(new URL('./app.worker', import.meta.url));
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
    this.coreService.renderer = this.renderer;
    this.coreService.setMainRowLgSize(6);
    this.imageLoaderConfig.setFallbackUrl('assets/fallback.png');
    this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
    this.imageLoaderConfig.enableDebugMode();
    this.imageLoaderConfig.setSpinnerName('lines');
    imageLoader.clearCache();
    // this.authGuard.authService.user.subscribe(() => {
    //   this.coreService.setMainRowLgSize(8);
    //   this.changeDetectorRef.markForCheck();
    // });
    // this.messaging.listen().subscribe((message) => {
    //   console.log(message);
    // });
    // this.settingsService.getForUser('dark_mode').subscribe(x => {
    //   const value = x.value.value;
    //   this.darkMode = value ? 'dark' : '';
    //   this.changeDetectorRef.markForCheck();
    // })
  }

  @HostBinding('style.zoom') zoom = 1;
  @HostBinding('class.dark') darkMode = false;
  @ViewChild(IonRouterOutlet) ionRouterOutlet: IonRouterOutlet
  menuTypePush = true;

  ngOnInit(): void {
    this.networkService.listener.pipe(skip(1)).subscribe((value) => {
      this.showOnlineOffline(value).then();
    })
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.darkMode = e.matches;
      this.changeDetectorRef.markForCheck();
    });
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true;
      this.changeDetectorRef.markForCheck();
    }
    this.settingsService.getSavedItem('MODE_SOMBRE').subscribe(x => {
      const value = x.value.value;
      this.darkMode = !!value;
      // console.log(x)
      this.changeDetectorRef.markForCheck();
    });

  }

  async showOnlineOffline(online: boolean) {
    const toast = await this.toastController.create({
      // header: 'Toast header',
      color: online ? 'success' : 'danger',
      message: online ? 'Connection rétablie :-(' : 'Réseau hors ligne',
      position: 'bottom',
      cssClass: ['ion-text-center text-xl font-bold'],
      duration: 4000,
      buttons: [
        {
          icon: 'eye-off-sharp',
          role: 'cancel',
          side: 'end',
        }
      ]
    });
    toast.present().then();
  }

  ngAfterViewInit(): void {
    this.ionicDialogService.routerOutlet = this.ionRouterOutlet;
    const onAuthObserver = this.authGuardsService.authService.authenticated;
    onAuthObserver.pipe(take(1)).subscribe(authenticated => {
      if (!authenticated && !this.loginModal) {
        // this.authGuardsService.authService.logout();
        this.routeService.router.navigate([this.routeService.appRoutes.auth()], {replaceUrl: true}).then()
      }
    })
    onAuthObserver.pipe(skip(1)).subscribe(value => {
      // console.log(value)
      if (this.loginModal) {
        this.loginModal.dismiss().then();
      }
      if (!value && this.routeService.router.url !== this.routeService.routesauth.login()) {
        this.openLoginDialog().then();
      }
    })
  }

  openLoginDialog() {
    return this.ionicDialogService.open<LoginComponent>(LoginComponent, {
      component: undefined,
      componentProps: undefined,
      keyboardClose: false,
      backdropDismiss: false,
      swipeToClose: false
    }).then(value => {
      // console.log(value)
      if (this.loginModal) {
        this.loginModal.dismiss().then();
      }
      this.loginModal = value;
      value.onDidDismiss().then(_ => {
        this.loginModal = null
      })
      return this.loginModal.present()
    });
  }

  anneeScolaire = this.settingsService.anneeScolaireForSearch;
}

