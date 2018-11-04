<template>
    <div class="dialog">
        <div class="dialog-container center-horizontal center-vertical" style="width:100%;height:100%;">
            <div class="centered" style="width:540px;height:540px;">
                <div class="title center-horizontal" style="font-size:42px;margin-top:154px;">Choose the game mode</div>
                <div class="vs center-horizontal" style="border:1px solid grey;font-size:60px;">
                    <div style="width:179pxpx;border:1px solid grey;display:flex;cursor:pointer;" @click="startGameForTwoPlayers">
                        <div>
                            <i class="fas fa-user"></i>
                        </div>
                        <div>VS</div>
                        <div>
                            <i class="fas fa-user"></i>
                        </div>
                    </div>
                </div>
                <div class="vs center-horizontal" style="display:flex;border:1px solid grey;font-size:60px;margin-top:20px;" @click="startGameForSinglePlayer">
                    <div style="width:179pxpx;border:1px solid grey;display:flex;cursor:pointer;">
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
