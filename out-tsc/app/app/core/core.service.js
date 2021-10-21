import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
const { Device } = Plugins;
let CoreService = class CoreService {
    constructor(router, platform, splashScreen, statusBar, openedModal, openedAlert, openedSheet, openedPicker, openedLoading, openedPopover, openedMenu, storageService) {
        this.router = router;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.openedModal = openedModal;
        this.openedAlert = openedAlert;
        this.openedSheet = openedSheet;
        this.openedPicker = openedPicker;
        this.openedLoading = openedLoading;
        this.openedPopover = openedPopover;
        this.openedMenu = openedMenu;
        this.storageService = storageService;
        this.isNative = false;
        this.isElectron = false;
        this.isAndroid = false;
        this.isIos = false;
        this.isMobile = false;
        this.$platformReady = new BehaviorSubject(false);
        this.$visibilityChange = new BehaviorSubject(null);
        this.shouldTabBarHide = new BehaviorSubject(false);
        this.mainRowLgSize$ = new BehaviorSubject(8);
        this.device$ = new BehaviorSubject(null);
        this.$tabViewWillEnter = new Subject();
        this.$leftMenuIsOpen = new BehaviorSubject(null);
        this.$workerInitialized = new BehaviorSubject(false);
        this.loaderClosed = false;
        this.storageReady$ = new BehaviorSubject(false);
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
                setTimeout(() => {
                    this.splashScreen.hide();
                }, 1000);
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
    get storageReady() {
        return this.storageReady$.asObservable().pipe(filter(v => !!v));
    }
    set worker(worker) {
        this.worker$ = worker;
        this.$workerInitialized.next(true);
    }
    get worker() {
        return this.worker$;
    }
    get workerInitialized() {
        return this.$workerInitialized.asObservable().pipe(filter(v => v !== false));
    }
    get platformReady() {
        return this.$platformReady.asObservable().pipe(filter(v => !!v));
    }
    device() {
        return this.device$.asObservable().pipe(filter(v => !!v));
    }
    closeModals(navigationEnd) {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.openedLoading.getTop();
            if (loading) {
                loading.dismiss().then();
                if (!navigationEnd) {
                    return false;
                }
            }
            const ionAlert = yield this.openedAlert.getTop();
            if (ionAlert) {
                ionAlert.dismiss().then();
                return true;
            }
            const modal = yield this.openedModal.getTop();
            if (modal && (modal.classList.contains('promt-alert'))) {
                modal.dismiss().then();
                if (!navigationEnd) {
                    return true;
                }
            }
            const picker = yield this.openedPicker.getTop();
            if (picker) {
                picker.dismiss().then();
                if (!navigationEnd) {
                    return true;
                }
            }
            const sheet = yield this.openedSheet.getTop();
            if (sheet) {
                sheet.dismiss().then();
                if (!navigationEnd) {
                    return true;
                }
            }
            const popover = yield this.openedPopover.getTop();
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
            const menu = yield this.openedMenu.getOpen();
            if (menu) {
                menu.close().then();
                if (!navigationEnd) {
                    return true;
                }
            }
            return false;
        });
    }
    get mainRowLgSize() {
        return this.mainRowLgSize$.asObservable();
    }
    get visibilityChange() {
        return this.visibilityChange.asObservable().pipe(filter(value => value !== null));
    }
    setMainRowLgSize(value) {
        this.mainRowLgSize$.next(value);
    }
    trackByFn(key = 'id') {
        return (index, item) => item[key];
    }
    get trackByIdFn() {
        return (index, item) => item.id;
    }
    triggerResize(el$) {
        const el = el$ || document;
        const event = el.createEvent('HTMLEvents');
        event.initEvent('resize', true, false);
        el.dispatchEvent(event);
    }
    get tabViewWillEnter() {
        return this.$tabViewWillEnter.asObservable();
    }
    get leftMenuIsOpen() {
        return this.$leftMenuIsOpen.asObservable().pipe(filter(v => v !== null)).pipe(distinctUntilChanged());
    }
    setLeftMenuIsOpen(value) {
        this.$leftMenuIsOpen.next(value);
    }
};
CoreService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CoreService);
export { CoreService };
//# sourceMappingURL=core.service.js.map