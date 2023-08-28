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
  time: { startTime: '23:00', endTime: '01:00' },
};

const onceAvailability = new OnceAvailability(dataForOnce);
const onceDiaries = onceAvailability.diaries;
console.log(onceDiaries);

/// <------------------------------------------------------>

/// NOTE - Daily availability
const dataForDaily: IDiaryInitialization = {
  status: DiaryStatus.ACTIVE,
  dates: ['2023-10-19', '2023-10-20'],
  time: { startTime: '23:00', endTime: '00:00' },
};

const dailyAvailability = new DailyAvailability(dataForDaily);
const dailyDiaries = dailyAvailability.diaries;
console.log(dailyDiaries);

/// <------------------------------------------------------>

/// NOTE - Custom availability
const dataForCustom: IDiaryInitialization = {
  status: DiaryStatus.ACTIVE,
  dates: ['2023-10-10', '2023-10-12', '2023-10-15'],
  time: { startTime: '23:00', endTime: '00:30' },
};

const customAvailability = new CustomAvailability(dataForCustom);
const customDiaries = customAvailability.diaries;
console.log(customDiaries);

/// <------------------------------------------------------>

/// NOTE - Weekly availability
const dataForWeekly: IDiaryInitialization = {
  status: DiaryStatus.ACTIVE,
  dates: ['2023-10-12', '2023-10-19'],
  time: { startTime: '22:30', endTime: '23:00' },
};

const weeklyAvailability = new WeeklyAvailability(dataForWeekly);
const weeklyDiaries = weeklyAvailability.diaries;
console.log(weeklyDiaries);

/// NOTE - Check collision between diaries
console.log(weeklyAvailability.hasCollisionWith(dailyAvailability));
