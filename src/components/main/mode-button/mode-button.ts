import { BaseComponent } from '../../base-components';
import { TRAIN } from '../../../shared/CONST';

import './mode-button.scss';

export class ModeButton extends BaseComponent {
  constructor() {
    super('button', ['mode-button']);
    this.element.textContent = TRAIN;
  }
}
