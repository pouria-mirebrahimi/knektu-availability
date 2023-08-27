import { DiaryStatus, DiaryType } from '../enum/diary.enum';
import { IDate, IDateTime, ITime } from '../interface/datetime.interface';
import { ISingleDay } from '../interface/datetime.interface';
import { InitDataWeeklyAvailability } from '../interface/diary.interface';
import { IDiary } from '../interface/diary.interface';
import { Operation } from '../interface/operation.interface';

export class WeeklyDiary implements IDiary {
  type: DiaryType = DiaryType.WEEKLY;
  public diaries: IDateTime[];

  #status_: DiaryStatus;
  #date_: IDate[];
  #time_: ITime;

  #dateTimes_: ISingleDay[];

  execute(operation: Operation): void {
    operation.apply(this);
  }

  fill(data: InitDataWeeklyAvailability) {
    const { status, dates, time } = data;
    this.#status_ = status;
    this.#date_ = dates;
    this.#time_ = time;
  }

  public pushMomentDate(date: ISingleDay): void {
    if (!!this.#dateTimes_) this.#dateTimes_.push(date);
    else this.#dateTimes_ = [date];
  }

  public set momentDates(values: ISingleDay[]) {
    this.#dateTimes_ = values;
  }

  public get momentDates(): ISingleDay[] {
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
