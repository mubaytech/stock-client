import {Injectable, OnDestroy} from '@angular/core';
import {Pagination} from "./pagination.service";
import {BehaviorSubject, from, Observable, of, Subject} from "rxjs";
import {catchError, takeUntil} from "rxjs/operators";
import {Query, QueryRef} from "apollo-angular";
import {PaginatorInfo} from '../../generated/types.graphql-gen';

@Injectable()
export class GraphqlPaginationService<V = {
  [key: string]: {
    data: any[];
    paginatorInfo: PaginatorInfo
  }
}, G = {}> implements Pagination, OnDestroy {


  setPath(value: (data: V) => {
    data: any[];
    paginatorInfo: PaginatorInfo
  }) {
    this._path = value;
  }

  $destroy: Subject<any> = new Subject<any>();


  set queryService(queryService: Query<V, G>) {
    this.$queryService = queryService;
  }

  set variables(variables: G) {
    this.$variables = {...this.$variables, ...variables};
    if (this.initialized) {
      this.refetch();
    }

  }

  get variables() {
    return this.$variables
  }


  constructor() {

  }

  ngOnDestroy(): void {
    this.$destroy.next()
    this.$destroy.complete()
  }

  initialized: boolean;
  private _path: (data: V) => any;
  $refetching: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  $fetching: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  $refreshing: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  $fetchingMore: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  $query: QueryRef<V, G>;
  public path: string
  $queryService: Query<V, G>;
  $variables: G;
  $page: BehaviorSubject<V> = new BehaviorSubject<V>({} as any);
  public updateQueryFn: (prev: V, options: { fetchMoreResult: V, variables: G }) => V;
  refetching = this.$refetching.asObservable();
  public scrollPosition = 1;

  fetching = this.$fetching.asObservable();

  fetchingMore = this.$fetchingMore.asObservable();


  refreshing = this.$refreshing.asObservable();


  page = this.$page.asObservable() as Observable<V>;

  init(queryService?: Query<V, G>) {
    if (this.initialized) {
      return;
    }
    if (queryService) {
      this.queryService = queryService;
    }
    this.initialized = true;
    this.fetch();

  }

  fetch() {
    this.$fetching.next(true);
    if (!this.$query) {
      this.$query = this.$queryService.watch(this.$variables || {} as any);
    }
    this.$query.valueChanges.pipe(
      takeUntil(this.$destroy),
      catchError(_ => of(null))
    ).subscribe(result => {
      // console.log(result);
      this.$page.next(result?.data || {} as any)
      if (this.$refetching.getValue() || this.$refreshing.getValue()) {
        return;
      }
      this.$fetching.next(false)
    })

  }

  fetchMore() {
    if (this.$fetchingMore.value || this.$fetching.value) {
      return;
    }
    this.$fetchingMore.next(true);
    from(this.$query.fetchMore({
      variables: {
        ...this.$variables || {} as any,
        page: (this._path(this.$page.getValue())?.paginatorInfo?.currentPage || 0) + 1,
      },
      updateQuery: this.updateQueryFn,
    })).pipe(
      takeUntil(this.$destroy),
      catchError(_ => of(null))
    ).subscribe(() => {
        this.$fetchingMore.next(false);
      },
    );
  }


  refetch(refresh?: boolean): void {
    if (refresh) {
      this.$refreshing.next(true)
    } else {
      this.$refetching.next(true);
    }
    from(this.$query.refetch({
      ...this.$variables,
      page: 0,
    })).pipe(
      takeUntil(this.$destroy),
      catchError(_ => of(null))
    ).subscribe(
      () => {
        if (refresh) {
          this.$refreshing.next(false)
        } else {
          this.$refetching.next(false);
        }
        if (this.$fetching.value) {
          this.$fetching.next(false)
        }
      });
  }


  trackByFn(index, item) {
    return item.id;
  }

  as(item: any): V {
    return item as V;
  }
}
