import {Directive, ElementRef, Input} from '@angular/core';
import {TuiFocusableElementAccessor} from "@taiga-ui/cdk";
import {IonInput} from "@ionic/angular";

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective {

  @Input() set appAutoFocus(value) {
    if (value) {
      console.log(this.elementRef)
      if(this.elementRef.nativeElement instanceof IonInput){
        // this.elementRef.nativeElement.getInputElement().then(el);
      }

    }
  }

  constructor(
    public readonly elementRef: ElementRef<IonInput>
  ) {

  }

}
