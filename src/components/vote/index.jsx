import { defineComponent,ref,onMounted } from 'vue';
import './index.scss'

const vote = defineComponent({
  name: 'vote',
  props: {
    // type:{
    //     default:false,
    //     type:Boolean
    // }
  },
  setup(props) {
    const prise = ref(0)
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
    const block = async ()=>{
        prise.value = await getPrise({
            type:'xx',
            id:'xx',
            userId:'xxx'
        })?.data
    }
    const voteTo = async (param)=>{
        if(prise.value.type||prise.value.inProgress) return
        await sendPrise({
            type:'xx',
            id:'xx',
            userId:'xxx',
            value:param
        })
        block()
    }
    onMounted(()=>{
        block()
    })
    /**
     * 接口返回值
     * prise{
     *      type Boolean
     *      已结束或进行中
     *      percentageHelp String
     *      真理百分比
     *      percentageStep String
     *      谬论百分比
     *      inProgress Boolean
     *      自己是否投过票
     *      data Boolean
     *      本人选择了真理或谬论
     *      persions
     *      参与人数
     * }
     */
    return {
        namespace,
        classList,
        prise,
        voteTo,
        block
    };
  },
  render() {
    return <div className={this.classList(this.namespace,'vote')}>
        <div className={this.classList(this.namespace,'vote','title')}>
            <el-icon color='#409eff'><Histogram /></el-icon>
            <span className={this.classList(this.namespace,'vote','title','PK')}>PK</span>
            <span className={this.classList(this.namespace,'vote','title','state')}>{this.prise.type?'已结束':'进行中'}</span>
        </div>
        <div className={this.classList(this.namespace,'vote','content')}>
            <p>地球不爆炸，我们不放假</p>
            <div className={this.classList(this.namespace,'vote','content','parent')}>
                <div 
                    className="left" 
                    style={{'width':this.prise.percentageHelp}} 
                    onClick={()=>this.voteTo(true)}
                >
                    {this.prise.inProgress&&<p className="up">{this.prise.percentageHelp}</p>}
                    <p className="down">这是真理</p>
                </div>
                <div 
                    className="right" 
                    style={{'width':this.prise.percentageStep}} 
                    onClick={()=>this.voteTo(false)}
                >
                    {this.prise.inProgress&&<p className="up">{this.prise.percentageStep}</p>}
                    <p className="down">这是谬论</p>
                </div>
                <img 
                    src="https://pk.png" 
                    style={{
                        'position':'absolute',
                        'top':0,
                        'left':this.prise.percentageHelp
                    }}
                />
            </div>
            {
                (()=>{
                    if(!this.prise.type){
                        return (
                            <div 
                                className={this.classList(this.namespace,'vote','footer')} 
                                style={{'justify-content':this.prise.inProgress?'space-between':'center'}}
                            >
                                {this.prise.inProgress&&<span className="left">已选择"{this.prise.data?'这是真理':'这事谬论'}"</span>}
                                {this.prise.inProgress&&<span className="right">本次PK已有{this.prise.persions}人参与</span>}
                                {!this.prise.inProgress&&<span>点击上方按钮，选择你的观点</span>}
                            </div>
                        )
                    }else{
                        return (
                            <div 
                                className={this.classList(this.namespace,'vote','footer')} 
                                style={{'justify-content':this.prise.inProgress?'space-between':'flex-start'}}
                            >
                                {this.prise.inProgress&&<span className="left">已选择"{this.prise.data?'这是真理':'这事谬论'}"</span>}
                                <span className="right">本次PK已有{this.prise.persions}人参与</span>
                            </div>
                        )
                    }
                })()
            }
            
        </div>
    </div>;
  },
});

export default vote;
