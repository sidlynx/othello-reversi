export default class Square {
  state;
  l;
  n;
  attackable;
  trappableSquares = [];
  constructor(l, n) {
    this.l = l;
    this.n = n;
    this.state = "E";
    this.attackable = false;
    this.trappableSquares = [];
  }
}
