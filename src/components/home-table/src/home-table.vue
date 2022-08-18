<template>
  <div class="home-table">
    <keyie-table
      :tables="tables"
      :tableTitle="tableTitle"
      :tableData="tableData"
      :isOperation="isOperation"
    >
      <template #addClick v-if="isAddItem">
        <el-button type="primary" @click="addItem">添加数据</el-button>
      </template>
      <template #operation="scope">
        <span class="edit" @click="editItem(scope.row)">
          <el-icon><EditPen /></el-icon>
          <span>修改</span>
        </span>
        <span class="delete" @click="deleteItem(scope.row)">
          <el-icon><Delete /></el-icon>
          <span>删除</span>
        </span>
      </template>
    </keyie-table>

    <keyie-dialog
      v-if="dialogVisible"
      :dialogVisible="dialogVisible"
      :dialogTitle="dialogTitle"
      :dialogData="dialogData"
      :dialogValue="ItemValue"
      @confirmItem="confirmItem"
      @cancelItem="cancelItem"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue-demi'

import KeyieTable from '@/baseui/keyie-table'
import KeyieDialog from '@/baseui/keyie-dialog'

const props = defineProps({
  tableTitle: String,
  tables: {
    type: Object,
    trquired: true
  },
  tableData: {
    type: Array,
    required: true
  },
  dialogData: {
    type: Object,
    default() {
      return {}
    }
  },
  dialogValue: {
    type: Object,
    default() {
      return {}
    }
  },
  isAddItem: {
    //是否显示添加数据按钮
    type: Boolean,
    default: true
  },
  isOperation: {
    //是否显示操作按钮
    typr: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue'])

const dialogVisible = ref(false) //对话框数据
const dialogTitle = ref(null)
const ItemValue = ref({ ...props.dialogValue })
const initialItemValue = props.dialogValue

watch(
  () => ItemValue,
  (newValue) => {
    emit('update:modelValue', newValue.value)
  }
)

const addItem = () => {
  ItemValue.value = initialItemValue
  dialogVisible.value = true
  dialogTitle.value = '添加数据'
}

const editItem = (data) => {
  ItemValue.value = data
  dialogVisible.value = true
  dialogTitle.value = '修改数据'
}
const deleteItem = (data) => {
  //在这里进行删除操作
  const eId = data.id
  // getRequest('/delete', eId)
}
//点击确定/取消按钮
const confirmItem = (data) => {
  //在这里进行你的数据添加/删除/修改操作
  dialogVisible.value = false
}
const cancelItem = () => {
  console.log('收到了取消按钮')
  dialogVisible.value = false
}

//分页数据
</script>

<style lang="less" scoped>
.home-table {
  margin-top: 32px;
  .delete,
  .edit {
    color: #409eff;
    cursor: pointer;
  }
  .edit {
    padding-right: 20px;
  }
  margin-bottom: 20px;
}
</style>
