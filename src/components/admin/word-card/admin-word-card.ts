import { BaseComponent } from '../../base-components';
import { ViewWord } from './view-word';
import { ChangeWord } from './change-word';
import { NEW_WORD } from '../../../shared/CONST';

import './admin-word-card.scss';

export class AdminWordCard extends BaseComponent {
  constructor() {
    super('div', ['admin__word-card']);
  }

  renderDefaultWord(word: string, translation: string, sound: string, img: string): void {
    const newViewWord = new ViewWord(word);
    const newChangeWord = new ChangeWord(word);

    newViewWord.renderViewWord(word, translation, sound, img);
    newChangeWord.renderChangeWord(word);

    this.element.appendChild(newViewWord.element);
    this.element.appendChild(newChangeWord.element);
  }

  renderNewWord(): void {
    const newWord = new ChangeWord(NEW_WORD);
    newWord.renderNewWordCard();
    this.element.appendChild(newWord.element);
  }

  renderNewWordCreator(): void {
    this.addWordName('Add new word');
    this.addNewWordCreatorIcon();
  }

  addWordName(name: string): void {
    const sectionName = document.createElement('span');
    sectionName.classList.add('admin__word-card__name-creator');
    sectionName.textContent = name;
    this.element.appendChild(sectionName);
  }

  addNewWordCreatorIcon(): void {
    const icon = document.createElement('span');
    icon.classList.add('admin__word-card__icon');
    icon.setAttribute('data-newWord', 'newWord');
    this.element.appendChild(icon);
  }
}
