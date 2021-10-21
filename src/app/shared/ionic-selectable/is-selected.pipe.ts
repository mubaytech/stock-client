import {Pipe, PipeTransform} from '@angular/core';
import {IonicSelectableComponent} from './ionic-selectable.component';

@Pipe({
    name: 'isSelected'
})
export class IsSelectedPipe implements PipeTransform {

    transform(items: any[], item, selectable: IonicSelectableComponent<any>): unknown {
        return items.find(selectedItem => {
            return selectable._getItemValue(item) === selectable._getStoredItemValue(selectedItem);
        }) !== undefined;
    }

}
