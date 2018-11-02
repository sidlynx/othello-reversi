<template>
    <div class="commands-component">
        <div class="square init" @click="init">
            <i class="fas fa-times"></i>
        </div>
        <div class="square help" @click="init">
            <i class="fas fa-question"></i>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    init() {
      this.$store.commit("init");
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
}
</style>
