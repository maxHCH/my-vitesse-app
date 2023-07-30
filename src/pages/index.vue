<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
const modalState = ref(false)
function openModal(state: false) {
  modalState.value = state
}
</script>

<template>
  <div>
    <h2 text-3xl>
      {{ $t('title') }}
    </h2>
    <TheFilterBar mt-4 mb-6 @open-modal="openModal" />
    <div grid gap-4 md:grid-cols-4 grid-cols-3>
      <TheItem v-for="i of 12" :key="i" />
    </div>
    <!-- <TheModal /> -->
    <ThePlantDetail v-if="modalState" @open-modal="openModal" />
  </div>
</template>
