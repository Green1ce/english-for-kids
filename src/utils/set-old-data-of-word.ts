import { MY_DATA, WRONG_NAME } from '../shared/CONST';

export function setOldDataOfWord(section: string, word: string): void {
  const newWord = document.querySelector(`[data-newWord=${word}]`) as HTMLInputElement;
  const newTranslation = document.querySelector(`[data-newTranslation=${word}]`) as HTMLInputElement;
  newWord.classList.remove(WRONG_NAME);
  newTranslation.classList.remove(WRONG_NAME);
  const { cards } = MY_DATA[section];
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] && (cards[i].word === word)) {
      newWord.value = MY_DATA[section].cards[i].word;
      newTranslation.value = MY_DATA[section].cards[i].translation;
    }
  }
}
