<template>
  <div class="staff">
    <div class="home-form">
      <home-form :searchData="searchData" :searchValue="searchValue"></home-form>
      <home-table
        :tableTitle="tableTitle"
        :tables="tables"
        :tableData="departmentData"
        :isAddItem="false"
        :isOperation="false"
      ></home-table>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import HomeForm from 'components/home-form'
import HomeTable from 'components/home-table'

// import { emitterEditItem } from '@/utils/eventbus'

import { searchData, searchValue } from '../config/search-config'
import { tables, tableTitle } from '../config/table-config'

const store = useStore()

//获取列表数据
const departmentData = computed(() => store.state.home.departmentData)

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
