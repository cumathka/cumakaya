<template>
  <transition name="fade">
    <button v-show="visible" @click="scrollTop"
      class="fixed bottom-8 right-8 z-50 w-11 h-11 bg-indigo-600 hover:bg-indigo-500
             text-white rounded-xl shadow-lg shadow-indigo-500/30 flex items-center
             justify-center transition-all duration-200 hover:-translate-y-0.5">
      <i class="fas fa-chevron-up text-sm"></i>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
const onScroll = () => { visible.value = window.scrollY > 400 }
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
