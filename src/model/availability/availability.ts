import { DiaryGeneration } from './operation/diary-generation';
import { DiaryValidation } from './operation/diary-validation';
import { IDiaryInitialization, IDiary } from './interface/diary.interface';
import { DiaryReport } from './operation/diary-report';
import { IDateTime } from './interface/datetime.interface';

export abstract class Availability {
  #diary_: IDiary;
  protected abstract createInstance(data: IDiaryInitialization): IDiary;

  constructor(data: IDiaryInitialization) {
    this.#diary_ = this.createInstance(data);
  }

  public diary(): IDateTime[] {
    this.#diary_.execute(new DiaryValidation());
    this.#diary_.execute(new DiaryGeneration());
    this.#diary_.execute(new DiaryReport());

    return this.#diary_.diaries;
  }
}
