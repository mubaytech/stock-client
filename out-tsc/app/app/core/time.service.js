import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as MOMENT from 'moment';
import { extendMoment } from 'moment-range';
export const moment = extendMoment(MOMENT);
let TimeService = class TimeService {
    constructor() {
        this.moment = moment;
        this.currentDate = this.moment();
    }
    fromNow(date, format, prefix = false) {
        const d = this.fromUnix(date, format || null);
        if (this.currentDate.diff(d, 'days') > 7) {
            return d.format('LLLL');
        }
        else {
            return d.fromNow(prefix);
        }
    }
    toNow(date, format, suffix = false) {
        const d = this.fromUnix(date, format || null);
        const current = this.moment();
        if (!current.isBefore(d)) {
            return d.fromNow(suffix);
        }
        else {
            return current.to(d, suffix);
        }
    }
    isBeforeNow(date) {
        return (this.fromUnix(date).isBefore(this.moment()));
    }
    format(date, format, dateFormat) {
        if (!date) {
            return this.moment().format(format || 'LLLL');
        }
        return this.fromUnix(date, dateFormat || null).format(format || 'LLLL');
    }
    fromUnix(date, format) {
        if (date === null || date === void 0 ? void 0 : date.month) {
            return date;
        }
        if (date === null || date === void 0 ? void 0 : date.seconds) {
            return this.moment.unix(date.seconds);
        }
        else {
            if (format) {
                return this.moment(date, format);
            }
            else {
                if (!date) {
                    return this.moment();
                }
                return this.moment(date);
            }
        }
    }
};
TimeService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TimeService);
export { TimeService };
//# sourceMappingURL=time.service.js.map