import {Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {CoreService} from '../../core/core.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ion-content, cdk-virtual-scroll-viewport, app-scrollable, cdk-scrollable',
})
export class ScrollbarThemeDirective implements OnDestroy, OnInit {
  destroy$ = new Subject();
  @Input() scrollbarColor: string;
  @Input() scrollbarBackground: string;
  @Input() scrollable: boolean = true;
  @Input() scrollBarTheme: boolean = false;

  constructor(
    public el: ElementRef, public renderer: Renderer2, public core: CoreService
  ) {

  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.core.platformReady.pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.core.isMobile || !this.scrollBarTheme) {
        return;
      }
      const bg = this.scrollbarColor || '--ion-text-color,#aaaaaa';
      const border = this.scrollbarBackground || ((this.el.nativeElement as HTMLElement).classList.contains('main-content') ? '--ion-color-light' : '--ion-color-base,var(--ion-background-color,#fff)');
      const stylesheet = `
              /*.inner-scroll:hover::-webkit-scrollbar-track {
                background: var(--ion-color-light);
                border-radius:100px;
              }
              .inner-scroll:hover::-webkit-scrollbar-thumb {
                border-color:  var(--ion-color-light);
              }*/
              ::-webkit-scrollbar-track {
                background: transparent;
              }
              ::-webkit-scrollbar-thumb {
                    background: var(${bg});
                    border: 3.44px solid var(${border});
                    border-radius: 100px;
                    /*border-radius: 0px;*/

                    margin: 2px;
              }
              ::-webkit-scrollbar {
                width:8px;
                height:8px;
              }
                ::-webkit-scrollbar-thumb:hover {
                  border-width: 0px;
              }
              ::-webkit-scrollbar-corner {
                  background: var(${border});
              }
            `;
      const styleElmt = (this.el.nativeElement.shadowRoot || this.el.nativeElement).querySelector('style');
      if (styleElmt) {
        styleElmt.append(stylesheet);
      } else {
        const barStyle = document.createElement('style');
        barStyle.append(stylesheet);
        (this.el.nativeElement.shadowRoot || this.el.nativeElement).appendChild(barStyle);
      }

    });
  }

}
