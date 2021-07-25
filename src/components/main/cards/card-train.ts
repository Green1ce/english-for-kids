import { BaseComponent } from '../../base-components';
import { Front } from './front';
import { Back } from './back';
import { MY_DATA } from '../../../shared/CONST';

import './cards.scss';

export class CardTrain extends BaseComponent {
  private readonly ID: number;

  private readonly section: string;

  constructor(Id: number, section: string) {
    super('div', ['card__wrapper']);
    this.ID = Id;
    this.section = section;
  }

  addCard(img: string, word: string, translation: string, audioSrc: string): void {
    const card = document.createElement('div');
    card.classList.add('card-train');
    card.addEventListener('mouseleave', () => {
      card.classList.remove('flipped');
    });
    const front = new Front(card, this.ID);
    front.element.addEventListener('click', (event) => {
      const selectCard = event.target as HTMLElement;
      const selectNumber = Number(selectCard.dataset.numb);
      MY_DATA[this.section].cards[selectNumber].train += 1;
    });
    front.renderFront(img, word, audioSrc);
    const back = new Back();
    back.renderBack(img, translation);
    card.appendChild(front.element);
    card.appendChild(back.element);
    this.element.appendChild(card);
  }
}
