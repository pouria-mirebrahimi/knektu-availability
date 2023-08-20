import { Availability } from '../availability';
import { DailyDiary } from './daily-diary';
import { IDiary } from '../interface/diary.interface';
import { InitDataDailyAvailability } from '../interface/diary.interface';

export class DailyAvailability extends Availability {
  protected createInstance(data: InitDataDailyAvailability): IDiary {
    const instance = new DailyDiary();
    instance.fill(data);

    return instance;
  }
}
