<template>
  <nav :class="[
    'fixed top-0 w-full z-50 transition-all duration-300',
    isScrolled || open ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
  ]">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#hero" class="flex items-center gap-2">
        <img src="/logo3.jpg" alt="Logo" class="h-12 w-auto" />
      </a>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-8 text-sm font-medium">
        <li><a href="#about" class="text-gray-400 hover:text-indigo-400 transition-colors">{{ t.nav.about }}</a></li>
        <li><a href="#skills" class="text-gray-400 hover:text-indigo-400 transition-colors">{{ t.nav.skills }}</a></li>
        <li><a href="#projects" class="text-gray-400 hover:text-indigo-400 transition-colors">{{ t.nav.projects }}</a>
        </li>
        <li><a href="#experience" class="text-gray-400 hover:text-indigo-400 transition-colors">{{ t.nav.experience
        }}</a></li>
        <li><a href="#education" class="text-gray-400 hover:text-indigo-400 transition-colors">{{ t.nav.education }}</a>
        </li>
        <li><a href="#certificates" class="text-gray-400 hover:text-indigo-400 transition-colors">{{ t.nav.certificates
        }}</a></li>
      </ul>

      <div class="hidden md:flex items-center gap-4">
        <!-- Language Switcher -->
        <div
          class="flex items-center gap-1.5 text-xs font-semibold bg-gray-800/50 rounded-lg p-1 border border-gray-700/50">
          <button @click="setLanguage('de')"
            :class="['px-2 py-1 rounded-md transition-all', currentLang === 'de' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-400 hover:text-indigo-300']">DE</button>
          <button @click="setLanguage('en')"
            :class="['px-2 py-1 rounded-md transition-all', currentLang === 'en' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-400 hover:text-indigo-300']">EN</button>
          <button @click="setLanguage('fr')"
            :class="['px-2 py-1 rounded-md transition-all', currentLang === 'fr' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-400 hover:text-indigo-300']">FR</button>
          <button @click="setLanguage('tr')"
            :class="['px-2 py-1 rounded-md transition-all', currentLang === 'tr' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-400 hover:text-indigo-300']">TR</button>
        </div>

        <a href="https://wa.me/41778074586" target="_blank" class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500
                  text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200">
          <i class="fab fa-whatsapp text-lg"></i> {{ t.nav.contact }}
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="open = !open" class="md:hidden relative z-50 text-gray-400 hover:text-white transition-colors p-2"
        aria-label="Toggle Menu">
        <i :class="open ? 'fas fa-times text-2xl' : 'fas fa-bars text-xl'"></i>
      </button>
    </div>

    <!-- Mobile Overlay Menu (Top-Right Slide) -->
    <div class="fixed inset-0 z-40 md:hidden pointer-events-none">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        :class="open ? 'opacity-100 pointer-events-auto' : 'opacity-0'" @click="open = false">
      </div>

      <!-- Menu Panel -->
      <div
        class="absolute top-0 right-0 w-3/4 max-w-sm h-screen bg-slate-900/95 border-l border-gray-800 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col pt-24 px-8 overflow-y-auto pointer-events-auto"
        :class="open ? 'translate-x-0' : 'translate-x-full'">

        <ul class="space-y-6">
          <li v-for="(item, index) in [
            { href: '#about', text: t.nav.about },
            { href: '#skills', text: t.nav.skills },
            { href: '#projects', text: t.nav.projects },
            { href: '#experience', text: t.nav.experience },
            { href: '#education', text: t.nav.education },
            { href: '#certificates', text: t.nav.certificates }
          ]" :key="item.href" class="transform transition-all duration-300 delay-[100ms]" :style="{
            opacity: open ? '1' : '0',
            transform: open ? 'translateX(0)' : 'translateX(20px)',
            transitionDelay: `${index * 50 + 100}ms`
          }">
            <a :href="item.href" @click="open = false"
              class="block text-xl font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2 border-b border-gray-800/50">
              {{ item.text }}
            </a>
          </li>

          <!-- Language Switcher in Mobile -->
          <li class="pt-8 mt-4 border-t border-gray-800 transform transition-all duration-500 delay-300"
            :style="{ opacity: open ? '1' : '0', transform: open ? 'translateY(0)' : 'translateY(10px)' }">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Language</p>
            <div class="grid grid-cols-4 gap-2">
              <button @click="setLanguage('de')" :class="['w-full py-2 rounded-lg text-sm font-medium transition-all border text-center',
                currentLang === 'de'
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-800 border-slate-700 text-gray-400 hover:text-white']">DE</button>
              <button @click="setLanguage('en')" :class="['w-full py-2 rounded-lg text-sm font-medium transition-all border text-center',
                currentLang === 'en'
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-800 border-slate-700 text-gray-400 hover:text-white']">EN</button>
              <button @click="setLanguage('fr')" :class="['w-full py-2 rounded-lg text-sm font-medium transition-all border text-center',
                currentLang === 'fr'
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-800 border-slate-700 text-gray-400 hover:text-white']">FR</button>
              <button @click="setLanguage('tr')" :class="['w-full py-2 rounded-lg text-sm font-medium transition-all border text-center',
                currentLang === 'tr'
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-800 border-slate-700 text-gray-400 hover:text-white']">TR</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t, currentLang, setLanguage } = useLanguage()
const isScrolled = ref(false)
const open = ref(false)

const onScroll = () => { isScrolled.value = window.scrollY > 60 }

// Prevent background scroll when menu is open
watch(open, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = '' // Cleanup
})
</script>

<style scoped>
/* Scoped styles are handled via Tailwind classes */
</style>
