<template>
  <div class="IM-Nav">
    <div class="IM-Nav-bar contextmenu" @contextmenu.prevent="openModel">
      <div class="header-content">
        <el-avatar shape="square" fit="cover" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
      </div>
      <div class="text-content">
        <h2 class="text-content-name">
          <span class="names">小陶</span>
          <span class="names-time">8:31</span>
        </h2>
        <p class="small">
          <span class="gay overflow-font">hi～很高兴认识你，能一起吃晚饭地方hi～很高兴认识你，能一起吃晚饭地方</span>
          <el-badge :value="90" :max="99" class="" />
        </p>
      </div>
    </div>

    <div class="IM-Nav-bar active">
      <div class="header-content">
        <el-avatar shape="square" fit="cover" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
      </div>
      <div class="text-content">
        <h2 class="text-content-name">
          <span class="names">技术群</span>
          <span class="names-time">8月8日 8:31</span>
        </h2>
        <p class="small">
          <span class="gay overflow-font">hi～很高兴认识你，能一起吃晚饭地方hi～很高兴认识你，能一起吃晚饭地方</span>
          <img :src="noMatter" alt="" style="margin:0 8px">
          <el-badge is-dot class="" />
        </p>
      </div>
    </div>

    <div class="IM-Nav-bar" v-for="obj in 10" :key="obj">
      <div class="header-content">
        <el-avatar shape="square" fit="cover" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
      </div>
      <div class="text-content">
        <h2 class="text-content-name">
          <span class="names">技术群</span>
          <span class="names-time">8月8日 8:31</span>
        </h2>
        <p class="small">
          <span class="gay overflow-font">hi～很高兴认识你，能一起吃晚饭地方hi～很高兴认识你，能一起吃晚饭地方</span>
          <img :src="noMatter" alt="" style="margin:0 8px">
          <el-badge is-dot class="" />
        </p>
      </div>
    </div>


    <Teleport to="body">
      <div ref="rightModel" v-show="show" class="IM-edit-group-list" :style="{left:left+'px',top:top+'px'}">
        <div class="item" :class="{active:isHovered==1}" @click="itemClick(1)" @mouseover="handleMouseOver(1)" @mouseout="handleMouseOut">
          <img :src="isHovered==1?to_top_active:to_top" alt="">
          <span class="list-text">置顶&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
        <div class="item" :class="{active:isHovered==2}" @click="itemClick(2)" @mouseover="handleMouseOver(2)" @mouseout="handleMouseOut">
          <img :src="isHovered==2?close_top_active:close_top" alt="">
          <span class="list-text">取消置顶</span>         
        </div>
        <div class="item" :class="{active:isHovered==3}" @click="itemClick(3)" @mouseover="handleMouseOver(3)" @mouseout="handleMouseOut">
          <img :src="isHovered==3?delete_active:deletes" alt="">
          <span class="list-text">删除聊天</span>
        </div>
      </div>
       
    </Teleport>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted,  } from 'vue'
import noMatter from '@/assets/icon/noMatter.svg'
import to_top from '@/assets/icon/to_top.svg'
import to_top_active from '@/assets/icon/to_top_active.svg'
import deletes from '@/assets/icon/delete.svg'
import delete_active from '@/assets/icon/delete_active.svg'
import close_top from '@/assets/icon/close_top.svg'
import close_top_active from '@/assets/icon/close_top_active.svg'
import {onClickOutside} from '@vueuse/core'
defineOptions({
  name: 'dssNavBar',
})
const left = ref(0)
const top = ref(0)
const show = ref(false)
const isHovered = ref(0)
const rightModel = ref(null)
onClickOutside(rightModel,()=>{
  show.value = false
})
const openModel = (e)=>{
  console.log(e)
  left.value = e.x
  top.value = e.y
  show.value = true
}
const handleMouseOver = (param)=> {
  isHovered.value = param
}
const handleMouseOut = ()=> {
  isHovered.value = 0
}
const itemClick = (param)=>{
  if(param==1){
    
  }
  if(param==2){
    
  }
  if(param==3){
    
  }
  show.value = false;
}
</script>

<style lang="scss" scoped>
  .IM-Nav{
    overflow:auto;
    .IM-Nav-bar{
      display: flex;
      width:100%;
      padding:8px;
      // margin:8px;
      border:8px solid #fff;
      background:#fff;
      cursor:pointer;
      &.active{
        border-radius: 12px;
        background: linear-gradient(87deg, rgba(102, 130, 245, 0.20) 3.48%, rgba(105, 192, 255, 0.20) 40.12%, rgba(255, 255, 255, 0.20) 90.43%, rgba(255, 255, 255, 0.20) 122.73%), #FFF;
      }
      &.contextmenu{
        background:#F7F7F7;
        border:8px solid #F7F7F7;
      }
      .header-content{
        width:48px;
        height:48px;
        .el-avatar{
          width:48px;
          height:48px;
          border-radius: 12px;
        }
      }
      .text-content{
        padding-left:16px;
        flex:1;
        .text-content-name{
          font-size:16px;
          color:#1A1A1A;
          display:flex;
          justify-content: space-between;
          .names-time{
            font-size: 14px;
            color:#CCC;
          }
        }
        .small{
          width:100%;
          display:flex;
          .gay{
            flex:1;
            color:#999;
            font-size: 14px;
          }
          ::v-deep(.is-dot){
            top:5px;
          }
        }
      }
    }
    
  }
</style>