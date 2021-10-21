import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
import {FocusableOption, Highlightable} from '@angular/cdk/a11y';

@Directive({
  selector: '[keyboardNavigationItem]'
})
export class KeyboardNavigationItemDirective implements FocusableOption, Highlightable {

  private _isActive = false;

  constructor(
    private _elementRef: ElementRef,
  ) {
  }


  @HostListener('click')
  onClick() {
    this.focus();
  }

  @HostBinding('class.active') get isActive() {
    return this._isActive;
  }

  setActiveStyles() {
    this._isActive = true;
  }

  setInactiveStyles() {
    this._isActive = false;
  }

  focus(): void {
    this._elementRef.nativeElement.focus();
  }


}
