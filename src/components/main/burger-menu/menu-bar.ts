import { BaseComponent } from '../../base-components';
import { MENU_BAR_SELECT } from '../../../shared/CONST';

import './burger-menu.scss';
import { resetSelection } from '../../../utils/reset-selection';

export class MenuBar extends BaseComponent {
  constructor() {
    super('div', ['menu-bar']);
  }

  addName(name: string): void {
    this.element.textContent = `${name}`;
  }

  setId(sectionName: string): void {
    this.element.setAttribute('id', sectionName);
  }

  addEvent(): void {
    this.element.addEventListener('click', () => {
      resetSelection();
      this.element.classList.add(MENU_BAR_SELECT);
    });
  }
}
