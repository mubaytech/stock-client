import {Injectable, Renderer2} from '@angular/core';
import {DeviceInfo, Plugins} from '@capacitor/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {distinctUntilChanged, filter} from 'rxjs/operators';
import {Router} from '@angular/router';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  MenuController,
  ModalController,
  PickerController,
  Platform,
  PopoverController
} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {StorageService} from './storage.service';
import {Classe} from "../../generated/types.graphql-gen";

const {Device} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  isNative = false;
  isElectron = false;
  isAndroid = false;
  isIos = false;
  isMobile = false;
  $platformReady = new BehaviorSubject<boolean>(false);
  $visibilityChange = new BehaviorSubject<boolean>(null);
  public shouldTabBarHide = new BehaviorSubject<boolean>(false);
  public isNativeMobile: boolean;
  private mainRowLgSize$ = new BehaviorSubject(8);
  private device$ = new BehaviorSubject<DeviceInfo>(null);
  public $tabViewWillEnter = new Subject();
  public $leftMenuIsOpen = new BehaviorSubject<boolean>(null);
  public $workerInitialized = new BehaviorSubject<boolean>(false);
  public loaderClosed = false;
  public renderer: Renderer2;
  public worker$: Worker;
  public storageReady$ = new BehaviorSubject(false);

  storageReady = this.storageReady$.asObservable().pipe(filter(v => !!v));

  set worker(worker: Worker) {
    this.worker$ = worker;
    this.$workerInitialized.next(true);
  }

  get worker() {
    return this.worker$;
  }

  workerInitialized = this.$workerInitialized.asObservable().pipe(filter(v => v !== false));

  constructor(
    public router: Router,
    public platform: Platform,
    private splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public openedModal: ModalController,
    public openedAlert: AlertController,
    public openedSheet: ActionSheetController,
    public openedPicker: PickerController,
    public openedLoading: LoadingController,
    public openedPopover: PopoverController,
    public openedMenu: MenuController,
    public storageService: StorageService
  ) {


    // window.location.reload();
    this.platform.ready().then(() => {
      this.isNative = platform.is('capacitor');
      this.isElectron = platform.is('electron');
      this.isIos = platform.is('ios');
      this.isAndroid = platform.is('android');
      this.isMobile = this.isIos || this.isAndroid;
      this.isNativeMobile = this.isNative && this.isMobile;
      if (this.isNativeMobile) {
        this.statusBar.styleBlackOpaque();
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#FFFFFF');
        setTimeout(
          () => {
            this.splashScreen.hide();
          },
          1000
        );
      }
      Device.getInfo().then(value => {
        this.device$.next(value);
      });
      this.$platformReady.next(true);
      document.addEventListener('visibilitychange', () => {
        this.$visibilityChange.next(document.visibilityState === 'visible');
      });
    });
  }

  platformReady = this.$platformReady.asObservable().pipe(filter(v => !!v)) as unknown as Observable<void>;

  public device(): Observable<DeviceInfo> {
    return this.device$.asObservable().pipe(filter(v => !!v));
  }

  async closeModals(navigationEnd?) {
    const loading = await this.openedLoading.getTop();
    if (loading) {
      loading.dismiss().then();
      if (!navigationEnd) {
        return false;
      }
    }
    const ionAlert = await this.openedAlert.getTop();
    if (ionAlert) {
      ionAlert.dismiss().then();
      return true;
    }
    const modal = await this.openedModal.getTop();
    if (modal && (modal.classList.contains('promt-alert'))) {
      modal.dismiss().then();
      if (!navigationEnd) {
        return true;
      }

    }

    const picker = await this.openedPicker.getTop();
    if (picker) {
      picker.dismiss().then();
      if (!navigationEnd) {
        return true;
      }
    }
    const sheet = await this.openedSheet.getTop();
    if (sheet) {
      sheet.dismiss().then();
      if (!navigationEnd) {
        return true;
      }

    }
    const popover = await this.openedPopover.getTop();
    if (popover) {
      popover.dismiss().then();
      if (!navigationEnd) {
        return true;
      }
    }
    if (modal) {
      modal.dismiss().then();
      if (!navigationEnd) {
        return true;
      }
    }
    const menu = await this.openedMenu.getOpen();
    if (menu) {
      menu.close().then();
      if (!navigationEnd) {
        return true;
      }
    }
    return false;

  }

  mainRowLgSize = this.mainRowLgSize$.asObservable();


  // get visibilityChange() {
  //   return this.visibilityChange.asObservable().pipe(filter(value => value !== null));
  // }

  setMainRowLgSize(value: number) {
    this.mainRowLgSize$.next(value);
  }

  trackByFn(key = 'id') {
    return (index, item: any) => item[key];
  }

  get trackByIdFn() {
    return (index, item: any) => item.id;
  }

  triggerResize(el$?) {
    const el = el$ || document;
    const event = el.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    el.dispatchEvent(event);
  }

  get tabViewWillEnter() {
    return this.$tabViewWillEnter.asObservable();
  }

  leftMenuIsOpen = this.$leftMenuIsOpen.asObservable().pipe(
    filter(v => v !== null)
  ).pipe(distinctUntilChanged());

  setLeftMenuIsOpen(value: boolean) {
    this.$leftMenuIsOpen.next(value);
  }

  distinctArray = <T>(x: T[], y: T[], fn: (x, y) => boolean) => {
    if ((!x) || (!y)) {
      return x === y;
    } else {
      const from = (y.length && y) || (x.length && x);
      const against = from === y ? x : y;
      return (from.filter(yy => !(against.find(xx => fn(yy, xx))))).length === 0;
    }
  };

  paginate(array: any[], page_size: number, page_number: number) {
    if (array.length <= page_size) {
      return [...array];
    }
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number) * page_size, (page_number + 1) * page_size);
  }
}

