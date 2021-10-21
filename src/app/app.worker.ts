/// <reference lib="webworker" />
import {
  combineLatest,
  interval,
  Observable,
  of,
  Subject,
  throwError,
  timer
} from 'rxjs';
import {
  catchError,
  mergeMap,
  retryWhen,
  switchMap,
  takeUntil,
  tap,
  throttle
} from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';

let $NETWORKCHECK: NetworkCheck;
const POLLING_INTERVAL = 5000;
addEventListener('message', ({ data }) => {
  // const response = `worker response to ${data}`;
  // postMessage(response);
  // console.log(data)
  if (typeof data === 'string') {
  } else {
    const d = data as { message: string; data: any };
    if (d.message === 'START_CHECKING') {
      if ($NETWORKCHECK) {
        $NETWORKCHECK.destroy();
        $NETWORKCHECK = null;
      }
      $NETWORKCHECK = new NetworkCheck(d.data.status, d.data.environment);
    }
    if (d.message === 'STOP_CHECKING') {
      if ($NETWORKCHECK) {
        $NETWORKCHECK.destroy();
        $NETWORKCHECK = null;
      }
    }
  }
});

class NetworkCheck {
  public destroy$ = new Subject();

  constructor(public status: { connected: boolean }, public environment: any) {
    interval(POLLING_INTERVAL)
      .pipe(
        takeUntil(this.destroy$),
        tap(_ => {
          postMessage('GOT_NEW_ELAPSED_TIME');
        }),
        throttle(() =>
          fromFetch(
            environment.apiUrl + '/api',
            // environment.production ? 'https://www.google.com/favicon.ico' : environment.webUrl,
            /*+ '?random-no-cache=' +Math.floor((1 + Math.random()) * 0x100000000).toString(16)*/
            {
              method: 'HEAD',
              mode: 'no-cors',
              credentials: 'omit',
              cache: 'no-cache',
              headers: {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Expose-Headers': '*',
                'Access-Control-Allow-Origin': '*'
              }
            }
          ).pipe(
            takeUntil(
              timer(4000).pipe(
                tap(() => {
                  postMessage({
                    message: 'OFFLINE',
                    data: {}
                  });
                })
              )
            ),
            retryWhen(
              this.status.connected
                ? genericRetryStrategy({ maxRetryAttempts: 3 })
                : (attempts: Observable<any>) =>
                    attempts.pipe(mergeMap(error => throwError(error)))
            ),
            switchMap(_ => {
              postMessage({
                message: 'ONLINE',
                data: {}
              });
              return of('ok');
            }),
            catchError(err => {
              // // console.log(err)
              postMessage({
                message: 'OFFLINE',
                data: {}
              });
              return of({ error: true, err });
            })
          )
        )
      )
      .subscribe();
  }

  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

const genericRetryStrategy = ({
  maxRetryAttempts = 2,
  scalingDuration = 1000,
  excludedStatusCodes = []
}: {
  maxRetryAttempts?: number;
  scalingDuration?: number;
  excludedStatusCodes?: number[];
} = {}) => (attempts: Observable<any>) => {
  return attempts.pipe(
    mergeMap((error, i) => {
      const retryAttempt = i + 1;
      // if maximum number of retries have been met
      // or response is a status code we don't wish to retry, throw error
      if (
        retryAttempt >
        maxRetryAttempts /*||
                excludedStatusCodes.find(e => e === error.status)*/
      ) {
        return throwError(error);
      }
      // console.log(error);
      // console.log(
      //     `Attempt ${retryAttempt}: retrying in ${retryAttempt *
      //     scalingDuration}ms`
      // );
      // retry after 1s, 2s, etc...
      return timer(retryAttempt * scalingDuration);
    })
    // finalize(() => console.log('We are done!'))
  );
};
