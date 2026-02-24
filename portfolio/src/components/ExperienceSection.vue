<template>
  <section id="experience" class="section-pad bg-slate-950">
    <div class="max-w-4xl mx-auto">

      <div data-aos="fade-up" class="text-center mb-16">
        <p class="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Meine Laufbahn</p>
        <h2 class="section-title">Berufliche Erfahrung</h2>
      </div>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-px
                    bg-gradient-to-b from-indigo-500 via-purple-600 to-transparent
                    transform md:-translate-x-1/2"></div>

        <div v-for="(job, i) in jobs" :key="i"
             class="relative mb-10 pl-16 md:pl-0"
             :data-aos="i % 2 === 0 ? 'fade-right' : 'fade-left'">

          <!-- Dot -->
          <div class="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-y-0.5
                      w-4 h-4 rounded-full bg-indigo-500 border-2 border-slate-950
                      shadow-lg shadow-indigo-500/40 top-6"></div>

          <!-- Alternating card -->
          <div :class="['md:w-[calc(50%-2rem)]', i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto']">
            <div class="card hover:-translate-y-1">
              <div class="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 class="font-bold text-white text-lg">{{ job.title }}</h3>
                  <p class="text-indigo-400 text-sm font-medium">{{ job.company }}</p>
                </div>
                <span class="bg-indigo-900/40 border border-indigo-700/40 text-indigo-300
                             text-xs px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                  {{ job.period }}
                </span>
              </div>
              <ul class="space-y-1.5">
                <li v-for="point in job.points" :key="point"
                    class="text-gray-400 text-sm flex items-start gap-2">
                  <i class="fas fa-chevron-right text-indigo-500 text-xs mt-1 flex-shrink-0"></i>
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const jobs = [
  {
    title: 'Mathematiklehrer',
    company: 'Staatliche Schulen – Ministerium für Nationale Bildung, Türkei',
    period: 'Sep 2007 – Aug 2016',
    points: [
      'Unterricht in Mathematik und Naturwissenschaften',
      'Fortbildung in Bildungstechnologien',
      'Entwicklung von E-Learning-Inhalten',
    ]
  },
  {
    title: 'Textil Planungsspezialist',
    company: 'Karaman Textile, Samsun, Türkei',
    period: 'Dez – Aug 2017',
    points: [
      'Planung und Koordination von Textilproduktionsprozessen',
      'Optimierung von Produktionsabläufen',
    ]
  },
  {
    title: '3-Achsen-CNC-Maschinenbediener',
    company: 'Holzverarbeitung, Hatay, Türkei',
    period: 'Nov 2019 – Mai 2021',
    points: [
      'Bedienung von 3-Achsen-CNC-Maschinen für Holz',
      'Erstellung von Produktionsplänen',
      'Alphacam 3D-Programm Anwendung',
    ]
  },
]
</script>
