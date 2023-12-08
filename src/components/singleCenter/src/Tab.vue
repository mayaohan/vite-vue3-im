<template>
  <div class="dss-nav-tab">
    <el-container>
      <el-main>
        <div class="border content">
          <el-container>
            <el-aside width="180px">
              <div class="border insert">
                <div class="imgBox top">
                  <img width="60" :src="props.header" alt="" />
                </div>
                <div class="navBox">
                  <div v-for="obj in tabArr" :key="tabArr.uid">
                    <!-- <div v-if="obj.slots.header" class="item">
                        <component :is="obj.slots.header()[0].type" v-bind="obj.slots.header()[0].props">
                          {{ obj.slots.header()[0].children }}
                        </component>
                    </div>
                    <div v-else>
                        <Nav :tab-option="obj" @item-click="setAction" :active="active"/>
                    </div> -->
                    <Nav 
                      :tab-option="obj" 
                      @item-click="setAction" 
                      :count="obj.props.count" 
                      :active="active" 
                      :label="obj.props.label"
                      :icon="obj.props.icon"
                      :active-icon="obj.props.activeIcon"
                    />
                  </div>
                </div>
                
              </div>
            </el-aside>
            <el-main style="display:flex;" class="tab-content">
              <slot />
            </el-main>
          </el-container>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted,watch,getCurrentInstance,provide,nextTick,watchEffect,renderSlot,h } from 'vue';
import { useOrderedChildren} from '@/utils'
import Nav from './Nav.vue'
defineOptions({
  name: 'dssTab',
})
const props = defineProps({
  tabActive:String,
  header:String
})
const emit = defineEmits(['update:tabActive']);
const active = ref('1')
const ps = getCurrentInstance()
const tabArr = ref([])
console.log(ps.slots)
const setAction = (param)=>{
  console.log(param)
  emit('update:tabActive',param)
  active.value = param
}
const {
      children: panes,
      addChild: registerPane,
      removeChild: unregisterPane,
    } = useOrderedChildren(getCurrentInstance(), 'ElTabPane')
const activeName = ref('a1')
const currentName = ref(
    props.modelValue || props.activeName || '0'
)
const selectData = ref([
  { title: '我的帖子', tabKey: 'a1', id: '11' },
  { title: '评论', tabKey: 'a2', id: '12' },
  { title: '我的回复', tabKey: 'a3', id: '13' },
])
const handleClick = (e)=>{

}
const visibleSetModel = (e)=>{

}
watch(props, async (v) => {
    await nextTick()
    console.log(v.tabActive)
    active.value = v.tabActive
})
const setBg = (val)=>{
  console.log(val)
  const i = tabArr.value.findIndex(obj=>obj.paneName == val)
  console.log(i)
  const elements = document.documentElement;
  elements.style.setProperty('--active-background', '0 '+(i*56)+'px');
}
watch(active,(v)=>{
  setBg(v)
})
onMounted(()=>{
  const element = document.documentElement;
  // element.style.setProperty('--active-background', '0 0px');
})
const setCurrent = (val)=>{
    console.log(val.paneName)
    tabArr.value.push(val)
    if(props.tabActive == undefined) {
      active.value = tabArr.value[0].paneName
    }else{
      active.value = props.tabActive
      setBg(val)
    }
}

provide('nav', {
    props,
    active,
    setCurrent
})

</script>

<style lang="scss">
  .dss-nav-tab{
    .tab-content{
      height:calc(100vh - 130px);
      overflow:auto;
    }
    .badge-item{
      height:56px;
      flex:1;
      display:flex;
      justify-content: end;
      align-items: center;
      padding-right:14px;
    }
    .leftContent .el-tabs__nav{
      padding:0;
    }
    .el-badge__content{
      position:inherit;
      transform: translateY(0%) translateX(0);
      border:0;
    }
    .el-main{
      padding:0;
    }
    .insertContent{
      padding:20px 4px 20px 20px;
    }
    .border{
      border-radius: 12px;
      background: #FFF;
      .title{
        text-align: center;
      }
      .banner{
        border-radius: 12px;
        background: url(<path-to-image>), lightgray 50% / cover no-repeat;
        overflow:hidden;
        .el-carousel__indicators--horizontal{
          left:15px!important;
          transform: translateX(0%);
          .el-carousel__indicator{
            &.is-active{
              opacity: 1!important;
            }
            .el-carousel__button{
              width: 24px;
              height: 4px;
              flex-shrink: 0;
              border-radius: 20px;
              opacity: 0.2;
              background: #fff;
              &:hover{
                opacity: 1;
              }
            }

          }
          .el-carousel__indicator.is-active{
            .el-carousel__button{
              opacity: 1!important;
            }
          }
        }
        .el-carousel__arrow{
          width:28px;
          height:28px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.20);
          backdrop-filter: blur(2px);
          bottom:46px;
          transform:none;
          top:inherit;
        }
        .el-carousel__arrow--left{
          right:64px!important;
          left:inherit;
        }
        .el-carousel__arrow--right{
          right:24px;
        }
      }
    }
    .content,.insert{
      height:calc(100vh - 130px);
      overflow:auto;
    }
    .insert{
      height:calc(100vh - 130px);
      background: var(---, linear-gradient(0deg, #1FA5FF 0%, #0F63FF 100%));
      border-radius: 12px 0px 0px 0px;
    }
    .imgBox{
      display: flex;
      width: 100%;
      padding: 44px 10px 24px 10px;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    .navBox{
      overflow:auto;
      background-image:url('@/assets/icon/Subtract.svg');
      background-repeat: no-repeat;
      background-position: var(--active-background);
      margin-left:10px;
      padding:10px 0;
      transition: all 0.5s ease;
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
  }
</style>
