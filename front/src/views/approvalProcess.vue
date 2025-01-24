<script setup>
import {
  createProcessTemplate,
  findProcessTemplate,
  createProcessInstance,
  updateProcessInstance,
  createProcessTasks,
  updateProcessTasks
} from '@/api/index.js';
// 模板processCode:PROC-E758E7F7-569A-4D83-97C2-340EC423326E
// 邹的id：02396524522436637117
// 谢的id：221939573635313703
// 审批模板code
const processCode = 'PROC-E758E7F7-569A-4D83-97C2-340EC423326E';
// 审批实例发起人的userId
const originatorUserId = '02396524522436637117';
// 审批实例id
const processInstanceId = 'j5OpcfOrQSGQYJk2i2MU0A09121732786224';
// 当前创建的任务id
const taskId = '90466860121';
/**
 * 创建审批模板
 */
const handleCreateProcessTemplate = async () => {
  /**
   * {
      "componentId": "TextField-12345677",   // 控件id，表单内唯一，与bizAlias二选一
      "required":true,  // 控件是否必填
      "label": "单行文本",   // 控件标题
      "placeholder": "请输入",    // 输入提示
      "bizAlias": "staffId", // 控件的业务标识，表单内唯一，与componentId二选一
      "print": "0", // 是否参与打印(0标识字段不参与打印、1标识字段可打印)，默认可打印
      "disabled": false, // 是否可编辑
    }
   */

  let res = await createProcessTemplate({
    name: '出差报销审批(测试2)',
    description: '用于员工差旅费用报销使用',
    // 有processCode字段时表示更新模板，无processCode表示创建模板，本示例采用创建模板
    // "processCode":"PROC-9EA4B75F-****-****-****-AC70E0704E3D",
    formComponents: [
      {
        componentType: 'TextField',
        props: {
          label: '单行输入框', // 控件标题
          placeholder: '请输入', // 输入提示
          componentId: 'TextField_17EZKEGSOCTC0', // 控件id，表单内唯一，无业务语义
          required: false, // 是否必填，默认非必填
          bizAlias: 'staffId' // 控件的业务标识，表单内唯一，与componentId二选一
        }
      },
      {
        componentType: 'TextareaField',
        props: {
          label: '多行输入框',
          placeholder: '请输入',
          componentId: 'TextareaField_17EZKEGSOCTC0',
          required: false
        }
      },
      {
        componentType: 'NumberField',
        props: {
          label: '数字输入框',
          placeholder: '请输入数字',
          componentId: 'NumberField_108PIFZM21F40',
          required: false,
          unit: '元', // 数字单位
          defaultValue: '10' // 默认值
        }
      },
      {
        componentType: 'DDSelectField',
        props: {
          options: [
            // 可选选项列表
            {
              value: '选项1', // 选项显示名称
              key: 'option_0' // 控件内唯一key，非必填，系统会默认生成
            },
            {
              value: '选项2',
              key: 'option_1'
            },
            {
              value: '选项3',
              key: 'option_2'
            },
            {
              key: 'other', // 其他项特殊key
              value: '其它'
            }
          ],
          label: '单选框',
          placeholder: '请选择',
          componentId: 'DDSelectField_14T8M4EKXAV40',
          required: false
        }
      },
      {
        componentType: 'DDMultiSelectField',
        props: {
          options: [
            {
              value: '选项1',
              key: 'option_0'
            },
            {
              value: '选项2',
              key: 'option_1'
            },
            {
              value: '选项3',
              key: 'option_2'
            },
            {
              key: 'other', // 其他项特殊key
              value: '其它'
            }
          ],
          label: '多选框',
          placeholder: '请选择',
          componentId: 'DDMultiSelectField_1XJ7NG1GSD6O0',
          required: false
        }
      },
      {
        componentType: 'DDDateField',
        props: {
          unit: '小时', // 日期格式，枚举值（小时、天）
          format: 'yyyy-MM-dd HH:mm', // 日期格式，非必填，小时对应yyyy-MM-dd HH:mm，天对应yyyy-MM-dd HH:mm
          bizAlias: '',
          label: '日期',
          placeholder: '请选择',
          componentId: 'DDDateField_SQL0DF3MS9C0',
          required: false,
          defaultValue: '2021-12-21 17:46' // 默认值
        }
      },
      {
        componentType: 'DDDateRangeField',
        props: {
          unit: '小时',
          format: 'yyyy-MM-dd HH:mm',
          bizAlias: '',
          label: '["开始时间","结束时间"]',
          placeholder: '请选择',
          componentId: 'DDDateRangeField_7MPG14N3OOO0',
          duration: true, // 是否自动计算时长
          durationLabel: '时长', // 时长计算显示文本
          required: false
        }
      },
      {
        componentType: 'TextNote',
        props: {
          link: 'https://www.baidu.com/', // 超链接
          notPrint: '0',
          bizAlias: '',
          componentId: 'TextNote_13RP7230RAF40',
          content: '说明文字' // 说明文字
        }
      },
      {
        componentType: 'DDPhotoField',
        props: {
          label: '图片',
          componentId: 'DDPhotoField_P50A0HMHB280',
          required: false
        }
      },
      {
        componentType: 'MoneyField',
        props: {
          upper: '0', // 金额需要大写(0不大写，1需要大写)，默认需要大写
          label: '金额（元）',
          placeholder: '请输入金额',
          componentId: 'MoneyField_L1PP26ZDV400',
          required: false
        }
      },
      {
        children: [
          // 明细中的子控件列表，子控件列表遵循各控件属性标准
          {
            componentType: 'TextField',
            props: {
              label: '单行输入框',
              placeholder: '请输入',
              componentId: 'TextField_1UE1ZY1A28AO0',
              required: false
            }
          },
          {
            componentType: 'MoneyField',
            props: {
              payEnable: false,
              upper: '0',
              bizAlias: '',
              label: '金额（元）',
              placeholder: '请输入金额',
              componentId: 'MoneyField_1S85G4YLMM5C0',
              required: false
            }
          },
          {
            componentType: 'NumberField',
            props: {
              unit: '元',
              payEnable: false,
              bizAlias: '',
              label: '数字输入框',
              placeholder: '请输入数字',
              componentId: 'NumberField_1XP6AWG50SE80',
              required: false
            }
          }
        ],
        componentType: 'TableField',
        props: {
          tableViewMode: 'table', // 明细填写方式，枚举值：list：列表,table：表格
          verticalPrint: true, // 明细打印方式，true：纵向 false：横向
          statField: [
            // 设置对数字、金额类控件进行总数统计
            {
              upper: '1',
              componentId: 'MoneyField_1S85G4YLMM5C0',
              label: '金额（元）'
            },
            {
              componentId: 'NumberField_1XP6AWG50SE80',
              label: '数字输入框'
            }
          ],
          bizAlias: '',
          label: '表格',
          componentId: 'TableField_1MLEPEAQSXHC0'
        }
      },
      {
        componentType: 'DDAttachment',
        props: {
          label: '附件',
          componentId: 'DDAttachment_18U4QTOWLMPS0',
          required: false
        }
      },
      {
        componentType: 'InnerContactField',
        props: {
          label: '联系人',
          placeholder: '请选择',
          componentId: 'InnerContactField_162USP4V1BC00',
          choice: '1', //枚举值：1标识支持多选，0标识单选，默认为0
          required: false,
          bizAlias: ''
        }
      },
      {
        componentType: 'DepartmentField',
        props: {
          multiple: false, // 是否支持多选，true多选，false单选
          label: '部门',
          placeholder: '请选择',
          componentId: 'DepartmentField_1GY5JSPOCY000',
          required: false
        }
      },
      {
        componentType: 'RelateField',
        props: {
          label: '关联审批单',
          placeholder: '请选择',
          componentId: 'RelateField_5X1DL4KMKUW0',
          required: false,
          bizAlias: '',
          availableTemplates: [
            // 可被关联的审批模板列表，为空时表示可关联所有审批模板的实例数据
            {
              name: '我的模板', // 可关联的审批表单名称
              processCode: 'PROC-9EA4B75F-****-****-****-AC70E0704E3D' // 可关联的审批表单formCode
            }
          ]
        }
      },
      {
        componentType: 'AddressField',
        props: {
          addressModel: 'district', // 枚举值,city省市,district省市区,street省市区-街道
          bizAlias: '',
          label: '省市区',
          componentId: 'AddressField_1P9H21H8R2LC0',
          required: false
        }
      },
      {
        componentType: 'StarRatingField',
        props: {
          limit: 5, // 枚举值：5分制、10分制
          label: '评分',
          placeholder: '请输入',
          componentId: 'StarRatingField_10E5NHTA2W0G0',
          required: false,
          bizAlias: ''
        }
      }
    ],
    processFeatureConfig: {
      features: [
        {
          name: 'TASK_EXECUTE',
          pcUrl: 'https://www.baidu.com',
          mobileUrl: 'https://www.baidu.com',
          runType: 'REDIRECT'
        }
      ]
    }
  });
  console.log(res, 'res');
};
/**
 * 根据名称搜索审批模板
 */
