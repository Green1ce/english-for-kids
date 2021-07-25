import { BaseComponent } from '../base-components';
import { Section } from './section/section';
import { BurgerMenuButton } from './burger-menu/burger-menu-button';
import { ModeButton } from './mode-button/mode-button';
import { BurgerMenu } from './burger-menu/burger-menu';
import { MenuBar } from './burger-menu/menu-bar';
import { CardTrain } from './cards/card-train';
import { CardPlay } from './cards/card-play';
import { CardsField } from './cards-field';
import { StarsField } from './stars-field/stars-field';
import { Statistic } from './statistic/statistic';
import { resetSelection } from '../../utils/reset-selection';
import {
  playCorrectSignal, playErrorSignal, playFailureSignal, playSuccessSignal,
} from '../../utils/supporting-sound';
import {
  CORRECT_CARD,
  MAIN_PAGE, MENU_BAR_SELECT, MY_DATA, ONE, PLAY, STATISTIC, TIME_OF_FINAL_IMG, TRAIN, ZERO, ZERO_POINT_FIVE,
} from '../../shared/CONST';

import './main.scss';

export class Main extends BaseComponent {
  private readonly burgerMenu: BurgerMenu;

  private readonly menuBar: MenuBar;

  private readonly burgerMenuButton: BurgerMenuButton;

  private readonly modeButton: ModeButton;

  private readonly cardsField: CardsField;

  private readonly starsField: StarsField;

  private section: string;

  private mode: string;

  private audioArray: string[];

  private mistakes: number;

  private gameStarted: boolean;

  private defaultImg: string;

  constructor() {
    super('main', ['main']);
    this.burgerMenu = new BurgerMenu();
    this.menuBar = new MenuBar();
    this.burgerMenuButton = new BurgerMenuButton();
    this.modeButton = new ModeButton();
    this.cardsField = new CardsField();
    this.starsField = new StarsField();
    this.section = MAIN_PAGE;
    this.mode = TRAIN;
    this.audioArray = [];
    this.mistakes = 0;
    this.gameStarted = false;
    this.defaultImg = 'img/default-img.jpg';
  }

  renderMain(): void {
    this.render(this.burgerMenu.element);
    this.addMenuBars();
    this.render(this.burgerMenuButton.element);
    this.render(this.modeButton.element);
    this.render(this.cardsField.element);
    this.addSections();
  }

  addMainEvents(): void {
    this.addBurgerMenuButtonEvent();
    this.addModeButtonEvent();
    this.addCardsFieldEvent();
  }

  addBurgerMenuButtonEvent(): void {
    this.burgerMenuButton.element.addEventListener('click', () => {
      this.moveBurgerMenu();
    });
  }

  moveBurgerMenu(): void {
    this.burgerMenuButton.element.classList.toggle('rotate');
    this.burgerMenu.element.classList.toggle('show-up');
  }

  checkMode(section: string): void {
    if (this.mode === TRAIN) this.addTrainCards(section);
    else if (this.mode === PLAY) this.addPlayCards(section);
  }

  addSections(): void {
    this.addCategoryName(MAIN_PAGE);
    this.section = MAIN_PAGE;
    const allSections = Object.keys(MY_DATA);
    for (let i = 0; i < allSections.length; i++) {
      const newSection = new Section(this.mode);
      const section = allSections[i];
      newSection.renderSection(this.defaultImg, MY_DATA[section].name, section);
      newSection.element.addEventListener('click', () => {
        this.cardsField.clearCardsField();
        this.section = section;
        document.getElementById(MAIN_PAGE)?.classList.remove(MENU_BAR_SELECT);
        document.getElementById(section)?.classList.add(MENU_BAR_SELECT);
        this.checkMode(section);
        if (this.mode === PLAY) this.addStartPlayButton();
      });
      this.cardsField.render(newSection.element);
    }
  }

  addTrainCards(section: string): void {
    this.addCategoryName(MY_DATA[section].name);
    let Id = 0;
    MY_DATA[section].cards.forEach((el) => {
      const newCard = new CardTrain(Id, section);
      Id++;
      newCard.addCard(el.img, el.word, el.translation, el.audioSrc);
      this.cardsField.render(newCard.element);
    });
  }

  addPlayCards(section: string): void {
    this.addCategoryName(MY_DATA[section].name);
    const allCards = Object.keys(MY_DATA[section].cards);
    let i = 0;
    MY_DATA[section].cards.forEach((el) => {
      const newCard = new CardPlay();
      newCard.addCard(el.img, el.audioSrc, Number(allCards[i]));
      i++;
      this.cardsField.render(newCard.element);
    });
  }

  addCategoryName(name: string): void {
    const categoryName = document.createElement('div');
    categoryName.classList.add('category-name');
    categoryName.textContent = name;
    this.cardsField.render(categoryName);
  }

  addMainPageBar(): void {
    const mainPage = new MenuBar();
    mainPage.addName(MAIN_PAGE);
    mainPage.setId(MAIN_PAGE);
    mainPage.addEvent();
    mainPage.element.classList.add(MENU_BAR_SELECT);
    mainPage.element.addEventListener('click', () => {
      this.cardsField.clearCardsField();
      this.section = MAIN_PAGE;
      this.addSections();
      this.moveBurgerMenu();
    });
    this.burgerMenu.render(mainPage.element);
  }

  addStatisticBar(): void {
    const statisticPage = new MenuBar();
    statisticPage.addName(STATISTIC);
    statisticPage.addEvent();
    statisticPage.element.addEventListener('click', () => {
      this.cardsField.clearCardsField();
      this.section = MAIN_PAGE;
      this.renderStatistic();
      this.moveBurgerMenu();
    });
    this.burgerMenu.render(statisticPage.element);
  }

