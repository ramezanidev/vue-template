<template>
  <div class="flex flex-col max-w-96 mx-auto">
    <h2>About</h2>
    <counter></counter>
    <router-link to="/" class="text-xs text-true-gray-800 mt-1 self-start"
      >back to home</router-link
    >
  </div>
</template>

<script lang="ts" setup>
import counter from "../components/counter.vue";
</script>
