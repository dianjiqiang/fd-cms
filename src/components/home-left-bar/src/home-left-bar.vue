<template>
  <div class="keyie-left-bar" :style="{ width: isCollapse ? '60px' : '210px' }">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      default-active="2"
      :collapse="isCollapse"
      text-color="#fff"
      :style="{ width: isCollapse ? '60px' : '210px' }"
    >
      <span class="cms">
        <img class="cms-avatar" src="~@/assets/img/cms-avatar.png" alt="" />
        <h1 class="cms-text">FD-CMS</h1>
      </span>
      <template v-for="item of lists" :key="item.type">
        <template v-if="item.children">
          <el-sub-menu :index="item.index">
            <template #title
              ><el-icon>
                <component :is="item.icon"> </component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item
              v-for="child of item.children"
              :key="child.type"
              :index="child.index"
              @click="changeItem(child.type, child.name)"
            >
              <span>{{ child.name }}</span>
            </el-menu-item>
          </el-sub-menu>
        </template>
        <template v-if="!item.children">
          <el-menu-item :index="item.index" @click="changeItem(item.type, item.name)">
            <el-icon>
              <component :is="item.icon"> </component>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const props = defineProps({
  lists: {
    type: Object,
    required: true
  },
  isCollapse: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['changeItem'])

const changeItem = (pathName, itemName) => {
  // console.log(pathName)
  // store.dispatch(`/home/get${pathName[0].toUpperCase() + pathName.slice(1)}Data`)
  emit('changeItem', itemName)
  router.push(pathName)
}
</script>

<style lang="less" scoped>
.el-menu {
  border-right: 1px solid #545c64;
  .cms {
    .cms-avatar {
      width: 70px;
      height: 70px;
      padding: 10px;
      padding-left: 20px;
      border-radius: 70px;
    }
    .cms-text {
      display: inline-block;
      padding: 10px 0;
      padding-left: 10px;
      line-height: 70px;
      font-size: 18px;
      font-weight: 400;
      color: white;
    }
  }
}
</style>
