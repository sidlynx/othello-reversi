<template>
  <div class="component-info">
    <div class="winner" v-if="!$store.getters.canPlay && displayed">
      <div class="icon center-horizontal center-vertical"><i class="fas fa-trophy"></i></div>
      <div class="message center-horizontal center-vertical">
        <span v-if="$store.getters.scoreB > $store.getters.scoreW">
          <span v-if="$store.state.mode === '2'">Black player wins</span>
          <span v-else>You win</span>
        </span>
        <span v-if="$store.getters.scoreW > $store.getters.scoreB">
          <span v-if="$store.state.mode === '2'">White playe wins</span>
          <span v-else>Pc wins</span>
        </span>
      </div>
      <div class="icon center-horizontal center-vertical"><i class="fas fa-trophy"></i></div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      displayed: false,
      interval: 500
    };
  },
  methods: {
    toggle() {
      this.displayed = !this.displayed;
      setTimeout(() => {
        this.toggle();
      }, this.interval);
    }
  },
  created() {
    this.toggle();
  }
};
</script>
<style lang="scss" scoped>
.component-info {
  height: 50px;
  .winner {
    height: 100%;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    .icon {
      color: gold;
      flex-basis: 40px;
    }
    .message {
      flex-basis: 100%;
    }
  }
}
</style>
