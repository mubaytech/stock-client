import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {BehaviorSubject, combineLatest, from, merge, of, Subject} from "rxjs";
import {StorageService} from "./storage.service";
import {distinctUntilChanged, filter, map, switchMap, tap} from "rxjs/operators";
import {AuthGuardsService} from './auth/auth-guards.service';
import {
  MeGQL,
  QuerySettingsWhereColumn,
  Setting,
  SettingsAllGQL,
  SqlOperator, UserUpdateGQL
} from "../../generated/types.graphql-gen";
import {TimeService} from "./time.service";


@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public loading$: Subject<boolean> = new BehaviorSubject(true);
  public loadingForUser$: Subject<boolean> = new BehaviorSubject(true);
  public $globalSettings = new BehaviorSubject<Setting[]>(null);
  public $settings = new BehaviorSubject<Setting[]>(null);
  public savedSettings$ = new BehaviorSubject<Setting[]>(null);
  public $currentSettings = new BehaviorSubject<Setting[]>([]);
  public currentSettings = this.$currentSettings.asObservable();
  public typeComparatorFn = (x: Setting, y: Setting) => {
    switch (y?.value.type) {
      case 'boolean':
        return x?.value?.value === y?.value?.value;
      case 'string':
        return x?.value?.value === y?.value?.value;
      default:
        return x?.value?.value?.id === y?.value?.value?.id
    }
  };
  public valueComparatorFn = <T extends any>(x: any, y: any) => {
    let ret = false;
    switch ((typeof y) as any) {
      case 'boolean':
        ret = (x === y);
        break;
      case 'string':
        ret = (x === y);
        break;
      default:
        ret = (x?.id === y?.id);
    }
    return ret;
  };

  constructor(
    private apollo: Apollo,
    public storage: StorageService,
    private authGuard: AuthGuardsService,
    public settingsAllGQL: SettingsAllGQL,
    public userUpdateGQL: UserUpdateGQL,
    public meGQL: MeGQL,
    public timeService: TimeService
  ) {
    this.storage.ready
      .subscribe(() => {
        this.storage.getObject<Setting[]>('globalSettings').then((globalSettings) => {
          this.$globalSettings.next(globalSettings || []);
          return this.storage.getObject('userSettings');
        }).then(userSettings => {
          this.$settings.next(userSettings || [])
          return this.storage.getObject('savedSettings').then();
        }).then(savedSettings => {
          this.savedSettings$.next(savedSettings || []);
          this.fetch();
        })
      });
    combineLatest(
      [
        this.savedSettings$.asObservable().pipe(distinctUntilChanged(), filter(v => !!v)),
        this.$settings.asObservable().pipe(distinctUntilChanged(), filter(v => !!v))
      ]
    ).pipe(
      map(value => {
        // console.log(value);
        const userSetting = (value[0] || []).map(value1 => {
          return {
            ...value1,
            ...(value1.pivot ? {value: value1.pivot.value} : {})
          } as Setting
        });
        const settings = value[1].filter(value1 => !(userSetting.find(value2 => value2.id === value1.id)))
        return [
          ...userSetting,
          ...settings
        ]
      }),
      map(value => value.sort((x, y) => {
        if (x.slug < y.slug) {
          return -1;
        }
        if (x.slug > y.slug) {
          return 1;
        }
        return 0;
      })),
    ).subscribe(value => {
      this.$currentSettings.next(value);
    });


  }

  fetch() {
    this.authGuard.authService.authenticated.pipe(
      filter(v => !!v),
      switchMap(() => this.settingsAllGQL.watch(
        {
          where: {
            column: QuerySettingsWhereColumn.Type,
            operator: SqlOperator.Eq,
            value: "global"
          }
        }
        , {
          fetchPolicy: "cache-and-network"
        }).valueChanges)
    ).subscribe(({data, loading}) => {
      // console.log(data);
      this.loading$.next(loading);
      if (data) {
        this.$globalSettings.next([...(data.settings.data || [])]);
        this.storage.setObject('globalSettings', [...(data.settings.data || [])]).then();
      }
    });
    this.authGuard.authService.authenticated.pipe(
      filter(v => !!v),
      switchMap(() => this.settingsAllGQL.watch(
        {
          where: {
            column: QuerySettingsWhereColumn.Type,
            operator: SqlOperator.Eq,
            value: "user"
          }
        }
        , {
          fetchPolicy: "cache-and-network"
        }).valueChanges),
    ).subscribe(({data, loading}) => {
      // console.log(data);
      this.loadingForUser$.next(loading);
      if (data) {
        this.$settings.next([...(data?.settings.data || [])]);
        this.storage.setObject('userSettings', [...(data.settings.data || [])]).then()
      }
    });
    this.authGuard.authService.authenticated.pipe(
      filter(v => !!v),
      switchMap(() => this.meGQL.watch({}, {
        fetchPolicy: "cache-and-network"
      }).valueChanges)
    ).subscribe(({data, loading}) => {
      // console.log(data)
      this.loadingForUser$.next(loading);
      if (data) {
        this.savedSettings$.next([...(data?.me.settings || [])]);
        this.storage.setObject('savedSettings', [...(data.me.settings || [])]).then()
      }
    });

  }

  set(id, value) {

  }

  setForUser(data: Setting) {
    // console.log(data);
    const saved = this.$currentSettings.getValue() || [];
    const settings = (saved.map(v => v.id === data.id ? data : v));
    this.$currentSettings.next(settings);

    const user = this.authGuard.user;

    return this.userUpdateGQL.mutate({
      input: {
        id: user.id,
        settings: {
          syncWithoutDetaching: [{
            id: data.id,
            value: {
              value: data.value.value,
              type: data.value.type,
            }
          }]
        }
      },
    }).pipe(
      // tap(x => this.savedSettings$.next(x.data.updateUser.settings))
    );

  }

  getSavedItem(name) {
    return of(name).pipe(
      switchMap(value => {
        return this.currentSettings.pipe(map(value1 => value1.find(value2 => value2.slug === value))).pipe(
          filter(v => !!v),
          distinctUntilChanged(this.typeComparatorFn)
        );
      })
    )
  }

  getItem(name) {
    return of(name).pipe(
      switchMap(value => {
        return merge(
          (this.settings.pipe(
              map(value1 => value1.find(value2 => value2.slug === value))).pipe(
              filter(v => !!v)
            )
          ),
          ((this.globalSettings.pipe(
              map(value1 => value1.find(value2 => value2.slug === value))).pipe(filter(v => !!v)))
          )
        ).pipe(
          filter(v => !!v),
          distinctUntilChanged(this.typeComparatorFn)
        );
      }),
    )
  }


  globalSettings = this.$globalSettings.asObservable().pipe(filter(v => !!v), distinctUntilChanged());


  settings = this.$settings.asObservable().pipe(filter(v => !!v), distinctUntilChanged());


  loadingForUser = this.loadingForUser$.asObservable();


  loading = this.loading$.asObservable();


  anneeScolaire = this.getItem('ANNEE_SCOLAIRE');

  anneeScolaireForSearch = this.getSavedItem('ANNEE_SCOLAIRE');
}





