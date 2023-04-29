<script setup lang="ts">
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },

})
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <!-- Modal container -->
    <div class="bg-white rounded-lg overflow-hidden">
      <!-- Modal header -->
      <div class="px-6 py-4 bg-gray-100">
        <h2 class="text-lg font-bold text-gray-700">
          {{ title }}
        </h2>
      </div>
      <!-- Modal content -->
      <div class="px-6 py-4">
        <p class="text-gray-700">
          Modal content goes here.
        </p>
      </div>
      <!-- Modal footer -->
      <div class="px-6 py-4 bg-gray-100 flex justify-end">
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Close
        </button>
      </div>
    </div>
  </div>
</template>
