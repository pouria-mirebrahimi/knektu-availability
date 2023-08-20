import { Operation } from '../interface/operation.interface';
import { CustomDiary } from '../diary/custom-diary';
import { DailyDiary } from '../diary/daily-diary';
import { OnceDiary } from '../diary/once-diary';
import { WeeklyDiary } from '../diary/weekly-diary';

export class DiaryValidation implements Operation {
  apply(diary: OnceDiary): void;
  apply(diary: DailyDiary): void;
  apply(diary: WeeklyDiary): void;
  apply(diary: CustomDiary): void;
  apply(diary: any): void {
    console.log(`Validation Operation - ${diary.type} diary`);
  }
}
