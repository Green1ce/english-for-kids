import { BaseComponent } from '../base-components';
import { Field } from './field';
import { AdminSectionCard } from './section-card/admin-section-card';
import { switchCardMode } from '../../utils/switch-card-mode';
import { changeSectionName } from '../../utils/change-section-name';
import { setOldName } from '../../utils/set-old-name';
import { createNewSection } from '../../utils/create-new-section';
import { AdminWordCard } from './word-card/admin-word-card';
import { switchWordMode } from '../../utils/switch-word-mode';
import { switchChangeWordMode } from '../../utils/switch-change-word-mode';
import {
  ACTIVE, CATEGORIES, MY_DATA, WORDS,
} from '../../shared/CONST';

import './admin.scss';
import './admin-header.scss';
import { setOldDataOfWord } from '../../utils/set-old-data-of-word';

export class Admin extends BaseComponent {
  private readonly adminField: Field;

  private Section: string;

  constructor() {
    super('article', ['admin']);
    this.adminField = new Field();
    this.Section = 'section0';
  }

  renderAdmin(): void {
    this.renderAdminHeader();
    this.render(this.adminField.element);
    this.addSectionsFromData();
    this.addNewSectionCreator();
  }

  addAdminEvents(): void {
    this.OnClickAdminFieldSection();
    this.OnClickAdminFieldWord();
  }

  OnClickAdminFieldSection(): void {
    this.adminField.element.addEventListener('click', (event) => {
      const onClickElement = event.target as HTMLElement;

      if (onClickElement.dataset.delete) {
        delete MY_DATA[onClickElement.dataset.delete];
        this.addSectionsFromData();
        this.addNewSectionCreator();
      }

      if (onClickElement.dataset.new) {
        this.addSectionsFromData();
        this.addNewSection();
        this.addNewSectionCreator();
      }

      if (onClickElement.dataset.update) {
        setOldName(onClickElement.dataset.update);
        switchCardMode(onClickElement.dataset.update);
      }

      if (onClickElement.dataset.addword) {
        this.Section = onClickElement.dataset.addword;
        this.addWordsFromSection(this.Section);
        switchWordMode();
      }

      if (onClickElement.dataset.cancel) {
        if (onClickElement.dataset.cancel !== 'newSection') {
          switchCardMode(onClickElement.dataset.cancel);
          setOldName(onClickElement.dataset.cancel);
        } else {
          this.addSectionsFromData();
          this.addNewSectionCreator();
        }
      }

      if (onClickElement.dataset.create) {
        if (onClickElement.dataset.create !== 'newSection') {
          changeSectionName(onClickElement.dataset.create);
        } else if (createNewSection(onClickElement.dataset.create)) {
          this.addSectionsFromData();
          this.addNewSectionCreator();
        }
      }
    });
  }

  OnClickAdminFieldWord(): void {
    this.adminField.element.addEventListener('click', (event) => {
      const onClickElement = event.target as HTMLElement;
      const { cards } = MY_DATA[this.Section];

      if (onClickElement.dataset.deleteword) {
        for (let i = 0; i < cards.length; i++) {
          if (cards[i] && (cards[i].word === onClickElement.dataset.deleteword)) {
            delete MY_DATA[this.Section].cards[i];
            this.addWordsFromSection(this.Section);
            this.addNewWordCreator();
          }
        }
      }

      if (onClickElement.dataset.change) {
        switchChangeWordMode(onClickElement.dataset.change);
        setOldDataOfWord(this.Section, onClickElement.dataset.change);
      }

      if (onClickElement.dataset.cancelword) {
        switchChangeWordMode(onClickElement.dataset.cancelword);
      }
    });
  }

  addSectionsFromData(): void {
    this.adminField.clearField();
    Object.keys(MY_DATA).forEach((el) => {
      const defaultSection = new AdminSectionCard();
      defaultSection.renderDefaultSection(MY_DATA[el].name, MY_DATA[el].cards.length, el);
      this.adminField.render(defaultSection.element);
    });
  }

  addNewSection(): void {
    const newSection = new AdminSectionCard();
    newSection.renderNewSection();
    this.adminField.render(newSection.element);
  }

  addNewSectionCreator(): void {
    const newSectionCreator = new AdminSectionCard();
    newSectionCreator.renderNewSectionCreator();
    this.adminField.render(newSectionCreator.element);
  }

  addWordsFromSection(section: string): void {
    this.adminField.clearField();
    const { cards } = MY_DATA[section];
    cards.forEach((el) => {
      const defaultWord = new AdminWordCard();
      defaultWord.renderDefaultWord(el.word, el.translation, el.audioSrc, el.img);
      this.adminField.render(defaultWord.element);
    });
  }

  addNewWord(): void {
    const newWord = new AdminWordCard();
    newWord.renderNewWord();
    this.adminField.render(newWord.element);
  }

  addNewWordCreator(): void {
    const newWordCreator = new AdminWordCard();
    newWordCreator.renderNewWordCreator();
    this.adminField.render(newWordCreator.element);
  }

  renderAdminHeader(): void {
    const headerWrapper = document.createElement('header');
    headerWrapper.classList.add('admin__header');

    const categories = document.createElement('span');
    categories.classList.add('admin__header-categories', ACTIVE);
    categories.textContent = CATEGORIES;
    categories.addEventListener('click', () => {
      this.addSectionsFromData();
      this.addNewSectionCreator();
      if (!categories.classList.contains(ACTIVE)) {
        switchWordMode();
      }
    });

    const words = document.createElement('span');
    words.classList.add('admin__header-words');
    words.textContent = WORDS;

    headerWrapper.appendChild(categories);
    headerWrapper.appendChild(words);

    this.element.appendChild(headerWrapper);
  }
}
