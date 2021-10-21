import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StepComponent implements OnInit {
  @Input()
  percent: any;

  @Input()
  stepId: number;

  @Input()
  active: boolean;

  @Output()
  onClick: EventEmitter<StepComponent> = new EventEmitter<StepComponent>();

  constructor() {
  }

  ngOnInit() {
  }

  get hasPercent() {
    return typeof this.percent != 'undefined';
  }

  get iconStyle() {
    return {
      'shadow-md': this.active,
      'text-medium-base': !this.active,
      'text-primary-base': this.active,
      // 'bg-primary-base': this.percent === 100,
      // 'bg-white-base': this.percent !== 100|| !this.active,
      // 'border': !this.active || this.percent !== 100
    }
  }

  get textStyle() {
    return {
      'text-primary-base': this.active,
      'text-medium-base': !this.active,
    }
  }
}
