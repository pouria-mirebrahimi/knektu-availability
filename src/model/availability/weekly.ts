import { Availability } from './availability';
import { IDiary } from './interface/diary.interface';
import { InitDataWeeklyAvailability } from './interface/diary.interface';
import { WeeklyDiary } from './diary/weekly';

export class WeeklyAvailability extends Availability {
  protected createInstance(data: InitDataWeeklyAvailability): IDiary {
    const instance = new WeeklyDiary();
    instance.fill(data);

    return instance;
  }
}
