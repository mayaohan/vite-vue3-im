
import { ref,defineComponent,watchEffect } from 'vue'

export default defineComponent({
  name: 'Notice',
  props:{
    content:'公告内容',
    url:'https://www.taobao.com/',
    onLinkClick:{handleLinkClick},
    onClose:{handleClose}
  },
  setup(props, { emit, slots, expose }) {
    watchEffect(()=>{
      console.log(slots)
      // console.log(count.value)
    })
    return {
    }
  },
  render() {
    return (
      <div className="notice" >
        <p className="notice">
          <a 
            href={this.$props.url} 
            onClick={this.$props.onLinkClick}
          >
            <span>
              <Icon type="bullhorn" />
            </span>
            <span>{this.$props.content}</span>
          </a>
          <span 
            className="right" 
            onClick={this.$props.onClose}
          >
            <Icon type="close" />
          </span>
        </p>
        {/* <p>{this.$slots.default?.()}</p> */}
      </div>
    );
  },
})