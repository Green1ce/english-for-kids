import { BaseComponent } from '../../base-components';
import { HIDE } from '../../../shared/CONST';

import './burger-menu.scss';

export class BurgerMenu extends BaseComponent {
  constructor() {
    super('button', ['burger-menu']);
  }

  renderLoginButton(): void {
    this.addLoginButton();
    this.addBurgerMenuEvent();
  }

  addLoginButton(): void {
    const loginButton = document.createElement('button');
    loginButton.classList.add('menu-login-button');
    loginButton.textContent = 'Login';
    loginButton.setAttribute('data-login', 'login');
    this.element.appendChild(loginButton);
  }

  addBurgerMenuEvent(): void {
    this.element.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;

      if (target.dataset.login) {
        document.querySelector('.reg-form__wrapper')?.classList.toggle(HIDE);
      }
    });
  }
}
