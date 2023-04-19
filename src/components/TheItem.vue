<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: '星空',
  },
})
</script>

<template>
  <div mx-auto>
    <div class="w-64 h-64 overflow-hidden">
      <img class="object-contain w-full h-full" src="../assets/018.jpg" alt="your-image-alt">
    </div>
    <div mt-2 text-lg>
      {{ name }}
    </div>
  </div>
</template>
