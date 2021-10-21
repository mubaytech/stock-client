import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from "@angular/material/paginator";
let MatPaginationIntlService = class MatPaginationIntlService extends MatPaginatorIntl {
    constructor() {
        super(...arguments);
        this.itemsPerPageLabel = 'Enregistrement par page';
        this.nextPageLabel = 'Page suivante';
        this.previousPageLabel = 'Page précédente';
        this.firstPageLabel = 'La première page';
        this.lastPageLabel = 'Dernière page';
        this.getRangeLabel = (page, pageSize, length) => {
            if (length === 0 || pageSize === 0) {
                return '0 de ' + length;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            const endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + ' - ' + endIndex + ' Sur ' + length;
        };
    }
};
MatPaginationIntlService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MatPaginationIntlService);
export { MatPaginationIntlService };
//# sourceMappingURL=mat-pagination-intl.service.js.map