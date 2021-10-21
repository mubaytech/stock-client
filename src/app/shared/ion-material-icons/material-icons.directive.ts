import {Directive, ElementRef, HostBinding, Input, OnInit} from '@angular/core';
import {timer} from 'rxjs';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'ion-icon[mi-name]'
})
export class MaterialIconsDirective implements OnInit {
    private _name: string;
    private mi: string[];

    @HostBinding('class.has-material-icons') get style() {
        return this.mi && this.mi[0] == 'mi';
    }

    @Input() outlined: boolean;

    @Input('mi-name')
    set miName(val: string) {
        const _miCache = this.mi;
        this._name = val;
        this.mi = val?.split('-');
        if (this.mi && this.mi[0] === 'mi') {

            timer(80).subscribe(() => {
                if (_miCache) {
                    (this.el.nativeElement as HTMLElement).shadowRoot.querySelector('.mi-icon-inner').remove();
                }
                const outlined = this.outlined ? 'material-icons-outlined' : '';
                const shadowEl = (this.el.nativeElement as HTMLElement).shadowRoot.querySelector('.icon-inner');
                shadowEl.innerHTML = `
               <span class="mi-icon-inner">
                <i class="material-icons ${outlined}">${this.mi[1]}</i>
                <style type="text/css" >
                    .material-icons {
                      font-family: 'Material Icons';
                      font-weight: normal;
                      font-style: normal;
                      font-size: 24px;  /* Preferred icon size */
                      display: inline-block;
                      line-height: 1;
                      text-transform: none;
                      letter-spacing: normal;
                      word-wrap: normal;
                      white-space: nowrap;
                      direction: ltr;

                      /* Support for all WebKit browsers. */
                      -webkit-font-smoothing: antialiased;
                      /* Support for Safari and Chrome. */
                      text-rendering: optimizeLegibility;

                      /* Support for Firefox. */
                      -moz-osx-font-smoothing: grayscale;

                      /* Support for IE. */
                      font-feature-settings: 'liga';
                     }
                    .material-icons-outlined {
                        font-family: 'Material Icons Outlined', serif;
                    }

                    .material-icons-sharp {
                        font-family: 'Material Icons Sharp', serif;
                    }
                    </style>
                </span>
            `;
            });
            return;
        }
        if (_miCache) {
            timer(80).subscribe(value => {
                (this.el.nativeElement as HTMLElement).shadowRoot.querySelector('.mi-icon-inner').remove();
                this.el.nativeElement.name = val;
            });
        } else {
            this.el.nativeElement.name = val;
        }
    }

    constructor(private el: ElementRef) {
        // console.log(el);
    }

    ngOnInit(): void {

    }

}
