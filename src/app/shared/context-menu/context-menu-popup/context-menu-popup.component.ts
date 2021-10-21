import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef} from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-context-menu-popup',
  templateUrl: './context-menu-popup.component.html',
  styleUrls: ['./context-menu-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuPopupComponent implements OnInit, AfterViewInit {
  @Input()
  headerTemplate: any;
  @Input()
  bodyTemplate: any;
  @Input()
  footerTemplate: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
