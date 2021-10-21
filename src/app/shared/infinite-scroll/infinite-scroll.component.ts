import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  HostBinding, Injector,
  Input,
  OnInit,
  Optional,
  Output,
  Renderer2
} from '@angular/core';
import {CdkVirtualScrollViewport, ScrollDispatcher} from '@angular/cdk/scrolling';
import {AppOnDestroy} from '../../core/types';
import {BehaviorSubject, of, timer} from 'rxjs';
import {debounceTime, delay, distinctUntilChanged, filter, switchMap, takeUntil, tap} from 'rxjs/operators';
import {DomController} from '@ionic/angular';
import {GraphqlPaginationService} from "../../core/graphql-pagination.service";
import {IonicSelectableModalComponent} from "../ionic-selectable/ionic-selectable-modal.component";
import {ExtendedScrollToOptions} from "@angular/cdk/scrolling/scrollable";
import {TuiScrollbarComponent} from "@taiga-ui/core";

@Component({
  selector: ' app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfiniteScrollComponent extends AppOnDestroy implements OnInit, AfterViewInit {


  @Input() set disabled(disabled: boolean) {
    this._disabled.next(disabled);
  }

  get disabled() {
    return this._disabled.getValue();
  }

  @HostBinding('class.loading') get loading() {
    return this._loading.getValue();
  }

  @HostBinding('style.--size.%') get _height() {
    return this.size;
  }

  set loading(loading) {
    this._loading.next(loading);
  }

  constructor(
    public domController: DomController,
    public renderer2: Renderer2,
    private scrollDispatcher: ScrollDispatcher,
    @Optional() private graphqlPaginationService: GraphqlPaginationService,
    public injector: Injector
  ) {
    super();


  }

  private selectableModalComponent: IonicSelectableModalComponent<any>
  @Output() ionInfinite = new EventEmitter();

  @ContentChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;


  _loading = new BehaviorSubject<boolean>(false);
  _disabled = new BehaviorSubject<boolean>(false);

  @HostBinding('class.horizontal')
  @Input()
  horizontal = false;


  @Input()
  size = 10;


  onLoading = this._loading.asObservable().pipe(
    distinctUntilChanged(),
  );


  onLoadingDelayed = this.onLoading.pipe(
    switchMap(value => {
      if (value) {
        // console.log(value)
        return this.onLoading;
      } else {
        return this.onLoading.pipe(debounceTime(200))
      }
    })
  );


  onDisabled = this._disabled.asObservable().pipe(distinctUntilChanged());


  ngAfterViewInit(): void {
    timer(100).pipe(
      takeUntil(this.onDestroy$)).subscribe(_ => {

      this.onDisabled.pipe(
        takeUntil(this.onDestroy$),
        switchMap(disabled => {
            // console.log(disabled);
            return (disabled ? of(false) : this.onLoading);
          }
        )
      ).subscribe(loading => {
        // console.log(loading)
        if (loading) {
          this.domController.write(timeStamp => {
            this.renderer2.setStyle(this.viewport.elementRef.nativeElement, (this.horizontal ? 'width' : 'height'), (100 - this.size) + '%');
          });
        } else {
          this.domController.write(timeStamp => {
            this.renderer2.setStyle(this.viewport.elementRef.nativeElement, (this.horizontal ? 'width' : 'height'), '100%');
          });
        }
      });
      this.scrollDispatcher.scrolled().pipe(
        switchMap(() => this.onDisabled),
        filter(value => {

          return !value;
        }),
        // tap(v => {
        //   console.log(v);
        //
        // }),
        // tap(_=>console.log(this.viewport.measureScrollOffset((this.horizontal ? 'right' : 'bottom')))),
        filter(event => this.viewport.measureScrollOffset((this.horizontal ? 'right' : 'bottom')) <= 20)
      ).subscribe(_ => {
        if (!this._loading.getValue()) {
          this.loading = true;
          this.ionInfinite.next(this);
        }
      });
    })


  }

  ngOnInit(): void {
    //
    try {
      // this.selectableModalComponent = this.injector.get(IonicSelectableModalComponent);

    } catch (e) {

    }
    (this.graphqlPaginationService?.refetching || this.selectableModalComponent?.selectComponent?.graphqlPaginationService?.refetching)?.pipe(
      takeUntil(this.onDestroy$),
      distinctUntilChanged(),
      filter(v => !!v)
    ).subscribe(_ => {
      this.scrollToTop();
    });
    (this.graphqlPaginationService?.refetching || this.selectableModalComponent?.selectComponent?.graphqlPaginationService?.refetching)?.pipe(
      takeUntil(this.onDestroy$),
      distinctUntilChanged(),
      filter(v => !!v)
    ).subscribe(_ => {
      this.scrollToTop();
    })
  }

  complete() {
    return new Promise(_ => {
      this.loading = false;
    });
  }

  scrollToTop() {
    this.scrollTo({
      start: 1,
      top: 1,
      behavior: 'auto'
    })
  }

  scrollTo(options: ExtendedScrollToOptions) {
    this.viewport.scrollTo(options)
  }


}
