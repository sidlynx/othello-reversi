<template>
  <div id="app">
    <div id="header">
      <app-header />
    </div>
    <div id="content">
      <div class="page">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/layout/header.vue";
export default {
  components: {
    AppHeader
  },
  created() {
    this.$store.commit("init");
  }
};
</script>
<style lang="scss" scoped>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  #header {
    flex-basis: 50px;
    box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
  }
  #content {
    flex-basis: 100%;
    display: flex;
    //align-items: center;
    justify-content: center;
    .page {
      width: 1020px;
      //border-left: 1px solid grey;
      //border-right: 1px solid grey;
    }
  }
}
</style>

