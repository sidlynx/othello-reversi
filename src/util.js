import Square from "./cls/square.js";
let Util = {
  init: state => {
    state.letters.forEach(l => {
      state.items[l] = {};
      state.numbers.forEach(n => {
        state.items[l][n] = new Square(l, n);
      });
    });
    state.items["d"]["4"].state = "W";
    state.items["d"]["5"].state = "B";
    state.items["e"]["4"].state = "B";
    state.items["e"]["5"].state = "W";
    return Util.update(state);
  },
  updateAttackable: state => {
    state.letters.forEach(l => {
      state.numbers.forEach(n => {
        state.items[l][n].attackable = Util.isAttackable(state, l, n);
      });
    });
    //*/
  },
  isAttackable(state, l, n) {
    let item = state.items[l][n];
    let itemLIndex = state.letters.indexOf(item.l);
    let itemNIndex = state.numbers.indexOf(item.n);
    let i = itemLIndex;
    let j = itemNIndex;
    let sandwich = false;
    let trappedItems = [];
    let nextItem = null;
    //0
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      j--;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        if (trappedItems.length) return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);

    //45
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      i++;
      j++;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        if (trappedItems.length) return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);

    //90
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    do {
      i++;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        if (trappedItems.length) return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);

    //135
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      i++;
      j--;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        if (trappedItems.length) return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    //180
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      j++;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        if (trappedItems.length) return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    //225
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      i--;
      j++;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        if (trappedItems.length) return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    //270
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      i--;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        if (trappedItems.length) return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    //315
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      i--;
      j--;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        if (trappedItems.length) return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    return false;
  },
  getTrappableSquares(state, l, n) {
    let item = state.items[l][n];
    if (item.state !== "E") return [];
    let itemLIndex = state.letters.indexOf(item.l);
    let itemNIndex = state.numbers.indexOf(item.n);
    let i = itemLIndex;
    let j = itemNIndex;
    let sandwich = false;
    let trappedItems = [];
    let trappableItems = [];
    let nextItem = null;
    //0
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      j--;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        trappableItems = trappableItems.concat(trappedItems);
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);

    //45
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      i++;
      j++;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        trappableItems = trappableItems.concat(trappedItems);
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);

    //90
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    do {
      i++;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        trappableItems = trappableItems.concat(trappedItems);
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);

    //135
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      i++;
      j--;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        trappableItems = trappableItems.concat(trappedItems);
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    //180
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      j++;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        trappableItems = trappableItems.concat(trappedItems);
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    //225
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      i--;
      j++;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        trappableItems = trappableItems.concat(trappedItems);
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    //270
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      i--;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        trappableItems = trappableItems.concat(trappedItems);
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    //315
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    nextItem = null;
    do {
      i--;
      j--;
      try {
        nextItem = state.items[state.letters[i]][state.numbers[j]];
      } catch (e) {
        break;
      }
      if (!nextItem || nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        trappableItems = trappableItems.concat(trappedItems);
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    return trappableItems;
  },
  update(state, l, n) {
    if (l && n) {
      let square = state.items[l][n];
      square.trappableSquares.forEach(square => {
        square.state = state.turn;
      });

      square.state = state.turn;
      state.turn = state.turn === "B" ? "W" : "B";
    }

    state.letters.forEach(l => {
      state.numbers.forEach(n => {
        let square = state.items[l][n];
        square.trappableSquares = Util.getTrappableSquares(state, l, n);
      });
    });
    return state;
  }
};

export default Util;
