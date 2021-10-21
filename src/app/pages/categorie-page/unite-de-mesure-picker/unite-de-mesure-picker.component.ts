import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';
import {AppOnDestroy} from '../../../core/types';
import {IonContent, NavParams} from '@ionic/angular';
import {CoreService} from '../../../core/core.service';
import {ITreeOptions, TreeComponent} from '@circlon/angular-tree-component';
import {UniteDeMesureInputComponent} from '../unite-de-mesure-input/unite-de-mesure-input.component';
import {AppTreeNode, NodePipe} from './node-pipe/node.pipe';
import {
    QueryUniteDeMesuresWhereColumn,
    UnitesDeMesure, UnitesDeMesureFieldsFragmentDoc,
    UnitesDeMesureFindGQL, UnitesDeMesureRecursivePartsFragmentDoc,
    UnitesDeMesuresGQL, UnitesDeMesuresQuery, UnitesDeMesuresQueryVariables
} from '../../../../generated/types.graphql-gen';
import {of, Subscription} from 'rxjs';
import {catchError, map, switchMap, takeUntil} from 'rxjs/operators';
import {Apollo, QueryRef} from 'apollo-angular';
import {gql} from '@apollo/client/core';

@Component({
    selector: 'app-unite-de-mesure-picker',
    templateUrl: './unite-de-mesure-picker.component.html',
    styleUrls: ['./unite-de-mesure-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [NodePipe]
})
export class UniteDeMesurePickerComponent extends AppOnDestroy implements OnInit, AfterViewInit {
    public pickerInputComponent: UniteDeMesureInputComponent;
    private unitesDeMesuresGQLSubscription: Subscription;
    public loadingNodes = new Map();
    private unitesDeMesuresGQLQueryRef: QueryRef<UnitesDeMesuresQuery, UnitesDeMesuresQueryVariables>;

    constructor(
        private navParams: NavParams,
        private _element: ElementRef,
        public changeDetectorRef: ChangeDetectorRef,
        private coreService: CoreService,
        public nodePipe: NodePipe<UnitesDeMesure>,
        private unitesDeMesuresGQL: UnitesDeMesuresGQL,
        private unitesDeMesureFindGQL: UnitesDeMesureFindGQL,
        private apollo: Apollo
    ) {
        super();
        this.pickerInputComponent = this.navParams.get('selectComponent');
        this.pickerInputComponent._component = this;
    }

    treeOptions: ITreeOptions;
    @ViewChild(IonContent) public ionContent: IonContent;

    @ViewChild('tree') treeComponent: TreeComponent;

    ngOnInit() {
        //

    }

    ionViewWillEnter() {
        this.ionContent.getScrollElement().then(element => {
            this.treeOptions = {
                scrollOnActivate: this.pickerInputComponent.scrollOnActivate,
                useVirtualScroll: this.pickerInputComponent.useVirtualScroll,
                useCheckbox: this.pickerInputComponent.useCheckbox,
                getChildren: this.pickerInputComponent.getChildren || this.getChildren.bind(this),
                displayField: this.pickerInputComponent.displayField,
                scrollContainer: element,
            };
            this.changeDetectorRef.markForCheck();
        });
    }

    ngAfterViewInit() {
        if (!this.pickerInputComponent.nodes) {
            this.getAll();
        }
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

    getAll() {
        this.unitesDeMesuresGQLQueryRef = this.unitesDeMesuresGQL.watch({
            root: true
        });
        this.unitesDeMesuresGQLSubscription = this.unitesDeMesuresGQLQueryRef.valueChanges/*
            .pipe(takeUntil(this.onDestroy$))*/.subscribe(value => {
                console.log(value.data.uniteDeMesures);
                this.pickerInputComponent.nodes = value.data.uniteDeMesures as UnitesDeMesure[];
                this.changeDetectorRef.markForCheck();
            });
    }

    getChildren(node: AppTreeNode<UnitesDeMesure>) {
        this.loadingNodes.set(node.data.id, true);
        this.changeDetectorRef.markForCheck();
        return this.unitesDeMesureFindGQL.fetch(
            {
                id: node.data.id,
            },
            {
                // fetchPolicy: 'no-cache',
            }
        ).pipe(
            takeUntil(this.onDestroy$),
            map(data => data.data.uniteDeMesure),
            switchMap(data => {
                return of(data);
            }),
            catchError(_ => of(null)),
            map(data => {
                // this.unitesDeMesuresGQLQueryRef.resetLastResults();
                // this.unitesDeMesuresGQLSubscription = this.unitesDeMesuresGQL.watch({
                //     root: true
                // }).valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
                //     console.log(value.data.uniteDeMesures.data);
                // });
                if (data) {
                    // this.apollo.client.writeFragment({
                    //     id: 'UnitesDeMesure:' + data.id,
                    //     fragment: gql`${UnitesDeMesureFieldsFragmentDoc}
                    //     ${UnitesDeMesureRecursivePartsFragmentDoc}
                    //     `,
                    //     fragmentName: 'UnitesDeMesureRecursiveParts',
                    //     data: {
                    //         children: data.children,
                    //     },
                    // });
                }

                this.loadingNodes.set(node.data.id, false);
                this.changeDetectorRef.markForCheck();
                return null;
            })
        ).toPromise();
    }
}
