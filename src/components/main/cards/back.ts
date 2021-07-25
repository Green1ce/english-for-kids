import { BaseComponent } from '../../base-components';

import './cards.scss';

export class Back extends BaseComponent {
  constructor() {
    super('div', ['card__back']);
    this.element.setAttribute('data-key', 'train');
  }

  renderBack(img: string, translation: string): void {
    this.setImg(img);
    this.setName(translation);
  }

  setImg(img: string): void {
    const image = document.createElement('img');
    image.setAttribute('src', img);
    image.classList.add('card__img');
    this.element.appendChild(image);
  }

  setName(translation: string): void {
    const name = document.createElement('div');
    name.textContent = `${translation}`;
    name.classList.add('card__name');
    this.element.appendChild(name);
  }
}
