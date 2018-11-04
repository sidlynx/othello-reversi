<template>
  <div class="commands-component">
    <div class="square init" @click="showNeGameDialog" title="New game">
      <i class="fas fa-plus"></i>
    </div>
    <div class="square help" title="help" @click="help">
      <i class="fas fa-question"></i>
    </div>
    <div class="square undo" @click="undo" title="undo">
      <i class="fas fa-undo"></i>
    </div>
    <div class="center-vertical copy" style="flex-basis:100%;font-weight:bold;">
      &copy; &lt;mohammed.hamdoune@gmail.com&gt;
    </div>
  </div>
</template>
<script>
import MButton from "./button.vue";
export default {
  methods: {
    undo() {
      this.$store.commit("undo");
    },
    help() {
      window.open("https://en.wikipedia.org/wiki/Reversi");
    },
    showNeGameDialog() {
      this.$store.dispatch("showNeGameDialog");
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
  }
  .winner {
    font-size: 30px;
    flex-basis: 100%;
  }
}
</style>
