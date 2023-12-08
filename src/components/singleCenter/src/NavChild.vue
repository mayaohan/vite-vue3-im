<template>
<!-- v-if="shouldBeRender" -->
  <div
    class="dss-nav-content"
    v-if="active"
    :id="`pane-${paneName}`"
    role="tabpanel"
    :aria-hidden="!active"
    :aria-labelledby="`tab-${paneName}`"
    style="width:100%"
  >
    <slot />
  </div>
</template>
<style lang="scss">
  .dds-nav-content{
    // flex: 1;
    flex-basis: auto;
    overflow: auto;
    width:100%;
  }
</style>
<script setup>
import {
  computed,
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  useSlots,
  watch,
} from 'vue'
import { eagerComputed } from '@vueuse/core'

defineOptions({
  name: 'dssNavChild',
})
const props = defineProps({
  name:String,
  label:String,
  count:Number,
  icon:String,
  activeIcon:String,
})

const instance = getCurrentInstance()
const slots = useSlots()

const tabsRoot = inject('nav')

const active = eagerComputed(
  () => tabsRoot.active.value === props.name
)
const loaded = ref(active.value)
const paneName = computed(() => props.name)
const shouldBeRender = eagerComputed(
  () => !props.lazy || loaded.value || active.value
)

watch(active, (val) => {
  if (val) loaded.value = true
})

const pane = reactive({
  uid: instance.uid,
  slots,
  props,
  paneName,
  active,
})

onMounted(() => {
  tabsRoot.setCurrent(pane)
})

onUnmounted(() => {
  // tabsRoot.unregisterPane(pane.uid)
})
</script>
