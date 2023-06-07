<template>
  <div>
    <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
    >
      <a-form-item :wrapper-col="{ span:24 }">
        <a-button type="primary" @click="showDrawer">新建</a-button>
      </a-form-item>
    </a-form>
    <a-table :columns="columns" :data-source="data" :row-selection="rowSelection">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'type'">
          <a-tag color="blue" v-if="record.type == '目录'">{{ record.type }}</a-tag>
          <a-tag color="green" v-if="record.type == '菜单'">{{ record.type }}</a-tag>
          <a-tag color="orange" v-if="record.type == '按钮'">{{ record.type }}</a-tag>
        </template>
        <template v-if="column.key === 'statu'">
          <a-tag color="green" v-if="record.statu == '正常'">{{ record.statu }}</a-tag>
          <a-tag color="red" v-if="record.statu == '禁用'">{{ record.statu }}</a-tag>
        </template>
        <template v-if="column.key === 'operation'">
          <a-button type="text" size="small" style="color: blue">
            编辑
          </a-button>
          <a-button type="text" size="small" style="color: red">
            删除
          </a-button>
        </template>
      </template>
    </a-table>
    <a-drawer
        title="添加菜单"
        :width="600"
        :visible="visible"
        :body-style="{ paddingBottom: '80px' }"
        :footer-style="{ textAlign: 'right' }"
        @close="onClose"
    >
      <a-form
          ref="formRef"
          name="custom-validation"
          :model="formState"
          :rules="rules"
          v-bind="layout"
          @finish="handleFinish"
          @validate="handleValidate"
          @finishFailed="handleFinishFailed"
      >
        <a-form-item has-feedback label="上级菜单" name="parentId">
          <a-input-group compact>
            <a-cascader
                v-model:value="formState.parentId"
                :options="options"
                type="parentId"
                placeholder="选择上级菜单"
            />
          </a-input-group>
        </a-form-item>
        <a-form-item has-feedback label="菜单名称" name="name">
          <a-input v-model:value="formState.name" type="name" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback label="权限编码" name="perms">
          <a-input v-model:value="formState.perms" type="perms" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback label="图标" name="icon">
          <a-input  v-model:value="formState.icon" @click="showModal" type="icon" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback label="菜单URL" name="path">
          <a-input v-model:value="formState.path" type="path" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback label="菜单组件" name="component">
          <a-input v-model:value="formState.component" type="component" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback label="类型" name="type" >
          <a-checkbox-group v-model:value="formState.type">
            <a-checkbox value="1" name="type">目录</a-checkbox>
            <a-checkbox value="2" name="type">菜单</a-checkbox>
            <a-checkbox value="3" name="type">按钮</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <a-form-item has-feedback label="状态" name="statu">
          <a-checkbox-group v-model:value="formState.statu">
            <a-checkbox value="1" name="type">禁用</a-checkbox>
            <a-checkbox value="2" name="type">正常</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <a-form-item has-feedback label="排序" name="orderNum">
          <a-input-number v-model:value="formState.orderNum" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
          <a-button type="primary" html-type="submit">提交</a-button>
          <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
    <a-modal v-model:visible="visibleIcon" title="选择图标" @ok="handleOk">
      <IconTable ref="myIcons"></IconTable>
    </a-modal>
  </div>
</template>

<script name="menu" lang="ts" setup>
import { defineComponent,ref,reactive,toRaw } from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';
import type { DrawerProps } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form';
import type { FormInstance } from 'ant-design-vue';

import IconTable from  '@/components/IconTable.vue'
//获取绑定的ref
const myIcons = ref();
const formRef = ref<FormInstance>();
const placement = ref<DrawerProps['placement']>('right');
const visible = ref<boolean>(false);
const value18 = ref<string[]>([]);
interface FormState {
  parentId: string;
  name: string;
  perms: string;
  icon: string;
  path: string;
  component: string;
  type: string;
  statu: number | undefined;
  orderNum: number | undefined;
}
const formState = reactive<FormState>({
  parentId:  '',
  name: '',
  perms:  '',
  icon: '',
  path:  '',
  component:  '',
  type: '',
  statu: 0,
  orderNum:  0,
});
const options = [
  {
    value: '主页',
    label: '主页',
  },
  {
    value: '系统管理',
    label: '系统管理',
    children: [
      {
        value: '用户管理',
        label: '用户管理'
      },
      {
        value: '角色管理',
        label: '角色管理'
      },
      {
        value: '菜单管理',
        label: '菜单管理'
      },
    ],
  },
  {
    value: '系统工具',
    label: '系统工具',
    children: [
      {
        value: '数据字典',
        label: '数据字典',
      },
    ],
  },
]


let checkName= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请输入菜单名称');
  }
};

let checkPath= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请输入路径');
  }
};


let checkParentId= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请选择父目录');
  }
};

let checkPerms= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请输入权限编码');
  }
};


let checkIcon= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请选择图标');
  }
};



let checkComponent= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请输入组件');
  }
};

let checkType= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请选择类型');
  }
};

let checkStatu= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请选择状态');
  }
};


let checkOrderNum= async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请输入排序');
  }
};




let checkAge = async (_rule: Rule, value: number) => {
  if (!value) {
    return Promise.reject('Please input the age');
  }
  if (!Number.isInteger(value)) {
    return Promise.reject('Please input digits');
  } else {
    if (value < 18) {
      return Promise.reject('Age must be greater than 18');
    } else {
      return Promise.resolve();
    }
  }
};

