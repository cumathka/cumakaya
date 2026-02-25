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
      <button @click="open = !open"
        class="md:hidden text-gray-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center z-50">
        <i :class="open ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="fade-down">
      <div v-show="open" class="md:hidden fixed top-0 left-0 w-full h-screen bg-slate-900 z-40 overflow-y-auto">
        <div class="flex justify-end p-6">
          <!-- Close button placeholder or spacer if needed, but the main button is z-50 so it stays on top -->
        </div>
        <ul class="flex flex-col items-center justify-center min-h-full py-8 space-y-6">
          <li><a href="#about" @click="open = false"
              class="text-xl font-medium text-gray-300 hover:text-indigo-400 transition-colors">{{ t.nav.about }}</a>
          </li>
          <li><a href="#skills" @click="open = false"
              class="text-xl font-medium text-gray-300 hover:text-indigo-400 transition-colors">{{ t.nav.skills }}</a>
          </li>
          <li><a href="#projects" @click="open = false"
              class="text-xl font-medium text-gray-300 hover:text-indigo-400 transition-colors">{{ t.nav.projects }}</a>
          </li>
          <li><a href="#experience" @click="open = false"
              class="text-xl font-medium text-gray-300 hover:text-indigo-400 transition-colors">{{ t.nav.experience
              }}</a></li>
          <li><a href="#education" @click="open = false"
              class="text-xl font-medium text-gray-300 hover:text-indigo-400 transition-colors">{{ t.nav.education
              }}</a></li>
          <li><a href="#certificates" @click="open = false"
              class="text-xl font-medium text-gray-300 hover:text-indigo-400 transition-colors">{{ t.nav.certificates
              }}</a></li>

          <li class="pt-8 border-t border-gray-800 w-48 flex justify-center">
            <div class="flex flex-wrap gap-2 justify-center">
              <button @click="setLanguage('de')"
                :class="['px-3 py-1.5 rounded-md text-sm transition-all', currentLang === 'de' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400']">DE</button>
              <button @click="setLanguage('en')"
                :class="['px-3 py-1.5 rounded-md text-sm transition-all', currentLang === 'en' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400']">EN</button>
              <button @click="setLanguage('fr')"
                :class="['px-3 py-1.5 rounded-md text-sm transition-all', currentLang === 'fr' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400']">FR</button>
              <button @click="setLanguage('tr')"
                :class="['px-3 py-1.5 rounded-md text-sm transition-all', currentLang === 'tr' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400']">TR</button>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t, currentLang, setLanguage } = useLanguage()
const isScrolled = ref(false)
const open = ref(false)

const onScroll = () => { isScrolled.value = window.scrollY > 60 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.25s ease;
}

.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
