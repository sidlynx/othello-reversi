import Vue from "vue";
import Vuex from "vuex";
import Util from "./util.js";
import { utils } from "mocha";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stamp: Date.now(),
    score: {
      W: 0,
      B: 0
    },
    transcripts: [],
    turn: "B",
    items: {},
    letters: ["a", "b", "c", "d", "e", "f", "g", "h"],
    numbers: ["1", "2", "3", "4", "5", "6", "7", "8"]
  },
  getters: {
    items(state) {
      return state.items;
    }
  },
  mutations: {
    init: state => {
      Util.init(state);
      Util.updateAttackable(state);
    },
    play: (state, payload) => {
      console.log("played", payload);
      let item = state.items[payload.l][payload.n];
      Util.update(state, item);
    }
  },
  actions: {}
});

class Square {
  state = "E";
  l;
  n;
  attackable = false;
  constructor(l, n) {
    this.l = l;
    this.n = n;
  }
}

/*
let Util = {
  init: state => {
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

    letters.forEach(l => {
      state.items[l] = {};
      numbers.forEach(n => {
        state.items[l][n] = new Square(l, n);
      });
    });
    state.items["d"]["4"].state = "W";
    state.items["d"]["5"].state = "B";
    state.items["e"]["4"].state = "B";
    state.items["e"]["5"].state = "W";
  },
  updateAttackable: state => {
    state.letters.forEach(l => {
      state.numbers.forEach(n => {
        state.items[l][n].attackable = Util.isAttackable(state, l, n);
      });
    });
  },
  isAttackable(state, l, n) {
    let item = state.items[l][n];
    let itemLIndex = state.letters.indexOf(item.l);
    let itemNIndex = state.numbers.indexOf(item.n);
    let i = itemLIndex;
    let j = itemNIndex;
    let sandwich = false;
    let trappedItems = [];
    //0
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    do {
      j--;
      let nextItem = state.items[state.letters[i]][state.numbers[j]];
      if (nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);

    //45
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    do {
      i++;
      j++;
      let nextItem = state.items[state.letters[i]][state.numbers[j]];
      if (nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        return true;
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
      let nextItem = state.items[state.letters[i]][state.numbers[j]];
      if (nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);

    //135
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    do {
      i++;
      j--;
      let nextItem = state.items[state.letters[i]][state.numbers[j]];
      if (nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    //180
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    do {
      j++;
      let nextItem = state.items[state.letters[i]][state.numbers[j]];
      if (nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    //225
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    do {
      i--;
      j++;
      let nextItem = state.items[state.letters[i]][state.numbers[j]];
      if (nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    //270
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    do {
      i--;
      let nextItem = state.items[state.letters[i]][state.numbers[j]];
      if (nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
    //315
    i = itemLIndex;
    j = itemNIndex;
    trappedItems = [];
    sandwich = false;
    do {
      i--;
      j--;
      let nextItem = state.items[state.letters[i]][state.numbers[j]];
      if (nextItem.state == "E") break;
      else if (nextItem.state == state.turn) {
        sandwich = true;
        //to do
        return true;
      } else {
        trappedItems.push(nextItem);
      }
    } while (0 <= i && i <= 7 && 0 <= j && j <= 7);
  }
};
//*/
