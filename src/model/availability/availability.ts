import { DiaryGeneration } from './operation/diary-generation';
import { DiaryValidation } from './operation/diary-validation';
import { IDiaryInitialization, IDiary } from './interface/diary.interface';
import { DiaryExtraction } from './operation/diary-extract';
import { ISingleDay } from './interface/datetime.interface';

export abstract class Availability {
  #diary_: IDiary;
  protected abstract createInstance(data: IDiaryInitialization): IDiary;

  constructor(data: IDiaryInitialization) {
    this.#diary_ = this.createInstance(data);
  }

  public diary(): ISingleDay[] {
    this.#diary_.execute(new DiaryValidation());
    this.#diary_.execute(new DiaryExtraction());
    this.#diary_.execute(new DiaryGeneration());

    return this.#diary_.diaries;
  }
}
