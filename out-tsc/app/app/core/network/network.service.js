import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
const { Network } = Plugins;
let NetworkService = class NetworkService {
    constructor(ngZone, httpClient, timeService, httpService, coreService) {
        this.ngZone = ngZone;
        this.httpClient = httpClient;
        this.timeService = timeService;
        this.httpService = httpService;
        this.coreService = coreService;
        this.online$ = new BehaviorSubject(undefined);
        this.status = {
            connected: false,
            connectionType: 'unknown'
        };
        this.onInternetRetablished$ = new Subject();
        this.gotNewElapsedTime = new BehaviorSubject(0);
        this.disabled = false;
        this.onInternetLost$ = new Subject();
        this.$startChecking = new Subject();
        this.$stopChecking = new Subject();
        this.$startChecking.pipe(switchMap(() => this.coreService.workerInitialized)).subscribe(_ => {
            this.coreService.worker.postMessage({
                message: 'START_CHECKING',
                data: {
                    status: this.status,
                    environment,
                }
            });
        });
        this.$stopChecking.pipe(switchMap(() => this.coreService.workerInitialized)).subscribe(_ => {
            this.coreService.worker.postMessage({
                message: 'STOP_CHECKING',
                data: {
                    status: this.status,
                    environment,
                }
            });
        });
        Network.getStatus().then(status => {
            this.status.connectionType = status.connectionType;
            this.online$.next(status.connected);
        });
        timer(500).subscribe(() => {
            Network.addListener('networkStatusChange', (status) => {
                this.status.connectionType = status.connectionType;
                this.online$.next(status.connected);
            });
            this.listener.subscribe(value => {
                this.status.connected = value;
                if (value) {
                    // console.log('------online------');
                    this.onInternetRetablished$.next();
                }
                else {
                    // console.log('------offline------');
                    this.onInternetLost$.next();
                }
                if (this.disabled) {
                    return;
                }
                this.startChecking();
            });
            this.coreService.workerInitialized.subscribe(() => {
                coreService.worker.addEventListener('message', ({ data }) => {
                    if (data.message === 'OFFLINE') {
                        this.online$.next(false);
                    }
                    if (data.message === 'ONLINE') {
                        this.online$.next(true);
                    }
                    if (data.message === 'GOT_NEW_ELAPSED_TIME') {
                        this.gotNewElapsedTime.next(Date.now());
                    }
                });
            });
            // this.checkValidDate().subscribe(value => {
            //     // // console.log('valid Date', value);
            // });
        });
    }
    ngOnDestroy() {
        this.stopChecking();
    }
    startChecking() {
        this.$stopChecking.next();
        timer(100).subscribe(() => this.$startChecking.next());
    }
    stopChecking() {
        this.$stopChecking.next();
    }
    checkValidDate() {
        return this.httpClient.get(this.httpService.baseUrl + '/SERVERDATE', Object.assign(Object.assign({}, (this.httpService.options)), { responseType: 'json', observe: 'body' })).pipe(map((serverDate) => {
            // // console.log(serverDate.date + ' -> ' + this.timeService.format(serverDate.date));
            const server = this.timeService.moment(serverDate.date);
            const client = this.timeService.moment();
            return this.timeService.clientValidDate =
                server.year() === client.year()
                    && server.month() === client.month()
                    && server.date() === client.date();
        }));
    }
    get listener() {
        return this.online$.asObservable().pipe(distinctUntilChanged(), filter(v => typeof v !== 'undefined'));
    }
    get onInternetRetablished() {
        return this.onInternetRetablished$.asObservable();
    }
    get timeHasElapsed() {
        return this.gotNewElapsedTime.asObservable();
    }
};
NetworkService = __decorate([
    Injectable()
], NetworkService);
export { NetworkService };
//# sourceMappingURL=network.service.js.map