let validatePass = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password');
  } else {
    // @ts-ignore
    if (formState.checkPass !== '') {
      // @ts-ignore
      formRef.value.validateFields('checkPass');
    }
    return Promise.resolve();
  }
};
let validatePass2 = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password again');
    // @ts-ignore
  } else if (value !== formState.pass) {
    return Promise.reject("Two inputs don't match!");
  } else {
    return Promise.resolve();
  }
};
const rules: Record<string, Rule[]> = {
  pass: [{ required: true, validator: validatePass, trigger: 'change' }],
  checkPass: [{ validator: validatePass2, trigger: 'change' }],
  age: [{ validator: checkAge, trigger: 'change' }],
  parentId: [{ validator: checkParentId, trigger: 'change' }],
  name: [{ validator: checkName, trigger: 'change' }],
  perms: [{ validator: checkPerms, trigger: 'change' }],
  icon: [{ validator: checkIcon, trigger: 'change' }],
  path: [{ validator: checkPath, trigger: 'change' }],
  component: [{ validator: checkComponent, trigger: 'change' }],
  type: [{ validator: checkType, trigger: 'change' }],
  statu: [{ validator: checkStatu, trigger: 'change' }],
  orderNum: [{ validator: checkOrderNum, trigger: 'change' }],
};
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
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

const showDrawer = () => {
  visible.value = true;
};
const onClose = () => {
  visible.value = false;
};
const visibleIcon = ref<boolean>(false);

const showModal = () => {
  visibleIcon.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visibleIcon.value = false;
  myIcons.value.change()
  //这里也可以通过ref获取到子组件暴露出来想要父组件获取到的值
  formState.icon = myIcons.value.iconValue
};
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '权限编码',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '图标',
    dataIndex: 'icon',
    key: 'icon',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '菜单path',
    dataIndex: 'path',
    key: 'path',
  },
  {
    title: '菜单组件',
    dataIndex: 'component',
    key: 'component',
  },
  {
    title: '排序号',
    dataIndex: 'sort',
    key: 'sort',
  },{
    title: '状态',
    dataIndex: 'statu',
    key: 'statu',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
  },
];

interface DataItem {
  key: number;
  name: string;
  code: string;
  sort: string;
  icon:string;
  statu:string;
  type: string;
  path: string;
  component: string;
  operation: string;
  children?: DataItem[];
}

const data: DataItem[] = [
  {
    key: 1,
    name: '系统管理',
    code: 'sys:system:list',
    type: "目录",
    path: "/",
    component: "/",
    sort: '1',
    icon: 'step-forward-outlined',
    statu: '正常',
    operation: '操作',
    children: [
      {
        key: 12,
        name: '用户管理',
        code: 'sys:user:list',
        type: "菜单",
        path: "/sys/user/list",
        component: "sys/User",
        sort: '2',
        icon: 'swap-right-outlined',
        statu: '正常',
        operation: '操作',
        children: [
          {
            key: 121,
            name: '查询',
            code: 'sys:user:list',
            type: "按钮",
            path: "",
            component: "",
            sort: '3',
            icon: 'swap-right-outlined',
            statu: '禁用',
            operation: '操作',
          },
          {
            key: 121,
            name: '新增',
            code: 'sys:user:add',
            type: "按钮",
            path: "",
            component: "",
            sort: '4',
            icon: 'step-forward-outlined',
            statu: '正常',
            operation: '操作',
          },
          {
            key: 121,
            name: '修改',
            code: 'sys:user:edit',
            type: "按钮",
            path: "",
            component: "",
            sort: '5',
            icon: 'step-forward-outlined',
            statu: '禁用',
            operation: '操作',
          },
          {
            key: 121,
            name: '删除',
            code: 'sys:user:delete',
            type: "按钮",
            path: "",
            component: "",
            sort: '6',
            icon: 'step-forward-outlined',
            statu: '正常',
            operation: '操作',
          },
          {
            key: 121,
            name: '重置密码',
            code: 'sys:user:repass',
            type: "按钮",
            path: "",
            component: "",
            sort: '7',
            icon: 'step-forward-outlined',
            statu: '禁用',
            operation: '操作',
          },
        ],
      },
      {
        key: 122,
        name: '角色管理',
        code: 'sys:role:list',
        type: "目录",
        path: "/sys/role/list",
        component: "sys/Role",
        sort: '8',
        icon: 'step-forward-outlined',
        statu: '正常',
        operation: '操作',
        children: [
          {
            key: 1212,
            name: '查询',
            code: 'sys:role:list',
            type: "菜单",
            path: "",
            component: "",
            sort: '9',
            icon: 'step-forward-outlined',
            statu: '正常',
            operation: '操作',
          },
          {
            key: 1213,
            name: '新增',
            code: 'sys:role:add',
            type: "菜单",
            path: "",
            component: "",
            sort: '10',
            icon: 'step-forward-outlined',
            statu: '正常',
            operation: '操作',
          },
          {
            key: 1214,
            name: '修改',
            code: 'sys:role:edit',
            type: "菜单",
            path: "",
            component: "",
            sort: '11',
            icon: 'step-forward-outlined',
            statu: '正常',
            operation: '操作',
          },
          {
            key: 1215,
            name: '删除',
            code: 'sys:role:delete',
            type: "菜单",
            path: "",
            component: "",
            sort: '12',
            icon: 'step-forward-outlined',
            statu: '正常',
            operation: '操作',
          },
          {
            key: 121,
            name: '重置密码',
            code: 'sys:user:repass',
            type: "按钮",
            path: "",
            component: "",
            sort: '13',
            icon: 'step-forward-outlined',
            statu: '禁用',
            operation: '操作',
          },
        ],
      },
    ],
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: (string | number)[], selectedRows: DataItem[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record: DataItem, selected: boolean, selectedRows: DataItem[]) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected: boolean, selectedRows: DataItem[], changeRows: DataItem[]) => {
    console.log(selected, selectedRows, changeRows);
  },
};

</script>

<style scoped>

</style>
