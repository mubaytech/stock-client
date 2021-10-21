import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-step-text',
  templateUrl: './step-text.component.html',
  styleUrls: ['./step-text.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StepTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
