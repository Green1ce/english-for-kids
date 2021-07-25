import { MY_DATA, WRONG_NAME } from '../shared/CONST';

export function setOldName(section: string): void {
  const newName = document.querySelector(`[data-newName=${section}]`) as HTMLInputElement;
  newName.classList.remove(WRONG_NAME);
  newName.value = MY_DATA[section].name;
}
