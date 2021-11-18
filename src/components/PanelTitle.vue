<template>
  <div class="panel-title">
    {{ titleName }}
  </div>
</template>

<script>
export default {
  name: "PanelTitle",
  props: {
    titleName: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.panel-title {
  position: relative;
  height: 43px;
  line-height: 40px;
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #fefefe;
  text-shadow: 0px 4px 4px rgba(0, 30, 66, 0.4);
  text-indent: 40px;

  background: linear-gradient(
    90deg,
    transparent 0,
    rgba(121, 192, 246, 0.2) 53%,
    transparent 90%
  );

  &::before {
    content: "";
    position: absolute;
    border: 10px solid transparent;
    border-top-color: #458ffc;
    left: 10px;
    top: 50%;
    transform: rotate(-90deg);
    margin-top: -13px;
  }
}
</style>
