import { Injectable } from '@angular/core';
import { Moment } from 'moment';
import moment from 'moment';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class NextPartyService {
  private static readonly ADD_TO_CALENDAR_FORMAT = 'YYYY-MM-DD HH:mm:ss';

  constructor(private configService: ConfigService) {}

  protected getCustomDatesMap(): Moment[] {
    const config = this.configService.cachedConfig;
    return config.dates.map((x) => moment(x));
  }

  public getNextDate(momentNow: Moment): Date {
    return this.calculateNextPartyDate(momentNow).toDate();
  }

  private getSeptember2ndSaturday(momentNow: Moment): Moment {
    return momentNow
      .clone()
      .month('September')
      .startOf('month')
      .day('Saturday')
      .add(1, 'day')
      .day('Saturday')
      .startOf('day');
  }

  private calculatePartyDateFrom(momentNow: Moment): Moment {
    return this.tryToOverrideWithCustomDate(
      this.getSeptember2ndSaturday(momentNow),
      momentNow
    );
  }

  private calculateNextPartyDate(momentNow: Moment): Moment {
    const thisYearsParty = this.calculatePartyDateFrom(momentNow);
    const partyIsNextYear =
      !this.isToday(momentNow, thisYearsParty) &&
      momentNow.isAfter(thisYearsParty);
    if (partyIsNextYear) {
      const nextYear = momentNow.clone().add(1, 'year');
      return this.calculatePartyDateFrom(nextYear);
    }
    return thisYearsParty;
  }

  private tryToOverrideWithCustomDate(
    generatedNextPartyDate: Moment,
    momentNow: Moment
  ): Moment {
    const futureCustomDates = this.getCustomDatesMap().filter((m) =>
      m.isSameOrAfter(momentNow)
    );
    // There are hardcoded valid custom dates
    if (futureCustomDates.length) {
      return futureCustomDates.reduce((acc, customDate) => {
        // From all future custom dates find closest one to now
        if (customDate.diff(momentNow) < acc.diff(momentNow)) {
          return customDate;
        }
        return acc;
      });
    }
    // No hardcoded valid custom dates
    return generatedNextPartyDate;
  }

  public isToday(momentNow: Moment, nextParty: Moment): boolean {
    const diff = moment(nextParty).diff(momentNow, 'hours', true);
    const HOURS_IN_A_DAY = 24;
    // -24 < diff <= 0
    return diff <= 0 && diff > -HOURS_IN_A_DAY;
  }

  public addToCalendarStart(date: Date): string {
    return moment(date)
      .startOf('day')
      .hour(10)
      .format(NextPartyService.ADD_TO_CALENDAR_FORMAT);
  }

  public addToCalendarEnd(date: Date): string {
    return moment(date)
      .startOf('day')
      .hour(23)
      .format(NextPartyService.ADD_TO_CALENDAR_FORMAT);
  }
}
