<template>
  <div>
    <div class="aboutBody" :style="{ 'min-height': this.$route.params.h }">
      <div class="userTop" :style="{ height: screenHeight }">
        <div class="userImg">
          <img src="../assets/img/cover.jpg" alt="" />
        </div>
        <div class="userName">wnlight</div>
      </div>
      <div class="userInfo">
        <div class="userWord">
          一只
          <span class="nohair">头秃</span>
          <span class="success">成功</span>
          的前端切图仔
        </div>
        <div class="userPosition">武汉 · 武汉科技大学</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenHeight: window.innerHeight - 200 + "px",
    };
  },
};
</script>

<style lang="scss" scoped>
.aboutBody {
  .userTop {
    display: flex;
    justify-content: center;
    align-items: center;
    .userImg {
      width: 90px;
      height: 90px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        animation: imgBorder 3s linear infinite alternate;
      }
      @keyframes imgBorder {
        0% {
          border: 10px solid rgba(0, 255, 255, 0.3);
        }
        50% {
          border: 10px solid rgba(255, 192, 203, 0.3);
        }
        100% {
          border: 10px solid rgba(172, 255, 47, 0.3);
        }
      }
    }
    .userName {
      margin-top: 20px;
      margin-left: 25px;
      font-size: 4em;
      font-family: Century Gothic, serif;
      color: #f1f1f1;
    }
  }
  .userInfo {
    margin: 0 auto;
    text-align: center;
    letter-spacing: 2px;
    font-size: 20px;
    color: #f1f1f1;
    padding-bottom: 120px;
    .userWord {
      display: inline-block;
      .nohair {
        display: inline;
      }
      .success {
        display: none;
      }
    }
    .userWord:hover {
      .nohair {
        display: none;
      }
      .success {
        display: inline;
      }
    }
    .userPosition {
      font-size: 16px;
      margin-top: 10px;
      color: #aaaaaa;
    }
  }
}
</style>