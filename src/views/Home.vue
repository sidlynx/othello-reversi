<template>
  <div class="home">
    <div class="board">
      <board />
    </div>
  </div>
</template>

<script>
import Board from "@/components/board.vue";
export default {
  name: "home",
  components: {
    Board
  }
};
</script>
<style lang="scss" scoped>
.home {
  .board {
    //background-color: green;
    background-image: url("https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1869921/1360/906/m1/fpnw/wm1/dw0ydn312uhcbpz1fonuejqnabmz9n1ypgiysct1dtspfa5wjskw6t5ysquandqf-.jpg?1478700159&s=ef86a33e2fb6b20ce197e8af47df4455");
    height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 800px;
  }
}
</style>
