import { Operation } from '../interface/operation.interface';
import { CustomDiary } from '../diary/custom';
import { DailyDiary } from '../diary/daily';
import { OnceDiary } from '../diary/once';
import { WeeklyDiary } from '../diary/weekly';
import { IDate, ITime } from '../interface/datetime.interface';
import { getMomentDateTime, isPast } from '../utils/moment-util';
import { DiaryType } from '../enum/diary.enum';
import { validateDateFormat, validateTimeFormat } from '../utils/format-util';

export class DiaryValidation implements Operation {
  apply(diary: OnceDiary): void;
  apply(diary: DailyDiary): void;
  apply(diary: WeeklyDiary): void;
  apply(diary: CustomDiary): void;
  apply(diary: any): void {
    this.diaryValidation(diary);
  }

  private diaryValidation(diary: OnceDiary) {
    const dates: IDate[] = diary.rawDates;
    const { startTime, endTime }: ITime = diary.rawTimes;

    this.checkValidFormat(dates, startTime, endTime);
    this.checkDatesCount(diary.type, dates?.length);
    this.checkDatesOrder(dates);
    this.checkPastDate(dates.at(0), startTime);
  }

  private checkValidFormat(dates: IDate[], startTime: string, endTime: string) {
    validateDateFormat(dates);
    validateTimeFormat([startTime, endTime]);
  }

  private checkDatesCount(type: DiaryType, length: number) {
    switch (type) {
      case DiaryType.ONCE:
        if (length !== 1)
          throw new Error(
            `Invalid number of date records, wanted 1, got ${length}.`,
          );
        break;
      case DiaryType.DAILY:
      case DiaryType.WEEKLY:
        if (length !== 2)
          throw new Error(
            `Invalid number of date records, wanted 2, got ${length}.`,
          );
        break;
    }
  }

  private checkDatesOrder(dates: IDate[]) {
    for (const i in dates) {
      this.compare(dates[+i], dates[+i + 1]);
    }
  }

  private checkPastDate(date: IDate, time: string) {
    const theDate = getMomentDateTime(date, time);
    if (isPast(theDate)) throw new Error('Starting dateTime is past.');
  }

  private compare(
    first: IDate,
    second: IDate | undefined,
    message: string = 'Dates are not ordered.',
  ): void {
    if (!!second) {
      const firstDay = getMomentDateTime(first, '00:00');
      const secondDay = getMomentDateTime(second, '00:00');
      if (firstDay > secondDay) throw new Error(message);
    }
  }
}
