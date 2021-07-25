import { PLAY } from '../../../shared/CONST';
import { BaseComponent } from '../../base-components';

import './section.scss';

export class Section extends BaseComponent {
  constructor(mode: string) {
    super('div', ['section']);
    if (mode === PLAY) {
      this.element.classList.add('section-play');
    }
  }

  renderSection(url: string, sectionName: string, Id: string): void {
    this.setImg(url);
    this.setName(sectionName);
    this.setId(Id);
  }

  setImg(url: string): void {
    const img = document.createElement('img');
    img.setAttribute('src', url);
    img.classList.add('section__img');
    this.element.appendChild(img);
  }

  setName(sectionName: string): void {
    const name = document.createElement('div');
    name.textContent = `${sectionName}`;
    name.classList.add('section__name');
    this.element.appendChild(name);
  }

  setId(Id: string): void {
    this.element.setAttribute('id', Id);
  }
}
