<template>
    <div class="component-info">
        <div class="left">
            <div class="disc">
                <div class="circle"></div>
            </div>
            <div class="x">
                <i class="fas fa-star"></i>
            </div>
            <div class="score">{{$store.getters.scoreB}}</div>
        </div>
        <div class="right">
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
  .left {
    flex-basis: 50%;
    height: 100%;
    display: flex;
    .disc {
      flex-basis: 50px;
      border: 1px solid grey;
      display: flex;
      justify-content: center;
      align-items: center;
      .circle {
        width: 50px;
        height: 50px;
        background: #000;
        border-radius: 50%;
      }
    }
    .x {
      flex-basis: 50px;
      font-size: 2.5rem;
      border: 1px solid grey;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .score {
      flex-basis: 50px;
      font-size: 2.5rem;
      border: 1px solid grey;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .right {
    flex-basis: 50%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    .disc {
      flex-basis: 50px;
      border: 1px solid grey;
      display: flex;
      justify-content: center;
      align-items: center;
      .circle {
        width: 50px;
        height: 50px;
        background: white;
        border-radius: 50%;
      }
    }
    .x {
      flex-basis: 50px;
      font-size: 2.5rem;
      border: 1px solid grey;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .score {
      flex-basis: 50px;
      font-size: 2.5rem;
      border: 1px solid grey;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
