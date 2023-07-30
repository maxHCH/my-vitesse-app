<script setup lang="ts">
import { useCardStore } from '~/stores/card'

const showOptions = ref(false)
const store = useCardStore()
const optionsHandler = computed(() => store.options)
function toggleOptionHandler(value: string) {
  store.setCheckedOption(value)
}
</script>

<template>
  <div class="relative inline-block">
    <div>
      <button
        text-xl w-full bg-transparent px-4 hover:text-gray-300 dark:hover:text-gray-500 :aria-expanded="showOptions"
        aria-haspopup="true"
        @click="() => showOptions = !showOptions"
      >
        <div i-carbon:settings-view inline-block />
      </button>
    </div>
    <div v-show="showOptions" w-auto absolute z-10 mt-1 origin-top-right bg-white dark:bg-gray-500 border-1 border-gray-300 role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div v-for="tag of optionsHandler" :key="tag.value" py-1 role="none">
        <button
          flex w-full whitespace-nowrap items-center text-gray-700 dark:text-white py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-300 role="menuitem" tabindex="-1"
          @click="toggleOptionHandler(tag.value)"
        >
          <div :class="tag.checked ? 'i-carbon:checkbox-checked' : 'i-carbon:checkbox'" mx-1 />
          <span px-1>
            {{ tag.name }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
