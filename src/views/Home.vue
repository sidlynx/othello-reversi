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
    //background-image: url("https://3dexport.com/items/2017/08/17/464228/177032/20_dark_wood_background_textures_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1909494_o.jpg");
    height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 800px;
  }
}
</style>
