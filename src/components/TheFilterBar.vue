<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Options {
  name: string
  value: string
  checked: boolean
}
const { t } = useI18n()
const sort = ref(false)
const showTips = ref(false)
const options: Options[] = reactive([
  {
    name: t('options.date'),
    value: 'date',
    checked: false,
  },
  {
    name: t('options.tags'),
    value: 'tags',
    checked: false,
  },
])
</script>

<template>
  <div flex justify-between>
    <div border-b border-gray-400>
      <input
        type="text" appearance-none bg-transparent border-none w-full text-gray-300 py-1 px-2 leading-tight focus:outline-none
        :placeholder="$t('input_search')"
      >
    </div>
    <div flex>
      <div relative>
        <button icon-btn text-xl mr-2 @click="showTips = !showTips">
          <div i-carbon:settings-view inline-block />
        </button>
        <div v-if="showTips" absolute px-2 py-1 border-1 border-gray-300 bg-white>
          <TheOptions v-for="item of options" :key="item.value" v-model:checked="item.checked" my-1 :name="item.name" />
        </div>
      </div>
      <button v-if="!sort" icon-btn text-xl @click="sort = !sort">
        <div i-carbon:sort-descending inline-block />
      </button>
      <button v-else icon-btn text-xl @click="sort = !sort">
        <div i-carbon:sort-ascending inline-block />
      </button>
    </div>
  </div>
</template>
