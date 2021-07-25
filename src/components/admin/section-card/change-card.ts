import { BaseComponent } from '../../base-components';
import { NEW_SECTION } from '../../../shared/CONST';

import './admin-section-card.scss';

const CATEGORY_NAME = 'Category name:';
const NEW_CATEGOTY_NAME = 'New category name';
const CANCEL = 'Cancel';
const CREATE = 'Create';

export class ChangeCard extends BaseComponent {
  private Section: string;

  constructor(section: string) {
    super('div', ['admin__section-card__change-card']);
    this.Section = section;
    if (this.Section !== 'newSection') this.element.classList.add('hide');
    this.element.setAttribute('data-change', this.Section);
  }

  renderChangeCard(): void {
    this.addNewCategoryName();
    this.addNewCategoryNameInput(this.Section);
    this.addCancelButton(this.Section);
    this.addCreateButton(this.Section);
  }

  renderNewSectionCard(): void {
    this.addNewCategoryName();
    this.addNewCategoryNameInput(NEW_SECTION);
    this.addCancelButton(NEW_SECTION);
    this.addCreateButton(NEW_SECTION);
  }

  addNewCategoryName(): void {
    const name = document.createElement('span');
    name.classList.add('admin__section-card__new-name');
    name.textContent = CATEGORY_NAME;
    this.element.appendChild(name);
  }

  addNewCategoryNameInput(section: string): void {
    const nameInput = document.createElement('input') as HTMLInputElement;
    nameInput.classList.add('admin__section-card__name-input');
    nameInput.setAttribute('data-newName', section);
    nameInput.type = 'text';
    nameInput.placeholder = NEW_CATEGOTY_NAME;
    nameInput.maxLength = 15;
    this.element.appendChild(nameInput);
  }

  addCancelButton(section: string): void {
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('admin__section-card__cancel-button');
    cancelButton.setAttribute('data-cancel', section);
    cancelButton.textContent = CANCEL;
    this.element.appendChild(cancelButton);
  }

  addCreateButton(section: string): void {
    const createButton = document.createElement('button');
    createButton.classList.add('admin__section-card__create-button');
    createButton.setAttribute('data-create', section);
    createButton.textContent = CREATE;
    this.element.appendChild(createButton);
  }
}
