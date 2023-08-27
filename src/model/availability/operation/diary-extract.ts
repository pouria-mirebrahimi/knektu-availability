import { CustomDiary } from '../diary/custom';
import { DailyDiary } from '../diary/daily';
import { OnceDiary } from '../diary/once';
import { WeeklyDiary } from '../diary/weekly';
import { Operation } from '../interface/operation.interface';
import { IDate, ITime } from '../interface/datetime.interface';
import { getMomentDateTime } from '../utils/moment-util';
import { DiaryType } from '../enum/diary.enum';

export class DiaryExtraction implements Operation {
  apply(diary: OnceDiary): void;
  apply(diary: DailyDiary): void;
  apply(diary: WeeklyDiary): void;
  apply(diary: CustomDiary): void;
  apply(diary: any): void {
    const isBiased = this.ifLastDayBiased(diary);
    this.extract(diary, isBiased);
  }

  private ifLastDayBiased(diary: any): boolean {
    const dates: IDate[] = diary.rawDates;
    const { startTime, endTime }: ITime = diary.rawTimes;

    const lastDayStart = getMomentDateTime(dates.at(-1), startTime);
    const lastDayEnd = getMomentDateTime(dates.at(-1), endTime);
    return lastDayStart >= lastDayEnd;
  }

  private extract(diary: any, bias: boolean) {
    if (diary.type === DiaryType.ONCE)
      this.extractOnceDiaryAllDates(diary, bias);
    else if (diary.type === DiaryType.CUSTOM)
      this.extractCustomDiaryAllDates(diary, bias);
    else if ([DiaryType.DAILY, DiaryType.WEEKLY].includes(diary.type))
      this.extractRepeatedDiaryAllDates(diary, bias);
    else throw new Error(`The diary type ${diary.type} is not supported.`);
  }

  private extractOnceDiaryAllDates(diary: any, bias: boolean) {
    const dates: IDate[] = diary.rawDates;
    const { startTime, endTime }: ITime = diary.rawTimes;

    const from = getMomentDateTime(dates.at(0), startTime);
    const to = getMomentDateTime(dates.at(0), endTime);
    if (bias) to.add(1, 'day');
    diary.momentDates = [{ from, to }];
  }

  private extractCustomDiaryAllDates(diary: any, bias: boolean) {
    const dates: IDate[] = diary.rawDates;
    const { startTime, endTime }: ITime = diary.rawTimes;

    dates.forEach((date) => {
      const from = getMomentDateTime(date, startTime);
      const to = getMomentDateTime(date, endTime);
      if (bias) to.add(1, 'day');
      diary.pushMomentDate({ from, to });
    });
  }

  private extractRepeatedDiaryAllDates(diary: any, bias: boolean) {
    const dates: IDate[] = diary.rawDates;
    const { startTime, endTime }: ITime = diary.rawTimes;

    const currentPtr_ = getMomentDateTime(dates.at(0), startTime);
    const lastDay = getMomentDateTime(dates.at(1), endTime);
    if (bias) lastDay.add(1, 'day');

    const hour = +endTime.split(':')[0];
    const minute = +endTime.split(':')[1];

    while (currentPtr_ <= lastDay) {
      const from = currentPtr_.clone();
      const to = currentPtr_.clone();
      to.set({
        hour,
        minute,
      });
      if (bias) to.add(1, 'day');
      diary.pushMomentDate({ from, to });

      // go to the next day/week
      if (diary.type === DiaryType.DAILY) currentPtr_.add(1, 'day');
      else if (diary.type === DiaryType.WEEKLY) currentPtr_.add(7, 'days');
    }
  }
}
