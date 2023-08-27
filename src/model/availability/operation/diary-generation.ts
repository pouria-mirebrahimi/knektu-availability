import { Operation } from '../interface/operation.interface';
import { CustomDiary } from '../diary/custom';
import { DailyDiary } from '../diary/daily';
import { OnceDiary } from '../diary/once';
import { WeeklyDiary } from '../diary/weekly';
import { ISingleDay } from '../interface/datetime.interface';

export class DiaryGeneration implements Operation {
  apply(diary: OnceDiary): void;
  apply(diary: DailyDiary): void;
  apply(diary: WeeklyDiary): void;
  apply(diary: CustomDiary): void;
  apply(diary: any): void {
    diary.momentDates.forEach((elem: ISingleDay) => {
      diary.diaries.push(...this.generateDetailsFor(elem));
    });
  }

  private generateDetailsFor(day: ISingleDay): ISingleDay[] {
    const { from: firstEntry, to: lastEntry } = day;
    const diaries: ISingleDay[] = [];

    const currentPtr_ = firstEntry.clone();
    while (currentPtr_ < lastEntry) {
      const from = currentPtr_.clone();
      const to = currentPtr_.clone().add(30, 'minutes');
      diaries.push({ from, to });
      currentPtr_.add(30, 'minutes');
    }

    return diaries;
  }
}
