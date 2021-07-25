import { MY_DATA } from '../shared/CONST';

function isSectionNameNotExist(name: string): boolean {
  let answer = true;
  Object.keys(MY_DATA).forEach((el) => {
    if (MY_DATA[el].name === name) answer = false;
  });
  return answer;
}

function isNotEmptyName(name: string): boolean {
  let answer = true;
  if (name.length < 1) answer = false;
  return answer;
}

function isNotNumberInName(name: string): boolean {
  let answer = true;
  if ((/\d{1}/i).exec(name)) answer = false;
  return answer;
}

export function isCorrectName(name: string): boolean {
  return isSectionNameNotExist(name) && isNotEmptyName(name) && isNotNumberInName(name);
}
