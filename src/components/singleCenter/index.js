import { withInstall, withNoopInstall } from '@/utils'

import Nav from './src/Nav.vue'
import NavChild from './src/NavChild.vue'
import Tab from './src/Tab.vue'
export const dssTab = withInstall(Tab,{Nav,NavChild})
export const dssNav = withNoopInstall(Nav)
export const dssNavChild = withNoopInstall(NavChild)