<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div>
    <h2 text-3xl>
      {{ $t('title') }}
    </h2>
    <TheFilterBar mt-4 mb-6 />
    <div grid gap-4 md:grid-cols-4 grid-cols-3>
      <TheItem v-for="i of 12" :key="i" />
    </div>
    <!-- <TheModal /> -->
  </div>
</template>
