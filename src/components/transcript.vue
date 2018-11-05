<template>
  <div class="transcript-component" :class="{'for-B':type === 'B','for-W':type === 'B'}">
    <div class="title">{{name}} ( <span class="star"><i class="fas fa-star"></i></span> {{score}})</div>
    <div class="no-moves-yet" v-if="!moves.length">### No moves yet ###</div>
    <div class="item" v-for="(move,index) in moves" :key="index" style="">
      <div class="holder">(<span v-if="index<9">0</span>{{index+1}}) : {{move.l}}x{{move.n}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: v => {
        return ["W", "B"].includes(v);
      }
    }
  },
  computed: {
    moves() {
      return this.type === "B"
        ? this.$store.getters.blackTranscript
        : this.$store.getters.whiteTranscript;
    },
    name() {
      if (this.type === "B") {
        if (this.$store.state.mode === "2") {
          return "Black";
        } else {
          return "You";
        }
      } else {
        if (this.$store.state.mode === "2") {
          return "White";
        } else {
          return "PC";
        }
      }
    },
    score() {
      return this.type === "B"
        ? this.$store.getters.scoreB
        : this.$store.getters.scoreW;
    }
  }
};
</script>
<style lang="scss" scoped>
.transcript-component {
  .title {
    display: flex;
    justify-content: center;
    font-size: 30px;
    border-bottom: 1px solid grey;
    .star {
      color: gold;
    }
  }
  .no-moves-yet {
    text-align: center;
    font-size: 18px;
  }
  .item {
    height: 20px;
    padding-left: 10px;
    padding-right: 10px;
    .holder {
      font-weight: bold;
      border-bottom: 1px solid grey;
      .highlight {
        font-weight: bold;
      }
    }
  }
  &.for-B {
    .item {
      .highlight {
        background-color: white;
        color: black;
      }
    }
  }
  &.for-W {
    .item {
      .highlight {
        background-color: black;
        color: white;
      }
    }
  }
}
</style>

