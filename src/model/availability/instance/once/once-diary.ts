import { DiaryStatus, DiaryType } from '../../enum/diary.enum';
import { IDate, IDateTime, ITime } from '../../interface/datetime.interface';
import { IDiary } from '../../interface/diary.interface';
import { InitDataOnceAvailability } from '../../interface/diary.interface';

export class OnceDiary implements IDiary {
  details: IDateTime[];
  readonly type: DiaryType = DiaryType.ONCE;

  private status: DiaryStatus;
  private date: IDate;
  private time: ITime;

  validate(): void {
    console.log('Once Diary is valid.');
  }

  log(): void {
    console.log('type: ', this.type);
    console.log('Status: ', this.status);
    console.log('date: ', this.date);
    console.log('time: ', this.time);
  }

  setDiaryData(data: InitDataOnceAvailability): void {
    const { status, dates, time } = data;
    this.status = status;
    this.date = dates[0];
    this.time = time;
  }
}
