<template>

  <a-card style="width: 800px;margin:10% auto;border-radius: 15px;">
    <div style="width: 200px;margin: auto">
      <a-image
          style="margin: auto"
          :width="200"
          :preview="false"
          src="src/assets/bilibili.png"
      />
    </div>
    <div class="from-item">

      <a-form
          :model="formState"
          name="normal_login"
          class="login-form"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
            label="账号"
            name="username"
            :rules="[{ required: true, message: '请输入账号!' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-row>
          <a-col :span="12">
            <a-form-item
                label="验证码"
                name="code"
                :rules="[{ required: true, message: '请输入验证码!' }]"
            >
              <a-input  v-model:value="formState.code" placeholder="请输入验证码" >

              </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-image
                :width="60"
                style="height: 30px;margin-left: 10%"
                :preview="false"
                :src="captchaImg"
            />
          </a-col>
        </a-row>
        <a-form-item>
          <a-row>
            <a-col :span="6"></a-col>
            <a-col :span="12">
              <a-button  type="primary" block html-type="submit" class="login-form-button">
                登录
              </a-button>
            </a-col>
            <a-col :span="6"></a-col>
          </a-row>

        </a-form-item>
      </a-form>
    </div>

  </a-card>
</template>

<script lang="ts" setup>
import {getCaptchaImg} from '@/api';
import {defineComponent, reactive, computed, onMounted, ref} from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useRouter } from "vue-router";
import { userStore } from '@/store/store.ts';
import { userLogin } from '@/api';
interface FormState {
  username: string;
  password: string;
  code: string;
}
const captchaImg=ref();

const getCaptcha = () => {
  getCaptchaImg().then(res => {
    formState.token = res.data.data.token;
    captchaImg.value = res.data.data.captchaImg;
  })
}
onMounted(()=>{
  getCaptcha();
})


const formState = reactive<FormState>({
  username: '',
  password: '',
  code: '',
});

const router = useRouter();

const user = userStore();

const onFinish = (values: any) => {
  userLogin(formState).then(res => {
    console.log(res)
    const jwt = res.headers['authorization']
    user.SET_TOKEN(jwt);
    router.push("/");
  })
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>

<style scoped>
.from-item{
  padding-top: 10%;
  margin: auto;
  width: 60%;
}

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
