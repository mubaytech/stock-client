import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  Optional,
  QueryList,
  ViewChildren
} from '@angular/core';
import {FocusKeyManager,ActiveDescendantKeyManager} from '@angular/cdk/a11y';
import {KeyboardNavigationItemDirective} from '../keyboard-navigation-item.directive';
import {VIRTUAL_SCROLL_STRATEGY, VirtualScrollStrategy} from '@angular/cdk/scrolling';
import {DOWN_ARROW, ENTER, UP_ARROW} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-keyboard-navigation',
  templateUrl: './keyboard-navigation.component.html',
  styleUrls: ['./keyboard-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyboardNavigationComponent implements AfterViewInit {
  toggle = true;
  @Input('keyboardNavigationType') type: 'focus' | 'click' = 'focus';

  // @Input() set hasVirtualScrollItems(hasVirtualScrollItems) {
  //   if (hasVirtualScrollItems) {
  //     timer(500).subscribe(_ => this.keyManager = new FocusKeyManager(this.virtualItems).withWrap()/*.withTypeAhead();*/)
  //   }
  //
  // }

  @ViewChildren(KeyboardNavigationItemDirective) virtualItems: QueryList<KeyboardNavigationItemDirective>;

  constructor(
    @Optional() @Inject(VIRTUAL_SCROLL_STRATEGY) public virtualScrollStrategy: VirtualScrollStrategy,
    private _elementRef: ElementRef
  ) {
  }


  /** key manager that controlls the selection with arrowkeys  */
  keyManager: ActiveDescendantKeyManager<KeyboardNavigationItemDirective>;
  // the index of the virtual scroll that we are currently seeing with the keys
  virtualIndex = 0;

  @HostListener('keydown', ['$event'])
  onKeydown(event) {

    if (event.keyCode === ENTER) {
      // here add the item selected to the value
    } else if (event.keyCode === UP_ARROW || event.keyCode === DOWN_ARROW) {
      console.log('keyup')
      this.keyManager.onKeydown(event);
      // to avoid the module of 0
      const index = this.keyManager.activeItemIndex + 1;
      if (this.toggle) {
        // if we get at the bottom of the current view with down arrows, jump to the next index
        if (index % 5 === 0 && event.keyCode === DOWN_ARROW) {
          this.virtualIndex += 4;
          // if we get at the top of the selection view, go to the back index
        } else if (index % 4 === 0 && event.keyCode === UP_ARROW) {
          this.virtualIndex -= 4;
        }

        //this way even if we scroll down we go back to the section we were
        this.virtualScrollStrategy?.scrollToIndex(this.virtualIndex, 'auto');
      }
    }
  }


  ngAfterViewInit() {
    console.log(this.virtualItems)
    if (this.virtualItems) {
      this.keyManager = new ActiveDescendantKeyManager(this.virtualItems).withWrap().withTypeAhead();
    }
  }
}
