<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  checked: {
    type: Boolean,
    required: true,
  },
})
const emits = defineEmits(['update:checked'])
function taggleOptionHandler() {
  emits('update:checked', !props.checked)
}
</script>

<template>
  <button :class="checked && 'bg-gray-300'" px-1 text-xs text-gray-700 :checked="checked" flex justify-between content-center whitespace-nowrap @click="taggleOptionHandler">
    <span>{{ name }}</span>
  </button>
</template>
