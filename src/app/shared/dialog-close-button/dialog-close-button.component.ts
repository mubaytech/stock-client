import {Component, EventEmitter, HostBinding, Input, OnInit, Optional, Output} from '@angular/core';
import {ModalBaseService} from "../modal-base/modal-base.service";

@Component({
  selector: 'app-dialog-close-button',
  templateUrl: './dialog-close-button.component.html',
  styleUrls: ['./dialog-close-button.component.scss'],
})
export class DialogCloseButtonComponent implements OnInit {

  constructor(
    @Optional() public modalBaseService: ModalBaseService
  ) {
  }

  @Input() data: any;

  @Output() dismiss = new EventEmitter<void>();

  // @HostBinding('class.hidden') get hidden() {
  //   return !(this.modalBaseService)
  // }

  ngOnInit() {
  }

  onClick() {
    if(this.dismiss.observers.length){
      this.dismiss.emit();
    }
    else {
      this.modalBaseService.modalController.dismiss(this.data).then()
    }

  }
}
