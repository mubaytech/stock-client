import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { BehaviorSubject, of, Subject } from 'rxjs';
let AuthService = class AuthService {
    constructor(httpClient, storageServices, modal, httpService, router) {
        this.httpClient = httpClient;
        this.storageServices = storageServices;
        this.modal = modal;
        this.httpService = httpService;
        this.router = router;
        this.$authenticated = new BehaviorSubject(null);
        this.$user = new BehaviorSubject(null);
        this.$logout = new Subject();
        /*  this.user.pipe(skip(1), distinctUntilChanged()).subscribe(value => {
              this.$authenticated.next(!!value);
          });
          this.authenticated.pipe(distinctUntilChanged()).subscribe(value => {
              if (value === false) {
                  this.router.navigate(['/login'], {replaceUrl: true}).then(() => {
                      timer(700).subscribe(() => {
                          this.userSet(null).then();
                          // this.apollo.getClient().clearStore().then();
                      });
                  });
              }
          });
          this.$logout.pipe(
              switchMap(() => {
                  return of(null).pipe(
                      take(1),
                  );
              })
          ).subscribe(() => {
          });
          this.userGet().then();*/
    }
    userSet(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storageServices.setObject('logged_user', user);
            this.$user.next(user || null);
        });
    }
    userGet() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.storageServices.getObject('logged_user');
            this.$user.next(user || null);
        });
    }
    login(data) {
        return of(null)
            .pipe(map((res) => __awaiter(this, void 0, void 0, function* () {
            yield this.userSet(res.data.login.user);
            return this.router.navigate(['/'], { replaceUrl: true });
        })), tap(() => {
            //
        }, error => {
            //
        }));
    }
    logout() {
        this.$logout.next(true);
        this.$authenticated.next(false);
    }
    get token() {
        return this.httpClient.get(this.httpService.baseUrl + '/token', Object.assign(Object.assign({}, this.httpService.options), { responseType: 'json', observe: 'body' }));
    }
    get user() {
        return this.$user.asObservable();
    }
    get authenticated() {
        return this.$authenticated.asObservable().pipe(filter(value => value !== null));
    }
};
AuthService = __decorate([
    Injectable()
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map