import { defineComponent, ref } from 'vue';

export default defineComponent({
  name:'dssDemoFor',
  setup() {
    // 定义响应式变量
    const count = ref(0);

    // 定义一个方法
    const increment = ()=> {
      count.value++;
    }

    return () => (
      <div>
        <p>Count: {count.value}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  },
});