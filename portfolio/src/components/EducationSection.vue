<template>
  <section id="education" class="section-pad bg-slate-900/50">
    <div class="max-w-5xl mx-auto">

      <div data-aos="fade-up" class="text-center mb-16">
        <p class="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">{{ t.education.subtitle }}</p>
        <h2 class="section-title">{{ t.education.title }}</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(edu, i) in t.education.items" :key="i"
             class="card flex flex-col hover:-translate-y-1"
             data-aos="fade-up" :data-aos-delay="i * 100">

          <div class="flex items-start gap-3 mb-4">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" :class="getIcon(i).bg">
              <i :class="getIcon(i).icon + ' text-lg ' + getIcon(i).color"></i>
            </div>
            <div>
              <span class="text-xs text-gray-500 font-medium">{{ edu.year }}</span>
              <h3 class="font-bold text-white text-sm leading-tight">{{ edu.title }}</h3>
              <p class="text-indigo-400 text-xs">{{ edu.institution }}</p>
            </div>
          </div>

          <ul class="space-y-1.5 flex-1">
            <li v-for="item in edu.items" :key="item"
                class="text-gray-400 text-xs flex items-start gap-2">
              <i class="fas fa-dot-circle text-indigo-500 text-xs mt-0.5 flex-shrink-0"></i>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

// Original icons preserved here since specific logic was tied to index
const icons = [
  { icon: 'fab fa-aws', bg: 'bg-orange-900/40', color: 'text-orange-400' },
  { icon: 'fas fa-laptop-code', bg: 'bg-indigo-900/40', color: 'text-indigo-400' },
  { icon: 'fas fa-graduation-cap', bg: 'bg-green-900/40', color: 'text-green-400' }
]

const getIcon = (index) => icons[index] || icons[0]
</script>
