<script setup>
</script>

<template>
  <div class="text-amber-100 p-[20px] space-y-[100px]">
    entry
    <div class="flex items-center space-x-[15px]">
      <div v-for="i in 10" :key="i" class="size-[100px] bg-gray-500" />
    </div>

    <div class="h-[14px] items-center flex space-x-[12px]">
      <div v-for="item in 10" :key="item" class=" h-full">
        <div class="w-[28px] h-full bg-black" />
      </div>
    </div>
  </div>
</template>
