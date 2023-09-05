import { Availability } from '../src/model/availability/availability';
import { DiaryStatus } from '../src/model/availability/enum/diary.enum';
import { DiaryList } from '../src/model/availability/interface/datetime.interface';
import { IDiaryInitialization } from '../src/model/availability/interface/diary.interface';
import { DailyAvailability } from '../src/model/availability/daily';

describe('Daily Diary', () => {
  const dataForDaily: IDiaryInitialization = {
    status: DiaryStatus.ACTIVE,
    dates: ['2023-10-19', '2023-10-20'],
    time: { startTime: '23:30', endTime: '01:00' },
  };

  let dailyAvailability: Availability;
  let dailyDiaries: DiaryList;

  beforeAll(async () => {
    dailyAvailability = new DailyAvailability(dataForDaily);
    dailyDiaries = dailyAvailability.diaries;
  });

  it("module's default export is a class", () => {
    expect(dailyAvailability).toBeInstanceOf(Availability);
  });

  it("availability's diaries is a list of ISingleDays", () => {
    expect(dailyDiaries).toHaveLength(6);
  });

  it("first item in the diaries's is a moment date", () => {
    const firstItem = dailyDiaries.at(0);
    expect(firstItem?.from.toISOString()).toBe('2023-10-19T23:30:00.000Z');
    expect(firstItem?.to.toISOString()).toBe('2023-10-20T00:00:00.000Z');
  });

  it('availabilities without collision', () => {
    const withOutCollisionData: IDiaryInitialization = {
      status: DiaryStatus.ACTIVE,
      dates: ['2023-10-19', '2023-10-20'],
      time: { startTime: '22:00', endTime: '23:00' },
    };

    const availability = new DailyAvailability(withOutCollisionData);
    const hasCollision = dailyAvailability.hasCollisionWith(availability);
    expect(hasCollision).toBe(false);
  });

  it('availabilities with collision', () => {
    const withCollisionData: IDiaryInitialization = {
      status: DiaryStatus.ACTIVE,
      dates: ['2023-10-19', '2023-10-20'],
      time: { startTime: '23:30', endTime: '01:30' },
    };

    const availability = new DailyAvailability(withCollisionData);
    const hasCollision = dailyAvailability.hasCollisionWith(availability);
    expect(hasCollision).toBe(true);
  });

  it('availabilities with collision - diary list version', () => {
    const withCollisionData: IDiaryInitialization = {
      status: DiaryStatus.ACTIVE,
      dates: ['2023-10-19', '2023-10-20'],
      time: { startTime: '23:30', endTime: '01:30' },
    };
    const availability = new DailyAvailability(withCollisionData);

    const listOfSingleDateTimes: DiaryList = availability.diaries;
    const hasCollision = dailyAvailability.hasCollisionWith(
      listOfSingleDateTimes,
    );
    expect(hasCollision).toBe(true);
  });
});
