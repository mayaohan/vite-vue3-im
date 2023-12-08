<template>
    <div class="item" :class="{active:onActive==tabOption.paneName}" @click="emit('itemClick',props.tabOption.paneName)">
        <img v-if="onActive!=tabOption.paneName" :src='props.icon' alt="" />
        <img v-else :src='props.activeIcon' alt="" />
        <span class="title">{{props.label}}</span>
        <el-badge :value="props.count" :max="99" class="badge-item" />
    </div>
</template>

<script setup>
import { ref, reactive, onMounted,watch,getCurrentInstance,provide,nextTick } from 'vue';
import { useOrderedChildren} from '@/utils'
defineOptions({
  name: 'dssNav',
})
const props = defineProps({
  active:String,
  tabOption:JSON,
  label:String,
  count:Number,
  icon:String,
  activeIcon:String,
})
const onActive = ref(props.active)
const emit = defineEmits(['itemClick'])
watch(props, async (v) => {
    await nextTick()
    console.log(v.active)
    onActive.value = v.active
})

</script>

<style lang="scss">
  .dss-nav-tab{
    .item{
      height:56px;
      line-height:56px;
      display:flex;
      align-items: center;
      padding-left:18px;
      cursor: pointer;
      .title{
        padding-left:10px;
        color:#fff;
        transition: all 0.5s ease;
      }
    }
    .item.active{
      .title{
        color:#505050;
      }
    }
  }
</style>
