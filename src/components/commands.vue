<template>
  <div class="commands-component">
    <div class="square init" @click="init" title="init">
      <i class="fas fa-times"></i>
    </div>
    <div class="square help" title="help" @click="help">
      <i class="fas fa-question"></i>
    </div>
    <div class="square undo" @click="undo" title="undo">
      <i class="fas fa-undo"></i>
    </div>
    <div class="winner">
      <div v-if="!$store.getters.canPlay" style="height:100%;" class="center-vertical">
        <span v-if="$store.getters.scoreB > $store.getters.scoreW">Black </span><span v-if="$store.getters.scoreW > $store.getters.scoreB">White </span> &nbsp; player Wins
      </div>
    </div>
  </div>
</template>
<script>
import MButton from "./button.vue";
export default {
  methods: {
    init() {
      this.$store.commit("init");
    },
    undo() {
      this.$store.commit("undo");
    },
    help() {
      window.open("https://en.wikipedia.org/wiki/Reversi");
    }
  },
  components: {
    MButton
  }
};
</script>
<style lang="scss" scoped>
.commands-component {
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  .square {
    width: 60px;
    height: 50px;
    //border: 1px solid grey;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.init {
    }
  }
  .winner {
    font-size: 30px;
    flex-basis: 100%;
  }
}
</style>
