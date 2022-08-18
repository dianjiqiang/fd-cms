<template>
  <div class="staff">
    <div class="home-form">
      <home-table
        :tableTitle="tableTitle"
        :tables="tables"
        :tableData="menuData"
        :isAddItem="false"
        :isOperation="false"
      ></home-table>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import HomeTable from 'components/home-table'

// import { emitterEditItem } from '@/utils/eventbus'

import { tables, tableTitle } from '../config/table-config'

const store = useStore()

//获取列表数据
const menuData = computed(() => store.state.home.menuData)

//添加数据操作
// emitterEditItem.on('editItem', (data) => {
//   console.log(data)
// })
</script>

<style lang="less" scoped>
.home-form {
  padding-top: 30px;
}
</style>
