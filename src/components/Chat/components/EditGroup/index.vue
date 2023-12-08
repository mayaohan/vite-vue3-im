<template>
  <div class="IM-group">
    <div class="IM-edit-group">
      <div>私信&群聊</div>
      <img ref="addBtn" :src="add" alt="" @click="ax"/>
    </div>
    <Teleport to="body">
      <div ref="model" v-show="show" class="IM-edit-group-list" :style="{left:left+'px',top:top+'px'}">
        <div class="item" :class="{active:isHovered==1}" @click="itemClick(1)" @mouseover="handleMouseOver(1)" @mouseout="handleMouseOut">
          <img :src="isHovered==1?createGroupActive:createGroup" alt="">
          <span class="list-text">创建群聊</span>
        </div>
        <div class="item" :class="{active:isHovered==2}" @click="itemClick(2)" @mouseover="handleMouseOver(2)" @mouseout="handleMouseOut">
          <img :src="isHovered==2?groupGrandActive:groupGrand" alt="">
          <span class="list-text">群聊广场</span>         
        </div>
        <div class="item" :class="{active:isHovered==3}" @click="itemClick(3)" @mouseover="handleMouseOver(3)" @mouseout="handleMouseOut">
          <img :src="isHovered==3?myGroupActive:myGroup" alt="">
          <span class="list-text">我的群聊</span>
        </div>
      </div>
       
    </Teleport>
    <!-- 创建群聊 -->
    <el-dialog v-model="outerVisible" width="480">
      <template #header>
        <div class="model-title f0f0f0">创建群聊</div>
      </template>
      <template #default>
        <div class="model-title">群聊名称</div>
        <NewGroup 
          @get-value="(param)=>console.log(param)" 
          @change="(param)=>console.log(param)"
        />
        <p class="error">您设置的群名称涉嫌违规，请重新设置</p>
        <div class="model-title" style="margin-top:12px">
          <span>群聊名称</span>
          <el-switch
            v-model="value"
            size="large"
          />
        </div>
        <p class="footer-title">开启后，将在群聊广场展示</p>
      </template>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="outerVisible = false" size="large">取消</el-button>
          <el-button type="primary" @click="outerVisible = false" size="large">确定</el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 群聊广场 -->
    <el-dialog v-model="squeue" width="588">
      <template #header>
        <div class="model-title">群聊广场</div>
      </template>
      <template #default>
        <div style="padding:0 24px;">
          <el-input
            v-model="search"
            class="navSearch"
            placeholder="Please Input"
            :prefix-icon="Search"
          />
        </div>
        <div style="padding:0 24px;padding-bottom:24px;max-height:424px;overflow:auto;">
          <div class="itemBox">
            <div class="group-item" v-for="obj in 12" :key="obj" @click="groupSqueue(obj)">
              <el-avatar shape="square" fit="cover" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
              <span class="group-item-text">产品一号群</span>
              <el-tag>官方群</el-tag>
            </div>
          </div>
        </div>
      </template>
    </el-dialog>
    <!-- 群聊详情 -->
    <el-dialog v-model="groupDetail" width="480">
      <template #header>
        <div class="model-title">群聊详情</div>
      </template>
      <template #default>
        <div style="padding:0 24px;">
          <div style="display:flex;align-items:center;">
            <el-avatar style="width:60px;height:60px;border-radius: 12px;" shape="square" fit="cover" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
            <div style="margin-left:16px;">
              <div class="groupName">
                <span style="font-size: 18px;font-weight:500;">产品一号群</span>
              </div>
              <div class="tag">
                <el-tag>官方群</el-tag>
              </div>
            </div>
          </div>
          <div class="model-title" style="margin-top:20px;">群介绍</div>
          <p class="footer-title" style="padding-top:0;">产品型社群其实就是以用户喜欢某个产品为2切入点而形成的社群。这里要注意的一个核心就是产品，1这个产品可以文案说明文案说明文案说明文案说明文案说明文案1案说文案说文案说明文案说明。</p>
        </div>
        
      </template>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="e=>{groupDetail = false; groupWaring = true}" size="large">加入群聊</el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 群满提示 -->
    <el-dialog v-model="groupWaring" width="480">
      <template #header>
        <div class="model-title">提示</div>
      </template>
      <template #default>
        <div style="padding:0 24px;">
          当前群聊人数已达上线
        </div>
        
      </template>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="groupWaring = false">取消</el-button>
          <el-button type="primary" @click="groupWaring = false">确定</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 我的群聊 -->
    <el-dialog v-model="myGroupModel" width="588">
      <template #header>
        <div class="model-title">我的群聊</div>
      </template>
      <template #default>
        
        <div style="padding:0 24px;padding-bottom:24px;">
          <el-tabs v-model="activeName" class="itemBox IM-tab">
            <el-tab-pane label="我创建的" name="first">
              <div class="group-item" v-for="obj in 12" :key="obj" @click="groupSqueue(obj)" v-if="1!=1">
                <el-avatar shape="square" fit="cover" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
                <span class="group-item-text">产品一号群</span>
                <el-tag>官方群</el-tag>
              </div>
              <div class="empty" v-else>
                <img :src="tab_empty" alt="">
              </div>
            </el-tab-pane>
            <el-tab-pane label="我加入的" name="second">
              <div class="group-item" v-for="obj in 12" :key="obj" @click="groupSqueue(obj)" v-if="1==1">
                <el-avatar shape="square" fit="cover" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
                <span class="group-item-text">产品一号群</span>
                <el-tag>官方群</el-tag>
              </div>
              <div class="empty" v-else>
                <img :src="tab_empty" alt="">
              </div>
            </el-tab-pane>
          </el-tabs>
          
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted,  } from 'vue';
import add from '@/assets/icon/add.svg'
import {onClickOutside} from '@vueuse/core'
import createGroup from '@/assets/icon/createGroup.svg'
import createGroupActive from '@/assets/icon/createGroupActive.svg'
import groupGrand from '@/assets/icon/groupGrand.svg'
import groupGrandActive from '@/assets/icon/groupGrandActive.svg'
import myGroup from '@/assets/icon/myGroup.svg'
import myGroupActive from '@/assets/icon/myGroupActive.svg'
import NewGroup from '@/components/Chat/components/InputEditor/NewGroup.vue'
import {Search} from '@element-plus/icons-vue'
import tab_empty from '@/assets/icon/tab_empty.svg'
defineOptions({
  name: 'dssEditGroup',
})
const addBtn = ref(null)
const left = ref(0)
const top = ref(0)
const show = ref(false)
const isHovered = ref(0)
const model = ref(null)
const outerVisible = ref(false)
const squeue = ref(false)
const groupDetail = ref(false)
const groupWaring = ref(false)
const myGroupModel = ref(false)
const textarea = ref('<p>hell<span style="background-color: #FFC5C5;">osdfsadf</span></p>')
const value = ref(false)
const search = ref('')
const activeName = ref('first')
onClickOutside(model,()=>{
  show.value = false
})
const itemClick = (param)=>{
  if(param==1){
    outerVisible.value = true;
  }
  if(param==2){
    squeue.value = true
  }
  if(param==3){
    myGroupModel.value = true
  }
  show.value = false;
}
const handleMouseOver = (param)=> {
  isHovered.value = param
}
const handleMouseOut = ()=> {
  isHovered.value = 0
}
const groupSqueue = (param)=>{
  squeue.value = false;
  groupDetail.value = true
}
const ax = ()=>{
  console.log(addBtn.value.getBoundingClientRect())
  console.log(addBtn.value.clientX)
  const dom = addBtn.value.getBoundingClientRect()
  left.value = dom.left+20
  top.value = dom.top+30
  show.value = true;
}
// onMounted(()=>{
//   document.addEventListener('click',(e)=>{
//     if(!model.value.contains(event.target)&&!addBtn.value.contains(event.target)){
//       show.value = false;
//     }
//   })
// })
</script>

