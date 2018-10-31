import Vue from "vue";
import Vuex from "vuex";

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
    items: {}
  },
  getters: {
    items(state) {
      return state.items;
    }
  },
  mutations: {
    init: state => {
      let items = {};
      let numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
      let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

      /*
      for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
          items
        }
      }
      //*/

      letters.forEach(l => {
        items[l] = {};
        numbers.forEach(n => {
          items[l][n] = new Square(l, n);
        });
      });
      items["d"]["4"].state = "W";
      items["d"]["5"].state = "B";
      items["e"]["4"].state = "B";
      items["e"]["5"].state = "W";

      items["c"]["4"].attackable = true;
      items["d"]["3"].attackable = true;
      items["e"]["6"].attackable = true;
      items["f"]["5"].attackable = true;

      state.items = items;
    },
    play: (state, payload) => {
      //state.test = "changed";
      console.log("called");
      //state.stamp = Date.now();
      let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
      let numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
      let itemLIndex = letters.indexOf(payload.l);
      let itemNIndex = numbers.indexOf(payload.n);
      let otherFound = false;
      let trappedItems = [];
      //0

      otherFound = false;
      trappedItems = [];
      for (let i = itemNIndex - 1; i >= 0; i--) {
        let nextItem = state.items[letters[itemLIndex]][numbers[i]];

        if (nextItem.state == "E") {
          break;
        } else if (nextItem.state == state.turn) {
          //Sandwich
          otherFound = true;

          trappedItems.forEach(item => {
            //item.state = state.turn;
            let _item = Object.assign({}, item);
            _item.state = state.turn;
            //state.items[item.l].splice(item.n, 1, _item);
            state.items[item.l][item.n].state = state.turn;
            //Vue.set(state.items[item.l][item.n], "state", state.turn);
          });
          break;
        }

        if (nextItem.state != state.turn) {
          trappedItems.push(nextItem);
        }
      }
      //45
      //90
      //135
      //180
      //225
      //270
      //315
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
