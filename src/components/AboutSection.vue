<template>
  <section id="about" class="section-pad bg-slate-900/50">
    <div class="max-w-6xl mx-auto">

      <div data-aos="fade-up" class="text-center mb-16">
        <p class="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">{{ t.about.subtitle }}</p>
        <h2 class="section-title">{{ t.about.title }}</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Description -->
        <div data-aos="fade-right">
          <h3 class="text-2xl font-bold mb-4 text-white">
            {{ t.about.heading }}
          </h3>
          <p class="text-gray-400 leading-relaxed mb-4">
            {{ t.about.p1 }}
          </p>
          <p class="text-gray-400 leading-relaxed mb-8">
            {{ t.about.p2 }}
          </p>

          <div class="grid grid-cols-2 gap-4">
            <!-- Dynamic infos -->
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="fas fa-map-marker-alt text-indigo-400 text-sm"></i>
              </div>
              <div>
                <p class="text-gray-500 text-xs mb-0.5">{{ t.about.location }}</p>
                <p class="text-white text-sm font-medium">Altdorf, Schweiz</p>
              </div>
            </div>

             <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="fas fa-envelope text-indigo-400 text-sm"></i>
              </div>
              <div>
                <p class="text-gray-500 text-xs mb-0.5">{{ t.about.email }}</p>
                <p class="text-white text-sm font-medium">cuma.kaya@hicoders.ch</p>
              </div>
            </div>

             <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="fas fa-phone text-indigo-400 text-sm"></i>
              </div>
              <div>
                <p class="text-gray-500 text-xs mb-0.5">{{ t.about.phone }}</p>
                <p class="text-white text-sm font-medium">+41 77 807 45 86</p>
              </div>
            </div>

             <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="fas fa-language text-indigo-400 text-sm"></i>
              </div>
              <div>
                <p class="text-gray-500 text-xs mb-0.5">{{ t.about.languages }}</p>
                <p class="text-white text-sm font-medium">TR · DE (B2) · EN (B1)</p>
              </div>
            </div>
             
             <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="fab fa-aws text-indigo-400 text-sm"></i>
              </div>
              <div>
                <p class="text-gray-500 text-xs mb-0.5">{{ t.about.cert }}</p>
                <p class="text-white text-sm font-medium">AWS Cloud Practitioner</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="fas fa-car text-indigo-400 text-sm"></i>
              </div>
              <div>
                <p class="text-gray-500 text-xs mb-0.5">{{ t.about.license }}</p>
                <p class="text-white text-sm font-medium">Klasse B</p>
              </div>
            </div>

          </div>
        </div>

        <!-- Stats -->
        <div data-aos="fade-left" class="grid grid-cols-2 gap-4">
          <div class="card text-center hover:-translate-y-1">
            <div class="text-3xl font-extrabold text-transparent bg-clip-text
                        bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">4+</div>
            <p class="text-gray-400 text-sm">{{ t.about.stats.projects }}</p>
          </div>
          
          <div class="card text-center hover:-translate-y-1">
            <div class="text-3xl font-extrabold text-transparent bg-clip-text
                        bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">51+</div>
            <p class="text-gray-400 text-sm">{{ t.about.stats.certs }}</p>
          </div>

          <div class="card text-center hover:-translate-y-1">
            <div class="text-3xl font-extrabold text-transparent bg-clip-text
                        bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">9M</div>
            <p class="text-gray-400 text-sm">{{ t.about.stats.training }}</p>
          </div>

          <div class="card text-center hover:-translate-y-1">
            <div class="text-3xl font-extrabold text-transparent bg-clip-text
                        bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">9+</div>
            <p class="text-gray-400 text-sm">{{ t.about.stats.teaching }}</p>
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
