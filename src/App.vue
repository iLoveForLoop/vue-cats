<script setup>
import { onMounted, ref } from 'vue'
import getFacts from './composables/getFacts'

const { cat, load } = getFacts()

load()

const randomize = () => {
  console.log(cat)
  load()
}
</script>

<template>
  <div class="container text-center p-5">
    <h1>Cat Facts</h1>
    <div class="m-auto bg-dark text-light p-5 w-100">
      <h2 class="fs-5">{{ cat }}</h2>
    </div>
    <div>
      <button class="btn btn-dark my-5" @click="randomize">MORE</button>
    </div>
  </div>
</template>

<style scoped></style>
