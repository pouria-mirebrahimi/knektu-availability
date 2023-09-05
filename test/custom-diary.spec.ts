import { Availability } from '../src/model/availability/availability';
import { DiaryStatus } from '../src/model/availability/enum/diary.enum';
import { DiaryList } from '../src/model/availability/interface/datetime.interface';
import { IDiaryInitialization } from '../src/model/availability/interface/diary.interface';
import { CustomAvailability } from '../src/model/availability/custom';

describe('Custom Diary', () => {
  const dataForCustom: IDiaryInitialization = {
    status: DiaryStatus.ACTIVE,
    dates: ['2023-10-10', '2023-10-12', '2023-10-15'],
    time: { startTime: '23:00', endTime: '00:30' },
  };

  let customAvailability: Availability;
  let customDiaries: DiaryList;

  beforeAll(async () => {
    customAvailability = new CustomAvailability(dataForCustom);
    customDiaries = customAvailability.diaries;
  });

  it("module's default export is a class", () => {
    expect(customAvailability).toBeInstanceOf(Availability);
  });

  it("availability's diaries is a list of ISingleDays", () => {
    expect(customDiaries).toHaveLength(9);
  });

  it("first item in the diaries's is a moment date", () => {
    const firstItem = customDiaries.at(0);
    expect(firstItem?.from.toISOString()).toBe('2023-10-10T23:00:00.000Z');
    expect(firstItem?.to.toISOString()).toBe('2023-10-10T23:30:00.000Z');
  });

  it('availabilities without collision', () => {
    const withOutCollisionData: IDiaryInitialization = {
      status: DiaryStatus.ACTIVE,
      dates: ['2023-10-19', '2023-10-20'],
      time: { startTime: '08:00', endTime: '14:00' },
    };

    const availability = new CustomAvailability(withOutCollisionData);
    const hasCollision = customAvailability.hasCollisionWith(availability);
    expect(hasCollision).toBe(false);
  });

  it('availabilities with collision', () => {
    const withCollisionData: IDiaryInitialization = {
      status: DiaryStatus.ACTIVE,
      dates: ['2023-10-11', '2023-10-12'],
      time: { startTime: '17:30', endTime: '23:30' },
    };

    const availability = new CustomAvailability(withCollisionData);
    const hasCollision = customAvailability.hasCollisionWith(availability);
    expect(hasCollision).toBe(true);
  });
});
