<template>
  <div class="square" @click="play">
    <div class="disc" :class="{'W':item.state === 'W','B':item.state === 'B','W attackable':item.state === 'E' && turn === 'W' && !!item.attackable,'B attackable':item.state === 'E' && turn === 'B' && !!item.attackable}">
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
      type: Number,
      required: true,
      validator: val => [1, 2, 3, 4, 5, 6, 7, 8].includes(val)
    }
  },
  computed: {
    item() {
      console.log("changed");
      return this.$store.state.items[this.l][this.n];
    },
    turn() {
      return this.$store.state.turn;
    }
  },
  methods: {
    play() {
      if (!!this.item.attackable)
        this.$store.commit("play", { l: this.item.l, n: this.item.n });

      //this.$forceUpdate();
    }
  }
};
</script>
<style lang="scss" scoped>
.square {
  width: 58px;
  height: 58px;
  background-color: #009c4e;
  border: 1px solid #000;
  .disc {
    width: 60px;
    height: 60px;
    background-color: transparent;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
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
      background-color: grey;
    }
  }
  &:hover {
    background-color: green;
    cursor: pointer;
  }
}
</style>
