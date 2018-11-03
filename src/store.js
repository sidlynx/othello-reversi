import Vue from "vue";
import Vuex from "vuex";
import Util from "./util.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transcript: [],
    turn: "B",
    items: {},
    letters: ["a", "b", "c", "d", "e", "f", "g", "h"],
    numbers: ["1", "2", "3", "4", "5", "6", "7", "8"],
    _history: []
  },
  getters: {
    scoreB(state) {
      let score = 0;
      state.letters.forEach(l => {
        state.numbers.forEach(n => {
          let item = state.items[l][n];
          if (item.state === "B") score++;
        });
      });
      return score;
    },
    scoreW(state) {
      let score = 0;
      state.letters.forEach(l => {
        state.numbers.forEach(n => {
          let item = state.items[l][n];
          if (item.state === "W") score++;
        });
      });
      return score;
    },
    canPlay(state) {
      let attackableSquaresCount = 0;
      state.letters.forEach(l => {
        state.numbers.forEach(n => {
          let item = state.items[l][n];
          if (item.trappableSquares.length) {
            attackableSquaresCount++;
          }
        });
      });
      return attackableSquaresCount > 0;
    },
    blackTranscript(state) {
      let transcript = [];
      for (let i = 0; i < state.transcript.length; i++) {
        if (i % 2 == 0) transcript.push(state.transcript[i]);
      }
      return transcript;
    },
    whiteTranscript(state) {
      let transcript = [];
      for (let i = 0; i < state.transcript.length; i++) {
        if (i % 2 == 1) transcript.push(state.transcript[i]);
      }
      return transcript;
    },
    strTranscript(state) {
      let str = "";
      state.transcript.forEach(move => {
        str += move.l + move.n + ",";
      });
      if (str.endsWith(",")) {
        str = str.substring(0, str.length - 1);
      }
      return str;
    }
  },
  mutations: {
    init: state => {
      let _state = { ...state };
      _state = Util.init(_state);
      state.turn = _state.turn;
      state.items = Util.copy(_state.items);
      state.transcript = [];
    },
    play: (state, payload) => {
      let _state = Util.copy(state);
      _state = Util.play(_state, payload.l, payload.n);
      state.turn = _state.turn;
      state.items = Util.copy(_state.items);
      state.transcript = Util.copy(_state.transcript);
    },
    undo: state => {
      let _state = Util.copy(state);
      _state = Util.undo(_state);
      state.turn = _state.turn;
      state.items = Util.copy(_state.items);
      state.transcript = Util.copy(_state.transcript);
    }
  },
  actions: {}
});
