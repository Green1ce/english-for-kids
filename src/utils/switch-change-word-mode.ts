export function switchChangeWordMode(word: string): void {
  document.querySelector(`[data-viewWord=${word}]`)?.classList.toggle('hide');
  document.querySelector(`[data-changeWord=${word}]`)?.classList.toggle('hide');
}
