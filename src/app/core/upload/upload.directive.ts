import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef, forwardRef,
  Input, OnDestroy,
  OnInit
} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {distinctUntilChanged, filter, map, switchMap, takeUntil} from 'rxjs/operators';
import {combineLatest, Observable, Subject, timer} from 'rxjs';
import {Apollo} from 'apollo-angular';
import {UpsertFileModelInput} from '../../../generated/types.graphql-gen';
import {UploadService} from './upload.service';
import {Upload} from './upload';
import {BaseControlValueAccessor} from '../../shared/base-control-value-accessor';
import {PhotoService} from "../photo.service";
import {CameraPhoto} from "@capacitor/core";

@Directive({
  selector: '[appUpload]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadDirective),
      multi: true
    },
  ],
})
export class UploadDirective extends BaseControlValueAccessor<Array<UpsertFileModelInput>> implements OnInit, OnDestroy, AfterViewInit {
  protected cameraOpen: boolean;


  get value() {
    return this.val;
  }

  set value(value) {

    if (this.checkDiff(value)) {
      this.val = !this.multiple ? (value?.length ? value[0] : value) : value;
      this.onChange(!this.multiple ? (value?.length ? value[0] : value) : value);
      this.onTouched();
      timer(50).pipe(takeUntil(this.onDestroy$)).subscribe(() => {
        this.changeDetectorRef.markForCheck();
      });
    }

  }


  set files(files: FileList) {
    // console.log(files);
    this.fileList = files;
    const validate = this.validate(this.control?.control as FormControl);
    if (!files || (
      validate.fileMaxSize || validate.fileMisMatch || validate.maxWidth || validate.maxHeight || validate.maxLength
    )) {
      // files = new FileList;
      files = new DataTransfer().files;
      this.control?.control.updateValueAndValidity();
    }

    let uploads = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < files.length; i++) {
      uploads = [(new Upload(this.apollo, files[i], this.id)), ...uploads];
    }
    this.setUploads([...uploads]);
  }

  get files() {
    return this.fileList;
  }

  constructor(
    public uploadService: UploadService,
    public el: ElementRef,
    public apollo: Apollo,
    public photoService: PhotoService,
    changeDetectorRef: ChangeDetectorRef,
  ) {
    super(changeDetectorRef);
    this.id = Upload.getRandom();
  }


  id: string;
  onDestroy$ = new Subject();
  protected control: NgControl;
  @Input()
  name: string;

  @Input('value')
  val: any;

  @Input()
  disabled: boolean = false;

  @Input()
  multiple: boolean = false;

  @Input()
  maxSize = 2000;

  @Input()
  minWidth = 400;

  @Input()
  minHeight = 400;

  @Input()
  maxLength = 4;

  @Input()
  accept = 'image/png,image/jpg,image/jpeg';


  fileList: FileList;
  filter = uploads => {
    const $uploads: Array<Upload> = new Array<Upload>();
    for (const u of Object.keys(uploads)) {
      if (uploads[u].viewId === this.id) {
        $uploads.push(uploads[u]);
      }
    }
    return $uploads;
  }

  uploads = this.uploadService.uploads.pipe(
    map(this.filter),
    distinctUntilChanged()
  );

  models = this.uploads.pipe(
    switchMap(uploads => combineLatest(uploads.map(u => u.onModel))),
    filter(us => !us.find(u => !((u as any)?.created_at))),
  );

  ngAfterViewInit(): void {
    //
  }

  ngOnInit(): void {

    this.uploads.subscribe(value => {
      if (!(value?.length)) {
        this.value = null;
      }

    });
    this.models.subscribe(value => {
      this.value = value?.length ? value : null;
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // this.uploadService.remove();
  }


  private setUploads($uploads: Array<Upload>) {
    const uploads = this.filter(this.uploadService.uploadsObject);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < uploads.length; i++) {
      this.uploadService.cancel(uploads[i]);
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < $uploads.length; i++) {
      this.uploadService.push($uploads[i]);
    }
  }

  validate(c: FormControl) {
    const ret: {
      fileMaxSize?: boolean
      fileMisMatch?: boolean
      maxWidth?: boolean
      maxHeight?: boolean
      maxLength?: boolean
    } = {};
    if (this.files) {
      if (this.files.length > this.maxLength) {
        ret.maxLength = true;
      } else {
        const accept = this.accept.split(',');
        for (let i = 0; i < this.files.length; i++) {
          const size = (this.files[i].size / 1024);
          // console.log(size);
          if (size > this.maxSize) {
            // alert('ji')
            ret.fileMaxSize = true;
            break;
          }
          if (accept.indexOf(this.files[i].type.toLowerCase()) === -1) {
            ret.fileMisMatch = true;
            break;
          }
        }
      }
    }

    return ret;
  }

  blobToFile(blob: Blob, name, type): File {
    return new File([blob], name, {type: type, lastModified: Date.now()});
  }

  public async getBlob(path) {
    const r = await fetch(path);
    return await r.blob();
  }

  capture() {
    if (this.cameraOpen) {
      return;
    }
    this.cameraOpen = true;
    this.photoService.capture().then(cameraPhoto => {
      this.cameraOpen = false;
      if (cameraPhoto) {
        return this.getBlob(cameraPhoto.webPath)
      } else {
        throw new Error('null');
      }
    }).then(blob => this.blobToFile(blob, (Upload.getRandom()) + '.' + (blob.type.split('/')[1]), blob.type)).then(file => {
      this.files = FileListItems([file]);
    }).catch(_ => {
      this.cameraOpen = false;
    })
  }


}

function FileListItems(files) {
  let b = new ClipboardEvent("").clipboardData || new DataTransfer()
  for (let i = 0, len = files.length; i < len; i++) b.items.add(files[i])
  return b.files
}
