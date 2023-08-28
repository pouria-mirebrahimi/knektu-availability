import { expectType } from 'tsd';
import { Availability } from '../src/model/availability/availability';
import { IDiary } from '../src/model/availability/interface/diary.interface';
import { IDiaryInitialization } from '../src/model/availability/interface/diary.interface';
import { DiaryStatus } from '../src/model/availability/enum/diary.enum';
import { OnceAvailability } from '../src/model/availability/once';

/// NOTE - allowed return types
expectType<ReturnType<Availability['createInstance']>>({} as IDiary);
expectType<ReturnType<Availability['preprocessing']>>(undefined);
expectType<ReturnType<Availability['hasCollisionWith']>>({} as boolean);

/// NOTE - the parameter of the methods in the Availability classes
const data: IDiaryInitialization = {
  status: DiaryStatus.ACTIVE,
  dates: [],
  time: { startTime: '', endTime: '' },
};
expectType<Parameters<Availability['createInstance']>>([data]);
expectType<Parameters<Availability['preprocessing']>>([]);

const availability = new OnceAvailability(data);
expectType<Parameters<Availability['hasCollisionWith']>>([availability]);
