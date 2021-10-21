import {Pipe, PipeTransform} from '@angular/core';
import {TreeNode} from '@circlon/angular-tree-component/lib/models/tree-node.model';


@Pipe({
    name: 'node'
})
export class NodePipe<T> implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): AppTreeNode<T> {
        return (value as AppTreeNode<T>);
    }

}

export interface AppTreeNode<T> extends TreeNode {
    data: T;
}

