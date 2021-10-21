import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyboardNavigationItemDirective} from './keyboard-navigation-item.directive';
import {KeyboardNavigationComponent} from './keyboard-navigation/keyboard-navigation.component';


@NgModule({
  declarations: [
    KeyboardNavigationItemDirective,
    KeyboardNavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [KeyboardNavigationItemDirective, KeyboardNavigationComponent]
})
export class KeyboardNavigationItemModule {
}
