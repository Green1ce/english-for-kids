import { isCorrectName } from './is-correct-name';
import { addSectionInData } from './add-section-in-data';
import { WRONG_NAME } from '../shared/CONST';

export function createNewSection(section: string): boolean {
  let ansewer = true;
  const newName = document.querySelector(`[data-newName=${section}]`) as HTMLInputElement;
  if (isCorrectName(newName.value)) {
    addSectionInData(newName.value);
  } else {
    ansewer = false;
    newName.classList.add(WRONG_NAME);
  }
  return ansewer;
}
