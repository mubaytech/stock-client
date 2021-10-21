import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableAddItemTemplateDirective } from './ionic-selectable-add-item-template.directive';
import { IonicSelectableCloseButtonTemplateDirective } from './ionic-selectable-close-button-template.directive';
import { IonicSelectableFooterTemplateDirective } from './ionic-selectable-footer-template.directive';
import { IonicSelectableGroupEndTemplateDirective } from './ionic-selectable-group-end-template.directive';
import { IonicSelectableGroupTemplateDirective } from './ionic-selectable-group-template.directive';
import { IonicSelectableHeaderTemplateDirective } from './ionic-selectable-header-template.directive';
import { IonicSelectableItemEndTemplateDirective } from './ionic-selectable-item-end-template.directive';
import { IonicSelectableItemIconTemplateDirective } from './ionic-selectable-item-icon-template.directive';
import { IonicSelectableItemTemplateDirective } from './ionic-selectable-item-template.directive';
import { IonicSelectableMessageTemplateDirective } from './ionic-selectable-message-template.directive';
import { IonicSelectableModalComponent } from './ionic-selectable-modal.component';
import { IonicSelectablePlaceholderTemplateDirective } from './ionic-selectable-placeholder-template.directive';
import { IonicSelectableSearchFailTemplateDirective } from './ionic-selectable-search-fail-template.directive';
import { IonicSelectableTitleTemplateDirective } from './ionic-selectable-title-template.directive';
import { IonicSelectableValueTemplateDirective } from './ionic-selectable-value-template.directive';
import { IonicSelectableIconTemplateDirective } from './ionic-selectable-icon-template.directive';
import { IonicSelectableComponent } from './ionic-selectable.component';
import { IonicSelectableSearchbarTemplateDirective } from './ionic-selectable-searchbar-template.directive';
import { IsSelectedPipe } from './is-selected.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from '../infinite-scroll/infinite-scroll.module';
import { A11yModule } from '@angular/cdk/a11y';
import { MatRippleModule } from '@angular/material/core';
const components = [IonicSelectableComponent, IonicSelectableModalComponent];
const directives = [
    IonicSelectableValueTemplateDirective,
    IonicSelectableItemTemplateDirective,
    IonicSelectableItemEndTemplateDirective,
    IonicSelectableTitleTemplateDirective,
    IonicSelectablePlaceholderTemplateDirective,
    IonicSelectableMessageTemplateDirective,
    IonicSelectableGroupTemplateDirective,
    IonicSelectableGroupEndTemplateDirective,
    IonicSelectableCloseButtonTemplateDirective,
    IonicSelectableSearchFailTemplateDirective,
    IonicSelectableAddItemTemplateDirective,
    IonicSelectableFooterTemplateDirective,
    IonicSelectableHeaderTemplateDirective,
    IonicSelectableItemIconTemplateDirective,
    IonicSelectableIconTemplateDirective,
    IonicSelectableSearchbarTemplateDirective
];
let IonicSelectableModule = class IonicSelectableModule {
};
IonicSelectableModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ScrollingModule,
            InfiniteScrollModule,
            A11yModule,
            MatRippleModule,
        ],
        declarations: [
            ...components,
            ...directives,
            IonicSelectableSearchbarTemplateDirective,
            IsSelectedPipe
        ],
        exports: [
            ...components,
            ...directives
        ],
        entryComponents: components
    })
], IonicSelectableModule);
export { IonicSelectableModule };
//# sourceMappingURL=ionic-selectable.module.js.map