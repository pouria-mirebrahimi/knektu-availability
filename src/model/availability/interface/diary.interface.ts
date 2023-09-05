import { DiaryStatus, DiaryType } from '../enum/diary.enum';
import { IDate, ISingleDay, ITime } from './datetime.interface';
import { Operation } from './operation.interface';

export interface IDiary {
  type: DiaryType;
  diaries: DiaryList;

  execute(operation: Operation): void;
  fill(data: IDiaryInitialization): void;

  set momentDates(values: DiaryList);
  get momentDates(): DiaryList;

  get status(): DiaryStatus;
  set status(status: DiaryStatus);

  get rawDates(): IDate[];
  get rawTimes(): ITime;
}

export interface IDiaryInitialization {
  status: DiaryStatus;
  dates: IDate[];
  time: ITime;
}

export type InitDataOnceAvailability = IDiaryInitialization;
export type InitDataDailyAvailability = IDiaryInitialization;
export type InitDataCustomAvailability = IDiaryInitialization;
export type InitDataWeeklyAvailability = IDiaryInitialization;
