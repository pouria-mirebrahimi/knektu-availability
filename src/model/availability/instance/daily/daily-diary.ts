import { DiaryStatus, DiaryType } from '../../enum/diary.enum';
import { IDateTime } from '../../interface/datetime.interface';
import { InitDataDailyAvailability } from '../../interface/diary.interface';
import { IDiary } from '../../interface/diary.interface';

export class DailyDiary implements IDiary {
  details: IDateTime[];
  readonly type: DiaryType = DiaryType.DAILY;

  private status: DiaryStatus;
  private startDateTime: IDateTime;
  private endDateTime: IDateTime;

  validate(): void {
    console.log('Daily Diary is valid.');
  }

  log(): void {
    console.log(this.type, 'availability');
    console.log('Status: ', this.status);
    console.log('startTime: ', this.startDateTime);
    console.log('endTime: ', this.endDateTime);
  }

  setDiaryData(data: InitDataDailyAvailability): void {
    const { status, dates, time } = data;
    this.status = status;
    this.startDateTime = { date: dates[0], time };
    this.endDateTime = { date: dates[0], time };
  }
}
