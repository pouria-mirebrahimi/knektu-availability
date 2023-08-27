import moment from 'moment-timezone';

function getMomentDateTime(date: string, time: string): moment.Moment {
  return moment.utc(`${date} ${time}`, 'YYYY-MM-DD hh:mm');
}

function isPast(dateTime: moment.Moment): boolean {
  return moment.utc() > dateTime;
}

export { getMomentDateTime, isPast };
