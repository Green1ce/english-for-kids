import { Admin } from './components/admin/admin';
import { Main } from './components/main/main';
import { RegForm } from './components/main/reg-form/reg-form';
import { validationRegForm } from './utils/validation';

export class App {
  constructor(private readonly rootElement: HTMLElement) {
  }

  renderMainPage(): void {
    const main = new Main();
    const regForm = new RegForm();
    main.renderMain();
    main.addMainEvents();
    this.rootElement.appendChild(main.element);
    regForm.renderRegForm();
    this.rootElement.appendChild(regForm.element);
    this.onRegForm(regForm.element);
  }

  renderAdminPage(): void {
    const admin = new Admin();
    admin.renderAdmin();
    admin.addAdminEvents();
    this.addLogOutButton();
    this.rootElement.appendChild(admin.element);
  }

  onRegForm(regForm: HTMLElement): void {
    regForm.addEventListener('click', (event) => {
      const element = event.target as HTMLElement;

      if (element.dataset.button === 'regCancel') {
        regForm.classList.toggle('hide');
      }

      if (element.dataset.button === 'regLogin') {
        if (validationRegForm()) {
          this.clearApp();
          this.renderAdminPage();
        } else {
          regForm.classList.toggle('hide');
        }
      }
    });
  }

  addLogOutButton(): void {
    const logOut = document.createElement('button');
    logOut.classList.add('admin__header-log-out');
    logOut.textContent = 'Log out';
    logOut.addEventListener('click', () => {
      this.clearApp();
      this.renderMainPage();
    });
    this.rootElement.appendChild(logOut);
  }

  clearApp(): void {
    this.rootElement.innerHTML = '';
  }
}
