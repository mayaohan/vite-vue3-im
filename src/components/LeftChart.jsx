
import { ref,defineComponent,watchEffect } from 'vue'

export default defineComponent({
  name: 'LeftChart',
  props:{
    content:'客服表达语言',
    type:{
        default:'text',
        type:String
    },
    user:{
        type:Object,
        default:()=>({avatar:'//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg'})
    }
  },
  setup(props, { emit, slots, expose }) {
    watchEffect(()=>{
    })
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
    const template = ()=>{
        const card = 'leftChart_card'
        switch (props.type) {
            case 'card':
                const itemList = props.content.data.map((obj)=>{
                    return (
                        <div className={classList(namespace,card,'item')}>
                            <p onClick={e=>"do right string"}>
                                <span>{obj.title}</span>
                                <Icon type="chevron-right" />
                            </p>
                            <Divider />
                        </div>
                    )
                })
                return(
                    <div className={classList(namespace,card,'left')} >
                        <Avatar src={props.user.avatar} size="sm" />
                        <Bubble type={props.type}>
                            <div className={classList(namespace,card,'flex')}>
                                <div className={classList(namespace,card,'flex','column')}>
                                    <div className={classList(namespace,card,'flex','column','top')}>
                                        <p className="top">猜你</p>
                                        <p className="bottom">想问</p>
                                    </div>
                                    <div className={classList(namespace,card,'flex','column','bottom')}>
                                        <icon type="refresh" />
                                        <p className="button">换一换</p>
                                    </div>
                                </div>
                                <div className="right">
                                    {itemList}
                                </div>
                            </div>
                        </Bubble>
                    </div>
                )
                break;
            default:
                return (
                    <div className={this.classList(namespace,card)} >
                        <Avatar src={props.user.avatar} size="sm" />
                        <Bubble type={props.type}>
                            <p>{this.$props.content}</p>
                        </Bubble>
                        <div className={this.classList(namespace,card,false,'right','flex')}>
                            <img 
                                src="http://zan.png" 
                                onClick={e=>opinionApi(this.$props.content.id,true)}
                            />
                            <img 
                                src="http://cai.png" 
                                onClick={e=>opinionApi(this.$props.content.id,false)}
                            />
                        </div>
                    </div>
                )
                break;
        }
    }
    return {
        template,
        classList
    }
  },
  render() {
    return (
      <div className="left-chart" >
        {this.template()}
      </div>
    );
  },
})