<style lang="scss">
.IM-group{
  .empty{
    display:flex;
    justify-content: center;
    align-items: center;
    min-height:424px;
  }
  .el-tab-pane{
    max-height:424px;overflow:auto;
  }
  .el-tag__content{
    color: var(--0-f-64-ff, #0F64FF);
    font-weight: 500;
  }
  .dialog-footer{
    display:flex;
    justify-content: end;
  }
  .itemBox{
    .group-item{
      display:flex;
      align-items: center;
      margin-top:24px;
      cursor:pointer;
      .group-item-text{
        padding-left:12px;
        padding-right:8px;
        font-size:16px;
        color:#1A1A1A;
      }
    }
  }
  .el-textarea{
    padding:0 8px;
  }
  .error{
    color: var(--PK-, #FF0F0F);
    font-feature-settings: 'clig' off, 'liga' off;

    /* 文字/reg */
    font-family: PingFang SC;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    padding:8px;
  }
  .footer-title{
    color: var(--999999, #999);
    padding:12px 8px;
    font-feature-settings: 'clig' off, 'liga' off;

    /* 文字/reg */
    font-family: PingFang SC;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  .f0f0f0{
    border-bottom: 1px solid var(--f-0-f-0-f-0, #F0F0F0);
  }
  .model-title,.model-title span{
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    color:#333;
    line-height: 32px;
    padding:12px 8px;
    display: flex;
    justify-content: space-between;
  }
  .model-title span{
    padding:0;
  }
  .el-dialog__body{
    padding:0;
  }
  .el-dialog__headerbtn{
    font-size:24px!important;
    top:15px;
    right:10px;
  }
  .el-dialog__header{
    margin:0;
    padding:12px 16px;
  }
}
  .IM-group{
    position:relative;
  }
  .IM-edit-group{
    background:#fff;
    padding:16px;
    border-bottom: 1px solid #F0F0F0;
    display:flex;
    justify-content: space-between;
    img{
      cursor: pointer;
    }
  }
</style>