import { Availability } from '../src/model/availability/availability';
import { DiaryStatus } from '../src/model/availability/enum/diary.enum';
import { ISingleDay } from '../src/model/availability/interface/datetime.interface';
import { IDiaryInitialization } from '../src/model/availability/interface/diary.interface';
import { WeeklyAvailability } from '../src/model/availability/weekly';

describe('Weekly Diary', () => {
  const dataForWeekly: IDiaryInitialization = {
    status: DiaryStatus.ACTIVE,
    dates: ['2023-10-10', '2023-10-19'],
    time: { startTime: '22:00', endTime: '23:30' },
  };

  let weeklyAvailability: Availability;
  let weeklyDiaries: ISingleDay[];

  beforeAll(async () => {
    weeklyAvailability = new WeeklyAvailability(dataForWeekly);
    weeklyDiaries = weeklyAvailability.diaries;
  });

  it("module's default export is a class", () => {
    expect(weeklyAvailability).toBeInstanceOf(Availability);
  });

  it("availability's diaries is a list of ISingleDays", () => {
    expect(weeklyDiaries).toHaveLength(6);
  });

  it("first item in the diaries's is a moment date", () => {
    const firstItem = weeklyDiaries.at(0);
    expect(firstItem?.from.toISOString()).toBe('2023-10-10T22:00:00.000Z');
    expect(firstItem?.to.toISOString()).toBe('2023-10-10T22:30:00.000Z');
  });

  it('availabilities without collision', () => {
    const withOutCollisionData: IDiaryInitialization = {
      status: DiaryStatus.ACTIVE,
      dates: ['2023-10-19', '2023-10-20'],
      time: { startTime: '08:00', endTime: '14:00' },
    };

    const availability = new WeeklyAvailability(withOutCollisionData);
    const hasCollision = weeklyAvailability.hasCollisionWith(availability);
    expect(hasCollision).toBe(false);
  });

  it('availabilities with collision', () => {
    const withCollisionData: IDiaryInitialization = {
      status: DiaryStatus.ACTIVE,
      dates: ['2023-10-10', '2023-11-19'],
      time: { startTime: '17:30', endTime: '22:30' },
    };

    const availability = new WeeklyAvailability(withCollisionData);
    const hasCollision = weeklyAvailability.hasCollisionWith(availability);
    expect(hasCollision).toBe(true);
  });
});
