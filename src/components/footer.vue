<template>
  <div class="footer">
    <div class="footerFlex">
      <div class="linkLine">
        <a
          class="box ml-qq iconfont"
          href="http://wpa.qq.com/msgrd?v=3&uin=1805193979&site=qq&menu=yes"
          target="_blank"
        >
          <div class="pic">
            <img src="../assets/img/qq.png" />
          </div>
        </a>
        <a class="box ml-wechat iconfont">
          <div class="pic">
            <img src="../assets/img/Wechat.jpg" />
          </div>
        </a>
        <a
          class="box email ml-email iconfont"
          href="mailto:ownlight@qq.com"
        ></a>
        <a
          class="box email ml-github iconfont"
          href="https://github.com/moonLight-yzy"
          target="_blank"
        ></a>
        <a
          class="box email ml-csdn iconfont"
          href="https://blog.csdn.net/weixin_46329969"
          target="_blank"
        ></a>
      </div>
      <hr />
      <div>Copyright ©2020 moonLight. All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: rgba(33, 81, 129, 0.5);
  color: #ffffff;
  text-align: center;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  .footerFlex {
    width: 100% !important;
  }
  .linkLine {
    width: 30%;
    margin: 0 auto;
    letter-spacing: 1px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .box {
      position: relative;
      text-align: center;
      color: #ffffff;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      z-index: 999;
    }
    .pic {
      position: absolute;
      bottom: 60px;
      right: -20px;
      padding: 5px;
      width: 78px;
      height: 78px;
      display: none;
    }
    .pic img {
      opacity: 0.9;
      width: 100px;
      height: 100px;
    }
    .box:hover .pic {
      display: block;
    }
    .box:hover {
      color: cyan;
      transition: 0.3s ease-in-out;
    }
  }
  hr {
    width: 80%;
    margin: 10px auto;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      cyan,
      rgba(0, 0, 0, 0)
    );
  }
}
</style>