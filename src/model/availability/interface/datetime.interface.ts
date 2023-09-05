import moment from 'moment-timezone';

export interface IDateTime {
  date: IDate;
  time: ITime;
}

export type IDate = string;

export interface ITime {
  startTime: string;
  endTime: string;
}

export interface ISingleDay {
  from: moment.Moment;
  to: moment.Moment;
}

export type DiaryList = ISingleDay[];
