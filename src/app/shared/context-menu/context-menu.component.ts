import {ChangeDetectionStrategy, Component, ElementRef, OnInit} from '@angular/core';
import {ContextMenuDirective} from "./context-menu.directive";
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent extends ContextMenuDirective implements OnInit {

  constructor(
    popoverController: PopoverController,
    elementRef: ElementRef
  ) {
    super(elementRef, popoverController)
  }

  ngOnInit() {
  }

}
