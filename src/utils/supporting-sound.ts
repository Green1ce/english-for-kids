import { ZERO } from '../shared/CONST';

export function playErrorSignal(): void {
  const errorSignal = new Audio('audio/error.mp3');
  errorSignal.currentTime = ZERO;
  errorSignal.play();
}

export function playCorrectSignal(): void {
  const correctSignal = new Audio('audio/correct.mp3');
  correctSignal.currentTime = ZERO;
  correctSignal.play();
}

export function playSuccessSignal(): void {
  const successSignal = new Audio('audio/success.mp3');
  successSignal.currentTime = ZERO;
  successSignal.play();
}

export function playFailureSignal(): void {
  const failureSignal = new Audio('audio/failure.mp3');
  failureSignal.currentTime = ZERO;
  failureSignal.play();
}