  addMenuBars(): void {
    this.addMainPageBar();
    const allSections = Object.keys(MY_DATA);
    for (let i = 0; i < allSections.length; i++) {
      const section = allSections[i];
      const newMenuBar = new MenuBar();
      newMenuBar.addName(MY_DATA[section].name);
      newMenuBar.setId(section);
      newMenuBar.addEvent();
      newMenuBar.element.addEventListener('click', () => {
        this.cardsField.clearCardsField();
        this.section = section;
        this.checkMode(section);
        if (this.mode === PLAY) this.addStartPlayButton();
        this.moveBurgerMenu();
      });
      this.burgerMenu.render(newMenuBar.element);
    }
    this.addStatisticBar();
    this.burgerMenu.renderLoginButton();
  }

  addModeButtonEvent(): void {
    const modeButton = this.modeButton.element;
    modeButton.addEventListener('click', () => {
      modeButton.classList.toggle('play-mode');
      document.querySelectorAll('.section').forEach((el) => {
        el.classList.toggle('section-play');
      });

      if (this.mode === TRAIN) this.mode = PLAY;
      else this.mode = TRAIN;

      if (this.mode === TRAIN) modeButton.textContent = TRAIN;
      else modeButton.textContent = PLAY;

      if (this.section !== MAIN_PAGE) {
        this.cardsField.clearCardsField();
        this.checkMode(this.section);

        if (this.mode === PLAY) this.addStartPlayButton();
      }
    });
  }

  createStartPlayButton(): HTMLElement {
    const startPlayingButton = document.createElement('button');
    startPlayingButton.classList.add('start-play__button');
    startPlayingButton.textContent = 'start playing';
    this.cardsField.render(startPlayingButton);
    return startPlayingButton;
  }

  addStartPlayButton(): void {
    const startPlaying = this.createStartPlayButton();
    this.starsField.clearStarField();
    const allCards = Object.keys(MY_DATA[this.section].cards);
    for (let i = 0; i < allCards.length; i++) {
      const cardNumber = Number(allCards[i]);
      this.audioArray.push(MY_DATA[this.section].cards[cardNumber].audioSrc);
    }
    this.audioArray.sort(() => Math.random() - ZERO_POINT_FIVE);
    startPlaying.addEventListener('click', () => {
      this.gameStarted = true;
      this.cardsField.render(this.starsField.element);
      startPlaying.textContent = 'Repeat';
      startPlaying.classList.add('repeat__button');
      this.sayAnimalName();
    });
    this.cardsField.render(startPlaying);
  }

  getIsActiveCardInGameMode(element: HTMLElement): boolean {
    return element.classList.contains('card-play') && !element.classList.contains(CORRECT_CARD) && this.gameStarted;
  }

  addCardsFieldEvent(): void {
    this.cardsField.element.addEventListener('click', (event) => {
      const selectElement = event.target as HTMLElement;
      const selectNumber = Number(selectElement.dataset.numb);
      if (this.getIsActiveCardInGameMode(selectElement)) {
        if (selectElement.dataset.audio === this.audioArray[ZERO]) {
          playCorrectSignal();
          MY_DATA[this.section].cards[selectNumber].hit += 1;
          this.starsField.addWinStar();
          selectElement.classList.add(CORRECT_CARD);
          this.audioArray.shift();
          this.sayAnimalName();
          if (this.audioArray.length === ZERO) this.gameOver();
        } else if (selectElement.dataset.audio !== this.audioArray[ZERO]) {
          playErrorSignal();
          MY_DATA[this.section].cards[selectNumber].miss += 1;
          this.starsField.addStar();
          this.mistakes += ONE;
        }
      }
    });
  }

  sayAnimalName(): void {
    const audio = new Audio(this.audioArray[0]);
    audio.currentTime = ZERO;
    audio.play();
  }

  gameOver(): void {
    this.gameStarted = false;
    this.cardsField.clearCardsField();
    if (this.mistakes === ZERO) {
      playSuccessSignal();
      this.createFinalImg('win.jpg');
      this.backToCategories();
    } else {
      playFailureSignal();
      this.addCategoryName(`You have ${this.mistakes} mistakes. Try again`);
      this.createFinalImg('lose.jpg');
      this.mistakes = ZERO;
      this.backToCategories();
    }
  }

  createFinalImg(img: string): void {
    const image = document.createElement('img');
    image.setAttribute('src', img);
    image.classList.add('final-img');
    this.cardsField.render(image);
  }

  backToCategories(): void {
    setTimeout(() => {
      resetSelection();
      document.getElementById(MAIN_PAGE)?.classList.add(MENU_BAR_SELECT);
      this.cardsField.clearCardsField();
      this.addSections();
    }, TIME_OF_FINAL_IMG);
  }

  renderStatistic(): void {
    const statisticWrapper = document.createElement('div');
    statisticWrapper.classList.add('statistic-wrapper');

    const statistic = new Statistic();
    statistic.renderHeader();
    statistic.renderTable();

    const resetButton = document.createElement('button');
    resetButton.classList.add('reset-button');
    resetButton.textContent = 'Reset';
    resetButton.addEventListener('click', () => {
      statistic.resetStatistic();
      statistic.clearTable();
      statistic.renderHeader();
      statistic.renderTable();
    });

    statisticWrapper.appendChild(resetButton);
    statisticWrapper.appendChild(statistic.element);
    this.cardsField.render(statisticWrapper);
  }
}
