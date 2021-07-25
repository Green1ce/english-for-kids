import { BaseComponent } from '../../base-components';

import './burger-menu.scss';

export class BurgerMenuButton extends BaseComponent {
  constructor() {
    super('button', ['burger-menu__button']);
  }
}
