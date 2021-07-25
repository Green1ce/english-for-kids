import { MY_DATA } from '../shared/CONST';

const SECTION = 'section';
const ONE = 1;

export function addSectionInData(name: string): void {
  const keys = Object.keys(MY_DATA);
  const lastSection = keys[keys.length - ONE];
  const newSection = `${SECTION}${Number(lastSection[lastSection.length - ONE]) + ONE}`;
  MY_DATA[`${newSection}`] = {
    name,
    cards: [],
  };
}
