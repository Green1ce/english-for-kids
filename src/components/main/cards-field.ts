import { BaseComponent } from '../base-components';

import './main.scss';

export class CardsField extends BaseComponent {
  constructor() {
    super('div', ['cards-field']);
  }

  clearCardsField(): void {
    this.element.innerHTML = '';
  }
}
