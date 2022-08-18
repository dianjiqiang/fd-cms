<template>
  <div class="home">
    <div class="home-left-bar">
      <home-left-bar
        :lists="lists"
        @changeItem="changeItem"
        :isCollapse="isCollapse"
      ></home-left-bar>
    </div>
    <div class="top-bar">
      <home-top-bar :itemName="thisListName"></home-top-bar>
      <div class="tb"></div>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'

import HomeLeftBar from 'components/home-left-bar'
import HomeTopBar from 'components/home-top-bar'

const store = useStore()
//获取列表
const lists = computed(() => store.state.home.lists)
//是否收缩列表
let isCollapse = ref(false)

//记录列表当前路由名字
let thisListName = ref()
const changeItem = (itemName) => {
  console.log(itemName)
  thisListName.value = itemName
}
</script>

<style lang="less" scoped>
.home {
  .home-left-bar {
    position: fixed;
    width: 210px;
    overflow: hidden;
    box-sizing: border-box;
    height: 100vh;
    background-color: #545c64;
  }
  .tb {
    padding: 0 230px;

    height: 39px;
    line-height: 39px;
    background-color: #eae8eb;
  }
  .content {
    padding-left: 210px;
  }
  .content {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
