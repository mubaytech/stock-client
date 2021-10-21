import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let IsSelectedPipe = class IsSelectedPipe {
    transform(items, item, selectable) {
        return items.find(selectedItem => {
            return selectable._getItemValue(item) === selectable._getStoredItemValue(selectedItem);
        }) !== undefined;
    }
};
IsSelectedPipe = __decorate([
    Pipe({
        name: 'isSelected'
    })
], IsSelectedPipe);
export { IsSelectedPipe };
//# sourceMappingURL=is-selected.pipe.js.map