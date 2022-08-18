<template>
  <div class="keyie-add-item">
    <el-form :model="itemValue" label-width="80px" class="demo-ruleForm">
      <template v-for="item of searchData" :key="item.enter">
        <el-form-item
          v-if="item.name === 'id' && sign !== '添加数据'"
          :label="item.name"
          :prop="item.enter"
        >
          <el-input
            v-if="item.type === 'input'"
            v-model="itemValue[item.enter]"
            :type="item.type"
            autocomplete="off"
            disabled
            :placeholder="item.hint"
          />
        </el-form-item>
        <el-form-item v-else-if="item.name !== 'id'" :label="item.name" :prop="item.enter">
          <el-input
            v-if="item.type === 'input'"
            v-model="itemValue[item.enter]"
            :type="item.type"
            autocomplete="off"
            :placeholder="item.hint"
          />
          <el-select v-else v-model="itemValue[item.enter]" :placeholder="item.hint">
            <el-option
              v-for="(sel, index) of item.data.name"
              :key="index"
              :label="sel"
              :value="sel"
            />
          </el-select>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button type="primary" @click="confirmBtn">提交</el-button>
        <el-button @click="cancelBtn">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue-demi'

import { emitterEditItem } from '@/utils/eventbus'

const props = defineProps({
  searchData: {
    type: Array,
    required: true
  },
  searchValue: {
    type: Object,
    required: true
  },
  sign: {
    type: String,
    default: '添加数据'
  }
})
const emit = defineEmits(['cancelBtn', 'confirmBtn'])

const itemValue = ref({ ...props.searchValue })

// watch(
//   () => itemValue,
//   (newValue) => {
//     emit('update:modelValue', newValue.value)
//   },
//   {
//     deep: true
//   }
// )
//提交数据
const confirmBtn = () => {
  // emitterEditItem.emit('editItem', itemValue.value)
  emit('confirmBtn', itemValue.value)
}
const cancelBtn = () => {
  emit('cancelBtn')
}
</script>

<style lang="less" scoped></style>
