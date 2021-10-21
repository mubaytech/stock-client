import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {IonRouterOutlet, ModalController} from '@ionic/angular';
import {CustomIonInputComponent} from '../../../shared/custom-ion-input/custom-ion-input.component';
import {CategoriePickerComponent} from '../categorie-picker/categorie-picker.component';
import {Categorie, UnitesDeMesure} from '../../../../generated/types.graphql-gen';
import {DialogPickerBase} from '../../../shared/dialog-picker-base';
import {ITreeOptions} from '@circlon/angular-tree-component';
import {ProvideThisValueAccessor} from '../../../shared/base-control-value-accessor';
import {TreeNode} from '@circlon/angular-tree-component/lib/defs/api';


@Component({
    selector: 'app-categorie-input',
    templateUrl: './categorie-input.component.html',
    styleUrls: ['./categorie-input.component.scss'],
    providers: [
        ProvideThisValueAccessor(CategorieInputComponent)
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategorieInputComponent extends DialogPickerBase<Categorie[], CategoriePickerComponent> implements OnInit, ControlValueAccessor, AfterViewInit {

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        _modalController: ModalController,
        routerOutlet: IonRouterOutlet,
    ) {
        super(changeDetectorRef, _modalController, routerOutlet, CategoriePickerComponent);
    }

    @ViewChild(CustomIonInputComponent) customIonInputComponent: CustomIonInputComponent<Categorie[]>;

    public _modal: HTMLIonModalElement;

    _selected = [];

    set selected(node: TreeNode[]) {
        this._selected = node;
        this.value = node.map(value => value.data as Categorie);
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
    getChildren: ITreeOptions['getChildren'] = () => new Promise((resolve, reject) => {
        //
    })

    ngAfterViewInit(): void {
        /*this.ca.fetch().subscribe(value => {
            this.nodes = value.data.uniteDeMesures.data as UnitesDeMesure[];
            this._component?.changeDetectorRef.markForCheck();
        });*/
    }

    ngOnInit(): void {
        //
    }


}
