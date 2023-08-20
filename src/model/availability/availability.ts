import { DiaryGeneration } from './operation/diary-generation';
import { DiaryValidation } from './operation/diary-validation';
import { IDiaryInitialization, IDiary } from './interface/diary.interface';
import { DiaryReport } from './operation/diary-report';
import { IDateTime } from './interface/datetime.interface';

export abstract class Availability {
  private _diary: IDiary;

  protected abstract createInstance(data: IDiaryInitialization): IDiary;

  constructor(data: IDiaryInitialization) {
    this._diary = this.createInstance(data);
  }

  public diaries(): IDateTime[] {
    this._diary.execute(new DiaryValidation());
    this._diary.execute(new DiaryGeneration());
    this._diary.execute(new DiaryReport());

    return this._diary.details;
  }
}
