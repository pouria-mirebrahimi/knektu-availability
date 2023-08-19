import { IDiaryInitialization, IDiary } from './interface/diary.interface';

export abstract class Availability {
  private _diary: IDiary;

  protected abstract createInstance(data: IDiaryInitialization): IDiary;

  constructor(data: IDiaryInitialization) {
    this._diary = this.createInstance(data);
  }

  public getDiaries(): void {
    this._diary.log();
  }
}
