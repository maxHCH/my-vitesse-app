<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: '嚴龍',
  },
})
</script>

<template>
  <span bg-gray-200 px-2px py-1px text-xs text-gray-700>
    {{ name }}
  </span>
</template>
