import * as components from './components'; // 导入所有组件

// const MyPlugin = {
  const install = (app)=> {
    // 全局注册所有组件
    Object.values(components.default).forEach((component) => {
      console.log(component)
      app.component(component.name, component);
    });
  }
// };
const plum = {
  install,
  version:'1.1.1'
}
export default plum;