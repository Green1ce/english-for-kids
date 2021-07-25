interface IcardsItems {
  word: string,
  translation: string,
  img: string,
  audioSrc: string,
  hit: number,
  miss: number,
  train: number,
}

interface Isection {
  name: string,
  cards: IcardsItems[],
}

export interface IMyData {
  [index: string]: Isection,
}
