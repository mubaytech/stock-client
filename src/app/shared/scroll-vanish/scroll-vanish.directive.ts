import {Directive, ElementRef, HostListener, EventEmitter, Input, OnDestroy, Output, Renderer2} from '@angular/core';
import {DomController, IonContent} from '@ionic/angular';
import {CdkScrollable, CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {BehaviorSubject, Observable, timer} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil} from 'rxjs/operators';
import {AppOnDestroy} from '../../core/types';

type El = CdkVirtualScrollViewport | CdkScrollable | IonContent

@Directive({
  selector: '[appScrollVanish]'
})
export class ScrollVanishDirective extends AppOnDestroy implements OnDestroy {
  private delta: number = 0;

  @Input("appScrollVanish") set scrollArea(s: El) {
    this.onScrollElement.next(s);
  };

  @Input() maxHeight: number;

  public hidden: boolean = false;
  private triggerDistance: number = 30;
  private onScrollElement = new BehaviorSubject<El>(null);

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private domCtrl: DomController
  ) {
    super();
  }

  @Output()
  scrollVanishStateChange = new EventEmitter();

  ngOnInit() {
    this.initStyles();
    this.onScrollElement.asObservable().pipe(
      takeUntil(this.onDestroy$),
      filter(v => !!v),
      distinctUntilChanged(),
      switchMap(s => this.elementScrolled(s)),
      // debounceTime(700)
    ).subscribe(scrollY => {


      if (scrollY === 0 && this.hidden) {
        this.show();
      } else if (!this.hidden && (scrollY - this.delta) > this.triggerDistance) {
        this.hide();
      } else if (this.hidden && (scrollY - this.delta) < -this.triggerDistance) {
        this.show();
      }
      this.delta = scrollY
    });
  }

  initStyles() {
    this.domCtrl.write(() => {
      this.renderer.setStyle(
        this.element.nativeElement,
        "transition",
        "0.24s linear"
      );
      this.renderer.setStyle(this.element.nativeElement, "max-height", this.maxHeight + 'px');
    });
  }


  hide() {
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.element.nativeElement, "max-height", "0px");
      // this.renderer.setStyle(this.element.nativeElement, "height", "0px");
      this.renderer.setStyle(this.element.nativeElement, "opacity", "0");
      this.renderer.setStyle(this.element.nativeElement, "padding", "0");
      timer(200).subscribe(_ => this.scrollVanishStateChange.emit())
    });

    this.hidden = true;
  }

  show() {
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.element.nativeElement, "max-height", this.maxHeight + 'px');
      this.renderer.removeStyle(this.element.nativeElement, "opacity");
      // this.renderer.removeStyle(this.element.nativeElement, "min-height");
      // this.renderer.setStyle(this.element.nativeElement, "opacity", "1");
      this.renderer.removeStyle(this.element.nativeElement, "padding");
      timer(200).subscribe(_ => this.scrollVanishStateChange.emit())
    });

    this.hidden = false;
  }

  elementScrolled(el: El): Observable<number> {
    if (el instanceof IonContent) {
      // console.log(el)
      return el?.ionScroll.pipe(
        map((event: CustomEvent) => {
          return (event.target as HTMLElement).scrollTop
        })
      )
    } else {
      return el?.elementScrolled().pipe(
        map(_ => el.measureScrollOffset("top"))
      );
    }
  }
}
