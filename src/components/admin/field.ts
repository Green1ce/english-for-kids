import { BaseComponent } from '../base-components';

import './admin.scss';

export class Field extends BaseComponent {
  constructor() {
    super('div', ['admin__field']);
  }

  clearField(): void {
    this.element.innerHTML = '';
  }
}
