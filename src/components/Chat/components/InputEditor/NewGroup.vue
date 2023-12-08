
<template>
  <div class="NewGroup">
    <div style="padding:0 8px;">
      <Toolbar
        style="display:none;"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="width:435px;height:80px; overflow-y: hidden;border: 1px solid #ccc;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
  </div>
</template>
<script>
import '@wangeditor/editor/dist/css/style.css'; // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted,getCurrentInstance,watch,reactive } from 'vue'
import { Editor,Toolbar } from '@wangeditor/editor-for-vue'
import { Boot } from '@wangeditor/editor'
import UploadFile from './editor/UploadFile'

const callback = ()=>{
  // console.log('来个上传文件包')
}
export default {
  name:'DdsEditor',
  components: { Editor,Toolbar },
  props: {
    // name: {
    //   type:String,
    //   require:true
    // },
  },
  emits:{
    getValue:{
      require:true
    },
    change:{
      require:true
    }
  },
  created(){

  },
  setup(props,context) {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()
    const instance = getCurrentInstance()
    const { $ipc } = instance.appContext.config.globalProperties
    const mode = ref('simple')
    // 内容 HTML
    const valueHtml = ref('<p>hell<span style="background-color: #FFC5C5;">osdfsadfosdfsadfosdfsadfosdfsadf</span></p>')

    const onFocus = (e)=>{
      console.log(e,editorRef)
      e.hidePanelOrModal();
    }
    watch(valueHtml, (newValue, oldValue) => {
      console.log('watch 已触发', newValue)
      context.emit('change',newValue)
    })
    // 模拟 ajax 异步获取内容
    onMounted(() => {
      
      context.emit('getValue',{
        container:editorRef,
        value:valueHtml.value
      })
    })

    const toolbarConfig = {
      // insertKeys: {
      //   index: 0,
      //   keys: ['menu1'], // show menu in toolbar
      // }
    }
    const editorConfig = reactive({
      placeholder: '请输入内容...' ,
      maxLength:25,
      MENU_CONF:{
      }
    })
    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })

    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    return {
      editorRef,
      valueHtml,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
      callback,
      onFocus,
    };
  }
}
</script>

<style scoped lang="scss">
.NewGroup{
  ::v-deep(.w-e-bar){
    display: none!important;
  }
  .w-e-bar-show{
    display: none!important;
  }
}
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}
</style>
