<template>
  <div class="login">
    <keyie-background></keyie-background>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h3>用户管理系统</h3>
        </div>
      </template>
      <el-form ref="formRef" :model="userLogin" label-width="70px" class="demo-ruleForm">
        <el-form-item
          label="账户"
          prop="user"
          :rules="[{ required: true, message: 'user is required' }]"
        >
          <el-input v-model="userLogin.user" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[{ required: true, message: 'password is required' }]"
        >
          <el-input v-model="userLogin.password" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <template class="btns-list">
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button @click="resetForm(formRef)">重置</el-button>
        </template>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import KeyieBackground from '@/baseui/keyie-background'

const router = useRouter()
const store = useStore()

const formRef = ref(null)
const userStart = localStorage.getItem('user') || 'keyie'
const passwordStart = localStorage.getItem('user') || '123456'
const userLogin = reactive({
  user: userStart,
  password: passwordStart
})

const submitForm = () => {
  router.push('/home')
}

const resetForm = (formEl) => {
  formEl.resetFields()
}
</script>

<style lang="less" scoped>
.login {
  position: relative;
  .box-card {
    position: relative;
    top: 20vh;
    left: 0;
    right: 0;
    margin: 0 auto;

    background-color: rgba(255, 255, 255, 0.3);

    width: 480px;
    .card-header {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btns-list {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
