<script setup lang="ts">
const sort = ref(false)
</script>

<template>
  <div flex justify-between items-center>
    <TheSelect />
    <div flex items-center>
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
