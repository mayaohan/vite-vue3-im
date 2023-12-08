<template>
  <div
    ref="wrap"
    class="atwho-wrap"
    @compositionstart="handleCompositionStart"
    @compositionend="handleCompositionEnd"
    @input="handleInput()"
    @keydown.capture="handleKeyDown"
  >
    <div
      v-if="atwho"
      class="atwho-panel"
      :style="style"
    >
      <div class="atwho-inner">
        <div class="atwho-view">
          <ul class="atwho-ul">
            
            <template
                v-for="(item, index) in atwho.list"
                :key="index"
            >
              <li
                v-if="itemName(item)!='所有人'"
                class="atwho-li"
                :class="isCur(index) && 'atwho-cur'"
                :data-index="index"
                @mouseenter="handleItemHover"
                @click="handleItemClick"
              >
                <slot
                  name="item"
                  :item="item"
                >
                  <span v-text="itemName(item)" />
                </slot>
              </li>
              <li
                v-else
                class="atwho-li"
                :data-index="index"
                :class="isCur(index) && 'atwho-cur'"
                @mouseenter="handleItemHover"
                @click="handleItemClick"
                style="height:80px;"
              >
                <slot
                  name="header"
                  :item="atwho.list.find(obj=>itemName(obj)=='所有人')"
                >
                </slot>
                <!-- <slot
                  name="item"
                  :item="item"
                >
                  <span v-text="itemName(item)" />
                </slot> -->
              </li>
            </template>
            
          </ul>
        </div>
      </div>
    </div>
    <span
      v-show="false"
      ref="embeddedItem"
    >
      <slot
        name="embeddedItem"
        :current="currentItem"
      />
    </span>
    <slot />
  </div>
</template>

<style lang="scss" src="./At.scss"></style>
