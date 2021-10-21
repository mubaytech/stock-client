import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpApiInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req.headers.set('Access-Control-Allow-Origin', '*');
    req.headers.set('Access-Control-Allow-Headers', '*');
    req.headers.set('Content-Type', 'application/json');
    req.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    req.headers.set('Accept', 'application/json');
    const secureReq = req.clone({
      url: environment.apiUrl + '/api/' + req.url,
      headers: req.headers
    });
// send the cloned, "secure" request to the next handler.
    return next.handle(secureReq);
  }
}
