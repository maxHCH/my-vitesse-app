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
        text-xl w-full bg-transparent px-2 hover:text-gray-50 :aria-expanded="showOptions"
        aria-haspopup="true"
        @click="() => showOptions = !showOptions"
      >
        <div i-carbon:settings-view inline-block />
      </button>
    </div>
    <div v-show="showOptions" w-full absolute top-6 z-10 mt-1 origin-top-right bg-white dark:bg-gray-500 border-1 border-gray-300 role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div py-1 role="none">
        <button v-for="tag of optionsHandler" :key="tag.value" :class="{ 'bg-gray-300': tag.checked }" text-gray-700 block w-full py-1 text-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-300 role="menuitem" tabindex="-1" @click="toggleOptionHandler(tag.value)">
          {{ tag.name }}
        </button>
      </div>
    </div>
  </div>
</template>
