<template>
  <div>
    <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
    >
      <a-row>
        <a-col :span="12">
          <a-form-item>
            <a-input-search
                v-model:value="searchValue"
                placeholder="请输入用户名"
                enter-button="搜索"
                @search="onSearch"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item :wrapper-col="{ span:6 }">
            <a-button type="primary" @click="showDrawer">新建</a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-table :columns="columns" :data-source="data">
      <template #avatar="{ text }">
        <a-avatar :src="text" />
      </template>
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
      <template #customTitle>
      <span>
        <smile-outlined />
        Name
      </span>
      </template>
      <template #tags="{ text: tags }">
      <span>
        <a-tag
            v-for="tag in tags"
            :key="tag"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      </template>
      <template #action="{ record }">
        <span>
          <a>分配角色</a>
          <a-divider type="vertical" />
          <a>重置密码</a>
          <a-divider type="vertical" />
          <a @click="edit(record)" class="ant-dropdown-link">
            编辑
          </a>
          <a-divider type="vertical" />
           <a>删除</a>
          <a-divider type="vertical" />
        </span>
      </template>
    </a-table>
    <a-drawer
        title="添加用户"
        :width="600"
        :visible="visible"
        @close="handleClose"
    >
      <a-form
          ref="formRef"
          name="custom-validation"
          :model="formState"
          :rules="rulesFrom"
          v-bind="layout"
          @finish="handleFinish"
          @validate="handleValidate"
          @finishFailed="handleFinishFailed"
      >
        <a-form-item has-feedback label="菜单名称" name="name">
          <a-input v-model:value="formState.name" type="name" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback label="头像" name="avatar">
          <a-upload
              v-model:file-list="formState.avatar"
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :before-upload="beforeUpload"
              @change="handleChange"
          >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else>
              <loading-outlined v-if="loading"></loading-outlined>
              <plus-outlined v-else></plus-outlined>
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
        </a-form-item>
        <a-form-item has-feedback label="权限编码" name="code">
          <a-input v-model:value="formState.code" type="code" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback label="电话" name="phone">
          <a-input v-model:value="formState.phone" type="phone" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback label="性别" name="sex">
          <a-select v-model:value="formState.sex" placeholder="请选择性别">
            <a-select-option value="1">男</a-select-option>
            <a-select-option value="2">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item has-feedback label="状态" name="statu">
          <a-select v-model:value="formState.statu" placeholder="请选择状态">
            <a-select-option value="1">正常</a-select-option>
            <a-select-option value="2">停止</a-select-option>
            <a-select-option value="3">注销</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
          <a-button type="primary" html-type="submit">提交</a-button>
          <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
  </div>
</template>

<script name="user" lang="ts" setup>
import {ref,reactive } from "vue";
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import {Rule} from "ant-design-vue/es/form";
import {FormInstance} from "ant-design-vue";
const formRef = ref<FormInstance>();
const visible = ref<boolean>(false);
const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>('');

interface FormState {
  name: string;
  avatar: string[];
  code: string;
  email: string;
  phone: string;
  sex: string;
  statu: string;
}
const formState = reactive<FormState>({
  name: '',
  avatar:  [],
  code:  '',
  email: '',
  phone:  '',
  sex:  '',
  statu:  '',
});
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
let checkName= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请输入姓名');
  }
};
let checkEmail= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请输入邮箱');
  }
};
let checkPhone= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请输入电话');
  }
};
let checkSex= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请输入菜单名称');
  }
};
let checkStatu= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请选择状态');
  }
};
let checkCode= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请输入权限编码');
  }
};
let checkAvatar= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请选择头像');
  }
};
const rulesFrom: Record<string, Rule[]> = {
  name: [{ validator: checkName, trigger: 'change' }],
  avatar: [{ validator: checkAvatar, trigger: 'change' }],
  code: [{ validator: checkCode, trigger: 'change' }],
  email: [{ validator: checkEmail, trigger: 'change' }],
  phone: [{ validator: checkPhone, trigger: 'change' }],
  sex: [{ validator: checkSex, trigger: 'change' }],
  statu: [{ validator: checkStatu, trigger: 'change' }],
};
const onFinish = (values: any) => {
  console.log('Success:', values);
};
let searchValue = ref("")
const columns = [
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
    slots: {
      title: 'customTitle',
      customRender: 'avatar'
    },
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    slots: {
      title: 'customTitle',
      customRender: 'name'
    },
  },
  {
    title: '角色',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    slots: {
      customRender: 'tags'
    },
  },
  {
    title: 'Action',
    key: 'action',
    slots: {
      customRender: 'action'
    },
  },
];
const data = [
  {
    key: '1',
    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    name: 'John Brown',
    code: 'user',
    email: '2800967183@qq.com',
    phone: '18086256816',
    tags: ['正常'],
  },
  {
    key: '2',
    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    name: 'Jim Green',
    code: 'doctor',
    email: '2019967083@qq.com',
    phone: '15024511186',
    tags: ['注销'],
  },
  {
    key: '3',
    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    name: 'Joe Black',
    code: 'admin',
    email: '2079901021@qq.com',
    phone: '15748163055',
    tags: ['正常'],
  },
];
const onSearch = () => {

}

let checkRemark= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请输入描述');
  }
};

const rules: Record<string, Rule[]> = {
  name: [{ validator: checkName, trigger: 'change' }],
  code: [{ validator: checkCode, trigger: 'change' }],
  remark: [{ validator: checkRemark, trigger: 'change' }],
  statu: [{ validator: checkStatu, trigger: 'change' }],
};

const showDrawer = (id:number) => {
  console.log(id)
  visible.value = true;
};
const handleClose = () => {
  visible.value = false;
};
const handleFinish = (values: FormState) => {
  console.log(values, formState);
};
const handleFinishFailed = (errors: any) => {
  console.log(errors);
};
const resetForm = () => {
  // @ts-ignore
  formRef.value.resetFields();
};
const handleValidate = (...args: any[]) => {
  console.log(args);
};
interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
  type?: string;
  size: number;
  originFileObj: any;
}
interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}
function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}
const handleChange = (info: FileInfo) => {
  if (info.file.status === 'uploading') {
    loading.value = true;
    return;
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
  }
  if (info.file.status === 'error') {
    loading.value = false;
    message.error('upload error');
  }
};

const beforeUpload = (file: FileItem) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
const edit = (e:any) => {
  resetForm();
  console.log(e)
  formState.avatar = [e.avatar];
  formState.code = e.code;
  formState.email = e.email;
  formState.name = e.name;
  formState.phone = e.phone;
  formState.sex = e.sex;
  formState.statu = e.tags[0];
  visible.value = true;
}

</script>

<style scoped>

</style>

