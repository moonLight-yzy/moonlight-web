<template>
  <div>
    <div class="novelBody" :style="{ 'min-height': this.$route.params.h }">
      <div class="novelList">
        <div
          class="titleBox"
          v-for="(item, index) in novelList"
          :key="index"
          :class="item.id == id ? 'selectNovel' : ''"
          @click="readNovel(item.id)"
        >
          <div class="titleName">
            {{ item.title }}
          </div>
          <div class="novelInfo">
            <div class="novelLabel">
              <div
                class="labelItem"
                v-for="(ele, index) in item.label"
                :key="index"
              >
                {{ ele }}
              </div>
            </div>
            <div class="novelTime">{{ item.time }}</div>
          </div>
        </div>
      </div>
      <div class="novelText" v-highlight>
        <div class="textTitle">{{ textTitle }}</div>
        <div class="textBody" v-html="readme"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novelList: [],
      id: 0,
      textTitle: "",
      readme: "",
    };
  },
  created() {
    this.$api
      .get("/novel/getNovel")
      .then((res) => {
        let data = res.data.data;
        for (let i = 0; i < data.length; i++) {
          data[i].readme = require(`../assets/md/${data[i].readme}.md`);
          data[i].label = data[i].label.split("，");
        }
        this.novelList = data;
        this.id = data[0].id;
        this.textTitle = data[0].title;
        this.readme = data[0].readme;
        console.log(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  },
  methods: {
    readNovel(id) {
      this.id = id;
      console.log(this.id)
      console.log(this.novelList)
      this.textTitle = this.novelList[this.id].title;
      this.readme = this.novelList[this.id].readme;
      console.log(this.novelList[this.id])
    },
  },
};
</script>

<style lang="scss">
.novelBody {
  display: flex;
  .novelList {
    z-index: 10;
    width: 20%;
    // background-color: rgba(255, 192, 203, 0.3);
    .titleBox {
      box-sizing: border-box;
      width: 100%;
      padding: 10px;
      letter-spacing: 0.5px;
      color: #e5e5e5;
      border-top: 1px solid #777777;
      transition: 0.3s ease-in-out;
      margin-left: 0;
      border-radius: 0;
      .titleName {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
      }
      .novelInfo {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        margin-top: 5px;
        .labelItem {
          display: inline;
        }
      }
    }
    .selectNovel {
      transition: 0.3s ease-in-out;
      animation: selectBorder 2s linear infinite alternate;
      width: 120%;
      padding: 10px 8px;
      letter-spacing: 1px;
      color: #b9eee5;
      background-color: rgba(33, 81, 129, 0.5);
      // box-shadow: 0 0 10px rgba(255, 192, 203, 0.5);
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05),
        0px 6px 6px rgba(0, 0, 0, 0.1), 0px 8px 8px rgba(0, 0, 0, 0.05),
        0px 10px 15px rgba(0, 0, 0, 0.03), 0px 30px 30px rgba(0, 0, 0, 0.15),
        0px 70px 60px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      margin-left: 10px;
      backdrop-filter: blur(10px);
    }
    @keyframes selectBorder {
      0% {
        color: rgba(0, 255, 255, 0.8);
      }
      100% {
        color: rgba(255, 192, 203, 0.8);
      }
    }
    .titleBox:first-child {
      border-top: none;
    }
    .titleBox:hover {
      width: 120%;
      padding: 10px 8px;
      letter-spacing: 1px;
      color: #b9eee5;
      background-color: rgba(33, 81, 129, 0.5);
      box-shadow: 0 0 10px rgba(255, 192, 203, 0.5);
      transition: 0.3s ease-in-out;
      border-radius: 10px;
      margin-left: 10px;
    }
  }
  .novelText {
    width: 80%;
    background-color: #ffffffaa;
    z-index: 1;
    letter-spacing: 1px;
    .textTitle {
      text-align: center;
      padding: 50px;
      border-bottom: 3px solid #eeeeee;
      font-size: 25px;
    }
    .textBody {
      width: 90%;
      margin: 0 auto;
      padding: 20px 0;
    }
  }
}
</style>