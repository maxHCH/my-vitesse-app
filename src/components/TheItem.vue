<script setup lang="ts">
import { useCardStore } from '~/stores/card'

defineProps({
  name: {
    type: String,
    default: '星空',
  },
})
const store = useCardStore()
const showTagsHandler = computed(() => store.options.filter(item => item.value === 'tags' && item.checked).length)
const showDateHandler = computed(() => store.options.filter(item => item.value === 'date' && item.checked).length)
</script>

<template>
  <div mx-auto border="1px gray-300" pb-2 w-full>
    <div h-15 max-w-full md:h-25 overflow-hidden>
      <img object="cover center" w-full h-full src="../assets/018.jpg" alt="your-image-alt">
    </div>
    <div px-2 text-left>
      <div md:text-lg mt-1>
        {{ name }}
      </div>
      <TheTag v-for="i of 4" v-show="showTagsHandler" :key="i" mr-1 />
      <p v-show="showDateHandler" text-xs mt-1>
        2023.05.12
      </p>
    </div>
  </div>
</template>
