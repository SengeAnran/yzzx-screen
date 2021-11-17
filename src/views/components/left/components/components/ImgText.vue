<template>
  <div class="img-text">
    <div class="img-box " :class="[colorType]">
      <img src="../img/yj.png" />
    </div>
    <div class="number-unit" :class="[`${colorType}-gradient`]">
      <span><CountUp :num="num"/></span>个
    </div>
  </div>
</template>
<script>
export default {
  name: "ImgText",
  props: {
    colorType: {
      type: String,
      default: "yellow",
    },
    num: {
      type: [String, Number],
      default: 0,
    },
  },
};
</script>
<style lang="scss" scoped>
.img-text {
  display: flex;
  width: 124px;
  height: 40px;
  background: rgba(246, 185, 128, 0.1);
  border-radius: 20px;
  &:nth-of-type(1) {
    background: rgba(255, 109, 110, 0.1);
    span {
      background: linear-gradient(0deg, #ff6d6e 0%, #ff9999 100%);

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &:nth-of-type(2) {
    background: rgba(255, 109, 110, 0.1);
    span {
      background: linear-gradient(0deg, #f6b980 0%, #f5dcc4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &:nth-of-type(3) {
    background: rgba(0, 206, 121, 0.1);
    span {
      background: linear-gradient(
        0deg,
        #00ce79 0.146484375%,
        #a5cfbd 98.2421875%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .img-box {
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 50%;
    flex: 1;
    text-align: center;
    padding-top: 7px;
  }
  .number-unit {
    flex: 3;
    text-align: center;
    span {
      display: inline-block;
      margin-right: 7px;
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      line-height: 40px;
    }
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: bold;
  }
}
</style>
