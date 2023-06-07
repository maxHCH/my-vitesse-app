<script setup lang="ts">
import { useTagStore } from '~/stores/filterTag'

const store = useTagStore()
const showOptions = ref(false)
const tags = store.tags
const checkedTags = computed(() => store.checkedTagList)
function checkedTag(tag: string) {
  store.checkedTag(tag)
}
</script>

<template>
  <div flex>
    <div relative inline-block text-left>
      <div>
        <button
          flex border border-gray-300 w-full justify-center items-center gap-x-1.5 bg-transparent px-2 py-1 text-sm hover:bg-gray-500 :aria-expanded="showOptions"
          aria-haspopup="true"
          @click="() => showOptions = !showOptions"
        >
          <div i-carbon:add inline-block />
          {{ $t('form.input_filter') }}
        </button>
      </div>
      <div v-show="showOptions" w-full absolute z-10 mt-1 origin-top-right bg-white dark:bg-gray-500 border-1 border-gray-300 role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div v-for="item of tags" :key="item.value" py-1 role="none">
          <button
            flex w-full justify-center gap-x-1.5 items-center text-gray-700 dark:text-white block py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-300 role="menuitem" tabindex="-1"
            @click="checkedTag(item.value)"
          >
            <div :class="item.checked ? 'i-carbon:checkbox-checked' : 'i-carbon:checkbox'" inline-block />
            {{ item.value }}
          </button>
        </div>
      </div>
    </div>
    <p v-for="item of checkedTags" :key="item.value" ml-2 border-b border="gray-300" bg-transparent px-2 py-1 text-sm>
      {{ item.value }}
    </p>
  </div>
</template>
