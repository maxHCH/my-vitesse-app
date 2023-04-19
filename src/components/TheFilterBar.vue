<script setup lang="ts">
const showInput = ref(false)
</script>

<template>
  <div flex justify-between>
    <div border-b border-gray-400>
      <input
        type="text" appearance-none bg-transparent border-none w-full text-gray-300 py-1 px-2 leading-tight focus:outline-none
        :placeholder="$t('input_search')"
      >
    </div>
    <button icon-btn text-lg @click="showInput = !showInput">
      <div i-carbon-filter inline-block />
    </button>
  </div>
</template>
