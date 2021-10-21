var RouteService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';
import { BehaviorSubject, timer } from 'rxjs';
let RouteService = RouteService_1 = class RouteService {
    constructor(router, route, core) {
        this.router = router;
        this.route = route;
        this.core = core;
        this.hasHitBottom = false;
        this.$loading = new BehaviorSubject(false);
        this.router.events.subscribe((event) => {
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
                            }
                            catch (e) {
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
    static getUrlSegment(url, spliceStart, spliceEnd, doNotJoin) {
        url.splice(url.length - spliceStart, spliceEnd);
        return !doNotJoin ? url.join('/') : url;
    }
    getUrlSegmentFromCurrent(spliceStart, spliceEnd) {
        const url = this.router.url.split('/');
        return RouteService_1.getUrlSegment(url, spliceStart, spliceEnd);
    }
    getSegments() {
        return this.router.url.split('/');
    }
    get loading() {
        return this.$loading.asObservable().pipe();
    }
};
RouteService = RouteService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RouteService);
export { RouteService };
//# sourceMappingURL=route.service.js.map