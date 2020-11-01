<template>
  <div class="navBar" :class="scrollNum > 80 ? 'navBarAfter' : ''">
    <div class="barImg" @click="refreshPage()">
      <img class="logo" src="../assets/img/logo_2.png" />
      <img class="logofont" src="../assets/img/logofont_chu.png" />
    </div>
    <div class="barMenu" @click="goTop()">
      <div
        class="ripple"
        @click="touchstart"
        :style="{ width: menuButtonWidth }"
      >
        <router-link to="/"><i class="iconfont ml-home"></i>首页</router-link>
      </div>
      <div
        class="ripple"
        @click="touchstart"
        :style="{ width: menuButtonWidth }"
      >
        <router-link :to="{ name: 'novel', params: { h: screenHeight } }"
          ><i class="iconfont ml-novel"></i>笔记</router-link
        >
      </div>
      <div
        class="ripple"
        @click="touchstart"
        :style="{ width: menuButtonWidth }"
      >
        <router-link :to="{ name: 'project', params: { h: screenHeight } }"
          ><i class="iconfont ml-project"></i>项目</router-link
        >
      </div>
      <div
        class="ripple"
        @click="touchstart"
        :style="{ width: menuButtonWidth }"
      >
        <router-link :to="{ name: 'about', params: { h: screenHeight } }"
          ><i class="iconfont ml-about"></i>关于</router-link
        >
      </div>
    </div>

    <!-- 回到顶部 -->
    <div
      class="goTop iconfont ml-gotop"
      :class="isTop ? 'goTopAfter' : ''"
      @click="goTop()"
    ></div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      scrollNum: 0,
      screenHeight: window.innerHeight - 200 + "px",
      screenWidth: window.innerWidth + "px",
      menuButtonWidth: window.innerWidth * 0.8 * 0.5 * 0.25 + "px",
      isTop: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollNum = top;
      if (top >= 100) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    });
    window.addEventListener("resize", () => {
      let width = window.innerWidth;
      this.screenWidth = width + "px";
      this.screenHeight = window.innerHeight - 200 + "px";
      this.menuButtonWidth = width * 0.8 * 0.5 * 0.25 + "px";
    });
  },
  methods: {
    refreshPage() {
      this.reload();
      // this.$router.push("/");
      this.goTop()
    },
    goTop() {
      document.documentElement.scrollTop = 0;
    },
    touchstart(event) {
      let width = this.menuButtonWidth.split("p")[0] / 2;
      var style = document.createElement("style");
      style.innerHTML = `.ripple::after{top:${event.offsetY - 50}px;left:${
        event.offsetX - width
      }px;}`;
      document.head.appendChild(style);
    },
  },
};
</script>

<style lang="scss" scoped>
.navBar {
  position: fixed;
  background-color: rgba(33, 81, 129, 0.5);
  width: 80%;
  transition: 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  min-width: 800px;
  .barImg {
    height: 100px;
    max-width: 100%;
    display: flex;
    align-items: center;
    margin-left: 50px;
    a {
      display: inline-block;
    }
    .logo,
    .logofont {
      height: 50%;
      width: auto;
      cursor: pointer;
    }
  }
  .barMenu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    max-width: 50%;
    color: #ffffff;
    font-size: 16px;
    letter-spacing: 1px;
    height: 100px;
    div {
      cursor: pointer;
      // padding: 10px;
      // border-radius: 5px;
      height: 100%;
      transition: 0.3s ease-in-out;
      // width: 25%;
      line-height: 100px;
      text-align: center;
      i {
        font-size: 20px;
        margin-right: 3px;
      }
      a {
        display: inline-block;
        height: 100%;
        width: 100%;
        color: #ffffff;
        transition: 0.3s ease-in-out;
        font-size: 16px;
      }
    }
    div:hover {
      background-color: #b9eee583;
      transition: 0.3s ease-in-out;
    }
    div:hover a {
      color: rgba(33, 81, 129, 1);
      transition: 0.3s ease-in-out;
    }

    .ripple {
      position: relative;
      //隐藏溢出的径向渐变背景
      overflow: hidden;
    }

    .ripple:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      //设置径向渐变
      background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform 0.3s, opacity 0.5s;
    }

    .ripple:active:after {
      transform: scale(0, 0);
      opacity: 0.3;
      //设置初始状态
      transition: 0s;
    }
  }
}
.navBarAfter {
  background-color: rgba(33, 81, 129, 1);
  // box-shadow: 0 0 10px pink;
  animation: blink 2s linear infinite alternate;
  transition: 0.5s ease-in-out;
}
@keyframes blink {
  0% {
    box-shadow: 0 0 20px rgba(255, 192, 203, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 192, 203, 0.6);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 192, 203, 1);
  }
}
.goTop {
  position: fixed;
  bottom: -100px;
  right: 5%;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  z-index: 10;
  background-color: rgba(33, 81, 129, 0.5);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05), 0px 6px 6px rgba(0, 0, 0, 0.1),
    0px 8px 8px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.03),
    0px 30px 30px rgba(0, 0, 0, 0.15), 0px 70px 60px rgba(0, 0, 0, 0.15);
  transition: 0.3s ease-in-out;
  font-size: 30px;
  text-align: center;
  line-height: 60px;
  color: #ffffff;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.goTop:hover {
  background-color: rgba(33, 81, 129, 1);
  transition: 0.3s ease-in-out;
}
.goTopAfter {
  transition: 0.3s ease-in-out;
  bottom: 100px;
}
</style>