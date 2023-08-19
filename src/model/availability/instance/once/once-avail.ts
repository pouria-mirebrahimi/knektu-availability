import { Availability } from '../../availability';
import {
  IDiary,
  InitDataOnceAvailability,
} from '../../interface/diary.interface';
import { OnceDiary } from './once-diary';

export class OnceAvailability extends Availability {
  protected createInstance(data: InitDataOnceAvailability): IDiary {
    const instance = new OnceDiary();
    instance.setDiaryData(data);

    return instance;
  }
}
