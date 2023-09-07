import { Availability } from '../src/model/availability/availability';
import { DiaryStatus } from '../src/model/availability/enum/diary.enum';
import { DiaryList } from '../src/model/availability/interface/datetime.interface';
import { IDiaryInitialization } from '../src/model/availability/interface/diary.interface';
import { OnceAvailability } from '../src/model/availability/once';

describe('Once Diary', () => {
  const dataForOnce: IDiaryInitialization = {
    status: DiaryStatus.ACTIVE,
    dates: ['2023-10-19'],
    time: { startTime: '23:00', endTime: '01:00' },
  };

  let onceAvailability: Availability;
  let onceDiaries: DiaryList;

  beforeAll(async () => {
    onceAvailability = new OnceAvailability(dataForOnce);
    onceDiaries = onceAvailability.diaries;
  });

  it("module's default export is a class", () => {
    expect(onceAvailability).toBeInstanceOf(Availability);
  });

  it('should be abe to calc the duration', () => {
    expect(onceAvailability.duration).toBe(120);
  });

  it("availability's diaries is a list of ISingleDays", () => {
    expect(onceDiaries).toHaveLength(4);
  });

  it("first item in the diaries's is a moment date", () => {
    const firstItem = onceDiaries.at(0);
    expect(firstItem?.from.toISOString()).toBe('2023-10-19T23:00:00.000Z');
    expect(firstItem?.to.toISOString()).toBe('2023-10-19T23:30:00.000Z');
  });

  it('availabilities without collision', () => {
    const withOutCollisionData: IDiaryInitialization = {
      status: DiaryStatus.ACTIVE,
      dates: ['2023-10-19'],
      time: { startTime: '22:00', endTime: '23:00' },
    };

    const availability = new OnceAvailability(withOutCollisionData);
    const hasCollision = onceAvailability.hasCollisionWith(availability);
    expect(hasCollision).toBe(false);
  });

  it('availabilities with collision', () => {
    const withCollisionData: IDiaryInitialization = {
      status: DiaryStatus.ACTIVE,
      dates: ['2023-10-19'],
      time: { startTime: '22:00', endTime: '23:30' },
    };

    const availability = new OnceAvailability(withCollisionData);
    const hasCollision = onceAvailability.hasCollisionWith(availability);
    expect(hasCollision).toBe(true);
  });
});
