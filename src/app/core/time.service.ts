import {Injectable} from '@angular/core';
import * as MOMENT from 'moment';
import {Moment} from 'moment';
import {extendMoment} from 'moment-range';

export const moment = extendMoment(MOMENT);

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  moment = moment;
  currentDate;
  serverDate: null;
  clientValidDate: boolean;

  constructor() {
    this.currentDate = this.moment();
  }

  now() {
    return this.moment();
  }

  fromNow(date: string | any, format?: string, prefix = false) {
    const d = this.fromUnix(date, format || null);
    if (this.currentDate.diff(d, 'days') > 7) {
      return d.format('LLLL');
    } else {
      return d.fromNow(prefix);
    }
  }

  toNow(date: string | any, format?: string, suffix = false) {
    const d = this.fromUnix(date, format || null);
    const current = this.moment();
    if (!current.isBefore(d)) {
      return d.fromNow(suffix);
    } else {
      return current.to(d, suffix);
    }
  }

  isBeforeNow(date) {
    return this.fromUnix(date).isBefore(this.moment());
  }

  format(date?: string | any, format?: string, dateFormat?: string) {
    if (!date) {
      return this.moment().format(format || 'LLLL');
    }
    return this.fromUnix(date, dateFormat || null).format(format || undefined);
  }

  fromUnix(date?: Moment | { seconds: number } | any, format?: string): Moment {
    if (date?.month) {
      return date;
    }
    if (date?.seconds) {
      return this.moment.unix(date.seconds);
    } else {
      if (format) {
        return this.moment(date, format);
      } else {
        if (!date) {
          return this.moment();
        }
        return this.moment(date);
      }
    }
  }

  dateTime(date?: string | Moment | Date) {
    return this.fromUnix(date).format('YYYY-MM-DD hh:mm:ss')
  }

  dateTimeTz(date?: string | Moment|Date) {
    return this.fromUnix(date).format()
  }

}
