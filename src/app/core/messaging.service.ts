import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {mergeMap, retry, take} from 'rxjs/operators';
import {DeviceInfo} from '@capacitor/core';
import {CoreService} from './core.service';


export interface Message {
}

export interface Device extends DeviceInfo {
    messaginToken: string;
    lastUpdate: string;
    id: string;
}


@Injectable({
    providedIn: 'root'
})
export class MessagingService {
    messages = new BehaviorSubject<Message[]>([]);
    currentMessage = new BehaviorSubject<Message>(null);

    constructor(
        // public afMessaging: AngularFireMessaging,
        // public afs: AngularFirestore,
        // public authGuard: AuthGuardsService,
        public core: CoreService
    ) {
        // this.requestPermission();
    }

    requestPermission() {
        return/* this.afMessaging.requestToken.pipe(take(1), retry(3)).subscribe(
            (token) => {
                this.authGuard.authService.user.pipe(
                    take(1),
                ).subscribe((user) => {
                    this.core.device().pipe().subscribe(device => {
                        this.userService.updateDeviceInfo(
                            device.uuid,
                            {
                                messaginToken: token,
                                lastUpdate: '',
                                id: user.id,
                                ...device
                            }).subscribe();
                    });
                });
                console.log('Permission granted! Save to the server!', token);
            },
            (error) => {
                console.error(error);
            },
            () => {

            }
        );*/of(null);
    }

    deleteToken() {
       /* this.afMessaging.getToken
            .pipe(mergeMap(token => this.afMessaging.deleteToken(token)))
            .subscribe(
                () => {
                    console.log('Token deleted!');
                },
            );*/
    }

    listen() {
        return /*this.afMessaging.messages*/ null;
    }
}
