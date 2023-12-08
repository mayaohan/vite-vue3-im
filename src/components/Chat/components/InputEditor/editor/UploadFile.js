// import { IDomEditor, IModalMenu, SlateNode } from '@wangeditor/editor'

export default class UploadFile {
  constructor(props) {
    this.title = 'menuDemo'
    // this.iconSvg = '<svg >...</svg>'
    this.tag = 'button'
    this.showModal = true
    this.modalWidth = 300
    this.props = props
  //   super()
  }
  getValue(editor) {
    return ''
  }
  isActive(editor) {
    return false // or true
  }
  isDisabled(editor) {
    return false // or true
  }
  exec(editor, value) {
      this.props.cb&&this.props.cb()
      console.log(this.props)
    // do nothing 什么都不用做
  }
  // getModalPositionNode(editor) {
  //   return '<div></div>' // modal 依据选区定位
  // }
  // getModalContentElem(editor) {
  //     return null
  //   // PS：也可以把 $container 缓存下来，这样不用每次重复创建、重复绑定事件，优化性能
  // }
}
