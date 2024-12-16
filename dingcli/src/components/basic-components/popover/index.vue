<template>
    <van-popover v-model="showPopover" trigger="click">
      <van-grid
        square
        clickable
        :border="false"
        column-num="3"
        style="width: 240px;"
      >
        <van-grid-item
          v-for="i in 6"
          :key="i"
          text="选项"
          icon="photo-o"
          @click="showPopover = false"
        />
      </van-grid>
      <template #reference>
        <van-button type="primary">自定义内容</van-button>
      </template>
    </van-popover>
</template>

<script>
import Vue from 'vue';
import { Popover } from 'vant';

Vue.use(Popover);

export default {
  name: 'Popover',
  data() {
    return {
      showPopover: false,
    }
  }
}
</script>