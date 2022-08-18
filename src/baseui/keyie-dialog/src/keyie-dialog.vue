<template>
  <div class="keyie-dialog">
    <el-dialog v-model="dialogVisible" :title="dialogTitle" width="30%" :before-close="handleClose">
      <keyie-add-item
        :sign="dialogTitle"
        :searchData="dialogData"
        :searchValue="dialogValue"
        @cancelBtn="cancelBtn"
        @confirmBtn="confirmBtn"
      />
    </el-dialog>
  </div>
</template>

<script setup>
import KeyieAddItem from '@/baseui/keyie-add-item'

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false
  },
  dialogTitle: {
    type: String,
    default: '添加数据'
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
  }
})

const emit = defineEmits(['cancelItem', 'confirmItem'])

const handleClose = () => {
  ElMessageBox.confirm('您确定要关闭当前窗口吗?')
    .then(() => {
      emit('cancelItem')
    })
    .catch(() => {})
}

const cancelBtn = () => {
  emit('cancelItem')
}
const confirmBtn = (data) => {
  switch (props.dialogTitle) {
    case '添加数据':
      data.sign = 'add'
      break
    case '修改数据':
      data.sign = 'edit'
  }
  emit('confirmItem', data)
}
</script>

<style lang="less" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
