import {AfterViewInit, Directive, Input, OnInit} from '@angular/core';
import {FormControl, NgControl} from '@angular/forms';

@Directive({
  selector: '[appDisableControl]'
})
export class DisableControlDirective implements AfterViewInit {

  initCondition: boolean = null;

  @Input() set appDisableControl(condition: boolean) {
    this.action = condition;
    if (this.initCondition !== null) {
      this.initCondition = condition;
    }
  }

  constructor(private ngControl: NgControl) {
  }


  set action(condition) {
    const action = condition ? 'disable' : 'enable';
    // console.log(this.ngControl.name,this.ngControl.valid)
    if (this.ngControl?.control) {
      this.ngControl.control[action]({emitEvent: false});
    }
  }

  ngAfterViewInit(): void {
    this.action = this.initCondition;
  }
}
