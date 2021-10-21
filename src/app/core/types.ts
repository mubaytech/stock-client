import {Observable, OperatorFunction, Subject} from 'rxjs';
import {Directive, OnDestroy} from '@angular/core';
import {takeUntil} from 'rxjs/operators';


@Directive()
export class AppOnDestroy implements OnDestroy {
  onDestroy$: Subject<any> = new Subject<any>();

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  takeUntil = <T>(source: Observable<T>) => source.pipe(takeUntil(this.onDestroy$));
}

export function trackByFn(o: any) {
  return o.id;
}
