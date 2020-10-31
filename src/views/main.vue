<template>
  <div class="getTop">
    <my-header></my-header>
    <router-view class="bodyCard"></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
//BFC
//https://blog.csdn.net/sinat_36422236/article/details/88763187
.getTop {
  overflow: hidden;
  position: relative;
  min-height: 100%;
  .bodyCard {
    margin-top: 100px;
    // height: 1000px;
    background-color: rgba(33, 81, 129, 0.5);
    margin-bottom: 100px;
  }
}
</style>
