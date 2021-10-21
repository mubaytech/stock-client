import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  DomController,
  IonContent,
  IonInfiniteScroll,
  IonNav,
  IonSearchbar,
  NavParams
} from '@ionic/angular';
import {IonicSelectableComponent} from './ionic-selectable.component';
import {Subject, timer} from 'rxjs';
import {debounceTime, filter, map, pairwise, takeUntil, throttleTime} from 'rxjs/operators';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {CoreService} from '../../core/core.service';
import {InfiniteScrollComponent} from '../infinite-scroll/infinite-scroll.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ionic-selectable-modal',
  templateUrl: './ionic-selectable-modal.component.html',
  styleUrls: ['./ionic-selectable-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IonicSelectableModalComponent<T extends { id: string }> implements OnDestroy, OnInit, AfterViewInit {

  constructor(
    private navParams: NavParams,
    public _element: ElementRef,
    private domCtl: DomController,
    public changeDetectorRef: ChangeDetectorRef,
    public coreService: CoreService,
    private nav: IonNav,
    private ngZone: NgZone
  ) {


    const check = (() => {
      this.changeDetectorRef.markForCheck();
    }).bind(this);
    this.selectComponent = this.navParams.get('selectComponent');
    this.selectComponent._modalComponent = this;
    this.selectComponent._nav = this.nav;
    this.selectComponent._selectedItems = [];


    // this.selectComponent.onSaveItem.pipe(takeUntil(this.destroy$)).subscribe(check);
    // this.selectComponent.onDeleteItem.pipe(takeUntil(this.destroy$)).subscribe(check);
    // this.selectComponent.onAddItem.pipe(takeUntil(this.destroy$)).subscribe(check);
    // this.selectComponent.onChange.subscribe(check)
    // // this.selectComponent.onSelect.pipe(takeUntil(this.destroy$)).subscribe(check)
    // this.selectComponent.onClear.subscribe(check);
    // this.selectComponent.onSearch.pipe(takeUntil(this.destroy$)).subscribe(check);
    this.selectComponent.onInfiniteScroll.pipe(takeUntil(this.destroy$)).subscribe(check)
    this.selectComponent.onSearchFail.pipe(takeUntil(this.destroy$)).subscribe(check);
    this.selectComponent.onSearchSuccess.pipe(takeUntil(this.destroy$)).subscribe(check);
    this.selectComponent.onItemsChange.pipe(takeUntil(this.destroy$), debounceTime(150)).subscribe(() => {
      check();
      // this.scrollToSelectedElements();
    });
    if (!IonicSelectableModalComponent._isNullOrWhiteSpace(this.selectComponent.value)) {
      if (this.selectComponent.isMultiple) {
        this.selectComponent.value.forEach(item => {
          this.selectComponent._selectedItems.push(item);
        });
      } else {
        this.selectComponent._selectedItems.push(this.selectComponent.value);
      }
    }

    this.selectComponent._setItemsToConfirm(this.selectComponent._selectedItems);

  }

  SetTopViewport: (viewport: ElementRef<HTMLElement>) => void;

  @HostBinding('class.ionic-selectable-modal-can-clear')
  get _canClearCssClass(): boolean {
    return this.selectComponent.canClear;
  }

  @HostBinding('class.ionic-selectable-modal-is-multiple')
  get _isMultipleCssClass(): boolean {
    return this.selectComponent.isMultiple;
  }

  @HostBinding('class.ionic-selectable-modal-is-searching')
  get _isSearchingCssClass(): boolean {
    return this.selectComponent.isSearching;
  }

  @HostBinding('class.ionic-selectable-modal-ios')
  get _isIos(): boolean {
    return this.selectComponent._isIos;
  }

  @HostBinding('class.ionic-selectable-modal-is-add-item-template-visible')
  get _isAddItemTemplateVisibleCssClass(): boolean {
    return this.selectComponent._isAddItemTemplateVisible;
  }

  get check() {
    return () => {
      this.changeDetectorRef.markForCheck();
    };
  }

  @ViewChild(IonContent) _content: IonContent;

  initialized: boolean;
  public ionContentReady: boolean;
  @ViewChild(InfiniteScrollComponent) _infiniteScroll: InfiniteScrollComponent;

  @ViewChild(IonContent)
  ionContent: IonContent;
  @ViewChild(CdkVirtualScrollViewport)
  cdkVirtualScrollViewport: CdkVirtualScrollViewport;
  _header: HTMLElement;
  selectComponent: IonicSelectableComponent<T>;
  @ViewChild(IonSearchbar)
  _searchbarComponent: IonSearchbar;
  @HostBinding('class.ionic-selectable-modal')
  _cssClass = true;
  viewPortItems: Array<any>;
  destroy$ = new Subject();
  scrollContent: HTMLElement;


  @HostBinding('class.ionic-selectable-modal-md')
  _isMD(): boolean {
    return this.selectComponent._isMD;
  }

  @HostListener('window:resize')
  onResize() {
    // ion-footer inside the template might change its height when
    // device orientation changes.
    this.selectComponent._positionAddItemTemplate();
  }

  ngAfterViewInit(): void {
    this.domCtl.read(() => {
      this._header = this._element.nativeElement.querySelector('ion-header');
      this.changeDetectorRef.markForCheck();
      if (this._searchbarComponent && this.selectComponent.shouldFocusSearchbar) {
        // Focus after a delay because focus doesn't work without it.
        timer(1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
          this.domCtl.write(() => {
            this._searchbarComponent.setFocus().then();
            this.changeDetectorRef.markForCheck();
          });
        });
      } else {
        this.cdkVirtualScrollViewport.elementRef.nativeElement.focus();
      }
    });
  }

  ngOnInit(): void {
    timer(0).subscribe(() => {
      this.ionContent.getScrollElement().then(value => {
        this.cdkVirtualScrollViewport.checkViewportSize();
      });
    });
  }

  trackByFn(index, item: any) {
    // console.log(item)
    return item.id;
  }

  ionViewWillEnter() {
    // this.changeDetectorRef.markForCheck();
    if (!this.initialized) {
      this.initialized = true;
      this.scrollToSelectedElements();
    }
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  scrollToSelectedElements() {
    timer(this.coreService.isAndroid ? 1100 : 300).pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.selectComponent._selectedItems.length) {
        const selected = this.selectComponent._selectedItems[this.selectComponent._selectedItems.length - 1] as any;
        let index = -1;
        const items: Array<any> = (this.selectComponent._filteredGroups[0]?.items) || [];
        for (let i = 0; i < items.length; i++) {
          if (items[i].id === selected.id) {
            index = i > 2 ? i - 2 : i;
            break;
          }
        }
        this.cdkVirtualScrollViewport?.scrollToIndex(index, 'smooth');

      }
    });
  }


  static _isNullOrWhiteSpace(value: any): boolean {
    if (value === null || value === undefined) {
      return true;
    }

    // Convert value to string in case if it's not.
    return value.toString().replace(/\s/g, '').length < 1;
  }
}
