import { Availability } from '../../availability';
import { IDiary } from '../../interface/diary.interface';
import { InitDataWeeklyAvailability } from '../../interface/diary.interface';
import { WeeklyDiary } from './weekly-diary';

export class WeeklyAvailability extends Availability {
  protected createInstance(data: InitDataWeeklyAvailability): IDiary {
    const instance = new WeeklyDiary();
    instance.setDiaryData(data);

    return instance;
  }
}
