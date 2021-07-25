import { MENU_BAR_SELECT } from '../shared/CONST';

export function resetSelection(): void {
  document.querySelectorAll('.menu-bar').forEach((el) => {
    el.classList.remove(MENU_BAR_SELECT);
  });
}
