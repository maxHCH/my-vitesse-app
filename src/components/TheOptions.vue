<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: '',
  },
  checked: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <button bg-gray-300 px-2px py-1px text-xs text-gray-700 :checked="checked" border-gray-400 hover:border-1>
    {{ name }}
  </button>
</template>
