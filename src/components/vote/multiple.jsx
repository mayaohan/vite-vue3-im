import { defineComponent,onMounted,ref } from 'vue';

const Multiple = defineComponent({
  name: 'Multiple',
  props: {
    
  },
  setup(props) {
    const prise = ref(0)
    const block = async ()=>{
        prise.value = await getPrise({
            type:'xx',
            id:'xx',
            userId:'xxx'
        })?.data
    }
    onMounted(()=>{
        block()
    })
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
    const chose = (def,index)=>{
        if(prise.value.chooseType){
            if(def) return
            prise.value.data = prise.value.data.map(obj=>{
                return {
                    isChose:false,
                    ...obj
                }
            })
            prise.value.data[index].isChose = !def;
        }else{
            prise.value.data[index].isChose = def;
        }
    }
    const submit = ()=>{}
    return {
        chose,
        prise,
        voteTo,
        block,
        submit
    };
  },
  render() {
    const ax = ()=>{
        return this.prise.data.map((obj,idx)=>{
            return (
                <div className={this.classList(this.namespace,'multiple','content')}>
                    {
                        obj.isChose?<div className="chose multiple_content" onClick={()=>this.chose(true,idx)}>
                            <span>{obj.text}</span>
                            <span>
                                <el-icon><Select /></el-icon>
                            </span>
                        </div>:
                        <div className="no_chose multiple_content" onClick={()=>this.chose(false,idx)}>
                            <span>{obj.text}</span>
                            <span>
                                <el-icon><Select /></el-icon>
                            </span>
                        </div>
                    }
                </div>
            )
        })
    }
    return <div className={this.classList(this.namespace,'multiple')}>
        <div className={this.classList(this.namespace,'multiple','title')}>
            <el-icon color='#409eff'><Histogram /></el-icon>
            <span className={this.classList(this.namespace,'multiple','title','PK')}>投票</span>
            <span className={this.classList(this.namespace,'multiple','title','state')}>{this.prise.type?'已结束':'进行中'}</span>
        </div>
        <p className="text-center">加量不加价</p>
        { ax() }
        {this.prise.status&&this.prise.chooseType&&<el-button onClick={submit}>提交结果</el-button>}
        {((!this.prise.status)||this.prise.voteStatus)&&<div className={this.classList(this.namespace,'multiple','footer')}>
            {this.prise.voteStatus&&<p>已选择：{obj.chooseItem}</p>}
            <p>本次投票已有{obj.persions}人参与</p>
        </div>}
    </div>;
  },
});

export default Multiple;
