import { Subject } from 'rxjs';
export class AppOnDestroy {
    constructor() {
        this.onDestroy$ = new Subject();
    }
    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
export function trackByFn(o) {
    return o.id;
}
//# sourceMappingURL=types.js.map