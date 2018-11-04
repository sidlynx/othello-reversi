<template>
  <div class="container center-horizontal center-vertical">
    <div class="home">

      <new-game-dialog v-if="$store.state.newGameDialogShown" />
      <div class="left transcript">
        <transcript type="B" />
      </div>
      <div class="middle">
        <info />
        <board />
        <commands />
      </div>
      <div class="right transcript">
        <transcript type="W" />
      </div>
    </div>
  </div>
</template>

<script>
import Board from "@/components/board.vue";
import Transcript from "@/components/transcript.vue";
import Info from "@/components/info.vue";
import Commands from "@/components/commands.vue";
import NewGameDialog from "@/components/dialog/new_game.vue";
export default {
  name: "home",
  components: {
    Board,
    Transcript,
    Info,
    Commands,
    NewGameDialog
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: calc(100vh - 50px);
  .home {
    height: 640px;
    width: 930px;
    border: 1px solid grey;
    border-radius: 2px;

    display: flex;
    flex-direction: row;
    //background-image: url("https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1869921/1360/906/m1/fpnw/wm1/dw0ydn312uhcbpz1fonuejqnabmz9n1ypgiysct1dtspfa5wjskw6t5ysquandqf-.jpg?1478700159&s=ef86a33e2fb6b20ce197e8af47df4455");
    .left {
      flex-basis: 50%;
    }
    .middle {
      display: flex;
      //justify-content: center;
      flex-direction: column;
    }
    .transcript {
      flex-basis: 50%;
      //height: calc(100vh - 50px);
      //overflow-y: scroll;
      .no-moves-yet {
        text-align: center;
        font-size: 18px;
      }
    }
    .dialog {
      width: 930px;
      height: 640px;
      background-color: #fff;
      position: absolute;
      display: block;
      opacity: 0.9;
      .container {
        width: 540px;
      }
    }
  }
}
</style>
