<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div>
    <h2 text-xl mb-6>
      {{ $t('title') }}
    </h2>
    <div grid gap-4 grid-cols-4>
      <TheItem />
    </div>
  </div>
</template>
