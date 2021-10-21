import { AppOnDestroy } from '../types';
import { BehaviorSubject } from 'rxjs';
export class UploadBase extends AppOnDestroy {
    constructor(apollo) {
        super();
        this.apollo = apollo;
        this.model$ = new BehaviorSubject(null);
        this.id = UploadBase.getRandom();
    }
    get model() {
        return this.model$.getValue();
    }
    set model(fileInfo) {
        this.model$.next(fileInfo);
    }
    get onModel() {
        return this.model$.asObservable();
    }
    cancel(u) {
        //
    }
    static getRandom() {
        return Math.random().toString(36).substr(2, 9);
    }
}
//# sourceMappingURL=upload-base.js.map