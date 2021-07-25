import { BaseComponent } from '../../base-components';

import './stars-field.scss';

export class StarsField extends BaseComponent {
  constructor() {
    super('div', ['stars-field']);
  }

  addStar(): void {
    const newStar = document.createElement('img');
    newStar.setAttribute('src', 'img/star.svg');
    newStar.classList.add('star__img');
    this.element.appendChild(newStar);
  }

  addWinStar(): void {
    const newStar = document.createElement('img');
    newStar.setAttribute('src', 'img/star-win.svg');
    newStar.classList.add('star__img');
    this.element.appendChild(newStar);
  }

  clearStarField(): void {
    this.element.innerHTML = '';
  }
}
