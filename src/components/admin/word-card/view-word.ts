import { BaseComponent } from '../../base-components';

export class ViewWord extends BaseComponent {
  constructor(word: string) {
    super('div', ['admin__word-card__view-word']);
    this.element.setAttribute('data-viewWord', word);
  }

  renderViewWord(word: string, translation: string, sound: string, img: string): void {
    this.addDeleteWordButton(word);
    this.addWordName(word);
    this.addWordTranslation(word, translation);
    this.addWordSoundFile(word, sound);
    this.addTextImage();
    this.addWordImg(word, img);
    this.addChangeButton(word);
  }

  addDeleteWordButton(word: string): void {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-deleteWord', word);
    deleteButton.classList.add('admin__word-card__delete-button');
    this.element.appendChild(deleteButton);
  }

  addWordName(word: string): void {
    const wordName = document.createElement('span');
    wordName.setAttribute('data-nameWord', word);
    wordName.classList.add('admin__word-card__name');
    wordName.textContent = `Word: ${word}`;
    this.element.appendChild(wordName);
  }

  addWordTranslation(word: string, translation: string): void {
    const wordTranslation = document.createElement('span');
    wordTranslation.setAttribute('data-translationWord', word);
    wordTranslation.classList.add('admin__word-card__translation');
    wordTranslation.textContent = `Translation: ${translation}`;
    this.element.appendChild(wordTranslation);
  }

  addWordSoundFile(word: string, sound: string): void {
    const wordSound = document.createElement('span');
    wordSound.setAttribute('data-soundWord', word);
    wordSound.classList.add('admin__word-card__sound');
    wordSound.textContent = `Sound file: ${sound.slice(6, sound.length)}`;
    this.element.appendChild(wordSound);
  }

  addTextImage(): void {
    const image = document.createElement('span');
    image.classList.add('admin__word-card__image');
    image.textContent = 'Image:';
    this.element.appendChild(image);
  }

  addWordImg(word: string, img: string): void {
    const wordImg = document.createElement('img');
    wordImg.setAttribute('src', img);
    wordImg.setAttribute('data-imgWord', word);
    wordImg.classList.add('admin__word-card__img');
    this.element.appendChild(wordImg);
  }

  addChangeButton(word: string): void {
    const changeButton = document.createElement('span');
    changeButton.setAttribute('data-change', word);
    changeButton.classList.add('admin__word-card__change-button');
    changeButton.textContent = 'Change';
    this.element.appendChild(changeButton);
  }
}
