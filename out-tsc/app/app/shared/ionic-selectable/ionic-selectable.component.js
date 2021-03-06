var IonicSelectableComponent_1;
import { __decorate, __param } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, forwardRef, HostBinding, Input, Optional, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { of } from 'rxjs';
import { IonicSelectableAddItemTemplateDirective } from './ionic-selectable-add-item-template.directive';
import { IonicSelectableCloseButtonTemplateDirective } from './ionic-selectable-close-button-template.directive';
import { IonicSelectableFooterTemplateDirective } from './ionic-selectable-footer-template.directive';
import { IonicSelectableGroupEndTemplateDirective } from './ionic-selectable-group-end-template.directive';
import { IonicSelectableGroupTemplateDirective } from './ionic-selectable-group-template.directive';
import { IonicSelectableHeaderTemplateDirective } from './ionic-selectable-header-template.directive';
import { IonicSelectableIconTemplateDirective } from './ionic-selectable-icon-template.directive';
import { IonicSelectableItemEndTemplateDirective } from './ionic-selectable-item-end-template.directive';
import { IonicSelectableItemIconTemplateDirective } from './ionic-selectable-item-icon-template.directive';
import { IonicSelectableItemTemplateDirective } from './ionic-selectable-item-template.directive';
import { IonicSelectableMessageTemplateDirective } from './ionic-selectable-message-template.directive';
import { IonicSelectableModalComponent } from './ionic-selectable-modal.component';
import { IonicSelectablePlaceholderTemplateDirective } from './ionic-selectable-placeholder-template.directive';
import { IonicSelectableSearchFailTemplateDirective } from './ionic-selectable-search-fail-template.directive';
import { IonicSelectableTitleTemplateDirective } from './ionic-selectable-title-template.directive';
import { IonicSelectableValueTemplateDirective } from './ionic-selectable-value-template.directive';
import { IonicSelectableSearchbarTemplateDirective } from './ionic-selectable-searchbar-template.directive';
import { map } from 'rxjs/operators';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
let IonicSelectableComponent = IonicSelectableComponent_1 = class IonicSelectableComponent {
    constructor($_modalController, _platform, ionItem, _iterableDiffers, _element, _renderer, ref, coreService, _popoverController, routerOutlet) {
        this.$_modalController = $_modalController;
        this._platform = _platform;
        this.ionItem = ionItem;
        this._iterableDiffers = _iterableDiffers;
        this._element = _element;
        this._renderer = _renderer;
        this.ref = ref;
        this.coreService = coreService;
        this._popoverController = _popoverController;
        this.routerOutlet = routerOutlet;
        this.interface = 'modal';
        this.modalColor = null;
        this._cssClass = true;
        this._isOnSearchEnabled = true;
        this._isEnabled = true;
        this._shouldBackdropClose = true;
        this._isOpened = false;
        this._value = null;
        this._canClear = false;
        this._hasConfirmButton = false;
        this._isMultiple = false;
        this._canAddItem = false;
        this.onItemsChange = new EventEmitter();
        this._hasIonLabel = false;
        this._ionLabelPosition = null;
        this._label = null;
        this._valueItems = [];
        this._searchText = '';
        this._hasSearchText = false;
        this._groups = [];
        this._itemsToConfirm = [];
        this._selectedItems = [];
        this._filteredGroups = [];
        this._isAddItemTemplateVisible = false;
        this._isFooterVisible = true;
        this._itemToAdd = null;
        this._footerButtonsCount = 0;
        this._hasFilteredItems = false;
        /*if add item template has footer*/
        this.addItemTemplateHasFooter = false;
        /**
         * A list of items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
         *
         * @default []
         * @memberof IonicSelectableComponent
         */
        this.items = [];
        this.itemsChange = new EventEmitter();
        /**
         * Modal CSS class.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalcssclass).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.modalCssClass = null;
        /**
         * Modal enter animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalenteranimation).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.modalEnterAnimation = null;
        /**
         * Modal leave animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalleaveanimation).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.modalLeaveAnimation = null;
        /**
         * Determines whether Confirm button is enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isconfirmbuttonenabled).
         *
         * @default true
         * @memberof IonicSelectableComponent
         */
        this.isConfirmButtonEnabled = true;
        /**
         * Item property to use as a unique identifier, e.g, `'id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.itemValueField = null;
        /**
         * Item property to display, e.g, `'name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.itemTextField = null;
        /**
         *
         * Group property to use as a unique identifier to group items, e.g. `'country.id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupvaluefield).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.groupValueField = null;
        /**
         * Group property to display, e.g. `'country.name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#grouptextfield).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.groupTextField = null;
        /**
         * Determines whether to show Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansearch).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.canSearch = false;
        /**
         * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled.
         * **Note**: Infinite scroll cannot be used together with virtual scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasinfinitescroll).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.hasInfiniteScroll = false;
        /**
         * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled.
         * **Note**: Virtual scroll cannot be used together with infinite scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvirtualscroll).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.hasVirtualScroll = true;
        /**
         * See Ionic VirtualScroll [approxItemHeight](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollapproxitemheight).
         *
         * @default '40px'
         * @memberof IonicSelectableComponent
         */
        this.virtualScrollApproxItemHeight = 56;
        this.virtualScrollEnableUnequalChildrenSizes = false;
        this.virtualScrollBufferAmount = 5;
        /**
         * A placeholder for Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchplaceholder).
         *
         * @default 'Search'
         * @memberof IonicSelectableComponent
         */
        this.searchPlaceholder = 'Rechercher';
        /**
         * A placeholder.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#placeholder).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.placeholder = null;
        /**
         * Text to display when no items have been found during search.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchfailtext).
         *
         * @default 'No items found.'
         * @memberof IonicSelectableComponent
         */
        this.searchFailText = 'Pas d\'elements a afficher';
        /**
         * Clear button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clearbuttontext).
         *
         * @default 'Clear'
         * @memberof IonicSelectableComponent
         */
        this.clearButtonText = 'Effacer';
        /**
         * Add button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#addbuttontext).
         *
         * @default 'Add'
         * @memberof IonicSelectableComponent
         */
        this.addButtonText = 'Ajouter';
        /**
         * Confirm button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirmbuttontext).
         *
         * @default 'OK'
         * @memberof IonicSelectableComponent
         */
        this.confirmButtonText = 'OK';
        /**
         * Close button text.
         * The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttontext).
         *
         * @default 'Cancel'
         * @memberof IonicSelectableComponent
         */
        this.closeButtonText = 'Annuler';
        /**
         * Determines whether Searchbar should receive focus when Modal is opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldfocussearchbar).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.shouldFocusSearchbar = false;
        /**
         * Header color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#headercolor).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.headerColor = null;
        /**
         * Group color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupcolor).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.groupColor = null;
        /**
         * Close button slot. [Ionic slots](https://ionicframework.com/docs/api/buttons) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttonslot).
         *
         * @default 'start'
         * @memberof IonicSelectableComponent
         */
        this.closeButtonSlot = 'start';
        /**
         * Item icon slot. [Ionic slots](https://ionicframework.com/docs/api/item) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemiconslot).
         *
         * @default 'start'
         * @memberof IonicSelectableComponent
         */
        this.itemIconSlot = 'start';
        /**
         * Fires when item/s has been selected and Modal closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onchange).
         *
         * @memberof IonicSelectableComponent
         */
        this.onChange = new EventEmitter();
        /**
         * Fires when the user is typing in Searchbar.
         * **Note**: `canSearch` and `isOnSearchEnabled` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearch).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSearch = new EventEmitter();
        /**
         * Fires when no items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchfail).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSearchFail = new EventEmitter();
        /**
         * Fires when some items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchsuccess).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSearchSuccess = new EventEmitter();
        /**
         * Fires when the user has scrolled to the end of the list.
         * **Note**: `hasInfiniteScroll` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#oninfinitescroll).
         *
         * @memberof IonicSelectableComponent
         */
        this.onInfiniteScroll = new EventEmitter();
        /**
         * Fires when Modal has been opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onopen).
         *
         * @memberof IonicSelectableComponent
         */
        this.onOpen = new EventEmitter();
        /**
         * Fires when Modal has been closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclose).
         *
         * @memberof IonicSelectableComponent
         */
        this.onClose = new EventEmitter();
        /**
         * Fires when an item has been selected or unselected.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onselect).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSelect = new EventEmitter();
        /**
         * Fires when Clear button has been clicked.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclear).
         *
         * @memberof IonicSelectableComponent
         */
        this.onClear = new EventEmitter();
        /**
         * How long, in milliseconds, to wait to filter items or to trigger `onSearch` event after each keystroke.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchdebounce).
         *
         * @default 250
         * @memberof IonicSelectableComponent
         */
        this.searchDebounce = 250;
        /**
         * A list of items to disable.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disabledi tems).
         *
         * @default []
         * @memberof IonicSelectableComponent
         */
        this.disabledItems = [];
        /**
         * Determines whether item value only should be stored in `ngModel`, not the entire item.
         * **Note**: Item value is defined by `itemValueField`.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldstoreitemvalue).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.shouldStoreItemValue = false;
        /**
         * Determines whether to allow editing items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansaveitem).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.canSaveItem = false;
        /**
         * Determines whether to allow deleting items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#candeleteitem).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.canDeleteItem = false;
        /**
         * Fires when Edit item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to edit item.
         * **Note**: `canSaveItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsaveitem).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSaveItem = new EventEmitter();
        /**
         * Fires when Delete item button has been clicked.
         * **Note**: `canDeleteItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ondeleteitem).
         *
         * @memberof IonicSelectableComponent
         */
        this.onDeleteItem = new EventEmitter();
        /**
         * Fires when Add item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to add item.
         * **Note**: `canAddItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onadditem).
         *
         * @memberof IonicSelectableComponent
         */
        this.onAddItem = new EventEmitter();
        this.isReadonly = false;
        /**
         * See Ionic VirtualScroll [headerFn](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollheaderfn).
         *
         * @memberof IonicSelectableComponent
         */
        this.virtualScrollHeaderFn = () => {
            return null;
        };
        this.propagateOnChange = (_) => {
            //
        };
        this.propagateOnTouched = () => {
            //
        };
        if (!this.items || !this.items.length) {
            this.items = [];
        }
        this.virtualScrollApproxItemHeight = this.coreService.isIos ? 44 : this.virtualScrollApproxItemHeight;
        this._itemsDiffer = this._iterableDiffers.find(this.items).create();
        // ;
    }
    get _isMultipleCssClass() {
        return this.isMultiple;
    }
    get _hasValueCssClass() {
        return this.hasValue();
    }
    get _hasPlaceholderCssClass() {
        return this._hasPlaceholder;
    }
    get _hasIonLabelCssClass() {
        return this._hasIonLabel;
    }
    get _hasDefaultIonLabelCssClass() {
        return this._ionLabelPosition === 'default';
    }
    get _hasFixedIonLabelCssClass() {
        return this._ionLabelPosition === 'fixed';
    }
    get _hasStackedIonLabelCssClass() {
        return this._ionLabelPosition === 'stacked';
    }
    get _hasFloatingIonLabelCssClass() {
        return this._ionLabelPosition === 'floating';
    }
    get _hasInfiniteScroll() {
        return !!(this.isEnabled && this._modalComponent &&
            this._modalComponent._infiniteScroll);
    }
    get _shouldStoreItemValue() {
        return this.shouldStoreItemValue && this._hasObjects;
    }
    /**
     * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
     *
     * @readonly
     * @default null
     * @memberof IonicSelectableComponent
     */
    get label() {
        return this._label;
    }
    /**
     * Text that the user has typed in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchtext).
     *
     * @readonly
     * @default ''
     * @memberof IonicSelectableComponent
     */
    get searchText() {
        return this._searchText;
    }
    set searchText(searchText) {
        this._searchText = searchText;
        this._setHasSearchText();
    }
    /**
     * Determines whether search is running.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#issearching).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get isSearching() {
        return this._isSearching;
    }
    /**
     * Determines whether user has typed anything in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hassearchtext).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get hasSearchText() {
        return this._hasSearchText;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        // Set value items.
        this._valueItems.splice(0, this._valueItems.length);
        if (this.isMultiple) {
            if (value && value.length) {
                Array.prototype.push.apply(this._valueItems, value);
            }
        }
        else {
            if (!IonicSelectableComponent_1._isNullOrWhiteSpace(value)) {
                this._valueItems.push(value);
            }
        }
        this._setIonItemHasValue();
        this._setHasPlaceholder();
        this.ref.markForCheck();
    }
    /**
     * Determines whether the component is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isenabled).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = !!isEnabled;
        this.enableIonItem(this._isEnabled);
    }
    /**
     * Determines whether Modal should be closed when backdrop is clicked.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldbackdropclose).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get shouldBackdropClose() {
        return this._shouldBackdropClose;
    }
    set shouldBackdropClose(shouldBackdropClose) {
        this._shouldBackdropClose = !!shouldBackdropClose;
    }
    /**
     * Determines whether Modal is opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get isOpened() {
        return this._isOpened;
    }
    /**
     * Determines whether Confirm button is visible for single selection.
     * By default Confirm button is visible only for multiple selection.
     * **Note**: It is always true for multiple selection and cannot be changed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasconfirmbutton).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get hasConfirmButton() {
        return this._hasConfirmButton;
    }
    set hasConfirmButton(hasConfirmButton) {
        this._hasConfirmButton = !!hasConfirmButton;
        this._countFooterButtons();
    }
    /**
     * Determines whether `onSearch` event is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isonsearchenabled).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get isOnSearchEnabled() {
        return this._isOnSearchEnabled;
    }
    set isOnSearchEnabled(isOnSearchEnabled) {
        this._isOnSearchEnabled = !!isOnSearchEnabled;
    }
    /**
     * Determines whether to show Clear button.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canclear).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    get canClear() {
        return this._canClear;
    }
    set canClear(canClear) {
        this._canClear = !!canClear;
        this._countFooterButtons();
    }
    /**
     * Determines whether multiple items can be selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ismultiple).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    get isMultiple() {
        return this._isMultiple;
    }
    set isMultiple(isMultiple) {
        this._isMultiple = !!isMultiple;
        this._countFooterButtons();
    }
    /**
     * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
     * After the user has clicked Confirm button items to confirm are cleared.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemstoconfirm).
     *
     * @default []
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get itemsToConfirm() {
        return this._itemsToConfirm;
    }
    /**
     * Determines whether to allow adding items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canadditem).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    get canAddItem() {
        return this._canAddItem;
    }
    set canAddItem(canAddItem) {
        this._canAddItem = !!canAddItem;
        this._countFooterButtons();
    }
    get _modalController() {
        return (this.interface === 'modal' ? this.$_modalController : this._popoverController);
    }
    _asyncIsItemSelected(item) {
        return of(item).pipe(map(i => {
            return this._isItemSelected(i);
        }));
    }
    initFocus() {
        //
    }
    enableIonItem(isEnabled) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.disabled = !isEnabled;
        // ;
    }
    _setHasSearchText() {
        this._hasSearchText = !IonicSelectableComponent_1._isNullOrWhiteSpace(this._searchText);
        // ;
    }
    _hasOnSearch() {
        return this.isOnSearchEnabled && ((this._isOpened) ? this.onSearch.observers.length > 1 : this.onSearch.observers.length > 0);
    }
    _hasOnSaveItem() {
        return this.canSaveItem && this.onSaveItem.observers.length > 1;
    }
    _hasOnAddItem() {
        return this.canAddItem && this.onAddItem.observers.length > 1;
    }
    _hasOnDeleteItem() {
        return this.canDeleteItem && this.onDeleteItem.observers.length > 1;
    }
    _emitValueChange() {
        this.propagateOnChange(this.value);
        this.onChange.emit({
            component: this,
            value: this.value
        });
    }
    _emitSearch() {
        if (!this.canSearch) {
            return;
        }
        this.onSearch.emit({
            component: this,
            text: this._searchText
        });
    }
    _emitOnSelect(item, isSelected) {
        this.onSelect.emit({
            component: this,
            item,
            isSelected
        });
    }
    _emitOnClear(items) {
        this.onClear.emit({
            component: this,
            items
        });
    }
    _emitOnSearchSuccessOrFail(isSuccess) {
        const eventData = {
            component: this,
            text: this._searchText
        };
        if (isSuccess) {
            this.onSearchSuccess.emit(eventData);
        }
        else {
            this.onSearchFail.emit(eventData);
        }
    }
    _formatItem(item) {
        if (IonicSelectableComponent_1._isNullOrWhiteSpace(item)) {
            return null;
        }
        return this.itemTextField ? item[this.itemTextField] : item.toString();
    }
    _formatValueItem(item) {
        if (this._shouldStoreItemValue) {
            // Get item text from the list as we store it's value only.
            const selectedItem = this.items.find(_item => {
                return _item[this.itemValueField] === item;
            });
            return this._formatItem(selectedItem);
        }
        else {
            return this._formatItem(item);
        }
    }
    _getItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return item[this.itemValueField];
    }
    _getStoredItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return this._shouldStoreItemValue ? item : item[this.itemValueField];
    }
    _onSearchbarClear() {
        // Ionic Searchbar doesn't clear bind with ngModel value.
        // Do it ourselves.
        this._searchText = '';
    }
    _filterItems() {
        this._setHasSearchText();
        if (this._hasOnSearch()) {
            // Delegate filtering to the event.
            this._emitSearch();
        }
        else {
            // Default filtering.
            let groups = [];
            if (!this._searchText || !this._searchText.trim()) {
                groups = this._groups;
            }
            else {
                const filterText = this._searchText
                    .trim()
                    .toLowerCase()
                    .replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
                    .replace(/e/g, '(e|??|??|??|??)')
                    .replace(/a/g, '(a|??|t??|??)')
                    .replace(/i/g, '(i|??|??|??|??)')
                    .replace(/n/g, '(??|n)')
                    .replace(/o/g, '(o|??|??|??|??)')
                    .replace(/u/g, '(u|??|??|??|??)')
                    .replace(/y/g, '(y|??|??)');
                let reg;
                try {
                    reg = new RegExp(filterText);
                }
                catch (e) {
                    return;
                }
                this._groups.forEach(group => {
                    const items = group.items.filter(item => {
                        const itemText = (this.itemTextField ?
                            item[this.itemTextField] : item).toString().toLowerCase();
                        return reg.test(itemText);
                    });
                    if (items.length) {
                        groups.push({
                            value: group.value,
                            text: group.text,
                            items
                        });
                    }
                });
                // No items found.
                if (!groups.length) {
                    groups.push({
                        items: []
                    });
                }
            }
            this._filteredGroups = groups;
            this._hasFilteredItems = !IonicSelectableComponent_1._areGroupsEmpty(groups);
            this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
            // ;
        }
    }
    _isItemDisabled(item) {
        if (!this.disabledItems) {
            return;
        }
        return this.disabledItems.some(_item => {
            return this._getItemValue(_item) === this._getItemValue(item);
        });
    }
    _isItemSelected(item) {
        return this._selectedItems.find(selectedItem => {
            return this._getItemValue(item) === this._getStoredItemValue(selectedItem);
        }) !== undefined;
    }
    _addSelectedItem(item) {
        if (this._shouldStoreItemValue) {
            this._selectedItems = [...this._selectedItems, this._getItemValue(item)];
        }
        else {
            this._selectedItems = [...this._selectedItems, item];
        }
    }
    _deleteSelectedItem(item) {
        this._selectedItems = this._selectedItems.filter((selectedItem, itemIndex) => this._getItemValue(item) !== this._getStoredItemValue(selectedItem));
    }
    _click($event) {
        this.$event = $event;
        if (!this.isEnabled || this.isReadonly) {
            return;
        }
        this._label = this._getLabelText();
        this.open().then(() => {
            this.onOpen.emit({
                component: this
            });
        });
        // ;
    }
    _saveItem(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnSaveItem()) {
            this.onSaveItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.showAddItemTemplate();
        }
        this.ref.markForCheck();
        // ;
    }
    _deleteItemClick(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnDeleteItem()) {
            // Delegate logic to event.
            this.onDeleteItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.deleteItem(this._itemToAdd).then(() => {
                // ;
            });
        }
        this.ref.markForCheck();
        // ;
    }
    _addItemClick() {
        if (this._hasOnAddItem()) {
            this.onAddItem.emit({
                component: this
            });
        }
        else {
            this.showAddItemTemplate();
        }
        // ;
    }
    _positionAddItemTemplate() {
        // Wait for the template to render.
        setTimeout(() => {
            let footer;
            if (this.addItemTemplateHasFooter) {
                footer = this._modalComponent._element.nativeElement
                    .querySelector('.ionic-selectable-add-item-template ion-footer');
            }
            this._addItemTemplateFooterHeight = footer ? `calc(100% - ${footer.offsetHeight}px)` : '100%';
            // ;
            // this._modalComponent?.changeDetectorRef?.markForCheck();
        }, 100);
    }
    _close() {
        this.close().then(() => {
            this.onClose.emit({
                component: this
            });
        });
        if (!this._hasOnSearch()) {
            this._searchText = '';
            this._setHasSearchText();
        }
        this.ref.markForCheck();
        // ;
    }
    _clear() {
        const selectedItems = this._selectedItems;
        this.clear();
        this._emitValueChange();
        this._emitOnClear(selectedItems);
        this.close().then(() => {
            this.onClose.emit({
                component: this
            });
        });
        this.ref.markForCheck();
    }
    _getMoreItems() {
        this.onInfiniteScroll.emit({
            component: this,
            text: this._searchText
        });
    }
    _setItemsToConfirm(items) {
        // Return a copy of original array, so it couldn't be changed from outside.
        this._itemsToConfirm = [].concat(items);
        // ;
        this.ref.markForCheck();
    }
    _doSelect(selectedItem) {
        this.value = selectedItem;
        this._emitValueChange();
    }
    _select(item) {
        const isItemSelected = this._isItemSelected(item);
        if (this.isMultiple) {
            if (isItemSelected) {
                this._deleteSelectedItem(item);
            }
            else {
                this._addSelectedItem(item);
            }
            this._setItemsToConfirm(this._selectedItems);
            // Emit onSelect event after setting items to confirm so they could be used
            // inside the event.
            this._emitOnSelect(item, !isItemSelected);
        }
        else {
            if (this.hasConfirmButton /*|| this.footerTemplate*/) {
                // Don't close Modal and keep track on items to confirm.
                // When footer template is used it's up to developer to close Modal.
                this._selectedItems = [];
                if (isItemSelected) {
                    this._deleteSelectedItem(item);
                }
                else {
                    this._addSelectedItem(item);
                }
                this._setItemsToConfirm(this._selectedItems);
                // Emit onSelect event after setting items to confirm so they could be used
                // inside the event.
                this._emitOnSelect(item, !isItemSelected);
            }
            else {
                if (!isItemSelected) {
                    this._selectedItems = [];
                    this._addSelectedItem(item);
                    // Emit onSelect before onChange.
                    this._emitOnSelect(item, true);
                    if (this._shouldStoreItemValue) {
                        this._doSelect(this._getItemValue(item));
                    }
                    else {
                        this._doSelect(item);
                    }
                }
                this._close();
            }
        }
        // ;
    }
    _confirm() {
        this.confirm();
        this._close();
    }
    _getLabelText() {
        return this._ionLabelElement ? this._ionLabelElement.textContent : null;
    }
    _countFooterButtons() {
        let footerButtonsCount = 0;
        if (this.canClear) {
            footerButtonsCount++;
        }
        if (this.isMultiple || this._hasConfirmButton) {
            footerButtonsCount++;
        }
        if (this.canAddItem) {
            footerButtonsCount++;
        }
        this._footerButtonsCount = footerButtonsCount;
        // ;
        this.ref.markForCheck();
    }
    _setItems(items) {
        // It's important to have an empty starting group with empty items (groups[0].items),
        // because we bind to it when using VirtualScroll.
        // See https://github.com/eakoriakin/ionic-selectable/issues/70.
        let groups = [{
                items: items || []
            }];
        if (items && items.length) {
            if (this._hasGroups) {
                groups = [];
                items.forEach(item => {
                    const groupValue = IonicSelectableComponent_1._getPropertyValue(item, this.groupValueField);
                    const group = groups.find(_group => _group.value === groupValue);
                    if (group) {
                        group.items.push(item);
                    }
                    else {
                        groups.push({
                            value: groupValue,
                            text: IonicSelectableComponent_1._getPropertyValue(item, this.groupTextField),
                            items: [item]
                        });
                    }
                });
            }
        }
        this._groups = groups;
        this._filteredGroups = this._groups;
        this._hasFilteredItems = !IonicSelectableComponent_1._areGroupsEmpty(this._filteredGroups);
        // ;
        this.ref.markForCheck();
    }
    _setIonItemHasFocus(hasFocus) {
        if (!this.ionItem) {
            return;
        }
        // Apply focus CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-focus', hasFocus);
    }
    _setIonItemHasValue() {
        if (!this.ionItem) {
            return;
        }
        // Apply value CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-value', this.hasValue());
    }
    _setHasPlaceholder() {
        this._hasPlaceholder = !!(!this.hasValue() &&
            (!IonicSelectableComponent_1._isNullOrWhiteSpace(this.placeholder) || this.placeholderTemplate));
        // ;
    }
    _setIonItemCssClass(cssClass, shouldAdd) {
        if (!this._ionItemElement) {
            return;
        }
        // Change to Renderer2
        if (shouldAdd) {
            this._renderer.addClass(this._ionItemElement, cssClass);
        }
        else {
            this._renderer.removeClass(this._ionItemElement, cssClass);
        }
    }
    _toggleAddItemTemplate(isVisible) {
        // It should be possible to show/hide the template regardless
        // canAddItem or canSaveItem parameters, so we could implement some
        // custom behavior. E.g. adding item when search fails using onSearchFail event.
        if (!this.addItemTemplate) {
            return;
        }
        // To make SaveItemTemplate visible we just position it over list using CSS.
        // We don't hide list with *ngIf or [hidden] to prevent its scroll position.
        this._isAddItemTemplateVisible = isVisible;
        this._isFooterVisible = !isVisible;
        // ;
        this.ref.markForCheck();
    }
    _navGoForward(page, selectComponent) {
        this._nav.push(page, {
            selectComponent
        });
    }
    _navGoRoot() {
        return this._nav.popToRoot();
    }
    /* ControlValueAccessor */
    writeValue(value) {
        this.value = value;
        // ;
    }
    registerOnChange(method) {
        this.propagateOnChange = method;
    }
    registerOnTouched(method) {
        this.propagateOnTouched = method;
    }
    setDisabledState(isDisabled) {
        this.isEnabled = !isDisabled;
        // ;
        this.ref.markForCheck();
    }
    /* .ControlValueAccessor */
    ngOnInit() {
        this._isIos = this._platform.is('ios');
        this._isMD = !this._isIos;
        this._hasObjects = !IonicSelectableComponent_1._isNullOrWhiteSpace(this.itemValueField);
        // Grouping is supported for objects only.
        // Ionic VirtualScroll has it's own implementation of grouping.
        this._hasGroups = Boolean(this._hasObjects && this.groupValueField && !this.hasVirtualScroll);
        if (this.ionItem) {
            this._ionItemElement = this._element.nativeElement.closest('ion-item');
            this._setIonItemCssClass('item-interactive', true);
            this._setIonItemCssClass('item-ionic-selectable', true);
            if (this._ionItemElement) {
                this._ionLabelElement = this._ionItemElement.querySelector('ion-label');
                if (this._ionLabelElement) {
                    this._hasIonLabel = true;
                    this._ionLabelPosition = this._ionLabelElement.getAttribute('position') || 'default';
                }
            }
        }
        this.enableIonItem(this.isEnabled);
        // ;
        this.ref.markForCheck();
    }
    ngDoCheck() {
        const itemsChanges = this._itemsDiffer.diff(this.items);
        if (itemsChanges) {
            this._setItems(this.items);
            this.value = this.value;
            this.onItemsChange.emit({
                component: this
            });
        }
    }
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * @param item Item to add.
     * @returns Promise that resolves when item has been added.
     * @memberof IonicSelectableComponent
     */
    addItem(item) {
        const self = this;
        // Adding item triggers onItemsChange.
        // Return a promise that resolves when onItemsChange finishes.
        // We need a promise or user could do something after item has been added,
        // e.g. use search() method to find the added item.
        this.items.unshift(item);
        // Close any running subscription.
        if (this._addItemObservable) {
            this._addItemObservable.unsubscribe();
        }
        this.ref.markForCheck();
        return new Promise((resolve, reject) => {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._addItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._addItemObservable.unsubscribe();
                resolve();
            }, _ => {
                self._addItemObservable.unsubscribe();
                reject();
            });
        });
        // ;
    }
    /**
     * Deletes item.
     * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
     *
     * @param item Item to delete.
     * @returns Promise that resolves when item has been deleted.
     * @memberof IonicSelectableComponent
     */
    deleteItem(item) {
        const self = this;
        let hasValueChanged = false;
        // Remove deleted item from selected items.
        if (this._selectedItems) {
            this._selectedItems = this._selectedItems.filter(_item => {
                return this._getItemValue(item) !== this._getStoredItemValue(_item);
            });
        }
        // Remove deleted item from value.
        if (this.value) {
            if (this.isMultiple) {
                const values = this.value.filter(value => {
                    return value.id !== item.id;
                });
                if (values.length !== this.value.length) {
                    this.value = values;
                    hasValueChanged = true;
                }
            }
            else {
                if (item === this.value) {
                    this.value = null;
                    hasValueChanged = true;
                }
            }
        }
        if (hasValueChanged) {
            this._emitValueChange();
        }
        // Remove deleted item from list.
        const items = this.items.filter((_item) => {
            return _item.id !== item.id;
        });
        // Refresh items on parent component.
        this.itemsChange.emit(items);
        // Refresh list.
        this._setItems(items);
        this.onItemsChange.emit({
            component: this
        });
        // Close any running subscription.
        if (this._deleteItemObservable) {
            const { unsubscribe } = this._deleteItemObservable;
            unsubscribe();
        }
        this.ref.markForCheck();
        return new Promise((resolve, reject) => {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._deleteItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._deleteItemObservable.unsubscribe();
                resolve();
            }, () => {
                self._deleteItemObservable.unsubscribe();
                reject();
            });
        });
    }
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * @returns A boolean determining whether any item has been selected.
     * @memberof IonicSelectableComponent
     */
    hasValue() {
        if (this.isMultiple) {
            return this._valueItems.length !== 0;
        }
        else {
            return this._valueItems.length !== 0 && !IonicSelectableComponent_1._isNullOrWhiteSpace(this._valueItems[0]);
        }
    }
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * @returns Promise that resolves when Modal has been opened.
     * @memberof IonicSelectableComponent
     */
    open() {
        const self = this;
        return new Promise((resolve, reject) => {
            if (!self._isEnabled || self._isOpened) {
                reject('IonicSelectable is disabled or already opened.');
                return;
            }
            self._filterItems();
            self._isOpened = true;
            const modalOptions = Object.assign({ presentingElement: this.routerOutlet.nativeEl, component: (self.interface === 'popover' ? IonicSelectableModalComponent : ModalBaseComponent), componentProps: {
                    selectComponent: self,
                    rootPage: IonicSelectableModalComponent,
                }, backdropDismiss: self._shouldBackdropClose }, (self.interface === 'popover' ? { event: self.$event, showBackdrop: false } : {}));
            if (self.modalCssClass) {
                modalOptions.cssClass = self.modalCssClass;
            }
            if (self.modalEnterAnimation) {
                modalOptions.enterAnimation = self.modalEnterAnimation;
            }
            if (self.modalLeaveAnimation) {
                modalOptions.leaveAnimation = self.modalLeaveAnimation;
            }
            // ;
            this.ref.markForCheck();
            self._modalController.create(modalOptions).then(modal => {
                self._modal = modal;
                modal.present().then(() => {
                    // Set focus after Modal has opened to avoid flickering of focus highlighting
                    // before Modal opening.
                    self._setIonItemHasFocus(true);
                    resolve();
                });
                modal.onWillDismiss().then(() => {
                    self.hideAddItemTemplate();
                    self._setIonItemHasFocus(false);
                });
                modal.onDidDismiss().then(event => {
                    self._isOpened = false;
                    self._itemsToConfirm = [];
                    // Closed by clicking on backdrop outside modal.
                    if (event.role === 'backdrop') {
                        self.onClose.emit({
                            component: self
                        });
                    }
                    // ;
                    this.ref.markForCheck();
                });
                // ;
                this.ref.markForCheck();
            });
        });
    }
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * @returns Promise that resolves when Modal has been closed.
     * @memberof IonicSelectableComponent
     */
    close() {
        const self = this;
        return new Promise((resolve, reject) => {
            if (!self._isEnabled || !self._isOpened) {
                reject('IonicSelectable is disabled or already closed.');
                return;
            }
            self.propagateOnTouched();
            self._isOpened = false;
            self._itemToAdd = null;
            // ;
            self._modal.dismiss().then(() => {
                self._setIonItemHasFocus(false);
                self.hideAddItemTemplate();
                this.ref.markForCheck();
                resolve();
            });
            this.ref.markForCheck();
        });
    }
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * @memberof IonicSelectableComponent
     */
    clear() {
        this.value = this.isMultiple ? [] : null;
        this._itemsToConfirm = [];
        this.propagateOnChange(this.value);
        // ;
        this.ref.markForCheck();
    }
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * @memberof IonicSelectableComponent
     */
    confirm() {
        if (this.isMultiple) {
            this._doSelect(this._selectedItems);
        }
        else if (this.hasConfirmButton /*|| this.footerTemplate*/) {
            this._doSelect(this._selectedItems[0] || null);
        }
    }
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * @param isSelect Determines whether to select or deselect items.
     * @param [items] Items to toggle. If items are not set all items will be toggled.
     * @memberof IonicSelectableComponent
     */
    toggleItems(isSelect, items) {
        if (isSelect) {
            const hasItems = items && items.length;
            let itemsToToggle = this._groups.reduce((allItems, group) => {
                return allItems.concat(group.items);
            }, []);
            // Don't allow to select all items in single mode.
            if (!this.isMultiple && !hasItems) {
                itemsToToggle = [];
            }
            // Toggle specific items.
            if (hasItems) {
                itemsToToggle = itemsToToggle.filter(itemToToggle => {
                    return items.find(item => {
                        return this._getItemValue(itemToToggle) === this._getItemValue(item);
                    }) !== undefined;
                });
                // Take the first item for single mode.
                if (!this.isMultiple) {
                    itemsToToggle.splice(0, 1);
                }
            }
            itemsToToggle.forEach(item => {
                this._addSelectedItem(item);
            });
        }
        else {
            this._selectedItems = [];
        }
        this._setItemsToConfirm(this._selectedItems);
        // ;
        this.ref.markForCheck();
    }
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    scrollToTop() {
        const self = this;
        return new Promise((resolve, reject) => {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToTop().then(() => {
                resolve();
            });
        });
    }
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    scrollToBottom() {
        const self = this;
        return new Promise((resolve, reject) => {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToBottom().then(() => {
                resolve();
            });
        });
    }
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * @memberof IonicSelectableComponent
     */
    startSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.showLoading();
    }
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * @memberof IonicSelectableComponent
     */
    endSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.hideLoading();
        // When inside Ionic Modal and onSearch event is used,
        // ngDoCheck() doesn't work as _itemsDiffer fails to detect changes.
        // See https://github.com/eakoriakin/ionic-selectable/issues/44.
        // Refresh items manually.
        this._setItems(this.items);
        this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
    }
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    enableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = false;
        // ;
        this.ref.markForCheck();
    }
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    disableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = true;
        // ;
        this.ref.markForCheck();
    }
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    endInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.complete().then();
        this._setItems(this.items);
    }
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * @param text Text to search items by.
     * @memberof IonicSelectableComponent
     */
    search(text) {
        if (!this._isEnabled || !this._isOpened || !this.canSearch) {
            return;
        }
        this._searchText = text;
        this._setHasSearchText();
        this._filterItems();
        // ;
        this.ref.markForCheck();
    }
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * @memberof IonicSelectableComponent
     */
    showLoading() {
        var _a;
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = true;
        (_a = this._modalComponent) === null || _a === void 0 ? void 0 : _a.changeDetectorRef.markForCheck();
    }
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * @memberof IonicSelectableComponent
     */
    hideLoading() {
        var _a;
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = false;
        (_a = this._modalComponent) === null || _a === void 0 ? void 0 : _a.changeDetectorRef.markForCheck();
        // ;
    }
    /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    showAddItemTemplate() {
        this._toggleAddItemTemplate(true);
        // Position the template only when it shous up.
        this._positionAddItemTemplate();
    }
    /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    hideAddItemTemplate() {
        // Clean item to add as it's no longer needed once Add Item Modal has been closed.
        this._itemToAdd = null;
        this._toggleAddItemTemplate(false);
        // ;
    }
    as(item) {
        return item;
    }
    static _isNullOrWhiteSpace(value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    }
    static _areGroupsEmpty(groups) {
        return groups.length === 0 || groups.every(group => {
            return !group.items || group.items.length === 0;
        });
    }
    static _getPropertyValue(object, property) {
        if (!property) {
            return null;
        }
        return property.split('.').reduce((_object, _property) => {
            return _object ? _object[_property] : null;
        }, object);
    }
};
__decorate([
    HostBinding('class.ionic-selectable-is-multiple')
], IonicSelectableComponent.prototype, "_isMultipleCssClass", null);
__decorate([
    HostBinding('class.ionic-selectable-has-value')
], IonicSelectableComponent.prototype, "_hasValueCssClass", null);
__decorate([
    HostBinding('class.ionic-selectable-has-placeholder')
], IonicSelectableComponent.prototype, "_hasPlaceholderCssClass", null);
__decorate([
    HostBinding('class.ionic-selectable-has-label')
], IonicSelectableComponent.prototype, "_hasIonLabelCssClass", null);
__decorate([
    HostBinding('class.ionic-selectable-label-default')
], IonicSelectableComponent.prototype, "_hasDefaultIonLabelCssClass", null);
__decorate([
    HostBinding('class.ionic-selectable-label-fixed')
], IonicSelectableComponent.prototype, "_hasFixedIonLabelCssClass", null);
__decorate([
    HostBinding('class.ionic-selectable-label-stacked')
], IonicSelectableComponent.prototype, "_hasStackedIonLabelCssClass", null);
__decorate([
    HostBinding('class.ionic-selectable-label-floating')
], IonicSelectableComponent.prototype, "_hasFloatingIonLabelCssClass", null);
__decorate([
    HostBinding('class.ionic-selectable-is-enabled'),
    Input('isEnabled')
], IonicSelectableComponent.prototype, "isEnabled", null);
__decorate([
    Input('shouldBackdropClose')
], IonicSelectableComponent.prototype, "shouldBackdropClose", null);
__decorate([
    Input('hasConfirmButton')
], IonicSelectableComponent.prototype, "hasConfirmButton", null);
__decorate([
    Input('isOnSearchEnabled')
], IonicSelectableComponent.prototype, "isOnSearchEnabled", null);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "interface", void 0);
__decorate([
    HostBinding('class.ionic-selectable-can-clear'),
    Input('canClear')
], IonicSelectableComponent.prototype, "canClear", null);
__decorate([
    Input('isMultiple')
], IonicSelectableComponent.prototype, "isMultiple", null);
__decorate([
    Input('canAddItem')
], IonicSelectableComponent.prototype, "canAddItem", null);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "modalColor", void 0);
__decorate([
    HostBinding('class.ionic-selectable')
], IonicSelectableComponent.prototype, "_cssClass", void 0);
__decorate([
    HostBinding('class.ionic-selectable-ios')
], IonicSelectableComponent.prototype, "_isIos", void 0);
__decorate([
    HostBinding('class.ionic-selectable-md')
], IonicSelectableComponent.prototype, "_isMD", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "addItemTemplateHasFooter", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "items", void 0);
__decorate([
    Output()
], IonicSelectableComponent.prototype, "itemsChange", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "modalCssClass", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "modalEnterAnimation", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "modalLeaveAnimation", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "isConfirmButtonEnabled", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "itemValueField", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "itemTextField", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "groupValueField", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "groupTextField", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "canSearch", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "hasInfiniteScroll", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "hasVirtualScroll", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "virtualScrollApproxItemHeight", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "virtualScrollEnableUnequalChildrenSizes", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "virtualScrollBufferAmount", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "searchPlaceholder", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "searchFailText", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "clearButtonText", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "addButtonText", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "confirmButtonText", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "closeButtonText", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "shouldFocusSearchbar", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "headerColor", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "groupColor", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "closeButtonSlot", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "itemIconSlot", void 0);
__decorate([
    Output()
], IonicSelectableComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], IonicSelectableComponent.prototype, "onSearch", void 0);
__decorate([
    Output()
], IonicSelectableComponent.prototype, "onSearchFail", void 0);
__decorate([
    Output()
], IonicSelectableComponent.prototype, "onSearchSuccess", void 0);
__decorate([
    Output()
], IonicSelectableComponent.prototype, "onInfiniteScroll", void 0);
__decorate([
    Output()
], IonicSelectableComponent.prototype, "onOpen", void 0);
__decorate([
    Output()
], IonicSelectableComponent.prototype, "onClose", void 0);
__decorate([
    Output()
], IonicSelectableComponent.prototype, "onSelect", void 0);
__decorate([
    Output()
], IonicSelectableComponent.prototype, "onClear", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "searchDebounce", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "disabledItems", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "shouldStoreItemValue", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "canSaveItem", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "canDeleteItem", void 0);
__decorate([
    Output()
], IonicSelectableComponent.prototype, "onSaveItem", void 0);
__decorate([
    Output()
], IonicSelectableComponent.prototype, "onDeleteItem", void 0);
__decorate([
    Output()
], IonicSelectableComponent.prototype, "onAddItem", void 0);
__decorate([
    ContentChild(IonicSelectableValueTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "valueTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableItemTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "itemTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableItemEndTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "itemEndTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableTitleTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "titleTemplate", void 0);
__decorate([
    ContentChild(IonicSelectablePlaceholderTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "placeholderTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableMessageTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "messageTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableGroupTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "groupTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableGroupEndTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "groupEndTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableCloseButtonTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "closeButtonTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableSearchFailTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "searchFailTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableAddItemTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "addItemTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableFooterTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "footerTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableHeaderTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "headerTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableSearchbarTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "searchbarTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableItemIconTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "itemIconTemplate", void 0);
__decorate([
    ContentChild(IonicSelectableIconTemplateDirective, { read: TemplateRef })
], IonicSelectableComponent.prototype, "iconTemplate", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "isReadonly", void 0);
__decorate([
    Input()
], IonicSelectableComponent.prototype, "virtualScrollHeaderFn", void 0);
IonicSelectableComponent = IonicSelectableComponent_1 = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'ionic-selectable',
        templateUrl: './ionic-selectable.component.html',
        styleUrls: ['./ionic-selectable.component.scss'],
        encapsulation: ViewEncapsulation.None,
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => IonicSelectableComponent_1),
                multi: true
            }
        ],
        changeDetection: ChangeDetectionStrategy.OnPush,
    }),
    __param(2, Optional())
], IonicSelectableComponent);
export { IonicSelectableComponent };
//# sourceMappingURL=ionic-selectable.component.js.map