import { OnceDiary } from './once-diary';
import { Availability } from '../availability';
import { IDiary } from '../interface/diary.interface';
import { InitDataOnceAvailability } from '../interface/diary.interface';

export class OnceAvailability extends Availability {
  protected createInstance(data: InitDataOnceAvailability): IDiary {
    const instance = new OnceDiary();
    instance.fill(data);

    return instance;
  }
}
