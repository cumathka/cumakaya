<template>
  <nav :class="[
    'fixed top-0 w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
  ]">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#hero" class="text-xl font-bold">
        <span class="text-indigo-400">CK</span><span class="text-white">.</span>
      </a>

      <ul class="hidden md:flex items-center gap-8 text-sm font-medium">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href"
             class="text-gray-400 hover:text-indigo-400 transition-colors">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <a href="mailto:cuma.kaya@hicoders.ch"
         class="hidden md:inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500
                text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200">
        <i class="fas fa-envelope text-xs"></i> Kontakt
      </a>

      <button @click="open = !open"
              class="md:hidden text-gray-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center">
        <i :class="open ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>
    </div>

    <transition name="fade-down">
      <div v-show="open" class="md:hidden bg-slate-900/98 border-t border-gray-800">
        <ul class="py-3">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" @click="open = false"
               class="block px-6 py-3 text-gray-400 hover:text-indigo-400
                      hover:bg-gray-800/50 transition-colors text-sm">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const open = ref(false)

const links = [
  { href: '#about',      label: 'Über mich'  },
  { href: '#skills',     label: 'Fähigkeiten' },
  { href: '#projects',   label: 'Projekte'    },
  { href: '#experience', label: 'Erfahrung'   },
  { href: '#education',  label: 'Ausbildung'  },
]

const onScroll = () => { isScrolled.value = window.scrollY > 60 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.fade-down-enter-active, .fade-down-leave-active { transition: all 0.25s ease; }
.fade-down-enter-from, .fade-down-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
