import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
let UploadService = class UploadService {
    constructor() {
        this.uploads$ = new BehaviorSubject({});
        //
    }
    get uploads() {
        return this.uploads$.asObservable().pipe(distinctUntilChanged());
    }
    get uploadsObject() {
        return this.uploads$.value;
    }
    cancel(u) {
        const uploads = Object.assign({}, this.uploads$.value);
        const upload = uploads[u.id];
        upload.cancel();
        delete uploads[u.id];
        this.uploads$.next(uploads);
    }
    push(u) {
        const uploads = Object.assign({}, this.uploads$.value);
        uploads[u.id] = u;
        this.uploads$.next(uploads);
    }
    remove(uploads) {
        // this.delete$.next(u);
    }
};
UploadService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UploadService);
export { UploadService };
//# sourceMappingURL=upload.service.js.map