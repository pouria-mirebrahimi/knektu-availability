import { DiaryStatus, DiaryType } from '../enum/diary.enum';
import { IDate, IDateTime, ITime } from './datetime.interface';

export interface IDiary {
  type: DiaryType;
  details: IDateTime[];

  validate(): void;
  log(): void;
  setDiaryData(data: DiaryInitializationDto);
}

export interface DiaryInitializationDto {
  status: DiaryStatus;
  dates: IDate[];
  time: ITime;
}

export type InitDataOnceAvailability = DiaryInitializationDto;
export type InitDataDailyAvailability = DiaryInitializationDto;
