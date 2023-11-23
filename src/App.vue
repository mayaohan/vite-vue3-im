<script setup>
import HelloWorld from './components/HelloWorld'
import demoComponent from './components/demoComponent'
import item from './item.vue'
import {ref,onMounted} from 'vue'
import DemoCore from './views/param'
// import demoFor from './views/demoFor'
// import * as model from '../lib/index.umd'
// console.log(dssDemoFor)
const ax = ref(5)
const demoCore = ref(null)
onMounted(()=>{
  
})
const click = ()=>{
  demoCore.value.chartHandler()
}

</script>

<template>
  <div>
    <hello-world :childComponent="item">
      hello-world-slot
    </hello-world>
    <demo-component :childComponent="item"></demo-component>
    <DemoCore ref="demoCore"/>
    <button class="sss" @click="click">demoCore</button>
    <dssDemoFor />
    <ddsMark />
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
