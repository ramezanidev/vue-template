<script setup lang="ts">
import { useCounterStore } from "@/store"
const store = useCounterStore()

const count = computed({
  get(){
    return store.count
  },
  set(value:number){
    store.count = value
  }
})
</script>

<template>
  <button @click="count++" class="bg-teal-500 border-none text-white px-4 py-2 rounded shadow shadow-teal font-bold text-lg cursor-pointer hover:(bg-teal-600) active:(bg-teal-700 duration-75) transition">count: {{ count }}</button>
</template>