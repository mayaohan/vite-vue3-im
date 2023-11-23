import { defineComponent,ref } from 'vue';

const Index = defineComponent({
  name: 'chartExport',
  emit:['sendSounds'],
  props: {
    
  },
  setup(props, { emit, slots, expose }) {
    const isWrite = ref(true)
    const namespace = 'ddx'
    const send = ref(true)
    const sayString = ref(false)
    const longTime = ref(0)
    const timer = ref(null)
    const message = ref('')
    const soundFile = ref(null)
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
    const startY = ref(0)
    const endY = ref(0)
    const handleTouchStart = (e)=> {
        timer.value = setInterval(()=>{
            longTime.value++
        },1000)
        sayString.value = true
        startY.value = e.touches[0].clientY;
    }
    const handleTouchMove = (e)=> {
        endY.value = e.touches[0].clientY;
    }
    const handleTouchEnd = (e)=> {
        clearInterval(timer.value)
        sayString.value = false
        if (startY.value - endY.value > 50) { // 这里的 50 是一个阈值，可以根据实际情况调整
            this.handleSwipeUp();
        }else{
            // 语音时长
            console.log(longTime.value)
            const param = {
                type:isWrite.value?'text':'sounds',
                time:longTime.value,
                text:message.value,
                file:soundFile
            }
            emit('sendSounds',param)
        }
    }
    const handleSwipeUp = (e)=> {
        send.value = false;
        startY.value = 0;
        endY.value = 0;
        console.log('上滑事件被触发');
    }
    const options = ref([])
    const loading = ref(false)
    const remoteMethod = (query)=>{
        if (query) {
            loading.value = true
            // let des = await xxx()
            loading.value = false
            // dex.map(e=>({xxx:e.xxx,ooo:e.ooo}))
            // options.value = dex
        } else {
            options.value = []
        }
    }
    return {
        isWrite,
        classList,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleSwipeUp,
        namespace,
        send,
        sayString,
        message,
        remoteMethod,
        options,
        loading
    };
  },
  render() {
    console.log(this.isWrite)
    return (
        <>
            <div 
                className={this.classList(namespace,'chart')}
            >
                <img src={this.isWrite?'https://xxx':'http:s//ooo'} />
                <div className="export">
                    {
                        this.isWrite?
                        <div className={
                            this.classList(namespace,'chart',false,'write')}
                        >
                            {/* <el-input 
                                value={this.message} 
                                onInput={event => this.message = event.target.value}
                            /> */}
                            <el-select
                                value={this.message} 
                                onInput={event => this.message = event.target.value}
                                filterable
                                remote
                                placeholder="Please enter a keyword"
                                remote-method={this.remoteMethod}
                                loading={this.loading}
                            >
                                {
                                    this.options.map((item)=>{
                                        return <el-option
                                            key={item.value}
                                            label={item.label}
                                            value={item.value}
                                        />
                                    })
                                }
                            </el-select>
                            <el-button 
                                onClick={this.handleTouchEnd}
                                className={this.classList(namespace,'chart',false,'write','send')}
                            >发送</el-button>
                        </div>:
                        <el-button 
                            className={this.classList(namespace,'chart',false,'say')}
                            onTouchstart={this.handleTouchStart}
                            onTouchmove={this.handleTouchMove}
                            onTouchend={this.handleTouchEnd}
                        >按住说话，松开发送</el-button>
                    }
                </div>
                {
                    this.sayString&&
                    <img 
                        className={this.classList(namespace,'chart',false,'say','position')} 
                        src={this.send?'https://xxx':'http:s//ooo'} 
                    />
                }
            </div>
        </>
    )
  },
});

export default Index;
