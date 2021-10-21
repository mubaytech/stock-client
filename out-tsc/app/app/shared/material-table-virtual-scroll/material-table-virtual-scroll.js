import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
export class MaterialTableVirtualScroll {
    constructor(itemHeight, headerOffset) {
        this.itemHeight = itemHeight;
        this.headerOffset = headerOffset;
        this.dataLength = 0;
        this.indexChange = new Subject();
        this.offset = 0;
        this.offsetChange$ = new BehaviorSubject(0);
        this.scrolledIndexChange = this.indexChange.pipe(distinctUntilChanged());
    }
    attach(viewport) {
        this.viewport = viewport;
        this.onDataLengthChanged();
    }
    onContentScrolled() {
        this.updateContent();
    }
    onDataLengthChanged() {
        if (this.viewport) {
            this.viewport.setTotalContentSize(this.dataLength * this.itemHeight);
            this.updateContent();
        }
    }
    setDataLength(length) {
        this.viewport.checkViewportSize();
        this.dataLength = length;
        this.onDataLengthChanged();
    }
    setScrollHeight(rowHeight, headerOffset) {
        this.itemHeight = rowHeight;
        this.headerOffset = headerOffset;
        this.updateContent();
    }
    detach() {
    }
    onContentRendered() {
    }
    onRenderedOffsetChanged() {
    }
    scrollToIndex(index, behavior) {
    }
    updateContent() {
        if (!this.viewport) {
            return;
        }
        const amount = Math.ceil(this.viewport.getViewportSize() / this.itemHeight);
        const offset = this.viewport.measureScrollOffset() - this.headerOffset;
        const buffer = Math.ceil(amount / 2);
        const skip = Math.ceil(offset / this.itemHeight);
        const index = Math.max(0, skip);
        const start = Math.max(0, index - buffer);
        const end = Math.min(this.dataLength, index + amount + buffer);
        this.offset = this.itemHeight * start;
        this.viewport.setRenderedContentOffset(this.offset);
        this.viewport.setRenderedRange({ start, end });
        this.offsetChange$.next(this.offset);
        this.indexChange.next(index);
    }
    get viewPort$$$() {
        return this.viewport;
    }
    get offsetChange() {
        return this.offsetChange$.asObservable().pipe(distinctUntilChanged());
    }
}
//# sourceMappingURL=material-table-virtual-scroll.js.map