<template>
  <div>
    <div class="homeBody" :style="{ height: screenHeight }">
      <div class="homeCard">
        <div class="myWord">{{ words.join("") }}</div>
        <div class="userImg">
          <img id="cover" src="../assets/img/cover.jpg" alt="" />
          <div id="divContent">
            <div class="wave wave5"></div>
            <div class="wave wave4"></div>
            <div class="wave wave3"></div>
            <div class="wave wave2"></div>
            <div class="wave wave1"></div>
            <div class="wave wave0"></div>
          </div>
        </div>
      </div>
      <div class="mouse-icon">
        <div class="scroll"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: [], //字母数组push，pop的载体
      str: "要去追寻月亮，即使掉落也是掉进浩瀚星河。", //str初始化
      letters: [], //str分解后的字母数组
      order: 1, //表示当前是第几句话

      clickX: 0,
      clickY: 0,
      screenHeight: window.innerHeight - 100 + "px",
    };
  },
  mounted() {
    //页面初次加载后调用begin()开始动画
    this.begin();
    this.getHeight();
    setTimeout(() => {
      document.getElementById("cover").style.zIndex = 10;
    }, 4000);
  },
  methods: {
    getHeight() {
      window.addEventListener("resize", () => {
        let height = window.innerHeight;
        this.screenHeight = height - 100 + "px";
      });
    },
    //开始输入的效果动画
    begin() {
      this.letters = this.str.split("");
      for (var i = 0; i < this.letters.length; i++) {
        setTimeout(this.write(i), i * 150);
      }
    },
    //开始删除的效果动画
    back() {
      let L = this.letters.length;
      for (var i = 0; i < L; i++) {
        setTimeout(this.wipe(i), i * 70);
      }
    },
    //输入字母
    write(i) {
      return () => {
        let L = this.letters.length;
        this.words.push(this.letters[i]);
        let that = this;
        /*如果输入完毕，在2s后开始删除*/
        if (i == L - 1) {
          setTimeout(function () {
            that.back();
          }, 2000);
        }
      };
    },
    //擦掉(删除)字母
    wipe(i) {
      return () => {
        this.words.pop(this.letters[i]);
        /*如果删除完毕，在300ms后开始输入*/
        if (this.words.length == 0) {
          this.order++;
          let that = this;
          setTimeout(function () {
            that.begin();
          }, 300);
        }
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.homeBody {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .homeCard {
    width: 400px;
    height: 100px;
    color: #f1f1f1;
    font-family: serif;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: relative;
    .userImg {
      width: 100px;
      height: 100px;
      position: absolute;
      bottom: 120px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        animation: imgblink 2s linear infinite alternate;
      }
      @keyframes imgblink {
        0% {
          opacity: 0.5;
          box-shadow: 0 0 20px rgba(255, 192, 203, 0.5);
        }
        50% {
          opacity: 0.75;
          box-shadow: 0 0 20px rgba(255, 192, 203, 0.75);
        }
        100% {
          opacity: 1;
          box-shadow: 0 0 20px rgba(255, 192, 203, 1);
        }
      }
    }
    .myWord {
      display: inline-block;
      color: #f1f1f1;
      font-family: serif;
      font-size: 16px;
      letter-spacing: 0.5px;
      padding-right: 3px;
      animation: blink 0.45s linear infinite alternate;
    }
    @keyframes blink {
      0% {
        border-right: 2px solid #11111100;
      }
      50% {
        border-right: 2px solid #1111117e;
      }
      100% {
        border-right: 2px solid #111111;
      }
    }
  }

  .mouse-icon {
    position: absolute;
    border: 2px solid #2f2f2f;
    background: #ffffff;
    opacity: 0.8;
    border-radius: 13px;
    height: 35px;
    width: 25px;
    margin: 0 auto;
    display: block;
    left: 0;
    right: 0;
    bottom: 130px;
    z-index: 100;
    .scroll {
      animation-name: scrolling;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-play-state: running;
      position: relative;
      border-radius: 10px;
      background: #2f2f2f;
      width: 4px;
      height: 8px;
      top: 4px;
      margin-left: auto;
      margin-right: auto;
    }
    @keyframes scrolling {
      0% {
        top: 2px;
        opacity: 0;
      }
      30% {
        top: 8px;
        opacity: 1;
      }
      100% {
        top: 16px;
        opacity: 0;
      }
    }
  }
}
.wave {
  position: absolute;
  top: calc((100% - 10px) / 2);
  left: calc((100% - 10px) / 2);
  width: 10px;
  height: 10px;
  border-radius: 300px;
  background: url("../assets/img/back.png");
  background-attachment: fixed;
  background-position: center center;
}
.wave0 {
  z-index: 2;
  background-size: auto 106%;
  animation: w 4s forwards;
}
.wave1 {
  z-index: 3;
  background-size: auto 102%;
  animation: w 4s 0.2s forwards;
}
.wave2 {
  z-index: 4;
  background-size: auto 104%;
  animation: w 4s 0.4s forwards;
}
.wave3 {
  z-index: 5;
  background-size: auto 101%;
  animation: w 4s 0.5s forwards;
}
.wave4 {
  z-index: 6;
  background-size: auto 102%;
  animation: w 4s 0.8s forwards;
}
.wave5 {
  z-index: 7;
  background-size: auto 100%;
  animation: w 4s 1s forwards;
}
@keyframes w {
  0% {
    top: calc((100% - 10px) / 2);
    left: calc((100% - 10px) / 2);
    width: 10px;
    height: 10px;
  }
  50% {
    top: calc((100% - 200px) / 2);
    left: calc((100% - 200px) / 2);
    width: 200px;
    height: 200px;
  }
  100% {
    top: calc((100% - 0px) / 2);
    left: calc((100% - 0px) / 2);
    width: 0px;
    height: 0px;
  }
}
</style>