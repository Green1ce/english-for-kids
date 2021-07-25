import { App } from './app';
import { NOT_FOUND } from './shared/CONST';

import './styles.scss';

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error(NOT_FOUND);
  new App(appElement).renderMainPage();
};
