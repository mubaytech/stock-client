import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';
import {IonContent, NavParams} from '@ionic/angular';
import {CoreService} from '../../../core/core.service';
import {CategorieInputComponent} from '../categorie-input/categorie-input.component';
import {ITreeOptions, TreeComponent} from '@circlon/angular-tree-component';
import {AppOnDestroy} from '../../../core/types';
import {timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {NodePipe} from '../unite-de-mesure-picker/node-pipe/node.pipe';
import {UnitesDeMesure} from '../../../../generated/types.graphql-gen';

@Component({
    selector: 'app-categorie-picker',
    templateUrl: './categorie-picker.component.html',
    styleUrls: ['./categorie-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriePickerComponent extends AppOnDestroy implements OnInit, AfterViewInit {
    public pickerInputComponent: CategorieInputComponent;


    constructor(
        private navParams: NavParams,
        public _element: ElementRef,
        public changeDetectorRef: ChangeDetectorRef,
        public coreService: CoreService,
        public unitesDeMesureNodePipe: NodePipe<UnitesDeMesure>
    ) {
        super();
        this.pickerInputComponent = this.navParams.get('selectComponent');
        this.pickerInputComponent._component = this;
    }

    @ViewChild('tree')
    treeComponent: TreeComponent;

    @ViewChild(IonContent)
    public ionContent: IonContent;

    treeOptions: ITreeOptions;

    ngOnInit() {
        //
    }

    ngAfterViewInit() {
        /*this._subscriptions.add(this.pickerInputComponent.onChange().subscribe(() => {
            this._changeDetectorRef.markForCheck();
        }));*/

    }

    ionViewWillEnter() {
        this.ionContent.getScrollElement().then(element => {
            this.treeOptions = {
                scrollOnActivate: this.pickerInputComponent.scrollOnActivate,
                useVirtualScroll: this.pickerInputComponent.useVirtualScroll,
                useCheckbox: this.pickerInputComponent.useCheckbox,
                getChildren: this.pickerInputComponent.getChildren,
                displayField: this.pickerInputComponent.displayField,
                scrollContainer: element,
            };
            this.changeDetectorRef.markForCheck();
        });
    }

    get isIos() {
        return this.coreService.isIos;
    }

    get treeModel() {
        return this.treeComponent.treeModel;
    }


    onInit(tree: TreeComponent) {
        //
    }

    setSelected() {
        if (this.treeModel.selectedLeafNodes !== this.pickerInputComponent.selected) {
            // console.log(this.treeModel.selectedLeafNodes);
            this.pickerInputComponent.selected = this.treeModel.selectedLeafNodes;
        }
    }
}
