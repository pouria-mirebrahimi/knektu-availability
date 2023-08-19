export interface IDateTime {
  date: IDate;
  time: ITime;
}

export type IDate = string;

export interface ITime {
  startTime: string;
  endTime: string;
}
