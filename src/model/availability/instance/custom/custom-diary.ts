import { DiaryStatus, DiaryType } from '../../enum/diary.enum';
import { IDate, IDateTime, ITime } from '../../interface/datetime.interface';
import { IDiary } from '../../interface/diary.interface';
import { IDiaryInitialization } from '../../interface/diary.interface';

export class CustomDiary implements IDiary {
  readonly type: DiaryType = DiaryType.CUSTOM;
  details: IDateTime[];

  private status: DiaryStatus;
  private dates: IDate[];
  private time: ITime;

  validate(): void {
    console.log(`Custom diary is valid.`);
  }

  log(): void {
    console.log('type: ', this.type);
    console.log('status: ', this.status);
    console.log('dates: ', this.dates);
    console.log('time: ', this.time);
  }

  setDiaryData(data: IDiaryInitialization) {
    const { status, dates, time } = data;
    this.status = status;
    this.dates = dates;
    this.time = time;
  }
}
