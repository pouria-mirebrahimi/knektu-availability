import { DiaryStatus, DiaryType } from '../enum/diary.enum';
import { IDate, ISingleDay, ITime } from '../interface/datetime.interface';
import { DiaryList } from '../interface/datetime.interface';
import { IDiary } from '../interface/diary.interface';
import { IDiaryInitialization } from '../interface/diary.interface';
import { Operation } from '../interface/operation.interface';

export class CustomDiary implements IDiary {
  readonly type: DiaryType = DiaryType.CUSTOM;
  public diaries: DiaryList = [];

  #status_: DiaryStatus;
  #date_: IDate[];
  #time_: ITime;

  #dateTimes_: DiaryList;

  execute(operation: Operation): void {
    operation.apply(this);
  }

  fill(data: IDiaryInitialization) {
    const { status, dates, time } = data;
    this.#status_ = status;
    this.#date_ = dates;
    this.#time_ = time;
  }

  public pushMomentDate(date: ISingleDay): void {
    if (!!this.#dateTimes_) this.#dateTimes_.push(date);
    else this.#dateTimes_ = [date];
  }

  public set momentDates(values: DiaryList) {
    this.#dateTimes_ = values;
  }

  public get momentDates(): DiaryList {
    return this.#dateTimes_;
  }

  public get status(): DiaryStatus {
    return this.#status_;
  }

  public get rawDates(): IDate[] {
    return this.#date_;
  }

  public get rawTimes(): ITime {
    return this.#time_;
  }
}