const handleFindProcessCodeByName = async () => {
  let res = await findProcessTemplate('出差报销审批(测试)');
  console.log(res, 'res');
};
/**
 * 创建不带流程的审批实例
 * 可在钉钉工作台 > OA审批 > 审批中心 > 已发起查看，接口调用效果如下图所示。
 * 调用本接口创建实例，接口返回的审批实例ID请务必注意保存，方便后续调用其他接口使用。
 */
const handleCreateProcessInstance = async () => {
  let res = await createProcessInstance({
    processCode,
    originatorUserId,
    formComponentValueList: [
      {
        name: '单行输入框',
        value: '单行输入框示例'
      },
      {
        name: '多行输入框',
        value: '请输入多行文本内容，需要换行时请输入\r\n'
      },
      {
        name: '数字输入框',
        value: '100'
      },
      {
        /*
                value 可以直接填写实际的选项值
                选项值-如"选项1"必须是配置的选项列表中的值
                非法选项值后续有发起失败风险
            */
        name: '单选框',
        value: '选项1'
      },
      {
        /*
                value 需要将实际的选项值组成的数组转义为字符串，即使只有一个
                选项也需要是数组形式
                选项值-如"选项1"、"选项2"必须是配置的选项列表中的值
                非法选项值后续有发起失败风险
            */
        name: '多选框',
        value: '["选项1","选项2"]'
      },
      {
        /*
                value 仅支持 yyyy-MM-dd 一种格式
            */
        name: '日期',
        value: '2021-08-17'
      },
      {
        /*
                value 是时间数组的字符串形式，同样仅支持 yyyy-MM-dd 一种格式
            */
        name: '["开始时间","结束时间"]',
        value: '["2019-02-19","2019-02-25"]'
      },
      {
        /*
                表格控件的 value 是一个 json 对象的二维数组。数组中的每一行表示了表格中的一行数据，
                一行中的每个 json 对象表示表格中的一个控件。
            */
        name: '表格',
        value: '[[{"name":"单行输入框","value":"明细单行输入框"},{"name":"数字输入框","value":"100"}]]'
      },
      {
        name: '金额（元）',
        value: '100'
      },
      {
        /*
                省市区必须遵照地址控件的格式正确传递才可识别，且需使用英文格式逗号进行分隔
            */
        name: '省市区',
        value: '北京,北京市,河东区'
      },
      {
        name: '评分',
        value: '5'
      }
    ],
    title: '出差报销审批(测试)实例',
    url: 'https://www.baidu.com/',
    notifiers: [
      {
        userid: originatorUserId,
        /**
         * start：审批发起时，通知抄送人
         * finish：审批通过后，通知抄送人
         * start_finish：审批发起时和审批通过后，都通知抄送人
         */
        position: 'start'
      }
    ]
  });
  console.log(res, 'res');
};
/**
 * 调用本接口，更新OA审批实例状态。
 *
 */
