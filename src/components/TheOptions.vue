<script setup lang="ts">
import { useCardStore } from '~/stores/card'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  checked: {
    type: Boolean,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
})
const store = useCardStore()
function taggleOptionHandler() {
  store.setCheckedOption(props.value)
}
</script>

<template>
  <button :class="checked && 'bg-gray-200'" px-1 text-xs text-gray-700 :checked="checked" flex justify-between content-center whitespace-nowrap @click="taggleOptionHandler">
    <span>{{ name }}</span>
  </button>
</template>
