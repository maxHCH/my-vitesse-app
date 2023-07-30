<script setup lang="ts">
const emit = defineEmits(['openModal'])
const sort = ref(false)
function openModal() {
  emit('openModal', true)
}
</script>

<template>
  <div flex justify-between items-center>
    <TheSelect />
    <div flex items-center>
      <button icon-btn @click="openModal">
        <div i-carbon:add inline-block text-xl text-bold />
      </button>
      <TheOptions />
      <button v-if="!sort" icon-btn text-xl @click="sort = !sort">
        <div i-carbon:sort-descending inline-block />
      </button>
      <button v-else icon-btn text-xl @click="sort = !sort">
        <div i-carbon:sort-ascending inline-block />
      </button>
    </div>
  </div>
</template>
