import {Injectable, NgZone, OnDestroy} from '@angular/core';
import {NetworkStatus, Plugins} from '@capacitor/core';
import {BehaviorSubject, Observable, Subject, Subscription, timer} from 'rxjs';
import {distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';

import {HttpClient} from '@angular/common/http';

import {TimeService} from '../time.service';
import {HttpService} from './http.service';
import {CoreService} from '../core.service';
import {environment} from '../../../environments/environment';

const {Network} = Plugins;

@Injectable()
export class NetworkService implements OnDestroy {
    public online$: BehaviorSubject<boolean> = new BehaviorSubject(undefined);
    public status: NetworkStatus = {
        connected: false,
        connectionType: 'unknown'
    };
    public onInternetRetablished$ = new Subject();
    private checkInternetSubscribtion: Subscription;
    private gotNewElapsedTime = new BehaviorSubject(0);

    disabled = false;
    private onInternetLost$ = new Subject();
    private $startChecking = new Subject();
    private $stopChecking = new Subject();

    constructor(
        private ngZone: NgZone,
        private httpClient: HttpClient,
        private timeService: TimeService,
        public httpService: HttpService,
        public coreService: CoreService
    ) {
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
                } else {
                    // console.log('------offline------');
                    this.onInternetLost$.next();
                }
                if (this.disabled) {
                    return;
                }
                this.startChecking();
            });
            this.coreService.workerInitialized.subscribe(() => {
                coreService.worker.addEventListener('message', ({data}) => {
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

    ngOnDestroy(): void {
        this.stopChecking();
    }


    startChecking() {
        this.$stopChecking.next();
        timer(100).subscribe(() => this.$startChecking.next());

    }

    stopChecking() {
        this.$stopChecking.next();
    }


    checkValidDate(): Observable<boolean> {
        return this.httpClient.get<{ date: string }>(
            this.httpService.baseUrl + '/SERVERDATE',
            {
                ...(this.httpService.options),
                responseType: 'json',
                observe: 'body'
            }
        ).pipe(
            map((serverDate: { date: string }) => {
                // // console.log(serverDate.date + ' -> ' + this.timeService.format(serverDate.date));
                const server = this.timeService.moment(serverDate.date);
                const client = this.timeService.moment();
                return this.timeService.clientValidDate =
                    server.year() === client.year()
                    && server.month() === client.month()
                    && server.date() === client.date();

            })
        );
    }

      listener=this.online$.asObservable().pipe(distinctUntilChanged(), filter(v => typeof v !== 'undefined'));


    onInternetRetablished=this.onInternetRetablished$.asObservable();


     timeHasElapsed=this.gotNewElapsedTime.asObservable();


}
