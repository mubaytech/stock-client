import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasSlugDirective } from './has-slug.directive';
import { UnSlugPipe } from './un-slug.pipe';



@NgModule({
    declarations: [HasSlugDirective, UnSlugPipe],
    exports: [
        HasSlugDirective,UnSlugPipe
    ],
    imports: [
        CommonModule
    ]
})
export class HasSlugModule { }
