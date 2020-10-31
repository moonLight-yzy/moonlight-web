<template>
  <div class="all">
    <div class="app" id="app">
      <router-view v-if="isRouterAlive"></router-view>
    </div>
  </div>
</template>

<script>
import "./assets/focus";

export default {
  name: 'app',
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.all {
  // background: url("http://api.mtyqx.cn/tapi/random.php");
  background: url("./assets/img/back.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  max-width: 1920px;
  width: 100%;
  height: 100%;
  min-width: 1000px;
}
.app {
  width: 80%;
  margin: 0 auto;
}
</style>