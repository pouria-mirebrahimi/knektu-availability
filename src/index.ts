import moment from 'moment-timezone';
import { OnceAvailability } from './model/availability/instance/once/once-avail';
import { DiaryStatus } from './model/availability/enum/diary.enum';
import { InitDataOnceAvailability } from './model/availability/interface/diary.interface';

const dateTime = moment.tz(
  'May 30th 2023 8:30PM',
  'MMM Do YYYY h:mA',
  'Asia/Tehran',
);
console.log(moment().startOf('minutes').from(dateTime));

const dataForOnce: InitDataOnceAvailability = {
  status: DiaryStatus.ACTIVE,
  dates: ['2023-08-19'],
  time: { startTime: '12:30', endTime: '13:00' },
};

const onceAvailability = new OnceAvailability(dataForOnce);
onceAvailability.getDiaries();
