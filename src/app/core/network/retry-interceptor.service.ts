import {Injectable} from '@angular/core';
import {StorageService} from '../storage.service';
import {NetworkService} from './network.service';
import {HttpEvent, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {filter, map, mergeMap, retryWhen, skip} from 'rxjs/operators';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class RetryInterceptorService {
  constructor(
    public storage: StorageService,
    public networkService: NetworkService,
    public authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<{ data: any; errors: { message }[] }>> {
    return next.handle(request).pipe(
      map(res => {
        if (res instanceof HttpResponse && ((res as any)?.body?.errors?.find(e => e.message === 'Unauthenticated.'))) {
          throw res;
        }
        return res;
      }),
      retryWhen((attempts: Observable<any>) => {
        return attempts.pipe(
          mergeMap((error) => {
            if ((error?.body?.errors?.find(e => e.message === 'Unauthenticated.'))) {
              // console.log(error)
              this.authService.logout();
              return this.authService.authenticated.pipe(skip(1),filter(v => v));
            } else if (error?.status !== 0) {
              return throwError(error);
            }
            return this.networkService.onInternetRetablished;
          }),
        );
      }),
    );

  }

}
