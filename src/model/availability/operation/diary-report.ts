import { CustomDiary } from '../diary/custom';
import { DailyDiary } from '../diary/daily';
import { OnceDiary } from '../diary/once';
import { WeeklyDiary } from '../diary/weekly';
import { Operation } from '../interface/operation.interface';

export class DiaryReport implements Operation {
  apply(diary: OnceDiary): void;
  apply(diary: DailyDiary): void;
  apply(diary: WeeklyDiary): void;
  apply(diary: CustomDiary): void;
  apply(diary: any): void {
    console.log(`Reporting operation  - ${diary.type} diary`);
  }
}
