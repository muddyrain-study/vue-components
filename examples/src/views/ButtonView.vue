<template>
  <div>
    <!-- 测试按钮组件 -->
    <div class="row">
      <duyi-button>普通按钮</duyi-button>
      <duyi-button type="primary">primary按钮</duyi-button>
      <duyi-button type="success">success按钮</duyi-button>
      <duyi-button type="info">info按钮</duyi-button>
      <duyi-button type="danger">danger按钮</duyi-button>
      <duyi-button type="warning">warning按钮</duyi-button>
    </div>
    <!-- 测试 plain 属性 -->
    <div class="row">
      <duyi-button plain>普通按钮</duyi-button>
      <duyi-button plain type="primary">primary按钮</duyi-button>
      <duyi-button plain type="success">success按钮</duyi-button>
      <duyi-button plain type="info">info按钮</duyi-button>
      <duyi-button plain type="danger">danger按钮</duyi-button>
      <duyi-button plain type="warning">warning按钮</duyi-button>
    </div>
    <!-- 测试 round 属性 -->
    <div class="row">
      <duyi-button round>按钮</duyi-button>
      <duyi-button round type="primary">primary按钮</duyi-button>
      <duyi-button round type="success">success按钮</duyi-button>
      <duyi-button plain round type="info">info按钮</duyi-button>
      <duyi-button plain round type="danger">danger按钮</duyi-button>
      <duyi-button plain round type="warning">warning按钮</duyi-button>
    </div>
    <!-- 测试 diabled 属性 -->
    <div class="row">
      <duyi-button disabled>按钮</duyi-button>
      <duyi-button disabled type="primary">primary按钮</duyi-button>
      <duyi-button disabled type="success">success按钮</duyi-button>
      <duyi-button disabled round type="info">info按钮</duyi-button>
      <duyi-button disabled round type="danger">danger按钮</duyi-button>
      <duyi-button disabled round type="warning">warning按钮</duyi-button>
    </div>
    <!-- 测试 circle 属性 -->
    <div class="row">
      <duyi-button circle round>好</duyi-button>
      <duyi-button circle round type="primary">好</duyi-button>
      <duyi-button circle round type="success">学</duyi-button>
      <duyi-button circle plain round type="info">习</duyi-button>
      <duyi-button circle plain round type="danger">前</duyi-button>
      <duyi-button circle plain round type="warning">端</duyi-button>
    </div>
    <!-- 测试图标 -->
    <div class="row">
      <duyi-button icon="milk-tea"></duyi-button>
      <duyi-button icon="camera" type="primary">照相机</duyi-button>
      <duyi-button circle icon="wind-power" type="success"></duyi-button>
      <duyi-button icon="orange" type="info"></duyi-button>
      <duyi-button icon="goblet" type="danger"></duyi-button>
      <duyi-button icon="cloudy" type="warning"></duyi-button>
      <duyi-button icon="milk-tea" plain type="info">奶茶</duyi-button>
    </div>
    <!-- 测试事件 -->
    <div class="row">
      <duyi-button plain type="primary" @click="handleClick('xiejie', $event)">click</duyi-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
function handleClick(name: string, event: Event) {
  alert(name)
  console.log(event)
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  margin: 20px auto;
}
</style>
