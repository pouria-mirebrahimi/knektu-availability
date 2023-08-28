import { IDiary } from '../interface/diary.interface';

function collisionUtility(firstDiary: IDiary, secondDiary: IDiary): boolean {
  const firstMomentDates = firstDiary.momentDates;
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
