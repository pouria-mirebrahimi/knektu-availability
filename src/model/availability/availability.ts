import { DiaryInitializationDto, IDiary } from './interface/diary.interface';

export abstract class Availability {
  private _diary: IDiary;

  protected abstract createInstance(data: DiaryInitializationDto): IDiary;

  constructor(data: DiaryInitializationDto) {
    this._diary = this.createInstance(data);
  }

  public getDiaries(): void {
    this._diary.log();
  }
}
