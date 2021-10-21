import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class PaginationService<T> implements Pagination {


    constructor() {
    }

    $fetching: BehaviorSubject<boolean>;
    $fetchingMore: BehaviorSubject<boolean>;
    initialized: boolean;
    path: string;
    $refetching: BehaviorSubject<boolean>;
    source: any;

    fetch(): void {
    }

    fetchMore(): void {
    }

    init(): void {
    }

    refetch(): void {
    }

    $refreshing: BehaviorSubject<boolean>;

}

export declare interface Pagination {

    path: string;
    $refetching: BehaviorSubject<boolean>;
    $fetching: BehaviorSubject<boolean>;
    $refreshing: BehaviorSubject<boolean>;
    $fetchingMore: BehaviorSubject<boolean>;
    initialized: boolean;

    fetchMore(): void

    refetch(): void

    fetch(): void

    init(): void


}
