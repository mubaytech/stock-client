import {Apollo} from 'apollo-angular';
import {AppOnDestroy} from '../types';
import {BehaviorSubject} from 'rxjs';
import {UpsertFileModelInput} from '../../../generated/types.graphql-gen';


export class UploadBase extends AppOnDestroy {
    get model() {
        return this.model$.getValue();
    }

    set model(fileInfo: UpsertFileModelInput) {
        this.model$.next(fileInfo);
    }


    constructor(
        protected apollo: Apollo,
    ) {
        super();
        this.id = UploadBase.getRandom();
    }


    id: string;
    model$ = new BehaviorSubject<UpsertFileModelInput>(null);
    onModel=this.model$.asObservable();


  cancel(u: UploadBase) {
        //
    }

    static getRandom() {
        return Math.random().toString(36).substr(2, 9);
    }
}
