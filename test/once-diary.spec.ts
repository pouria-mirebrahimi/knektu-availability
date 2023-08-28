import { Availability } from '../src/model/availability/availability';
import { DiaryStatus } from '../src/model/availability/enum/diary.enum';
import { ISingleDay } from '../src/model/availability/interface/datetime.interface';
import { IDiaryInitialization } from '../src/model/availability/interface/diary.interface';
import { OnceAvailability } from '../src/model/availability/once';

describe('Once Diary', () => {
  const dataForOnce: IDiaryInitialization = {
    status: DiaryStatus.ACTIVE,
    dates: ['2023-10-19'],
    time: { startTime: '23:00', endTime: '01:00' },
  };

  let onceAvailability: Availability;
  let onceDiaries: ISingleDay[];

  beforeEach(async () => {
    onceAvailability = new OnceAvailability(dataForOnce);
    onceDiaries = onceAvailability.diaries;
  });

  it('should be defined', () => {
    expect(onceDiaries.length).toEqual(4);
  });
});
