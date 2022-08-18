<template>
  <div>
    <el-card>
      <template #header>
        <div>
          <slot>高级检索</slot>
        </div>
      </template>
      <keyie-form :searchData="searchData" v-model="moduleValue">
        <template #operation>
          <el-form-item class="btn-search">
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </template>
      </keyie-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue-demi'

import KeyieForm from '@/baseui/keyie-form'

const props = defineProps({
  searchData: {
    type: Array,
    required: true
  },
  searchValue: {
    type: Object,
    required: true
  }
})
const moduleValue = ref({ ...props.searchValue })

const onSubmit = () => {
  console.log(moduleValue.value)
  console.log('搜索了')
}
</script>

<style lang="less" scoped>
.btn-search {
  position: absolute;
  bottom: -30px;
  right: 30px;
}
</style>
