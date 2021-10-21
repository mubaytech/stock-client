import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFilmSharp = {
    name: 'film_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="film-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M480 80H32v352h448zM112 352v48H64v-48zm0-80v48H64v-48zm0-80v48H64v-48zm0-80v48H64v-48zm256 160H144v-32h224zm80 80v48h-48v-48zm0-80v48h-48v-48zm0-80v48h-48v-48zm0-80v48h-48v-48z"/></svg>`
};
let IoniconFilmSharpComponent = class IoniconFilmSharpComponent {
};
IoniconFilmSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-film-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconFilmSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconFilmSharpComponent);
export { IoniconFilmSharpComponent };
let IoniconFilmSharpModule = class IoniconFilmSharpModule {
};
IoniconFilmSharpModule = __decorate([
    NgModule({
        declarations: [IoniconFilmSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconFilmSharpComponent
        ],
    })
], IoniconFilmSharpModule);
export { IoniconFilmSharpModule };
//# sourceMappingURL=Ionicon-film-sharp.icon.js.map