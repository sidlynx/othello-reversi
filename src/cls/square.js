export default class Square {
  state;
  l;
  n;
  trappableSquares = [];
  constructor(l, n) {
    this.l = l;
    this.n = n;
    this.state = "E";
    this.trappableSquares = [];
  }
}
