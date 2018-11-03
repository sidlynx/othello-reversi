<template>
  <div class="component-info">
    <div class="winner" v-if="!$store.getters.canPlay">
      <div class="icon center-horizontal center-vertical"><i class="fas fa-trophy"></i></div>
      <div class="message center-horizontal center-vertical">
        <span v-if="$store.getters.scoreB > $store.getters.scoreW">Black </span><span v-if="$store.getters.scoreW > $store.getters.scoreB">White </span> &nbsp; player Wins
      </div>
      <div class="icon center-horizontal center-vertical"><i class="fas fa-trophy"></i></div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  computed: {}
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
