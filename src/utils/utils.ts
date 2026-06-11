export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function getRandomIntMin(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
