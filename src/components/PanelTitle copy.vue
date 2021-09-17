<template>
<div class="panel-title">
{{titleName}}
  <div class="title-box"></div>
</div>
</template>

<script>
export default {
  name: "PanelTitle",
  props: {
    titleName: {
      type: String,
    }
  },
}
</script>

<style lang="scss" scoped>
.panel-title{
  position: relative;
  width: 100%;
  height: 36px;
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  line-height: 30px;
  background-image:-webkit-linear-gradient(0deg, #79C0F6 0%, #DCEAF5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 14px;
  .title-box{
    position: absolute;
    width: 32px;
    height: 5px;
    bottom: -4px;
    left: 0;
    background: linear-gradient(90deg, #79C0F6 0%, #C4E0F5 100%);
  }
  &:after {
    content: '';
    display: inline-block;
    width: 524px;
    height: 1px;
    background: #79C0F6;
    opacity: 0.1;

  }
}

</style>