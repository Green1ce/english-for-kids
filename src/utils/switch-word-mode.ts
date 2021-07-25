import { ACTIVE } from '../shared/CONST';

export function switchWordMode(): void {
  document.querySelector('.admin__header-categories')?.classList.toggle(ACTIVE);
  document.querySelector('.admin__header-words')?.classList.toggle(ACTIVE);
}
