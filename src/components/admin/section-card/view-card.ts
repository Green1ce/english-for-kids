import { BaseComponent } from '../../base-components';

import './admin-section-card.scss';

export class ViewCard extends BaseComponent {
  constructor(section: string) {
    super('div', ['admin__section-card__view-card']);
    this.element.setAttribute('data-view', section);
  }

  renderViewCard(name: string, words: number, section: string): void {
    this.addDeleteSectionButton(section);
    this.addSectionName(name, section);
    this.addSectionWordsQuantity(words, section);
    this.addUpdateButton(section);
    this.addAddWordButton(section);
  }

  addDeleteSectionButton(section: string): void {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-delete', section);
    deleteButton.classList.add('admin__section-card__delete-button');
    this.element.appendChild(deleteButton);
  }

  addSectionName(name: string, section: string): void {
    const sectionName = document.createElement('span');
    sectionName.setAttribute('data-name', section);
    sectionName.classList.add('admin__section-card__name');
    sectionName.textContent = name;
    this.element.appendChild(sectionName);
  }

  addSectionWordsQuantity(words: number, section: string): void {
    const wordsQuantity = document.createElement('span');
    wordsQuantity.setAttribute('data-words', section);
    wordsQuantity.classList.add('admin__section-card__words-quantity');
    wordsQuantity.textContent = `WORDS: ${words}`;
    this.element.appendChild(wordsQuantity);
  }

  addUpdateButton(section: string): void {
    const updateButton = document.createElement('button');
    updateButton.setAttribute('data-update', section);
    updateButton.classList.add('admin__section-card__update-button');
    updateButton.textContent = 'Update';
    this.element.appendChild(updateButton);
  }

  addAddWordButton(section: string): void {
    const addWordButton = document.createElement('button');
    addWordButton.setAttribute('data-addWord', section);
    addWordButton.classList.add('admin__section-card__add-word-button');
    addWordButton.textContent = 'Add word';
    this.element.appendChild(addWordButton);
  }
}
