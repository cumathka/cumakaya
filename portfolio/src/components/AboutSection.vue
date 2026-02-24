<template>
  <section id="about" class="section-pad bg-slate-900/50">
    <div class="max-w-6xl mx-auto">

      <div data-aos="fade-up" class="text-center mb-16">
        <p class="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Wer bin ich?</p>
        <h2 class="section-title">Über mich</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Description -->
        <div data-aos="fade-right">
          <h3 class="text-2xl font-bold mb-4 text-white">
            Leidenschaftlicher Entwickler & lebenslanges Lernen
          </h3>
          <p class="text-gray-400 leading-relaxed mb-4">
            Mit 9 Monaten Ausbildung bei Hi-Coders und einer AWS Cloud Practitioner Zertifizierung
            bringe ich frisches technisches Wissen und einen einzigartigen pädagogischen Hintergrund mit.
            Meine Stärke: Komplexe Konzepte klar kommunizieren.
          </p>
          <p class="text-gray-400 leading-relaxed mb-8">
            Als Quereinsteiger verbinde ich analytisches Denken aus dem Lehrberuf mit moderner
            Softwareentwicklung. Ich bin motiviert, in agilen Teams zu wachsen und lösungsorientiert
            zu arbeiten.
          </p>

          <div class="grid grid-cols-2 gap-4">
            <div v-for="info in infos" :key="info.label" class="flex items-start gap-3">
              <div class="w-8 h-8 bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <i :class="info.icon + ' text-indigo-400 text-sm'"></i>
              </div>
              <div>
                <p class="text-gray-500 text-xs mb-0.5">{{ info.label }}</p>
                <p class="text-white text-sm font-medium">{{ info.value }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div data-aos="fade-left" class="grid grid-cols-2 gap-4">
          <div v-for="stat in stats" :key="stat.label"
               class="card text-center hover:-translate-y-1">
            <div class="text-3xl font-extrabold text-transparent bg-clip-text
                        bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
              {{ stat.value }}
            </div>
            <p class="text-gray-400 text-sm">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const infos = [
  { icon: 'fas fa-map-marker-alt', label: 'Standort',        value: 'Altdorf, Schweiz'          },
  { icon: 'fas fa-envelope',       label: 'E-Mail',          value: 'cuma.kaya@hicoders.ch'      },
  { icon: 'fas fa-phone',          label: 'Telefon',         value: '+41 77 807 45 86'           },
  { icon: 'fas fa-language',       label: 'Sprachen',        value: 'TR · DE (B2) · EN (B1)'     },
  { icon: 'fab fa-aws',            label: 'Zertifizierung',  value: 'AWS Cloud Practitioner'     },
  { icon: 'fas fa-car',            label: 'Führerschein',    value: 'Klasse B'                   },
]

const stats = [
  { value: '3+', label: 'Projekte abgeschlossen' },
  { value: '2',  label: 'Zertifizierungen'       },
  { value: '9M', label: 'Full Stack Ausbildung'  },
  { value: '9+', label: 'Jahre Lehrerfahrung'    },
]
</script>
