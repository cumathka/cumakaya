<template>
  <section id="projects" class="section-pad bg-slate-900/50">
    <div class="max-w-6xl mx-auto">

      <div data-aos="fade-up" class="text-center mb-16">
        <p class="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">{{ t.projects.subtitle }}</p>
        <h2 class="section-title">{{ t.projects.title }}</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="(p, i) in t.projects.items" :key="p.title" class="card flex flex-col hover:-translate-y-2 group"
          data-aos="fade-up" :data-aos-delay="i * 100">

          <div class="flex items-start justify-between mb-4">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center" :class="p.iconBg">
              <i :class="p.icon + ' text-xl ' + p.iconColor"></i>
            </div>
            <div class="flex gap-3">
              <a v-if="p.link" :href="p.link" target="_blank"
                class="text-gray-500 hover:text-indigo-400 transition-colors text-sm" :title="t.projects.live">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          <h3 class="font-bold text-white text-lg mb-2 group-hover:text-indigo-300 transition-colors">
            {{ p.title }}
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{{ p.desc }}</p>

          <div class="text-xs text-gray-500 mb-4">
            <i class="far fa-calendar-alt mr-1.5 text-indigo-500"></i>{{ p.date }}
          </div>

          <div class="flex flex-wrap gap-1.5">
            <span v-for="tag in p.tags" :key="tag"
              class="bg-indigo-900/40 text-indigo-300 text-xs px-2.5 py-1 rounded-md border border-indigo-700/30">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()
</script>
