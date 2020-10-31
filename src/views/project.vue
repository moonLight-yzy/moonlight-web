<template>
  <div>
    <div class="projectBody" :style="{ 'min-height': this.$route.params.h }">
      <div
        class="projectCard"
        v-for="(item, index) in projectList"
        :key="index"
        @click="goProject(item.projectSrc)"
      >
        <div class="projectImg">
          <img :src="item.imgSrc" alt="" />
        </div>
        <div class="projectInfo">
          <div class="projectName">{{ item.name }}</div>
          <div class="projectIntro">{{ item.info }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectList: [
        {
          imgSrc: require("../assets/img/project/67novel.jpg"),
          name: "67小说",
          info: "微信，qq小程序\n热门小说尽收眼底！",
          projectSrc: "",
        },
        {
          imgSrc: require("../assets/img/project/wusterhelper.jpg"),
          name: "武科大助手",
          info: "微信，qq小程序\n随时随地开启校园之旅。",
          projectSrc: "http://lh.wuster.vip/helper",
        },
        {
          imgSrc: require("../assets/img/project/moonlight.jpg"),
          name: "moonlight blog",
          info: "vue搭建前端页面，node+express搭建后台服务端。",
          projectSrc: "http://39.103.136.125/",
        },
      ],
    };
  },
  methods: {
    goProject(src) {
      if (src) {
        window.open(src, "_blank");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.projectBody {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .projectCard {
    width: 45%;
    height: 250px;
    margin-bottom: 40px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: #ffffff33;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    .projectImg {
      width: 250px;
      height: 250px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      img {
        width: 90%;
        height: 90%;
        border-radius: 5px;
        transition: 0.3s ease-in-out;
      }
      img:hover {
        width: 95%;
        height: 95%;
        margin-right: 10px;
        border-radius: 10px;
        transition: 0.3s ease-in-out;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05),
          0px 6px 6px rgba(0, 0, 0, 0.1), 0px 8px 8px rgba(0, 0, 0, 0.05),
          0px 10px 15px rgba(0, 0, 0, 0.03), 0px 30px 30px rgba(0, 0, 0, 0.15),
          0px 70px 60px rgba(0, 0, 0, 0.15);
      }
    }
    .projectInfo {
      width: 50%;
      height: 90%;
      letter-spacing: 1px;
      display: flex;
      flex-direction: column;
      .projectName {
        height: 30%;
        display: flex;
        align-items: center;
        font-size: 22px;
      }
      .projectIntro {
        height: 70%;
        overflow: hidden;
        font-size: 14px;
        text-indent: 2em;
      }
    }
  }
  .projectCard:hover {
    width: 50%;
    background-color: #ffffff77;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05), 0px 6px 6px rgba(0, 0, 0, 0.1),
      0px 8px 8px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.03),
      0px 30px 30px rgba(0, 0, 0, 0.15), 0px 70px 60px rgba(0, 0, 0, 0.15);
  }
}
</style>