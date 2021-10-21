import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {Upload} from './upload';


export interface Uploads {
    [key: string]: Upload;
}

@Injectable({
    providedIn: 'root'
})
export class UploadService {
    uploads$: BehaviorSubject<Uploads> = new BehaviorSubject<Uploads>({});


      uploads=this.uploads$.asObservable().pipe(distinctUntilChanged());


    get uploadsObject() {
        return this.uploads$.value;
    }

    constructor() {
        //
    }

    cancel(u: Upload) {
        const uploads = {...this.uploads$.value};
        const upload = uploads[u.id];
        upload.cancel();
        delete uploads[u.id];
        this.uploads$.next(uploads);
    }

    push(u: Upload) {
        const uploads = {...this.uploads$.value};
        uploads[u.id] = u;
        this.uploads$.next(uploads);
    }

    remove(uploads: Array<Upload>) {
        // this.delete$.next(u);
    }
}
