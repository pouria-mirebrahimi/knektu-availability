import moment from 'moment-timezone';
import { DiaryStatus } from './model/availability/enum/diary.enum';
import { IDiaryInitialization } from './model/availability/interface/diary.interface';
import { OnceAvailability } from './model/availability/once';
import { DailyAvailability } from './model/availability/daily';
import { CustomAvailability } from './model/availability/custom';
import { WeeklyAvailability } from './model/availability/weekly';

const dateTime = moment.tz(
  'May 30th 2023 8:30PM',
  'MMM Do YYYY h:mA',
  'Asia/Tehran',
);
console.log(moment().startOf('minutes').from(dateTime));

/// <------------------------------------------------------>

/// NOTE - Once availability
const dataForOnce: IDiaryInitialization = {
  status: DiaryStatus.ACTIVE,
  dates: ['2023-10-19'],
  time: { startTime: '08:00', endTime: '01:00' },
};

const onceAvailability = new OnceAvailability(dataForOnce);
const onceDiaries = onceAvailability.diary();
console.log(onceDiaries);

/// <------------------------------------------------------>

/// NOTE - Daily availability
const dataForDaily: IDiaryInitialization = {
  status: DiaryStatus.ACTIVE,
  dates: ['2023-10-19', '2023-10-25'],
  time: { startTime: '12:30', endTime: '21:30' },
};

const dailyAvailability = new DailyAvailability(dataForDaily);
const dailyDiaries = dailyAvailability.diary();
console.log(dailyDiaries);

/// <------------------------------------------------------>

/// NOTE - Custom availability
const dataForCustom: IDiaryInitialization = {
  status: DiaryStatus.ACTIVE,
  dates: ['2023-10-10', '2023-10-12', '2023-10-15'],
  time: { startTime: '08:00', endTime: '01:00' },
};

const customAvailability = new CustomAvailability(dataForCustom);
const customDiaries = customAvailability.diary();
console.log(customDiaries);

/// <------------------------------------------------------>

/// NOTE - Weekly availability
const dataForWeekly: IDiaryInitialization = {
  status: DiaryStatus.ACTIVE,
  dates: ['2023-10-10', '2023-11-12'],
  time: { startTime: '08:00', endTime: '22:00' },
};

const weeklyAvailability = new WeeklyAvailability(dataForWeekly);
const weeklyDiaries = weeklyAvailability.diary();
console.log(weeklyDiaries);
