import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MaskPipe} from "../mask/mask.pipe";

@Component({
  selector: 'app-money-display',
  templateUrl: './money-display.component.html',
  styleUrls: ['./money-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MaskPipe],
})
export class MoneyDisplayComponent implements OnInit {
  _value: string | number;
  prefix: string = "";
  value: string = "";
  radix: string = "";
  negative: string = "";

  constructor(
    public pipe: MaskPipe
  ) {
  }

  @Input()
  set currency(m: string | number) {
    // console.log(m)
    this._value = m;
    const formated = this.pipe.transform(m, 'currency');
    if (!(formated === m)) {
      let s = formated.split(' ');
      this.negative = s[0] + ' ';
      this.prefix = s[1] + ' ';
      s = s[2].split('.');
      this.radix = ',' + s[1];
      this.value = s[0];
    }
  }

  ngOnInit() {
  }

}
