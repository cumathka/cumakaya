<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden
           bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40">

    <!-- Background blobs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-700/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-800/15 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

      <!-- Left: Text -->
      <div data-aos="fade-right">
        <div class="flex items-center gap-3 mb-6">
          <div class="h-px w-12 bg-indigo-500"></div>
          <span class="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            {{ t.hero.role }}
          </span>
          <div class="h-px w-12 bg-indigo-500"></div>
        </div>

        <h1 class="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          {{ t.hero.greeting }}<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Cuma Kaya
          </span>
        </h1>

        <p class="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
          {{ t.hero.description }}
        </p>

        <div class="flex flex-wrap gap-2 mb-10">
          <span v-for="badge in badges" :key="badge.text"
            :class="badge.cls + ' text-sm font-medium px-4 py-1.5 rounded-full border'">
            <i :class="badge.icon + ' mr-1.5 text-xs'"></i>{{ badge.text }}
          </span>
        </div>

        <div class="flex flex-wrap gap-4 mb-10">
          <a href="#projects" class="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold
                    transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg
                    hover:shadow-indigo-500/25 flex items-center gap-2">
            <i class="fas fa-folder-open text-sm"></i> {{ t.hero.viewProjects }}
          </a>
          <a href="#contact" class="border border-gray-600 hover:border-indigo-500 text-gray-300 hover:text-indigo-400
                    px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2">
            <i class="fas fa-paper-plane text-sm"></i> {{ t.hero.contact }}
          </a>
        </div>

        <div class="flex gap-5">
          <a href="https://github.com" target="_blank"
            class="text-gray-500 hover:text-white text-2xl transition-all hover:-translate-y-0.5 duration-200">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank"
            class="text-gray-500 hover:text-indigo-400 text-2xl transition-all hover:-translate-y-0.5 duration-200">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:cuma.kaya@hicoders.ch"
            class="text-gray-500 hover:text-indigo-400 text-2xl transition-all hover:-translate-y-0.5 duration-200">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <!-- Right: Profile Image -->
      <div class="flex justify-center" data-aos="fade-left" data-aos-delay="200">
        <div class="relative">
          <div class="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600
                      blur-lg opacity-30 scale-105 animate-pulse"></div>
          <div class="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden
                      border-2 border-indigo-500/60 shadow-2xl shadow-indigo-500/20">
            <img src="/profile.jpg" alt="Cuma Kaya" class="w-full h-full object-cover" />
          </div>
          <div class="absolute bottom-4 -right-4 bg-gradient-to-r from-indigo-600 to-purple-600
                      text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xl flex items-center gap-2">
            <i class="fab fa-aws text-base"></i> AWS Certified
          </div>
          <div class="absolute top-4 -left-4 bg-gray-800 border border-gray-700
                      text-gray-300 text-xs font-medium px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
            <i class="fas fa-map-marker-alt text-indigo-400"></i> Altdorf, CH
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center
                gap-2 text-gray-600 animate-bounce">
      <span class="text-xs tracking-widest uppercase">{{ t.hero.scroll }}</span>
      <i class="fas fa-chevron-down text-sm"></i>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

const badges = [
  { text: 'Vue.js', icon: 'fab fa-vuejs', cls: 'bg-emerald-900/40 border-emerald-600/40 text-emerald-300' },
  { text: 'Node.js', icon: 'fab fa-node-js', cls: 'bg-green-900/40 border-green-600/40 text-green-300' },
  { text: 'AWS Cloud', icon: 'fab fa-aws', cls: 'bg-orange-900/40 border-orange-600/40 text-orange-300' },
  { text: 'Java (Spring)', icon: 'fab fa-java', cls: 'bg-red-900/40 border-red-600/40 text-red-300' },
  { text: 'React', icon: 'fab fa-react', cls: 'bg-cyan-900/40 border-cyan-600/40 text-cyan-300' },
  { text: 'Angular', icon: 'fab fa-angular', cls: 'bg-red-900/40 border-red-600/40 text-red-300' },
  { text: 'MySQL', icon: 'fas fa-database', cls: 'bg-blue-900/40 border-blue-600/40 text-blue-300' },
  { text: 'Cybersecurity', icon: 'fas fa-shield-alt', cls: 'bg-blue-900/40 border-blue-600/40 text-blue-300' },
  { text: 'Ethical Hacking', icon: 'fas fa-user-secret', cls: 'bg-purple-900/40 border-purple-600/40 text-purple-300' },
]
</script>
