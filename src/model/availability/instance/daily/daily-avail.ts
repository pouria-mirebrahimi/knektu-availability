import { Availability } from '../../availability';
import { DailyDiary } from './daily-diary';
import { IDiary } from '../../interface/diary.interface';

export class DailyAvailability extends Availability {
  protected createInstance(): IDiary {
    return new DailyDiary();
  }
}
