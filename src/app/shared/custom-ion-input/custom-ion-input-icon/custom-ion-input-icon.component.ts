import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-ion-input-icon',
  templateUrl: './custom-ion-input-icon.component.html',
  styleUrls: ['./custom-ion-input-icon.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CustomIonInputIconComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
