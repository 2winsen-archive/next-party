import * as moment from 'moment';

let date: Date;
let interval: number;

export const fakeDate = (dateParam: moment.MomentInput) => {
  if (!interval) {
    date = moment(dateParam).toDate();
    interval = window.setInterval(() => {
      date.setMilliseconds(date.getMilliseconds() + 1000);
    }, 1000);
  }
  return date;
};
