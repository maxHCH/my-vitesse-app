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
    <div w-20 h-20 overflow-hidden border="2px" :border-color="isDark ? 'gray-300' : 'gray-600'">
      <img src="../assets/018.jpg" :alt="name" w-full h-full object-cover>
    </div>
    <div mt-2 text-lg>
      {{ name }}
    </div>
  </div>
</template>
