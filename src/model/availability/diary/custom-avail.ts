import { Availability } from '../availability';
import { IDiary } from '../interface/diary.interface';
import { CustomDiary } from './custom-diary';
import { InitDataCustomAvailability } from '../interface/diary.interface';

export class CustomAvailability extends Availability {
  protected createInstance(data: InitDataCustomAvailability): IDiary {
    const instance = new CustomDiary();
    instance.fill(data);

    return instance;
  }
}
