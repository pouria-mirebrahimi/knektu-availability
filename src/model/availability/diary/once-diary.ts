import { DiaryStatus, DiaryType } from '../enum/diary.enum';
import { IDate, IDateTime, ITime } from '../interface/datetime.interface';
import { IDiary } from '../interface/diary.interface';
import { InitDataOnceAvailability } from '../interface/diary.interface';
import { Operation } from '../interface/operation.interface';

export class OnceDiary implements IDiary {
  details: IDateTime[];
  readonly type: DiaryType = DiaryType.ONCE;

  public status: DiaryStatus;
  public date: IDate;
  public time: ITime;

  execute(operation: Operation): void {
    operation.apply(this);
  }

  fill(data: InitDataOnceAvailability): void {
    const { status, dates, time } = data;
    this.status = status;
    this.date = dates[0];
    this.time = time;
  }
}
