import { DiaryStatus, DiaryType } from '../enum/diary.enum';
import { IDate, IDateTime, ITime } from './datetime.interface';
import { Operation } from './operation.interface';

export interface IDiary {
  type: DiaryType;
  diaries: IDateTime[];

  execute(operation: Operation): void;
  fill(data: IDiaryInitialization): void;

  set momentDates(values: moment.Moment[]);
  get momentDates(): moment.Moment[];
  get status(): DiaryStatus;
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
