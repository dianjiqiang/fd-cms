<template>
  <div class="keyie-table">
    <el-card>
      <template #header>
        <ul class="top-list">
          <li>
            <h3>{{ tableTitle }}</h3>
          </li>
          <li>
            <h3><slot name="addClick"> </slot></h3>
          </li>
        </ul>
      </template>
      <el-table :data="tableData" border style="width: 100%" :row-style="{ height: '55px' }">
        <el-table-column align="center" type="selection" width="55" />
        <template v-for="item of tables" :key="item.type">
          <el-table-column
            v-if="item.type === 'state'"
            align="center"
            :prop="item.type"
            :label="item.name"
            min-width="100"
          >
            <el-button type="success">启用</el-button>
          </el-table-column>
          <el-table-column
            v-else
            align="center"
            :prop="item.type"
            :label="item.name"
            min-width="100"
          />
        </template>
        <el-table-column align="center" label="操作" min-width="120" v-if="isOperation">
          <template #default="scope">
            <slot name="operation" :row="scope.row"></slot>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
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
  isOperation: {
    type: Boolean,
    required: true
  }
})
</script>

<style lang="less" scoped>
.top-list {
  display: flex;
  justify-content: space-between;
}
</style>
