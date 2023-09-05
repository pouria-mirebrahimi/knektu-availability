import { expectType } from 'tsd';
import { IDiary } from '../src/model/availability/interface/diary.interface';
import { DiaryType } from '../src/model/availability/enum/diary.enum';
import { DiaryStatus } from '../src/model/availability/enum/diary.enum';
import { Availability } from '../src/model/availability/availability';
import { DiaryList } from '../src/model/availability/interface/datetime.interface';

/// NOTE - allowed properties types - important ones
const sampleDiaryType: DiaryType = DiaryType.DAILY;
expectType<IDiary['type']>(sampleDiaryType);

const sampleDiaryStatus: DiaryStatus = DiaryStatus.ACTIVE;
expectType<IDiary['status']>(sampleDiaryStatus);

const diariesType: DiaryList = [];
expectType<Availability['diaries']>(diariesType);

/// NOTE - only the following properties/methods are available in the IDiary
expectType<
  | 'type'
  | 'diaries'
  | 'execute'
  | 'fill'
  | 'status'
  | 'rawDates'
  | 'rawTimes'
  | 'momentDates'
>('type' as keyof IDiary);

/// NOTE - only these parameters/methods are available in the Availability classes
expectType<
  | '#diary_'
  | 'createInstance'
  | 'preprocessing'
  | 'hasCollisionWith'
  | 'diaries'
  | 'status'
  | 'type'
>('#diary_' as keyof Availability);
