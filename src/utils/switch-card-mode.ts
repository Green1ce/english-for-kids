export function switchCardMode(section: string): void {
  document.querySelector(`[data-view=${section}]`)?.classList.toggle('hide');
  document.querySelector(`[data-change=${section}]`)?.classList.toggle('hide');
}
