import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {BehaviorSubject, from, of, Subject, Subscription, timer} from 'rxjs';
import {distinctUntilChanged, skip, switchMap, takeUntil} from 'rxjs/operators';
import {DomController} from '@ionic/angular';
import {NetworkService} from '../../core/network/network.service';
import {CoreService} from '../../core/core.service';
import {ImageLoader} from '../ionic-image-loader/providers/image-loader';
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent implements OnInit, OnDestroy {

  @ViewChild('container') private _elementRef: ElementRef;
  _src = ' ';
  _ratio: { w: number, h: number } = {w: 100, h: 100};
  @Input() imageStyle: object;

  @Input()
  host = environment.apiUrl

  get _imageStyle() {
    return this.imageStyle || {};
  }

  destroy$ = new Subject();
  $loaded = new BehaviorSubject(false);
  done = new BehaviorSubject(false);
  hasError = new BehaviorSubject(false);
  private networkSubscription: Subscription;
  @Input() rounded = true;
  @Input() showLoaderAnimation = true;
  @Input() iconContainer: any = {};
  @Input() fallBackUlr: string;
  _srcSet = new BehaviorSubject<string>(null);

  @Input()
  alt: any;

  @ViewChild('img') img: ElementRef<HTMLImageElement>

  constructor(
    private _renderer: Renderer2,
    private dom: DomController,
    private network: NetworkService,
    private ref: ChangeDetectorRef,
    public imageLoader: ImageLoader,
    public core: CoreService,
  ) {

    this._srcSet.asObservable().pipe(
      takeUntil(this.destroy$),
      skip(1),
      distinctUntilChanged(),
      switchMap(v => this.core.isNativeMobile ? from(this.imageLoader.preload(v)) : of(v)),
    ).subscribe((val) => {
      if (this.$loaded.value) {
        this.$loaded.next(false);
        this.done.next(false);
        this.hasError.next(false);
      }
      if (val) {
        this.dom.write(() => {
          this._renderer.setAttribute(this.img.nativeElement, 'src', this.host + val);
        });
      } else {
        this._error();
      }
      // this._src = (val !== undefined && val !== null && typeof val === 'string') ? val : null;

    });
  }

  ngOnInit(): void {
    //
  }

  @Input() set src(val: string) {
    this._srcSet.next(val);
  }

  _update() {
    //
  }

  _loaded() {
    this.$loaded.next(true);
    this.done.next(true);
    this.hasError.next(false);

  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  _error() {
    this.$loaded.next(false);
    this.done.next(true);
    this.hasError.next(true);
    if (!this.network.status.connected && !this.networkSubscription) {
      if (!this.networkSubscription) {
        this.networkSubscription = this.network.onInternetRetablished.pipe(takeUntil(this.destroy$)).subscribe(() => {
          this.networkSubscription.unsubscribe();
          this.networkSubscription = null;
          if (!this.$loaded.value) {
            this.reload();
          }
        });
      }
    }
  }

  private reload() {
    const src = this._srcSet.getValue();
    this.src = ' ';
    this.done.next(false);
    this.hasError.next(false);
    this.$loaded.next(false);
    // this.ref.markForCheck();
    timer(100).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.src = src;
    });
  }
}
