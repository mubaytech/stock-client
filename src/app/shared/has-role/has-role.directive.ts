import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";
import {Subject} from "rxjs";
import {AuthGuardsService} from "../../core/auth/auth-guards.service";
import {TypeRole} from "../../../generated/types.graphql-gen";
import {takeUntil} from "rxjs/operators";

@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {
  @Input() hasRole: TypeRole;
  stop$ = new Subject();

  isVisible = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    public authGuard: AuthGuardsService,
  ) {
  }

  ngOnInit() {
    this.authGuard.userHasRole(this.hasRole).pipe(
      takeUntil(this.stop$),
    ).subscribe(hasRole => {
      console.log(hasRole);
      if (!hasRole) {
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
