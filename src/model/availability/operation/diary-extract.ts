import { CustomDiary } from '../diary/custom';
import { DailyDiary } from '../diary/daily';
import { OnceDiary } from '../diary/once';
import { WeeklyDiary } from '../diary/weekly';
import { Operation } from '../interface/operation.interface';
// import { IDate, ITime } from '../interface/datetime.interface';
// import { getMomentDateTime } from '../utils/moment-util';

export class DiaryExtraction implements Operation {
  apply(diary: OnceDiary): void;
  apply(diary: DailyDiary): void;
  apply(diary: WeeklyDiary): void;
  apply(diary: CustomDiary): void;
  apply(diary: any): void {
    console.log(`Extracting operation  - ${diary.type} diary`);

    // const dates: IDate[] = diary.rawDates;
    // const { startTime, endTime }: ITime = diary.rawTimes;
    // this.fixFinalDate(dates, startTime, endTime);
  }

  // private fixFinalDate(
  //   dates: IDate[],
  //   startTime: string,
  //   endTime: string,
  // ): moment.Moment[] {
  //   const firstDay = getMomentDateTime(dates.at(0), startTime);
  //   const lastDayStart = getMomentDateTime(dates.at(-1), startTime);
  //   const lastDayEnd = getMomentDateTime(dates.at(-1), endTime);
  //   if (lastDayStart >= lastDayEnd)
  //     /// it goes to the next day, after 00:00
  //     return [firstDay, lastDayEnd.add(1, 'day')] as moment.Moment[];
  //   return [firstDay, lastDayEnd] as moment.Moment[];
  // }
}
