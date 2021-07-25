import { BaseComponent } from '../../base-components';
import { ViewCard } from './view-card';
import { ChangeCard } from './change-card';
import { NEW_SECTION } from '../../../shared/CONST';

import './admin-section-card.scss';

export class AdminSectionCard extends BaseComponent {
  constructor() {
    super('div', ['admin__section-card']);
  }

  renderDefaultSection(name: string, words: number, section: string): void {
    const newViewCard = new ViewCard(section);
    const newChangeCard = new ChangeCard(section);

    newViewCard.renderViewCard(name, words, section);
    newChangeCard.renderChangeCard();

    this.element.appendChild(newViewCard.element);
    this.element.appendChild(newChangeCard.element);
  }

  renderNewSection(): void {
    const newSection = new ChangeCard(NEW_SECTION);
    newSection.renderNewSectionCard();
    this.element.appendChild(newSection.element);
  }

  renderNewSectionCreator(): void {
    this.addSectionName('Create new category', 'new');
    this.addNewSectionCreatorIcon();
  }

  addSectionName(name: string, section: string): void {
    const sectionName = document.createElement('span');
    sectionName.setAttribute('data-name', section);
    sectionName.classList.add('admin__section-card__name');
    sectionName.textContent = name;
    this.element.appendChild(sectionName);
  }

  addNewSectionCreatorIcon(): void {
    const icon = document.createElement('span');
    icon.classList.add('admin__section-card__icon');
    icon.setAttribute('data-new', 'new');
    this.element.appendChild(icon);
  }
}
