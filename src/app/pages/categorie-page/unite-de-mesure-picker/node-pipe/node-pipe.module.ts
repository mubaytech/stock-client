import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NodePipe} from './node.pipe';


@NgModule({
    declarations: [NodePipe],
    imports: [
        CommonModule
    ]
    ,
    exports: [NodePipe]
})
export class NodePipeModule {
}
