import {ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {MenuHeaderDirective} from '../menu-header.directive';
import {MenuContentDirective} from '../menu-content.directive';
import {MenuFooterDirective} from '../menu-footer.directive';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent<T> implements OnInit {
  @Input() items: T[];
  @Input() key: string;
  @Input() title: string;
  @ContentChild(MenuHeaderDirective, {read: TemplateRef})
  header: TemplateRef<any>;
  @ContentChild(MenuContentDirective, {read: TemplateRef})
  content: TemplateRef<any>;
  @ContentChild(MenuFooterDirective, {read: TemplateRef})
  footer: TemplateRef<any>;
  @ContentChild(MenuFooterDirective, {read: TemplateRef})
  trigger: TemplateRef<any>;
  @Input() dialog: boolean;
  @Input() showHideOnHover: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
