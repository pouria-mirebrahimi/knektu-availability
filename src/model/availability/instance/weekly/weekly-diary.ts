import { DiaryStatus, DiaryType } from '../../enum/diary.enum';
import { IDate, IDateTime, ITime } from '../../interface/datetime.interface';
import { InitDataWeeklyAvailability } from '../../interface/diary.interface';
import { IDiary } from '../../interface/diary.interface';

export class WeeklyDiary implements IDiary {
  type: DiaryType = DiaryType.WEEKLY;
  details: IDateTime[];

  private status: DiaryStatus;
  private startDate: IDate;
  private endDate: IDate;
  private time: ITime;

  validate(): void {
    console.log('Weekly diary is valid.');
  }

  log(): void {
    console.log('type: ', this.type);
    console.log('status: ', this.status);
    console.log('startDate: ', this.startDate);
    console.log('endDate: ', this.endDate);
    console.log('time: ', this.time);
  }

  setDiaryData(data: InitDataWeeklyAvailability) {
    const { status, dates, time } = data;
    this.status = status;
    this.startDate = dates[0];
    this.endDate = dates[1];
    this.time = time;
  }
}
