import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-step-icon',
  templateUrl: './step-icon.component.html',
  styleUrls: ['./step-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepIconComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
