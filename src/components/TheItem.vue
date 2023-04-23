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
    <div w-25 h-15 md:w-40 md:h-25 overflow-hidden>
      <img object="cover center" w-full h-full src="../assets/018.jpg" alt="your-image-alt">
    </div>
    <div mt-2 md:text-lg>
      {{ name }}
    </div>
  </div>
</template>
