import { buildProps } from '@/utils'
import { radioPropsBase } from './radio'

export const radioButtonProps = buildProps({
  ...radioPropsBase,
  /**
   * @description native 'name' attribute
   */
  name: {
    type: String,
    default: '',
  },
})

