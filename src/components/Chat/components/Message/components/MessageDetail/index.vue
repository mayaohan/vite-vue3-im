<template>
  <div>
    <el-main class="chat_message_main">
      <el-scrollbar class="main_container" ref="messageContainer">
          <div class="innerRef">
              <div v-show="isMoreHistoryMsg" class="chat_message_tips">
                  <div
                      v-show="
                          messageData?.length &&
                          messageData[0].type !== 'inform'
                      "
                      class="load_more_msg"
                  >
                      <el-link
                          v-show="!loadingHistoryMsg"
                          :disabled="!isMoreHistoryMsg"
                          :underline="false"
                          @click="fechHistoryMessage()()"
                      >
                          加载更多
                      </el-link>
                      <el-link v-show="loadingHistoryMsg" disabled
                          >消息加载中...</el-link
                      >
                  </div>
              </div>
              <MessageList
                  :nowPickInfo="props.message.nowPickInfo"
                  :messageData="props.message.messageData"
                  @scrollMessageList="scrollMessageList"
                  @reEditMessage="reEditMessage"
                  @messageQuote="messageQuote"
              />
          </div>
      </el-scrollbar>
  </el-main>
  <el-footer class="chat_message_inputbar">
      <InputBox ref="inputBox" :nowPickInfo="props.message.nowPickInfo" />
  </el-footer>
  <el-drawer
      v-model="drawer"
      :show-close="false"
      :close-on-click-modal="true"
      direction="rtl"
      :modal="true"
      size="460px"
  >
      111
  </el-drawer>
  </div>
</template>

<script setup>
const props = defineProps({
  message:Object
})
import { ref, reactive, onMounted,nextTick,watch } from 'vue';
import InputBox from '../inputBox/index.vue'
import MessageList from '../MessageList/index.vue'
const nowPickInfo = ref({})
const messageData = ref(props.message)
watch(()=>props.message,(newValue)=>{
  messageData.value = newValue
})
/* 消息相关 */
const loadingHistoryMsg = ref(false) //是否正在加载中
const isMoreHistoryMsg = ref(true) //加载文案展示为加载更多还是已无更多。
const notScrollBottom = ref(false) //是否滚动置底
//消息重新编辑
const inputBox = ref(null)
const reEditMessage = (msg) => (inputBox.value.textContent = msg)
//消息引用
const messageQuote = (msg) => inputBox.value.handleQuoteMessage(msg)
const drawer = ref(false) //抽屉显隐
//控制消息滚动
const scrollMessageList = (direction) => {
    console.log('>>>>>scrollMessageList', direction)
    //direction滚动方向 bottom向下滚动 normal向上滚动
    nextTick(() => {
        const messageNodeList = document.querySelectorAll('.messageList_box')
        const fistMsgElement = messageNodeList[0]
        const lastMsgElement = messageNodeList[messageNodeList.length - 1]
        //直接滚动置底
        if (direction === 'bottom') {
            console.log('>>>滚动置底')
            lastMsgElement && lastMsgElement.scrollIntoView(false)
        }
        //保持当前的消息位于当前可视窗口
        if (direction === 'normal') {
            fistMsgElement.scrollIntoView(true)
        }
    })
}
watch(
    () => messageData,
    (newMsg, oldMsg) => {
        nextTick(() => {
            console.log('>>>>>监听到消息变化', notScrollBottom.value)
            //判断拉取漫游导致的消息变化不需要执行滚动置底
            if (notScrollBottom.value) {
                return
            } else {
                setTimeout(() => {
                    scrollMessageList('bottom')
                }, 300)
            }
        })
    },
    {
        deep: true,
        immediate: true
    }
)
onMounted(()=>{

})
</script>

<style lang="scss" scoped>
  .chat_message_inputbar{
    width:calc(100% - 48px);
    background:#EBF2FF99;
    border-radius: 12px;
    margin:12px 24px;
  }
</style>