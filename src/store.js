import Vue from "vue";
import Vuex from "vuex";
import Util from "./util.js";
import { utils } from "mocha";

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
  mutations: {
    init: state => {
      let _state = { ...state };
      _state = Util.init(_state);
      state.turn = _state.turn;
      state.items = Util.copy(_state.items);
      state._history = [..._state._history];
    },
    play: (state, payload) => {
      let _state = { ...state };
      _state = Util.play(_state, payload.l, payload.n);
      state.turn = _state.turn;
      state.items = Util.copy(_state.items);
      state._history = [..._state._history];
    },
    undo: state => {
      let _state = { ...state };
      _state = Util.undo(_state);
      state.turn = _state.turn;
      state.items = Util.copy(_state.items);
      state._history = Util.copy(_state._history);
    }
  },
  actions: {}
});
