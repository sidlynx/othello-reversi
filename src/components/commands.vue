<template>
    <div class="commands-component">
        <div class="square init" @click="init" title="">
            <i class="fas fa-times"></i>
        </div>
        <div class="square help" title="help">
            <i class="fas fa-question"></i>
        </div>
        <div class="square undo" @click="undo" title="undo">
            <i class="fas fa-undo"></i>
        </div>
        <div class="winner">Black player Wins</div>
    </div>
</template>
<script>
export default {
  methods: {
    init() {
      this.$store.commit("init");
    },
    undo() {
      this.$store.commit("undo");
    }
  }
};
</script>
<style lang="scss" scoped>
.commands-component {
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  .square {
    width: 50px;
    height: 50px;
    border: 1px solid grey;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.init {
    }
  }
  .winner {
    font-size: 2.5rem;
    flex-basis: 100%;
  }
}
</style>
