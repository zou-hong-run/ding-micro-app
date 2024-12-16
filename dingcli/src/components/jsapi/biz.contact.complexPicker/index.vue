<template>
    <van-button 
        type="primary" 
        block
        v-on:click="onHandleClick"
    >选人组件</van-button>
</template>

<script>
import * as dd from 'dingtalk-jsapi'

export default {
    name: 'biz.contact.complexPicker',
    methods: {
        onHandleClick() {
            dd.biz.contact.complexPicker({
                corpId: window.__corpId__,
            });
        }
    }
}
</script>


