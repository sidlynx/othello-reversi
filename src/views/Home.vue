<template>
  <div class="home">
    <div class="transcript">
      <div style="display:flex;justify-content:center;font-size:30px;border-bottom:1px solid grey;">Black Transcript</div>
      <div class="no-moves-yet" v-if="!$store.getters.blackTranscript.length">### No moves yet ###</div>
      <div v-for="(move,index) in $store.getters.blackTranscript" :key="index" style="height:20px;padding-left:10px;padding-right:10px;">
        <div style="border-bottom:1px solid grey;">(<span v-if="index<9">0</span>{{index+1}}) : <span style="font-weight:bold;background-color:white;color:black;">Black</span> played {{move.l}}x{{move.n}}</div>
      </div>
    </div>
    <div class="board">
      <board />
    </div>
    <div class="transcript">
      <div style="display:flex;justify-content:center;font-size:30px;border-bottom:1px solid grey;">White Transcript</div>
      <div class="no-moves-yet" v-if="!$store.getters.whiteTranscript.length">### No moves yet ###</div>
      <div v-for="(move,index) in $store.getters.whiteTranscript" :key="index" style="height:20px;padding-left:10px;padding-right:10px;">
        <div style="border-bottom:1px solid grey;">(<span v-if="index<9">0</span>{{index+1}}) : <span style="font-weight:bold;background-color:black;color:white;">White</span> played {{move.l}}x{{move.n}}</div>
      </div>
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
  display: flex;
  flex-direction: row;
  background-image: url("https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1869921/1360/906/m1/fpnw/wm1/dw0ydn312uhcbpz1fonuejqnabmz9n1ypgiysct1dtspfa5wjskw6t5ysquandqf-.jpg?1478700159&s=ef86a33e2fb6b20ce197e8af47df4455");
  .left {
    flex-basis: 50%;
  }
  .board {
    //background-color: green;

    height: calc(100vh - 50px);
    display: flex;
    //align-items: center;
    justify-content: center;
  }
  .transcript {
    flex-basis: 50%;
    //background-color: white;
    height: calc(100vh - 50px);
    overflow-y: scroll;
    .no-moves-yet {
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>
