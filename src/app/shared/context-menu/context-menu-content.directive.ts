import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appContextMenuContent]'
})
export class ContextMenuContentDirective {

  constructor(
    public templateRef:TemplateRef<any>
  ) { }

}
