<template>
  <div class="square" @click="play" :class="['turn-' + turn]">
    <div class="disc" :class="{'W':item.state === 'W','B':item.state === 'B','W attackable':item.state === 'E' && turn === 'W' && !!item.trappableSquares.length,'B attackable':item.state === 'E' && turn === 'B' && !!item.trappableSquares.length}">
      <span v-if="item.trappableSquares.length">{{item.trappableSquares.length}}</span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  props: {
    l: {
      type: String,
      required: true,
      validator: val => ["a", "b", "c", "d", "e", "f", "g", "h"].includes(val)
    },
    n: {
      type: String,
      required: true,
      validator: val => ["1", "2", "3", "4", "5", "6", "7", "8"].includes(val)
    }
  },
  computed: {
    item() {
      return this.$store.state.items[this.l][this.n];
    },
    turn() {
      return this.$store.state.turn;
    }
  },
  methods: {
    play() {
      if (!!this.item.trappableSquares.length)
        this.$store.commit("play", { l: this.item.l, n: this.item.n });
    }
  }
};
</script>
<style lang="scss" scoped>
.square {
  width: 58px;
  height: 58px;
  background-color: #009c4e;
  background-color: #009351;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  .disc {
    width: 50px;
    height: 50px;
    background-color: transparent;
    display: block;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.B {
      background-color: #000;
    }
    &.W {
      background-color: #fff;
    }
    &.E {
      background-color: transparent;
    }
    &.attackable {
      //background-color: grey;
      font-weight: bold;
      background-color: transparent;
      font-size: 2rem;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
  &:hover {
    //background-color: green;
    //cursor: pointer;
  }
  &.turn-B {
    .disc {
      &.attackable {
        border: 4px solid #000;
        color: #000;
      }
    }
  }
  &.turn-W {
    .disc {
      &.attackable {
        border: 4px solid white;
        color: white;
      }
    }
  }
}
</style>
