import { BaseComponent } from '../../base-components';

import './admin-word-card.scss';

const NEW_WORD = 'New word';
const NEW_TRANSLATION = 'New translation';
const CANCEL = 'Cancel';
const SELECT_FILE = 'Select file';

export class ChangeWord extends BaseComponent {
  private readonly Word: string;

  constructor(word: string) {
    super('div', ['admin__word-card__change-word']);
    this.Word = word;
    if (this.Word !== 'newWord') this.element.classList.add('hide');
    this.element.setAttribute('data-changeWord', word);
  }

  renderChangeWord(word: string): void {
    this.addTextWord();
    this.addNewWordNameInput(word);
    this.addTextTranslation();
    this.addNewWordTranslationInput(word);
    this.addCancelButton(word);
    this.addTextSound();
    this.addTextImage();
    this.addSelectSoundButton(word);
    this.addSelectImgButton(word);
  }

  renderNewWordCard(): void {
    this.addTextWord();
    this.addNewWordNameInput(NEW_WORD);
    this.addTextTranslation();
    this.addNewWordTranslationInput(NEW_WORD);
    this.addCancelButton(NEW_WORD);
    this.addTextSound();
    this.addTextImage();
    this.addSelectSoundButton(NEW_WORD);
    this.addSelectImgButton(NEW_WORD);
  }

  addTextWord(): void {
    const textWord = document.createElement('span');
    textWord.classList.add('admin__word-card__text-word');
    textWord.textContent = 'Word:';
    this.element.appendChild(textWord);
  }

  addNewWordNameInput(word: string): void {
    const nameInput = document.createElement('input') as HTMLInputElement;
    nameInput.classList.add('admin__word-card__word-input');
    nameInput.setAttribute('data-newWord', word);
    nameInput.type = 'text';
    nameInput.placeholder = NEW_WORD;
    nameInput.maxLength = 15;
    this.element.appendChild(nameInput);
  }

  addTextTranslation(): void {
    const textTranslation = document.createElement('span');
    textTranslation.classList.add('admin__word-card__text-translation');
    textTranslation.textContent = 'Translation:';
    this.element.appendChild(textTranslation);
  }

  addNewWordTranslationInput(word: string): void {
    const nameInput = document.createElement('input') as HTMLInputElement;
    nameInput.classList.add('admin__word-card__translation-input');
    nameInput.setAttribute('data-newTranslation', word);
    nameInput.type = 'text';
    nameInput.placeholder = NEW_TRANSLATION;
    nameInput.maxLength = 15;
    this.element.appendChild(nameInput);
  }

  addCancelButton(word: string): void {
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('admin__word-card__cancel-button');
    cancelButton.setAttribute('data-cancelWord', word);
    cancelButton.textContent = CANCEL;
    this.element.appendChild(cancelButton);
  }

  addTextSound(): void {
    const textSound = document.createElement('span');
    textSound.classList.add('admin__word-card__text-sound');
    textSound.textContent = 'Sound:';
    this.element.appendChild(textSound);
  }

  addTextImage(): void {
    const textImage = document.createElement('span');
    textImage.classList.add('admin__word-card__text-image');
    textImage.textContent = 'Image:';
    this.element.appendChild(textImage);
  }

  addSelectSoundButton(word: string): void {
    const selectSoundButton = document.createElement('button');
    selectSoundButton.classList.add('admin__word-card__select-sound-button');
    selectSoundButton.setAttribute('data-selectSound', word);
    selectSoundButton.textContent = SELECT_FILE;
    this.element.appendChild(selectSoundButton);
  }

  addSelectImgButton(word: string): void {
    const selectImgButton = document.createElement('button');
    selectImgButton.classList.add('admin__word-card__select-img-button');
    selectImgButton.setAttribute('data-selectImg', word);
    selectImgButton.textContent = SELECT_FILE;
    this.element.appendChild(selectImgButton);
  }
}
