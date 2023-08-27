import { Operation } from '../interface/operation.interface';
import { CustomDiary } from '../diary/custom';
import { DailyDiary } from '../diary/daily';
import { OnceDiary } from '../diary/once';
import { WeeklyDiary } from '../diary/weekly';
import { IDate, ITime } from '../interface/datetime.interface';
import { getMomentDateTime, isPast } from '../utils/moment-util';

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
    const { startTime }: ITime = diary.rawTimes;

    this.checkDatesOrder(dates);
    this.checkPastDate(dates.at(0), startTime);
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
