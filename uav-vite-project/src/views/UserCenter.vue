<template>
  <a-form
      ref="formRef"
      :model="formState"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      :rules="rules"
  >
    <a-form-item ref="user" label="账号" name="user">
      <a-input v-model:value="formState.user" placeholder="Username">
        <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item ref="password" label="密码" name="password">
      <a-input v-model:value="formState.password" type="password" placeholder="Password">
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item ref="code" label="验证码" name="code">
      <a-row>
        <a-col :span="12">
          <a-input v-model:value="formState.code" type="textarea" />
        </a-col>
        <a-col :span="12">
          <a-image @click="getCaptcha"
                   :width="60"
                   style="height: 30px;margin-left: 10%"
                   :preview="false"
                   :src="captchaImg"
          />
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">修改</a-button>
      <a-button style="margin-left: 10px" @click="onReSet">重置</a-button>
    </a-form-item>
  </a-form>
</template>

<script name="UserCenter" lang="ts" setup>
import { defineComponent, reactive, toRaw, UnwrapRef,ref,onMounted } from 'vue';
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import {getCaptchaImg} from "@/api";
onMounted(()=>{
  getCaptcha()
})
const formRef = ref();
let captchaImg = ref('')
let labelCol  = reactive(
    { span: 4 },
)
let wrapperCol  = reactive(
    { span: 14  },
)
interface FormState {
  user: string;
  password: string | undefined;
  code:  undefined;
}
const formState: UnwrapRef<FormState> = reactive({
  user: '',
  password: undefined,
  code: undefined,
});
const rules = reactive({
  user: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
  ],
  password: [{required: true, message: '请输入密码', trigger: 'blur'}],
  code: [{required: true, message: '请输入密码', trigger: 'blur'}],
})
const onSubmit = () => {
  formRef.value.validate()
      .then(() => {
        console.log('values', formState, toRaw(formState));
      })
      .catch((error: ValidateErrorEntity<FormState>) => {
        console.log('error', error);
      });
};
const onReSet = () => {
  console.log('submit!', toRaw(formState));
};
const getCaptcha = () => {
  getCaptchaImg().then(res => {
    captchaImg.value = res.data.data.captchaImg;
  })
}
</script>
<style scoped>
</style>
