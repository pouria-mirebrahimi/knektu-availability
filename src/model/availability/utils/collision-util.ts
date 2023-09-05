import { DiaryList, ISingleDay } from '../interface/datetime.interface';
import { IDiary } from '../interface/diary.interface';

function collisionUtility(firstDiary: DiaryList, secondDiary: IDiary): boolean;
function collisionUtility(firstDiary: IDiary, secondDiary: IDiary): boolean;
function collisionUtility(firstDiary: any, secondDiary: IDiary): boolean {
  const firstMomentDates =
    'momentDates' in firstDiary ? firstDiary.momentDates : firstDiary;
  const secondMomentDates = secondDiary.momentDates;

  let collide = false;
  for (const firstDiaryDate of firstMomentDates) {
    for (const secondDiaryDate of secondMomentDates) {
      if (
        firstDiaryDate.from.isBefore(secondDiaryDate.to) &&
        secondDiaryDate.from.isBefore(firstDiaryDate.to)
      ) {
        collide = true;
        break;
      }
    }
    if (collide) break;
  }
  return collide;
}

export { collisionUtility };
