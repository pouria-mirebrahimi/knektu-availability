import { DiaryGeneration } from './operation/diary-generation';
import { DiaryValidation } from './operation/diary-validation';
import { IDiaryInitialization, IDiary } from './interface/diary.interface';
import { DiaryExtraction } from './operation/diary-extract';
import { DiaryList, ISingleDay } from './interface/datetime.interface';
import { DiaryStatus, DiaryType } from './enum/diary.enum';
import { collisionUtility } from './utils/collision-util';

export abstract class Availability {
  #diary_: IDiary;
  protected abstract createInstance(data: IDiaryInitialization): IDiary;

  constructor(data: IDiaryInitialization) {
    this.#diary_ = this.createInstance(data);
    this.preprocessing();
  }

  private preprocessing(): void {
    this.#diary_.execute(new DiaryValidation());
    this.#diary_.execute(new DiaryExtraction());
    this.#diary_.execute(new DiaryGeneration());
  }

  public hasCollisionWith(target: DiaryList): boolean;
  public hasCollisionWith(target: Availability): boolean;
  public hasCollisionWith(target: any): boolean {
    if (target instanceof Availability)
      return collisionUtility(target.#diary_, this.#diary_);
    else return collisionUtility(target, this.#diary_);
  }

  public get diaries(): DiaryList {
    return this.#diary_.diaries;
  }

  public get duration(): number {
    const firstDay = this.#diary_.momentDates[0] as ISingleDay;
    return firstDay.to.diff(firstDay.from, 'minutes');
  }

  public get status(): DiaryStatus {
    return this.#diary_.status;
  }

  public set status(status: DiaryStatus) {
    this.#diary_.status = status;
  }

  public get type(): DiaryType {
    return this.#diary_.type;
  }
}
