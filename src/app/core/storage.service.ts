import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {BehaviorSubject} from 'rxjs';
import {filter} from 'rxjs/operators';
import {CoreService} from './core.service';

/*@Injectable({
    providedIn: 'root'
})
class Storage {


    constructor(public coreService: CoreService) {
    }

    async set(key: string, value: any) {
        return await Promise.resolve().then(() => localStorage.setItem(key, value));
    }

    async get(key: string) {
        return await Promise.resolve().then(() => localStorage.getItem(key));
    }

    async remove(key: string) {
        return await Promise.resolve().then(() => localStorage.removeItem(key));
    }

    async clear() {
        return await Promise.resolve().then(() => localStorage.clear());
    }

    async keys() {
        // const length=localStorage.length;
        return await Promise.resolve().then(() => []);
    }

    async ready() {
        return await this.coreService.platformReady.toPromise();
    }
}*/

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private ready$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(public storage: Storage) {
        this.storage.ready().then(() => {
            this.ready$.next(true);
        });
    }

    public async getObject<T = any>(key) {
        const ret = await this.storage.get(key);
        try {
            return JSON.parse(ret) as T;
        } catch (e) {
            return null;
        }

    }

     ready=this.ready$.asObservable().pipe(filter(v => v));


    public async setItem(key, value) {
        await this.storage.set(key, value);
    }

    public async setObject(key, value: object | any) {
        try {
            const data = JSON.stringify(value);
            await this.storage.set(key, data);
            return true;
        } catch (e) {
            return null;
        }
    }

    public async getItem(key) {
        return await this.storage.get(key);
    }


    public async removeItem(key) {
        await this.storage.remove(key);
    }

    public async keys() {
        const {keys} = await this.storage.keys();
        return keys;
    }

    public async clear() {
        await this.storage.clear();
    }
}
