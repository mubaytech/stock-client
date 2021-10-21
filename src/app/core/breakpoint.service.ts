import {Injectable} from '@angular/core';
import {CoreService} from './core.service';
import {debounceTime, map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  private onResize$ = new BehaviorSubject<number>(null);
  sm = 576;
  md = 768;
  lg = 992;
  xl = 1200;
  viewportWidth = null;

  constructor(core: CoreService) {
    core.platform.resize.asObservable().pipe(debounceTime(300)).subscribe(() => {
      this.viewportWidth = core.platform.width();
      this.onResize$.next(this.viewportWidth);
    });
    core.platformReady.subscribe(() => {
      this.viewportWidth = core.platform.width();
      this.onResize$.next(this.viewportWidth);
    });
  }

  get width() {
    return this.viewportWidth || this.xl;
  }

  get smAndUp() {
    return this.width >= this.sm;
  }

  get mdAndUp() {
    return this.width >= this.md;
  }

  get lgAndUp() {
    return this.width >= this.lg;
  }

  get xlAndUp() {
    return this.width >= this.xl;
  }

  get smAndDown() {
    return this.width <= this.sm;
  }

  get mdAndDown() {
    return this.width <= this.md;
  }

  get lgAndDown() {
    return this.width <= this.lg;
  }

  get xlAndDown() {
    return this.width <= this.xl;
  }

  onResize = this.onResize$.asObservable();

  itemSize(smAndDown?: number, smAndUp?: number, mdAndUp?: number, lgAndUp?: number, xlAndUp?: number) {
    return this.onResize.pipe(
      map(_ => {
        if (xlAndUp && this.xlAndUp) {
          return xlAndUp;
        } else if (lgAndUp && this.lgAndUp) {
          return lgAndUp;
        } else if (mdAndUp && this.mdAndUp) {
          return mdAndUp;
        } else if (smAndUp && this.smAndUp) {
          return smAndUp;
        } else if (smAndDown && this.smAndDown) {
          return smAndDown;
        }
      })
    )
  }

}
