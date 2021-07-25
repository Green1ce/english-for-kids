const ADMIN = 'Admin';
const PASSWORD = 'Password';

export function validationRegForm(): boolean {
  let status = false;

  const loginInput = document.querySelector('[data-field=login]') as HTMLInputElement;
  const passwordInput = document.querySelector('[data-field=password]') as HTMLInputElement;

  if ((loginInput.value === ADMIN) && (passwordInput.value === PASSWORD)) {
    status = true;
  }

  return status;
}
