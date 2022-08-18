<template>
  <div class="keyie-form">
    <el-form :inline="true" :model="moduleData" class="demo-form-inline">
      <el-row :gutter="20">
        <el-col v-bind="colLayout" v-for="item of searchData" :key="item.enter">
          <el-form-item :label="item.name" label-width="60px">
            <el-input v-model="moduleData[item.enter]" :placeholder="item.hint" />
          </el-form-item>
          <slot name="operation"></slot>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  },
  searchData: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const moduleData = ref({ ...props.searchValue })

watch(
  () => moduleData,
  (newValue) => {
    emit('update:modelValue', newValue.value)
  },
  {
    deep: true
  }
)
</script>

<style lang="less" scoped>
.el-form {
  position: relative;
  .el-form-item {
    padding: 10px 0;
  }

  .el-input {
    min-width: 220px;
  }
}
</style>
