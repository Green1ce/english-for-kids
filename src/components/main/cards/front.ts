import { BaseComponent } from '../../base-components';

import './cards.scss';

export class Front extends BaseComponent {
  private readonly Card: HTMLElement;

  private readonly ID: number;

  constructor(card: HTMLElement, Id: number) {
    super('div', ['card__front']);
    this.element.setAttribute('data-key', 'train');
    this.element.setAttribute('data-numb', `${Id}`);
    this.Card = card;
    this.ID = Id;
  }

  renderFront(img: string, word: string, audioSrc: string): void {
    this.setImg(img, this.ID);
    this.setName(word, this.ID);
    this.addFlipButton(this.ID);
    this.addPronunciation(audioSrc);
  }

  setImg(img: string, Id: number): void {
    const image = document.createElement('img');
    image.setAttribute('src', img);
    image.setAttribute('data-numb', `${Id}`);
    image.classList.add('card__img');
    this.element.appendChild(image);
  }

  setName(word: string, Id: number): void {
    const name = document.createElement('div');
    name.setAttribute('data-numb', `${Id}`);
    name.textContent = `${word}`;
    name.classList.add('card__name');
    this.element.appendChild(name);
  }

  addFlipButton(Id: number): void {
    const flipButton = document.createElement('button');
    flipButton.classList.add('card__flip-button');
    flipButton.setAttribute('data-numb', `${Id}`);
    flipButton.addEventListener('click', () => {
      this.Card.classList.add('flipped');
    });
    this.element.appendChild(flipButton);
  }

  addPronunciation(audioSrc: string): void {
    this.element.addEventListener('click', () => {
      const audio = new Audio(audioSrc);
      audio.currentTime = 0;
      audio.play();
    });
  }
}
