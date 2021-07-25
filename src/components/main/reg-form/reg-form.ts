import { BaseComponent } from '../../base-components';

import './reg-form.scss';

export class RegForm extends BaseComponent {
  constructor() {
    super('div', ['reg-form__wrapper', 'hide']);
  }

  renderRegForm(): void {
    this.addRegForm();
  }

  addRegForm(): void {
    const regForm = document.createElement('div');
    regForm.classList.add('reg-form');

    const loginText = document.createElement('span');
    loginText.classList.add('reg-form__login-text');
    loginText.textContent = 'Login';
    regForm.appendChild(loginText);

    const loginInput = document.createElement('input') as HTMLInputElement;
    loginInput.classList.add('reg-form__login-input');
    loginInput.placeholder = 'enter Admin';
    loginInput.setAttribute('data-field', 'login');
    loginInput.maxLength = 20;
    regForm.appendChild(loginInput);

    const passwordInput = document.createElement('input') as HTMLInputElement;
    passwordInput.classList.add('reg-form__password-input');
    passwordInput.placeholder = 'enter Password';
    passwordInput.setAttribute('data-field', 'password');
    passwordInput.maxLength = 20;
    regForm.appendChild(passwordInput);

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('reg-form__cancel-button');
    cancelButton.setAttribute('data-button', 'regCancel');
    cancelButton.textContent = 'cancel';
    regForm.appendChild(cancelButton);

    const loginButton = document.createElement('button');
    loginButton.classList.add('reg-form__login-button');
    loginButton.setAttribute('data-button', 'regLogin');
    loginButton.textContent = 'login';
    regForm.appendChild(loginButton);

    this.element.appendChild(regForm);
  }
}
