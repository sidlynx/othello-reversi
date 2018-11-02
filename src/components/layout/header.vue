<template>
    <nav class="center-horizontal">
        <div class="container">
            <router-link tag="div" class="home center-vertical" :to=" {name:'home'}">
                <i class="fas fa-home"></i>
            </router-link>
            <div class="void"></div>
            <router-link tag="div" class="about center-vertical fwb" :to="{name:'about'}">
                <i class="fas fa-info-circle"></i>
            </router-link>
        </div>
    </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
$header-height: 50px;
$color-primary: #24292e;
$color-secondary: darkorange;
nav {
  height: 100%;
  width: 100%;
  .container {
    width: 1200px;
    display: flex;
    flex-direction: row;
    .home {
      height: 100%;
      flex-basis: $header-height;
      font-size: 30px;
      cursor: pointer;
    }
    .void {
      flex-basis: 100%;
    }
    .about {
      height: 100%;
      flex-basis: $header-height;
      font-size: 30px;
      cursor: pointer;
    }
  }
}
</style>
