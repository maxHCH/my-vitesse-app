<script setup lang="ts">
import { useCardStore } from '~/stores/card'

const store = useCardStore()
const showOptions = ref(false)
</script>

<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        inline-flex border border-gray-300 w-full justify-center gap-x-1.5 bg-transparent px-2 py-1 text-sm hover:bg-gray-50 :aria-expanded="showOptions"
        aria-haspopup="true"
        @click="() => showOptions = !showOptions"
      >
        Options
        <div i-carbon:chevron-sort-down inline-block />
      </button>
    </div>
    <div v-show="showOptions" absolute z-10 mt-1 origin-top-right bg-white border-1 border-gray-300 role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div py-1 role="none">
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        <button id="menu-item-0" href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1">
          Account settings
        </button>
        <button id="menu-item-1" href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1">
          Support
        </button>
        <button id="menu-item-2" href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1">
          License
        </button>
      </div>
    </div>
  </div>
</template>
