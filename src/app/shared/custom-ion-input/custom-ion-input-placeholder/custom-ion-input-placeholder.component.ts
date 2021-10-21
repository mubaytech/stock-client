import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-ion-input-placeholder',
  templateUrl: './custom-ion-input-placeholder.component.html',
  styleUrls: ['./custom-ion-input-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomIonInputPlaceholderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
