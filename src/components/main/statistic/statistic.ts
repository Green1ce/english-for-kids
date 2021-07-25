import { BaseComponent } from '../../base-components';
import { MY_DATA, ONE_HUNDRED, ZERO } from '../../../shared/CONST';

import './statistic.scss';

const TD = 'td';
const TR = 'tr';
const TH = 'th';
const TABLE_WORD = 'table__word';
const TABLE_TRANSLATION = 'table__translation';
const TABLE_HIT = 'table__hit';
const TABLE_MISS = 'table__miss';
const TABLE_TRAIN = 'table__train';
const TABLE_RIGHT_PERSENT = 'table__right-persent';

export class Statistic extends BaseComponent {
  private zero: number;

  constructor() {
    super('table', ['table__wrapper']);
    this.zero = ZERO;
  }

  renderHeader(): void {
    const newWord = document.createElement(TD);
    newWord.classList.add(TABLE_WORD);
    newWord.textContent = 'Word';

    const newTranslation = document.createElement(TD);
    newTranslation.classList.add(TABLE_TRANSLATION);
    newTranslation.textContent = 'Translation';

    const newHit = document.createElement(TD);
    newHit.classList.add(TABLE_HIT);
    newHit.textContent = 'Hit';

    const newMiss = document.createElement(TD);
    newMiss.classList.add(TABLE_MISS);
    newMiss.textContent = 'Miss';

    const newTrain = document.createElement(TD);
    newTrain.classList.add(TABLE_TRAIN);
    newTrain.textContent = 'Train';

    const newRightPersent = document.createElement(TD);
    newRightPersent.classList.add(TABLE_RIGHT_PERSENT);
    newRightPersent.textContent = 'Right %';

    const wordWrapper = document.createElement(TR);
    wordWrapper.classList.add('table__header-wrapper');

    wordWrapper.appendChild(newWord);
    wordWrapper.appendChild(newTranslation);
    wordWrapper.appendChild(newHit);
    wordWrapper.appendChild(newMiss);
    wordWrapper.appendChild(newRightPersent);
    wordWrapper.appendChild(newTrain);
    this.element.appendChild(wordWrapper);
  }

  renderTable(): void {
    const allSections = Object.keys(MY_DATA);
    for (let i = 0; i < allSections.length; i++) {
      const section = allSections[i];
      this.addCategoryName(MY_DATA[section].name);
      MY_DATA[section].cards.forEach((el) => {
        this.renderWord(el.word, el.translation, el.hit, el.miss, el.train);
      });
    }
  }

  addCategoryName(name: string): void {
    const category = document.createElement(TH);
    category.classList.add('table__category-name');
    category.textContent = name;
    this.element.appendChild(category);
  }

  renderWord(word: string, translation: string, hit: number, miss: number, train: number): void {
    const newWord = document.createElement(TD);
    newWord.classList.add(TABLE_WORD);
    newWord.textContent = word;

    const newTranslation = document.createElement(TD);
    newTranslation.classList.add(TABLE_TRANSLATION);
    newTranslation.textContent = translation;

    const newHit = document.createElement(TD);
    newHit.classList.add(TABLE_HIT);
    newHit.textContent = `${hit}`;

    const newMiss = document.createElement(TD);
    newMiss.classList.add(TABLE_MISS);
    newMiss.textContent = `${miss}`;

    const newTrain = document.createElement(TD);
    newTrain.classList.add(TABLE_TRAIN);
    newTrain.textContent = `${train}`;

    const newRightPersent = document.createElement(TD);
    newRightPersent.classList.add(TABLE_RIGHT_PERSENT);
    let persent = 0;
    if (hit || miss) persent = Number(((ONE_HUNDRED * hit) / (hit + miss)).toFixed(0));
    newRightPersent.textContent = `${persent}%`;

    const wordWrapper = document.createElement(TR);
    wordWrapper.classList.add('table__word-wrapper');

    wordWrapper.appendChild(newWord);
    wordWrapper.appendChild(newTranslation);
    wordWrapper.appendChild(newHit);
    wordWrapper.appendChild(newMiss);
    wordWrapper.appendChild(newRightPersent);
    wordWrapper.appendChild(newTrain);
    this.element.appendChild(wordWrapper);
  }

  resetStatistic(): void {
    for (let i = 0; i < Object.keys(MY_DATA).length; i++) {
      const section = `section${i}`;
      MY_DATA[section].cards.forEach((el) => {
        el.hit = this.zero;
        el.miss = this.zero;
        el.train = this.zero;
      });
    }
  }

  clearTable(): void {
    this.element.innerHTML = '';
  }
}
