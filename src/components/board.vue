<template>
  <div id="main">

    <div id="container">
      <div id="top">
        <div class="letter" style="flex-basis:30px;"></div>
        <div class="letter center-vertical center-horizontal" v-for="(v,i) in ['a','b','c','d','e','f','g','h']" :key="i">{{v}}</div>
      </div>
      <div id="middle">
        <div id="left">
          <div class="number center-vertical center-horizontal" v-for="(v,i) in [1,2,3,4,5,6,7,8]" :key="i">{{v}}</div>
        </div>
        <div id="board">
          <div class="col" v-for="(l,i) in ['a','b','c','d','e','f','g','h']" :key="l + i">
            <square v-for="(n,j) in ['1','2','3','4','5','6','7','8']" :key="l + n + j" :l="l" :n="n" />
          </div>
        </div>
        <div id="right"></div>
      </div>
      <div id="bottom"></div>
    </div>

  </div>
</template>
<script>
import Square from "./square.vue";

export default {
  data() {
    return {
      transcript: ""
    };
  },
  methods: {
    playTranscript() {}
  },
  computed: {
    items() {
      return this.$store.state.items;
    }
  },
  components: {
    Square
  }
};
</script>
<style lang="scss" scoped>
$backColor: #5c1308;
$backColor: #4d4d4d;
#main {
  #commands {
    border: 1px solid grey;
    height: 60px;
    background-color: orange;
  }
  #container {
    width: 540px;
    height: 540px;
    display: flex;
    flex-direction: column;
    #top {
      flex-basis: 30px;
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
      background-color: $backColor;
      .letter {
        flex-basis: 60px;
        color: white;
        font-weight: bold;
      }
    }
    #middle {
      flex-basis: 100%;
      display: flex;
      flex-direction: row;
      #left {
        flex-basis: 30px;
        background-color: $backColor;
        color: white;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        .number {
          flex-basis: 60px;
          font-weight: bold;
        }
      }
      #board {
        //border: 1px solid #000;
        width: 480px;
        height: 480px;
        display: flex;
        flex-direction: row;
        color: white;
        .col {
          flex-basis: 60px;
          display: flex;
          flex-direction: column;
          .row {
            flex-basis: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #000;
            background-color: #009c4e;
            color: #000;
            .disc {
              background-color: transparent;
              display: block;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              &.B {
                background-color: #000;
              }
              &.W {
                background-color: #fff;
              }
              &.E {
                background-color: transparent;
              }
            }
          }
        }
      }
      #right {
        flex-basis: 30px;
        background-color: $backColor;
      }
    }
    #bottom {
      flex-basis: 30px;
      background-color: $backColor;
      flex-shrink: 0;
    }
  }
  #info {
    background-color: orange;
    height: 60px;
  }
}

.center-horizontal {
  display: flex;
  justify-content: center;
}

.center-vertical {
  display: flex;
  align-items: center;
}

.from-transcript {
  width: 540px;
  word-break: break-all;
  textarea {
    width: 100%;
    height: 100px;
  }
}
</style>
