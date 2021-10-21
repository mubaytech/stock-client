import {
  AfterViewInit, ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef, HostBinding, HostListener, Injector, Input,
  OnInit, ViewChild
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  Validators
} from '@angular/forms';
import {timer} from 'rxjs';
import {UploadService} from '../upload.service';
import {CoreService} from '../../core.service';
import {Apollo} from 'apollo-angular';
import {UploadDirective} from '../upload.directive';
import {takeUntil} from 'rxjs/operators';
import {UpsertFileModelInput} from '../../../../generated/types.graphql-gen';
import {PhotoService} from "../../photo.service";

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileInputComponent extends UploadDirective implements OnInit, AfterViewInit, Validators {


  constructor(
    public el: ElementRef<any>,
    changeDetectorRef: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    uploadService: UploadService,
    public core: CoreService,
    apollo: Apollo,
    photoService: PhotoService,
    public _injector: Injector
  ) {
    super(uploadService, el, apollo, photoService, changeDetectorRef);
    this.fileInputForm = this.formBuilder.group({fileInput: [null]});
  }

  @ViewChild('fileInput') fileInput: ElementRef;

  fileInputForm: FormGroup;


  @HostBinding('class.on-drag-over') onDragOverClass: boolean;

  /*@HostListener(`change`, [`$event.target`])*/
  @Input()
  sizeMd = 6;
  @Input()
  sizeLg = 6;
  @Input()
  sizeXl = 4;

  @HostListener(`dragover`, [`$event`]) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.onDragOverClass = true;
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.onDragOverClass = false;

  }

  @HostListener('drop', ['$event'])
  public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.files = files;
      (this.fileInput.nativeElement as HTMLInputElement).files = files;
    }
  }

  onInputChange(evt: Event) {
    const target = evt.target as HTMLFormElement;
    // console.log(evt);
    // evt.preventDefault();
    // evt.stopPropagation();
    if (target.files) {
      this.files = target.files;
    }

  }


  ngAfterViewInit(): void {

    super.ngAfterViewInit();
    this.uploads.pipe().subscribe(_ => {
      (this.fileInput.nativeElement as HTMLInputElement).value = null;
    });


  }

  writeValue(obj: Array<UpsertFileModelInput>): void {
    super.writeValue(obj);
    // console.log(obj);
  }

  ngOnInit() {
    this.control = this._injector.get(NgControl);
    super.ngOnInit();
  }


  private updateValidators() {

  }


}
