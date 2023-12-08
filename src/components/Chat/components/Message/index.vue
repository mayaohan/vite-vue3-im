<template>
  <div class="IM-message-layout">
    <Head />
    <MessageDetail :message="props.message"/>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted,  } from 'vue';
import Head from './components/Head/index.vue'
import MessageDetail from './components/MessageDetail/index.vue'
import './index.scss'
defineOptions({
  name: 'dssMessage',
})
const props = defineProps({
  message:Object
})
</script>

<style lang="scss" scoped>
  .IM-message-layout{
    width:100%;
    height:calc(100vh - 130px);
    overflow:auto;
  }
</style>