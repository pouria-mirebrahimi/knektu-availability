import { DiaryStatus, DiaryType } from '../enum/diary.enum';
import { IDate, IDateTime, ITime } from '../interface/datetime.interface';
import { IDiary } from '../interface/diary.interface';
import { IDiaryInitialization } from '../interface/diary.interface';
import { Operation } from '../interface/operation.interface';

export class CustomDiary implements IDiary {
  readonly type: DiaryType = DiaryType.CUSTOM;
  details: IDateTime[];

  public status: DiaryStatus;
  public dates: IDate[];
  public time: ITime;

  execute(operation: Operation): void {
    operation.apply(this);
  }

  fill(data: IDiaryInitialization) {
    const { status, dates, time } = data;
    this.status = status;
    this.dates = dates;
    this.time = time;
  }
}
