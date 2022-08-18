<template>
  <div class="top-bar-inner">
    <div>
      <span class="navigation">{{ itemName }}</span>
    </div>
    <ul class="user-message">
      <li class="users">
        <img class="user-avatar" src="~@/assets/img/user-avatar.png" />
        <span class="username">keyie</span>
      </li>
      <li><el-button @click="logOut">登出</el-button></li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  itemName: {
    type: String,
    default: '员工信息'
  }
})
const logOut = function () {
  console.log('退出登录')
}
</script>

<style lang="less" scoped>
.top-bar-inner {
  position: fixed;
  z-index: 9;
  left: 210px;
  right: 0;
  display: flex;
  justify-content: space-between;

  padding: 0 20px;

  height: 39px;
  line-height: 39px;
  background-color: #eae8eb;
  .user-message {
    display: flex;
    .users {
      display: flex;
      align-items: center;
      .user-avatar {
        width: 39px;
        height: 39px;
        border-radius: 39px;
      }
    }
    li {
      padding-left: 20px;
    }
    .el-button {
      position: relative;
      top: -3px;
    }
  }
}
</style>
