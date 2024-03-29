import { Moment } from 'moment';

export class DateTimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor() {
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
}

export interface MomentsMap {
  [value: number]: Moment;
}

export interface Config {
  dates: {
    [value: number]: string;
  };
  images: string[];
}
