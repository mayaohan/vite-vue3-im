<script setup>
import HelloWorld from './components/HelloWorld'
import demoComponent from './components/demoComponent'
import item from './item.vue'
import {ref,onMounted} from 'vue'
import DemoCore from './views/param'
import icon from '@/assets/icon/icon.svg'
import activeIcon from '@/assets/icon/iconActive.svg'
import header from '@/assets/icon/header.png'
// import demoFor from './views/demoFor'
// import * as model from '../lib/index.umd'
// console.log(dssDemoFor)
const ax = ref(5)
const active = ref('ceshi')
const demoCore = ref(null)
const system = ref(80)
onMounted(()=>{
  
})
const click = ()=>{
  demoCore.value.chartHandler()
}
console.log(AlipayCcmImSdk)
</script>

<template>
  <div style="padding:5px;">
    <!-- <hello-world :childComponent="item">
      hello-world-slot
    </hello-world> -->
    <!-- <demo-component :childComponent="item"></demo-component> -->
    <!-- <DemoCore ref="demoCore"/> -->
    <!-- <button class="sss" @click="click">demoCore</button> -->
    <!-- <dssDemoFor /> -->
    <!-- <dssMark /> -->
    <dss-tab v-model:tabActive="active" :header="header">
      <dss-nav-child name="shoucang" label="互动消息" :count="system"
        :icon="icon"
        :active-icon="activeIcon"
      >
        <!-- <template #header>
          <div>
            123123
          </div>
        </template> -->
        <dssChat />
      </dss-nav-child>
      <dss-nav-child name="ceshi" label="我的收藏" :count="90"
        :icon="icon"
        :active-icon="activeIcon"
      >
        222
      </dss-nav-child>
      <dss-nav-child name="ceshihaole" label="系统消息"
        :icon="icon"
        :active-icon="activeIcon"
      >
        333
      </dss-nav-child>
    </dss-tab>
    {{active}}
    <el-button type="primary" @click="active = 'shoucang'">测试</el-button>
    <el-button type="primary" @click="system = 100">测试count</el-button>
  </div>
</template>

<style scoped>
.box{
  background:#505050;
  flex:1;
  margin:0 10px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
