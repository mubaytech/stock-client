import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import {DialogPickerBase} from '../../../shared/dialog-picker-base';
import {ControlValueAccessor} from '@angular/forms';
import {IonRouterOutlet, ModalController} from '@ionic/angular';
import {CustomIonInputComponent} from '../../../shared/custom-ion-input/custom-ion-input.component';
import {ITreeOptions} from '@circlon/angular-tree-component';
import {UniteDeMesurePickerComponent} from '../unite-de-mesure-picker/unite-de-mesure-picker.component';
import {UnitesDeMesure, UnitesDeMesuresGQL} from '../../../../generated/types.graphql-gen';
import {ProvideThisValueAccessor} from '../../../shared/base-control-value-accessor';
import {TreeNode} from '@circlon/angular-tree-component/lib/defs/api';

@Component({
    selector: 'app-unite-de-mesure-input',
    templateUrl: './unite-de-mesure-input.component.html',
    styleUrls: ['./unite-de-mesure-input.component.scss'],
    providers: [
        ProvideThisValueAccessor(UniteDeMesureInputComponent)
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniteDeMesureInputComponent extends DialogPickerBase<UnitesDeMesure[], UniteDeMesurePickerComponent> implements OnInit, ControlValueAccessor, AfterViewInit {
    private loading: boolean;


    constructor(
        changeDetectorRef: ChangeDetectorRef,
        _modalController: ModalController,
        routerOutlet: IonRouterOutlet,
    ) {
        super(changeDetectorRef, _modalController, routerOutlet, UniteDeMesurePickerComponent);
    }

    @ViewChild(CustomIonInputComponent) customIonInputComponent: CustomIonInputComponent<UnitesDeMesure[]>;

    public _modal: HTMLIonModalElement;

    _selected = [];

    set selected(node: TreeNode[]) {
        this._selected = node;
        this.value = node.map(value => value.data as UnitesDeMesure);
    }

    get selected() {
        return this._selected;
    }

    @Input()
    title = 'title';

    @Input()
    nodes: UnitesDeMesure[];

    @Input()
    useVirtualScroll: ITreeOptions['useVirtualScroll'] = true;

    @Input()
    useCheckbox: ITreeOptions['useCheckbox'] = true;

    @Input()
    scrollOnActivate: ITreeOptions['scrollOnActivate'] = true;

    @Input()
    displayField: ITreeOptions['displayField'] = 'nom';

    @Input()
    state: any;

    @Input()
    getChildren: ITreeOptions['getChildren'];

    ngAfterViewInit(): void {
        //

    }

    ngOnInit(): void {
        //
    }



}
