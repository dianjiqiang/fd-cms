<template>
  <div class="staff">
    <div class="home-form">
      <home-form :searchData="searchData" :searchValue="searchValue"></home-form>
      <home-table
        :tableTitle="tableTitle"
        :tables="tables"
        :tableData="staffData"
        :dialogData="dialogData"
        :dialogValue="dialogValue"
        v-model="dialogValue"
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
import { dialogData, dialogValue } from '../config/dialog-config'

const store = useStore()

//获取表格数据
const staffData = computed(() => store.state.home.staffData)
</script>

<style lang="less" scoped>
.home-form {
  padding-top: 30px;
}
</style>