const handleUpdateProcessInstance = async () => {
  let res = await updateProcessInstance({
    processInstanceId,
    status: 'COMPLETED', // COMPLETED：结束审批流 TERMINATED：终止审批流
    result: 'agree',
    notifiers: [
      {
        userId: originatorUserId
      }
    ]
  });
  console.log(res, 'res');
};
/**
 * 根据审批实例 创建待办任务
 * 调用本接口，可以将三方系统内的审批节点信息同步到钉钉OA审批，并生成对应的钉钉待办任务。
 */
const handleCreateProcessTasks = async () => {
  const res = await createProcessTasks({
    processInstanceId,
    activityId: 'act_my_redrun', //自定义审批节点ID，自定义参数。
    tasks: [
      {
        userId: originatorUserId,
        url: 'https://www.baidu.com',
        customData: 'testData'
      }
    ]
  });
  console.log(res, 'res');
};
/**
 * 调用本接口，更新待办任务的状态。
 * 调用本接口，更新任务状态后，对应的待办卡片会在钉钉待办里面消失，显示到已完成中。
 */
const handleUpdateProcessTasks = async () => {
  let res = await updateProcessTasks({
    processInstanceId,
    tasks: [
      {
        taskId,
        status: 'COMPLETED',
        result: 'AGREE'
      }
    ]
  });
};
</script>
<template>
  <main>
    <van-button size="large" type="primary" @click="handleCreateProcessTemplate">step:1创建审批模板</van-button>
    <hr />
    <van-button size="large" type="primary" @click="handleFindProcessCodeByName">step:2审批模板名称获取对应的模板Processcode</van-button>
    <hr />
    <van-button size="large" type="primary" @click="handleCreateProcessInstance">step:3创建不带流程的审批实例</van-button>
    <hr />
    <van-button size="large" type="primary" @click="handleUpdateProcessInstance">step:4更新审批实例状态</van-button>
    <hr />
    <van-button size="large" type="primary" @click="handleCreateProcessTasks">step:5创建流程中心任务待办</van-button>
    <hr />
    <van-button size="large" type="primary" @click="handleUpdateProcessTasks">step:6更新流程中心任务状态</van-button>
  </main>
</template>
