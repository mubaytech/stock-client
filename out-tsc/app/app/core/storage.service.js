import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
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
let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        this.ready$ = new BehaviorSubject(false);
        this.storage.ready().then(() => {
            this.ready$.next(true);
        });
    }
    getObject(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = yield this.storage.get(key);
            try {
                return JSON.parse(ret);
            }
            catch (e) {
                return null;
            }
        });
    }
    get ready() {
        return this.ready$.asObservable().pipe(filter(v => v));
    }
    setItem(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.set(key, value);
        });
    }
    setObject(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = JSON.stringify(value);
                yield this.storage.set(key, data);
                return true;
            }
            catch (e) {
                return null;
            }
        });
    }
    getItem(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.storage.get(key);
        });
    }
    removeItem(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.remove(key);
        });
    }
    keys() {
        return __awaiter(this, void 0, void 0, function* () {
            const { keys } = yield this.storage.keys();
            return keys;
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.clear();
        });
    }
};
StorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StorageService);
export { StorageService };
//# sourceMappingURL=storage.service.js.map