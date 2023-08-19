import { DiaryStatus, DiaryType } from '../../enum/diary.enum';
import { IDate, IDateTime, ITime } from '../../interface/datetime.interface';
import { InitDataDailyAvailability } from '../../interface/diary.interface';
import { IDiary } from '../../interface/diary.interface';

export class DailyDiary implements IDiary {
  details: IDateTime[];
  readonly type: DiaryType = DiaryType.DAILY;

  private status: DiaryStatus;
  private startDate: IDate;
  private endDate: IDate;
  private time: ITime;

  validate(): void {
    console.log('Daily Diary is valid.');
  }

  log(): void {
    console.log('type: ', this.type);
    console.log('Status: ', this.status);
    console.log('startDate: ', this.startDate);
    console.log('endDate: ', this.endDate);
    console.log('time: ', this.time);
  }

  setDiaryData(data: InitDataDailyAvailability): void {
    const { status, dates, time } = data;
    console.log('data');
    this.status = status;
    this.startDate = dates[0];
    this.endDate = dates[1];
    this.time = time;
  }
}
