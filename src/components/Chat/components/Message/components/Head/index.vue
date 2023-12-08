<template>
  <div class="IM-message-header">
    <div class="left-header">
      <el-avatar :size="40" shape="square" fit="cover" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
      <p style="font-size: 20px;font-weight:500;padding-left:12px;">张小萌</p>
    </div>
    <div class="right-header">
      <img :src="group_file" alt="" style="margin-right:12px;">
      <img :src="messageTop" alt="">
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted,  } from 'vue';
import messageTop from '@/assets/icon/message-top.svg'
import group_file from '@/assets/icon/group_file.svg'
</script>

<style lang="scss" scoped>
  .IM-message-header{
    display: flex;
    width:100%;
    height: 61px;
    padding: 0px 24px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
    border-bottom: 1px solid var(--f-0-f-0-f-0, #F0F0F0);
    cursor: pointer;
    .left-header{
      display: flex;
      align-items: center;
    }
    .el-avatar--square{
      border-radius:12px;
    }
  }
</style>