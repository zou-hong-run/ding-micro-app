<template>
    <van-button 
        type="primary" 
        block
        v-on:click="onHandleClick"
    >选择某时间</van-button>
</template>

<script>
import * as dd from 'dingtalk-jsapi'

export default {
    name: 'biz.calendar.chooseDateTime',
    methods: {
        onHandleClick() {
            dd.biz.calendar.chooseDateTime({
                default: 1522022400000,
            });
        }
    }
}
</script>


