
import { ref,defineComponent,watchEffect,onMounted } from 'vue'
import './index.scss'

export default defineComponent({
  name: 'ScrollView',
  props:{
    content:{
        type:Array,
        default:[]
    },
  },
  setup(props, { emit, slots, expose }) {
    const scrollContainer = ref(null)
    const scrollWrapper = ref(null)
    const left = ref(0)
    const rightShow = ref(false)
    const namespace = 'ddx'
    const classList = (namespace,block,blockSuffix,element,modifier)=>{
        let cls = `${namespace}-${block}`
        if (blockSuffix) {
            cls += `-${blockSuffix}`
        }
        if (element) {
            cls += `__${element}`
        }
        if (modifier) {
            cls += `--${modifier}`
        }
        return cls
    }
    const watchChange = ()=>{
      setTimeout(()=>{
        rightShow.value = scrollWrapper.value.offsetWidth > scrollContainer.value.offsetWidth && - left.value+100 < scrollWrapper.value.offsetWidth
      },200)
    }
    const leftBar = ()=>{
      if(-left.value>scrollContainer.value.offsetWidth){
        left.value += scrollContainer.value.offsetWidth
      }else{
        left.value = 0
      }
      rightShow.value = - left.value+100 < scrollWrapper.value.offsetWidth
    }
    const rightBar = ()=>{
      if(-left.value+scrollContainer.value.offsetWidth<scrollWrapper.value.offsetWidth){
        left.value -= scrollContainer.value.offsetWidth
      }else{
        left.value = -scrollWrapper.value.offsetWidth+100
      }
      rightShow.value = - left.value+100 < scrollWrapper.value.offsetWidth
    }
    onMounted(()=>{
      console.log(scrollWrapper.value.offsetWidth,scrollContainer.value.offsetWidth,left.value)
      watchChange()
      window.addEventListener('resize', () => {
        watchChange()
      });
    })
    const viewContent = ()=>{
        
    }
    return {
        classList,
        namespace,
        rightBar,
        leftBar,
        watchChange,
        viewContent,
        scrollContainer,
        scrollWrapper,
        left,
        rightShow
    }
  },
  render() {
    return (
      <div className={this.classList(this.namespace,'scroll-view')} >
       <div class="totalBox">
          {this.left!=0&&<div class="leftBtn" onClick={this.leftBar}><el-icon><ArrowLeftBold /></el-icon></div>}

          <div class="scroll-container" ref="scrollContainer">
            <transition name="left-animation">
              <div class="scroll-wrapper" ref="scrollWrapper" style={{'left':this.left + 'px'}}>
                {this.$slots.default?.()}
              </div>
            </transition>
          </div>

          {this.rightShow&&<div class="rightBtn" onClick={this.rightBar}><el-icon><ArrowRightBold /></el-icon></div>}
        </div>
      </div>
    );
  },
})