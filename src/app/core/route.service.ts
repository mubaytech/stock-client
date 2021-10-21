import {Injectable} from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import {CoreService} from './core.service';
import {BehaviorSubject, timer} from 'rxjs';
import {ROUTES_INSCRIPTION} from '../pages/inscription/inscription-routing.module';
import {ROUTES_APP} from '../app-routing.module';
import {ROUTES_PARAMETTRE} from "../pages/settings/settings-routing.module";
import {ROUTES_NOTE} from "../pages/note/note-routing.module";
import {tuiPure} from "@taiga-ui/cdk";
import {ROUTES_ACCUEIL} from "../pages/accueil/accueil-routing.module";
import {ROUTES_AUTH} from "../pages/auth-page/auth-page-routing.module";
import {ROUTES_IMPRESSION} from "../pages/impression/impression-routing.module";
import {ROUTES_PROGRAMME} from "../pages/programme/programme-routing.module";

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  public canGoBack: boolean;
  hasHitBottom = false;
  public currentRouteFragmentLength: number;
  public lastTrigger: 'imperative' | 'popstate' | 'hashchange' | string;
  private $loading = new BehaviorSubject(false)

  /* route */
  public inscriptionRoutes = ROUTES_INSCRIPTION;
  public appRoutes = ROUTES_APP;
  public routesparamettre = ROUTES_PARAMETTRE;
  public routesimpression = ROUTES_IMPRESSION;
  public  routesprogramme= ROUTES_PROGRAMME;
  public routesnote = ROUTES_NOTE;
  public routesaccueil = ROUTES_ACCUEIL;
  public routesauth = ROUTES_AUTH;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private core: CoreService,
  ) {
    this.router.events.subscribe((event: any) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.$loading.next(true);
          this.lastTrigger = event.navigationTrigger;
          break;
        }
        case event instanceof NavigationEnd: {
          this.core.closeModals(true).then();
          if (!this.core.loaderClosed && this.core.renderer) {
            this.core.loaderClosed = true;
            timer(2500).subscribe(() => {
              try {
                const loader = this.core.renderer.selectRootElement('#app-main-loader');
                this.core.renderer.removeChild(document, loader);
                timer(0).subscribe(() => {
                  this.core.triggerResize();
                });
              } catch (e) {
                //
              }
            });
          }
        }
        // tslint:disable-next-line:no-switch-case-fall-through
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.$loading.next(false);
          break;
        }
        default: {
          break;
        }
      }
    });

  }


  static getUrlSegment(url, spliceStart: number, spliceEnd: number, doNotJoin?: boolean) {
    url.splice(url.length - spliceStart, spliceEnd);
    return !doNotJoin ? url.join('/') : url;
  }

  getUrlSegmentFromCurrent(spliceStart: number, spliceEnd: number) {
    const url = this.router.url.split('/');
    return RouteService.getUrlSegment(url, spliceStart, spliceEnd);
  }

  getSegments() {
    return this.router.url.split('/');
  }

  loading = this.$loading.asObservable().pipe();

  @tuiPure
  get toHome(){
    return this.routesaccueil.home();
  }

  // navigateRelativeTo(routeToNavigate,)
}
