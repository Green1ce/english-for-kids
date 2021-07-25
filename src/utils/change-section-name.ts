import { isCorrectName } from './is-correct-name';
import { switchCardMode } from './switch-card-mode';
import { MY_DATA, NOT_FOUND, WRONG_NAME } from '../shared/CONST';

export function changeSectionName(section: string): void {
  const newName = document.querySelector(`[data-newName=${section}]`) as HTMLInputElement;
  newName.classList.remove(WRONG_NAME);
  const oldName = document.querySelector(`[data-name=${section}]`);
  if (!oldName) throw Error(NOT_FOUND);
  if (isCorrectName(newName.value)) {
    MY_DATA[section].name = newName.value;
    oldName.textContent = newName.value;
    switchCardMode(section);
  } else {
    newName.classList.add(WRONG_NAME);
  }
}
