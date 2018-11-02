<template>
  <div class="component-info">
    <div class="info left">
      <div class="disc">
        <div class="circle"></div>
      </div>
      <div class="x">
        <i class="fas fa-star"></i>
      </div>
      <div class="score">{{$store.getters.scoreB}}</div>
    </div>
    <div class="title">Score</div>
    <div class="info right">
      <div class="disc">
        <div class="circle"></div>
      </div>
      <div class="x">
        <i class="fas fa-star"></i>
      </div>
      <div class="score">{{$store.getters.scoreW}}</div>
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
  height: 60px;
  display: flex;
  flex-direction: row;
  .info {
    flex-basis: 180px;
    //border: 1px solid grey;
    height: 100%;
    display: flex;
    .disc {
      flex-basis: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      .circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .x {
      flex-basis: 50px;
      font-size: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: gold;
    }
    .score {
      flex-basis: 50px;
      font-size: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.right {
      flex-direction: row-reverse;
      .disc {
        .circle {
          background: white;
        }
      }
    }
    &.left {
      .disc {
        .circle {
          background: black;
        }
      }
    }
  }
  .title {
    flex-basis: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
}
</style>
