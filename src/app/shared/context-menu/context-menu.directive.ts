import {
  AfterViewInit,
  ContentChild,
  Directive,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  TemplateRef
} from '@angular/core';
import {BehaviorSubject, fromEvent, merge, of, Subscription} from "rxjs";
import {AppOnDestroy} from "../../core/types";
import {debounceTime, distinctUntilChanged, filter, switchMap, takeUntil} from "rxjs/operators";
import {PopoverController} from "@ionic/angular";
import {ContextMenuPopupComponent} from "./context-menu-popup/context-menu-popup.component";
import {ContextMenuContentDirective} from "./context-menu-content.directive";


@Directive({
  selector: '[appContextMenuDirective]'
})
export class ContextMenuDirective extends AppOnDestroy implements AfterViewInit {
  @Input() title: string;


  @ContentChild('contextHeader') contextMenuHeaderComponent: TemplateRef<any>;


  @ContentChild(ContextMenuContentDirective) contextMenuBodyComponent: ContextMenuContentDirective;


  @ContentChild('contextFooter') contextMenuFooterComponent: TemplateRef<any>;

  protected _popover: HTMLIonPopoverElement;
  private preventConntextReopenSubscrition: Subscription;

  @Output()
  beforeOpen: any = new EventEmitter();

  @Output()
  beforeClose: any = new EventEmitter();


  @Input()
  set disabled(value) {
    this._disabled.next(value);
  }

  _disabled = new BehaviorSubject<boolean>(false);

  constructor(
    public readonly elementRef: ElementRef,
    public popoverController: PopoverController
  ) {
    super()
  }

  ngAfterViewInit(): void {
    // console.log(this.contextMenuBodyComponent)
    this._disabled.asObservable().pipe(
      distinctUntilChanged(),
      switchMap(v => {
        if (!v) {
          return fromEvent(this.elementRef.nativeElement, 'contextmenu').pipe(
            takeUntil((this.onDestroy$)),
            switchMap((e: MouseEvent) => {
              e.preventDefault();
              // e.stopPropagation();
              return of(e);
            }),
            // debounceTime(50)
          )
        } else {
          this.close()?.then();
          return of(null)
        }
      }),
      filter(v => !!v)
    )
      .subscribe((e: MouseEvent) => {
        if (!this._popover) {
          this.beforeOpen.emit()
          this.preventConntextReopenSubscrition?.unsubscribe();
          this.popoverController.create({
            component: ContextMenuPopupComponent,
            // translucent: true,
            event: e,
            componentProps: {
              headerTemplate: this.contextMenuHeaderComponent,
              bodyTemplate: this.contextMenuBodyComponent.templateRef,
              footerTemplate: this.contextMenuFooterComponent,
            },
            translucent:true,
            cssClass: 'context-menu-dialog',
            showBackdrop: false,
            // delegate:
          }).then(popover => {
            this._popover = popover;
            popover.onWillDismiss().then(_ => {
              this.preventConntextReopenSubscrition?.unsubscribe();
              this.beforeClose.emit();
            });
            popover.onDidDismiss().then(_ => {
              this._popover = null;
            });
            this.preventConntextReopenSubscrition = merge(
              fromEvent(popover, 'contextmenu'),
              fromEvent(popover, 'click')
            ).subscribe((e: MouseEvent) => {
              e.preventDefault();
              this._popover?.dismiss().then();
            })

            this._popover.present().then();
          })
        }
      })
  }

  close() {
    return this._popover?.dismiss();
  }

}
