<template>
  <div class="home">
    <van-tabs v-model="active">
      <!-- <van-tab v-for="value in testArr" :key="value" title="基础组件">{{value}}</van-tab> -->
      <van-tab title="基础内容">
        <van-grid square :column-num="2" :icon-size="80">
          <van-grid-item 
            v-for="basicComponent in basicComponents"
            :key="basicComponent.componentName"
            v-bind:icon="basicComponent.previewUrl" 
            v-bind:text="basicComponent.title"
            v-on:click="showActionSheet(basicComponent.title, basicComponent.componentName)"
          >
            
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="JSAPI">
        <div>
          <van-cell-group
          v-for="jsapiListItem in jsapi"
          :key="jsapiListItem.header"
          :title="jsapiListItem.header"
        >
            <van-cell 
              v-for="jsapiItem in jsapiListItem.items" 
              :key="jsapiItem.key" 
              :title="jsapiItem.name"
              :label="jsapiItem.desc"
              clickable
              v-on:click="showActionSheet(jsapiItem.name, jsapiItem.key)"
              />
          </van-cell-group>
        </div>
      </van-tab>
    </van-tabs>

    <van-action-sheet v-model="show" v-bind:title="currentActionSheetTitle">
      <div class="content">
        <component :is="currentActionSheetComponent" />
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import Vue from 'vue';
import { 
  Tab, 
  Tabs,
  Grid,
  GridItem,
  Image,
  ActionSheet,
  Divider,
  Cell,
  List,
  CellGroup,
} from 'vant';

import Button from '../components/basic-components/button/index.vue'
import DropdownMenu from '../components/basic-components/dropdownMenu/index.vue'
import Popover from '../components/basic-components/popover/index.vue'
import BizCalendarChooseDateTime from '../components/jsapi/biz.calendar.chooseDateTime/index.vue'
import BizContactComplexPicker from '../components/jsapi/biz.contact.complexPicker/index.vue'

Vue.use(CellGroup);
Vue.use(List);
Vue.use(Cell);
Vue.use(Divider);
Vue.use(ActionSheet);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
Vue.use(Tab);
Vue.use(Tabs);

export default {
  name: 'Home',
  components: {
    Button,
    DropdownMenu,
    Popover,
    BizCalendarChooseDateTime,
    BizContactComplexPicker,
  },
  methods: {
    showActionSheet(title, componentName) {
      this.show = true;
      this.currentActionSheetTitle = title;
      this.currentActionSheetComponent = componentName;
    }
  },
  data() {
    return {
      active: 0,
      show: false,
      currentActionSheetTitle: '',
      currentActionSheetComponent: '',
      basicComponents: [{
        title: '按钮',
        componentName: 'Button',
        previewUrl: 'https://img.alicdn.com/imgextra/i1/O1CN01rGcU9X1by9xPcJjuK_!!6000000003533-2-tps-612-292.png'
      }, {
        title: '下拉菜单',
        componentName: 'DropdownMenu',
        previewUrl: 'https://img.alicdn.com/imgextra/i1/O1CN015SSxf71IWFB5imj3p_!!6000000000900-2-tps-612-292.png'
      }, {
        title: '气泡弹出框',
        componentName: 'Popover',
        previewUrl: 'https://gw.alicdn.com/imgextra/i1/O1CN01rECNlj1TSXiAlsxOl_!!6000000002381-2-tps-612-292.png'
      }],
      jsapi: [
        {
          header: 'UI-dd',
          items: [{
            name: 'biz.calendar.chooseDateTime',
            key: 'BizCalendarChooseDateTime',
            desc: '选择某时间'
          },
        ],
        },
        {
          header: 'Contact',
          items: [
            {
              name: 'biz.contact.complexPicker',
              key: 'BizContactComplexPicker',
              desc: '选择部门和人'
            },
          ],
        },
      ]
    };
  },
}
</script>

<style>
  .content {
    padding: 16px 16px 160px;
  }
</style>