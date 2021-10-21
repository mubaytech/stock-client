import {ChangeDetectorRef, Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Level} from "../../../generated/types.graphql-gen";
import {Subject} from "rxjs";
import {AuthGuardsService} from "../../core/auth/auth-guards.service";
import {takeUntil} from "rxjs/operators";

@Directive({
  selector: '[hasLevel]'
})
export class HasLevelDirective {
  @Input() hasLevel: Level;
  stop$ = new Subject();

  isVisible = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private authGuard: AuthGuardsService,
    // public changeDetectorRef:ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.authGuard.userHasLevel(this.hasLevel).pipe(
      takeUntil(this.stop$),
    ).subscribe(hasLevel => {
      if (!hasLevel) {
        this.isVisible = false;
        this.viewContainerRef.clear();
      } else {
        this.isVisible = true;
        this.viewContainerRef.createEmbeddedView(this.templateRef).markForCheck();
      }
    });
  }

  ngOnDestroy() {
    this.stop$.next();
    this.stop$.complete();
  }
}
