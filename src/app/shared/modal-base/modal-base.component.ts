import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NavParams} from '@ionic/angular';
import {timer} from 'rxjs';
import {ModalBaseService} from "./modal-base.service";

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.scss'],
  providers: [ModalBaseService]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalBaseComponent<R> implements OnInit {
  rootParams: { [key: string]: R };

  constructor(
    private navParams: NavParams,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.rootParams = this.navParams.data;
  }

  ngOnInit() {
    //
  }

}
