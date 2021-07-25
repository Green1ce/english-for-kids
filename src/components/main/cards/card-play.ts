import { BaseComponent } from '../../base-components';

export class CardPlay extends BaseComponent {
  constructor() {
    super('img', ['card-play']);
  }

  addCard(img: string, audio: string, Id: number): void {
    this.element.setAttribute('src', img);
    this.element.setAttribute('data-audio', audio);
    this.element.setAttribute('data-numb', `${Id}`);
  }
}
