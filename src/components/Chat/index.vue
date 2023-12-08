<script setup>
import { ref,onMounted } from 'vue'
import { NavBar } from './components/NavBar'
import { EditGroup } from './components/EditGroup'
import { Message } from './components/Message'
import { get } from "@/utils/request-al"
import { ElMessage } from 'element-plus'
import '@/assets/IM.scss'
defineOptions({
  name: 'dssChat',
})
const messageD = ref({})
onMounted(()=>{
  get('/api/getMessage').then((res) => {

    console.log(res[1].data.message)
    messageD.value = res[1].data.message
  }).catch((err) => {
    ElMessage({
      type: 'error',
      message: err.message
    })
  });
})
</script>
<template>
  <div class="app-container Chat">
    <el-container class="chat_container">
      <el-aside class="chat_nav_bar">
        <EditGroup />
        <div style="height:calc(100vh - 191px);overflow:auto;">
          <NavBar />
        </div>
        
      </el-aside>
      <el-main class="chat_main_box">
        <!-- <router-view>
        </router-view> -->
        <Message :message="messageD"/>
      </el-main>
      <!-- <EaseCallKit :EaseIM="EaseIM" :connectionName="'conn'" /> -->
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.Chat{
  ::v-deep(.el-dialog){
    border-radius: 12px;
  }
  ::v-deep(.el-button){
    border-radius: 6px;
    display: flex;
    height: 36px;
    line-height: 36px;
    padding: 8px 16px;
    gap: 10px;
    .el-button--primary{
      background: var(--0-f-64-ff, #0F64FF);
    }
  }
  .el-container{
    width:100%;
  }
}
.app-container {
  width: 100%;
  height: 100%;
  background-size: cover;
  display:flex;
  // backdrop-filter: blur(5px);

  .chat_container {
    display:flex;
    height:100%;
      flex-basis:auto;
    .chat_nav_bar {
      border-right:1px solid #999;
      background: #fff;
      flex-direction: column;
      align-items: center;
      border-radius: 5px 0 0 5px;
      width: 400px;
      overflow: auto;
    }

    .chat_main_box {
      // height: 100%;
      // overflow: hidden;
      padding: 0;
    }
  }
}
</style>
