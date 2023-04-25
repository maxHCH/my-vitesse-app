<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: '星空',
  },
})
</script>

<template>
  <div mx-auto border="1px gray-300" pb-2>
    <div max-w-30 h-15 md:max-w-40 md:h-25 overflow-hidden>
      <img object="cover center" w-full h-full src="../assets/018.jpg" alt="your-image-alt">
    </div>
    <div px-2>
      <div md:text-lg>
        {{ name }}
      </div>
      <div text-left>
        <TheTag v-for="i of 4" :key="i" mr-1 />
      </div>
    </div>
  </div>
</template>
