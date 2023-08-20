import { CustomDiary } from '../diary/custom';
import { DailyDiary } from '../diary/daily';
import { OnceDiary } from '../diary/once';
import { WeeklyDiary } from '../diary/weekly';

export interface Operation {
  apply(diary: OnceDiary): void;
  apply(diary: DailyDiary): void;
  apply(diary: WeeklyDiary): void;
  apply(diary: CustomDiary): void;
}
