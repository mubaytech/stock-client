import { __awaiter } from "tslib";
import { BehaviorSubject, of, Subject } from 'rxjs';
import { catchError, filter, map, pluck, switchMap, takeUntil } from 'rxjs/operators';
import { CreateFileModelDocument, UploadFileDocument } from '../../../generated/types.graphql-gen';
import { UploadBase } from './upload-base';
export class Upload extends UploadBase {
    constructor(apollo, file, viewId) {
        super(apollo);
        this.viewId = viewId;
        this.error$ = new BehaviorSubject(false);
        this.onDestroy$ = new Subject();
        this.uploading$ = new BehaviorSubject(false);
        this.done$ = new BehaviorSubject(false);
        this.fire$ = new Subject();
        this.observerFire = this.fire$.asObservable().pipe(takeUntil(this.onDestroy$), map(v => {
            this.uploading$.next(!!v);
            this.error$.next(false);
            this.done$.next(false);
            return v;
        }), switchMap((v) => {
            return of(v).pipe(filter(value => !!value), switchMap(_ => this.apollo.mutate({
                mutation: CreateFileModelDocument,
                variables: {
                    nom: v.nom,
                    exist: false
                }
            })), pluck('data'), pluck('createFileModel'), map((f) => {
                // console.log(f);
                this.model = Object.assign(Object.assign({}, f), {
                    thumbnail_url: this.model.thumbnail_url,
                    type: this.model.type,
                    nom: this.model.nom
                });
                return f.id;
            }), switchMap((id) => this.apollo.mutate({
                mutation: UploadFileDocument,
                variables: {
                    file: this.$file,
                    id
                },
                context: {
                    useMultipart: true
                }
            })), catchError(_ => of(false)));
        })).subscribe(done => {
            this.done$.next(!!done);
            this.uploading$.next(false);
            this.error$.next(!done);
        });
        this.file = file;
    }
    set file(file) {
        this.$file = file;
        const thumbnail_url = window.URL.createObjectURL(file);
        const type = file.type;
        const nom = file.name;
        this.revokePath();
        if ((/image/i).test(file.type)) {
            const image = new Image();
            image.onload = () => {
                this.model = Object.assign(Object.assign({}, this.model), { thumbnail_url: this.resizeMe(image) });
                URL.revokeObjectURL(thumbnail_url);
            };
            image.src = thumbnail_url;
        }
        this.model = {
            thumbnail_url,
            nom,
            type,
        };
        this.fire();
    }
    get image() {
        const fileType = this.model;
        return this.isImage(fileType.type) ? fileType : null;
    }
    toFile(blob, name, type) {
        return new File([blob], name, { type, lastModified: Date.now() });
    }
    toBlob(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield fetch(path);
            return yield r.blob();
        });
    }
    getBlob(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield fetch(path);
            return yield r.blob();
        });
    }
    getRandomName(extension) {
        return 'upload_' + Upload.getRandom() + '.' + extension;
    }
    isImage(fileType) {
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg', 'image/svg'];
        return validImageTypes.includes(fileType);
    }
    fire(stop = true) {
        this.fire$.next(stop ? this.model : null);
    }
    pause() {
        //
    }
    continue() {
        //
    }
    cancel() {
        this.revokePath();
        this.fire$.next(null);
    }
    revokePath() {
        // window.URL.revokeObjectURL(this.fileInfo$.value?.webPath);
        try {
            const preview = document.getElementsByTagName('body')[0];
            const existingcanvases = document.getElementById('canvas' + this.model.nom + this.viewId);
            while (existingcanvases) { // it's a live list so removing the first element each time
                preview.removeChild(existingcanvases);
            }
        }
        catch (_) {
            //
        }
    }
    resizeMe(img) {
        const preview = document.getElementsByTagName('body')[0];
        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'canvas' + this.model.nom + this.viewId);
        const max_width = 200;
        const max_height = 200;
        let width = img.width;
        let height = img.height;
        // calculate the width and height, constraining the proportions
        if (width > height) {
            if (width > max_width) {
                // height *= max_width / width;
                height = Math.round(height *= max_width / width);
                width = max_width;
            }
        }
        else {
            if (height > max_height) {
                // width *= max_height / height;
                width = Math.round(width *= max_height / height);
                height = max_height;
            }
        }
        // resize the canvas and draw the image data into it
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        preview.appendChild(canvas); // do the actual resized preview
        return canvas.toDataURL('image/jpeg', 0.7); // get the data from canvas as 70% JPG (can be also PNG, etc.)
    }
}
//# sourceMappingURL=upload.js.map