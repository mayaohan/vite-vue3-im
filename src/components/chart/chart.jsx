import { defineComponent,ref } from 'vue';

const Chart = defineComponent({
  name: 'Chart',
  props: {
    messages,
    defaultQuickReplies,
    handleQuickReplyClick
  },
  setup(props, { emit, slots, expose }) {
    const initialMessages = ref([
        {
          type: 'text',
          content: { text: '主人好，我是智能助理，你的贴心小助手~' },
          user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
        },
        {
          type: 'image',
          content: {
            picUrl: '//img.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png',
          },
        },
    ]);
    const appendMsg = ()=>{

    }
    const handleSend = (type,message)=>{
        
    }
    const setTyping = ()=>{
        
    }
    const handleQuickReplyClick = (item)=> {
        handleSend('text', item.name);
    }
    return {
        initialMessages,
        appendMsg,
        handleSend,
        setTyping,
        handleQuickReplyClick
    };
  },
  render() {
    const {messages,defaultQuickReplies,handleQuickReplyClick} = this.$props
    const {handleSend} = this
    const Chat = this.initialMessages.map((obj)=>{
        // return ...
    })
    return <Chat
        navbar={{ title: '智能助理' }}
        messages={messages}
        quickReplies={defaultQuickReplies}
        onQuickReplyClick={handleQuickReplyClick}
        onSend={handleSend}
    />;
  },
});

export default Chart;
