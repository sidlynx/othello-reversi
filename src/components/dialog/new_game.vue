<template>
    <div class="dialog">
        <div class="dialog-container center-horizontal center-vertical">
            <div class="centered">
                <div class="title center-horizontal">Choose the game mode</div>
                <div class="vs center-horizontal" style="">
                    <div class="holder" @click="startGameForTwoPlayers">
                        <div>
                            <i class="fas fa-user"></i>
                        </div>
                        <div>VS</div>
                        <div>
                            <i class="fas fa-user"></i>
                        </div>
                    </div>
                </div>
                <div class="vs center-horizontal" @click="startGameForSinglePlayer">
                    <div class="holder" style="">
                        <div>
                            <i class="fas fa-user"></i>
                        </div>
                        <div>VS</div>
                        <div>
                            <i class="fas fa-laptop"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    startGameForSinglePlayer() {
      this.$store.dispatch("initForSinglePlayer");
      this.$store.dispatch("hideNewGameDialog");
    },
    startGameForTwoPlayers() {
      this.$store.dispatch("initForTwoPlayers");
      this.$store.dispatch("hideNewGameDialog");
    }
  }
};
</script>
<style lang="scss" scoped>
.dialog {
  .dialog-container {
    width: 100%;
    height: 100%;
    .centered {
      width: 540px;
      height: 540px;
      .title {
        font-size: 42px;
        margin-top: 100px;
      }
      .vs {
        display: flex;
        font-size: 60px;
        justify-content: center;
        margin-top: 20px;
        .holder {
          border: 1px solid grey;
          display: flex;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
