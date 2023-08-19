import moment from 'moment-timezone';
import { DiaryStatus } from './model/availability/enum/diary.enum';
import { InitDataWeeklyAvailability } from './model/availability/interface/diary.interface';
import { InitDataCustomAvailability } from './model/availability/interface/diary.interface';
import { InitDataDailyAvailability } from './model/availability/interface/diary.interface';
import { InitDataOnceAvailability } from './model/availability/interface/diary.interface';
import { OnceAvailability } from './model/availability/instance/once/once-avail';
import { DailyAvailability } from './model/availability/instance/daily/daily-avail';
import { CustomAvailability } from './model/availability/instance/custom/custom-avail';
import { WeeklyAvailability } from './model/availability/instance/weekly/weekly-avail';

const dateTime = moment.tz(
  'May 30th 2023 8:30PM',
  'MMM Do YYYY h:mA',
  'Asia/Tehran',
);
console.log(moment().startOf('minutes').from(dateTime));

/// NOTE - Once availability
const dataForOnce: InitDataOnceAvailability = {
  status: DiaryStatus.ACTIVE,
  dates: ['2023-08-19'],
  time: { startTime: '12:30', endTime: '13:00' },
};

const onceAvailability = new OnceAvailability(dataForOnce);
onceAvailability.getDiaries();

/// NOTE - Daily availability
const dataForDaily: InitDataDailyAvailability = {
  status: DiaryStatus.ACTIVE,
  dates: ['2023-08-19', '2023-08-25'],
  time: { startTime: '12:30', endTime: '13:00' },
};

const dailyAvailability = new DailyAvailability(dataForDaily);
dailyAvailability.getDiaries();

/// NOTE - Custom availability
const dataForCustom: InitDataCustomAvailability = {
  status: DiaryStatus.ACTIVE,
  dates: ['2023-09-10', '2023-09-12', '2023-09-15'],
  time: { startTime: '08:00', endTime: '21:00' },
};

const customAvailability = new CustomAvailability(dataForCustom);
customAvailability.getDiaries();

/// NOTE - Weekly availability
const dataForWeekly: InitDataWeeklyAvailability = {
  status: DiaryStatus.ACTIVE,
  dates: ['2023-09-10', '2023-09-15'],
  time: { startTime: '08:00', endTime: '21:00' },
};

const weeklyAvailability = new WeeklyAvailability(dataForWeekly);
weeklyAvailability.getDiaries();
