import moment from 'moment-timezone';
import { Operation } from '../interface/operation.interface';
import { CustomDiary } from '../diary/custom';
import { DailyDiary } from '../diary/daily';
import { OnceDiary } from '../diary/once';
import { WeeklyDiary } from '../diary/weekly';

export class DiaryValidation implements Operation {
  apply(diary: OnceDiary): void;
  apply(diary: DailyDiary): void;
  apply(diary: WeeklyDiary): void;
  apply(diary: CustomDiary): void;
  apply(diary: any): void {
    if (diary instanceof OnceDiary) this.onceDiaryValidation(diary);
  }

  private onceDiaryValidation(diary: OnceDiary) {
    const date = diary.rawDates[0];
    const { startTime, endTime } = diary.rawTimes;

    const fromDateTime = this.getMomentDateTime(date, startTime);
    const toDateTime = this.getMomentDateTime(date, endTime);
    if (fromDateTime >= toDateTime)
      /// it goes to the next day, after 00:00
      diary.momentDates = [fromDateTime, toDateTime.add(1, 'day')];
    else diary.momentDates = [fromDateTime, toDateTime];
  }

  private getMomentDateTime(date: string, time: string) {
    return moment.utc(`${date} ${time}`, 'YYYY-MM-DD hh:mm');
  }
}
