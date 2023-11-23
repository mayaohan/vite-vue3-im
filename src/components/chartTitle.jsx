import { defineComponent } from 'vue';

const Charttitle = defineComponent({
  name: 'Charttitle',
  props: {
    
  },
  setup(props) {
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
    const isPhtot = ref(true)
    const pushToApp = (command)=>{
        //调用原生app并将参数传过去
        //...
    }
    return {
        classList,
        namespace,
        pushToApp
    };
  },
    render() {
        return this.isPhtot?<div 
                className={this.classList(namespace,'Charttitle','flex')}
            >
                <el-icon><ArrowLeft /></el-icon>
                <span 
                    className={this.classList(namespace,'Charttitle','flex','title')}
                >智能客服</span>
                <el-dropdown command={this.pushToApp}>
                    {{
                        default: () => <el-icon><MoreFilled /></el-icon>,
                        dropdown: () => <el-dropdown-menu>
                                <el-dropdown-item command="a">
                                    <img src="https://photo.png" alt=""/>
                                    <span>人工客服</span>
                                </el-dropdown-item>
                                <el-dropdown-item command="b">
                                    <img src="https://leaveMessage.png" alt=""/>
                                    <span>留言平台</span>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                    }}
                </el-dropdown>
            </div>:
            <div 
                className={this.classList(namespace,'Charttitle','flex')}
            >
                <span 
                    className={this.classList(namespace,'Charttitle','flex','title_web')}
                >智能客服</span>
                <span 
                    className={this.classList(namespace,'Charttitle','flex','content')}
                >客服电话： 400-060-3968</span>
                <span>
                    <a 
                        href="javascript:void(0)"
                        className={this.classList(namespace,'Charttitle','flex','link')}
                        onClick={e=>this.$router.push('/xxx/xx')}
                    >去留言</a>
                    <el-icon><close /></el-icon>
                </span>
            </div>
    },
});

export default Charttitle;
