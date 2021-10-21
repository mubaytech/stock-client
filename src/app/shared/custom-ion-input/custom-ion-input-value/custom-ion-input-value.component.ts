import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-ion-input-value',
  templateUrl: './custom-ion-input-value.component.html',
  styleUrls: ['./custom-ion-input-value.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CustomIonInputValueComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
