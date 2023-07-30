<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: '',
  },

})
const emit = defineEmits(['openModal'])
function openModal() {
  emit('openModal', false)
}
</script>

<template>
  <div fixed inset-0 z-50 bg="#333" gray-700 dark:gray-200>
    <div text-left w-full h-full>
      <div px-6 py-4 flex justify-between>
        <h2 text-xl font-bold text-gray-700>
          {{ $t('form.new_title') }}
        </h2>
        <button icon-btn @click="openModal">
          <div i-carbon:close inline-block text-xl text-bold />
        </button>
      </div>
      <div px-6 pb-4>
        <div flex>
          <label for="planting_time" block text-sm font-semibold leading-6 text-gray-900>{{ $t('form.planting_time') }}</label>
          <input id="planting_time" type="text" name="planting_time" autocomplete="text" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6>
        </div>
        <p text-gray-700>
          {{ $t('form.tag') }}
        </p>
      </div>
    </div>
  </div>
</template>
