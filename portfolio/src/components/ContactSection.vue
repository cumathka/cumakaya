<template>
  <section id="contact" class="section-pad bg-slate-950">
    <div class="max-w-4xl mx-auto">

      <div data-aos="fade-up" class="text-center mb-16">
        <p class="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Schreib mir</p>
        <h2 class="section-title">Kontakt</h2>
        <p class="section-subtitle">Ich freue mich auf neue Möglichkeiten. Melde dich gern!</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact info cards -->
        <div data-aos="fade-right" class="space-y-4">
          <a v-for="info in contacts" :key="info.label"
             :href="info.href" :target="info.target"
             class="card flex items-center gap-4 hover:-translate-y-0.5 group block">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" :class="info.bg">
              <i :class="info.icon + ' text-lg ' + info.color"></i>
            </div>
            <div>
              <p class="text-gray-500 text-xs mb-0.5">{{ info.label }}</p>
              <span class="text-white text-sm font-medium group-hover:text-indigo-400 transition-colors">
                {{ info.value }}
              </span>
            </div>
          </a>
        </div>

        <!-- Form -->
        <div data-aos="fade-left">
          <form class="card space-y-4" @submit.prevent="send">
            <div>
              <label class="text-gray-400 text-sm mb-1.5 block">Name</label>
              <input v-model="form.name" type="text" placeholder="Dein Name"
                class="w-full bg-gray-700/50 border border-gray-600/50 text-white rounded-xl
                       px-4 py-3 text-sm focus:outline-none focus:border-indigo-500
                       transition-colors placeholder-gray-600">
            </div>
            <div>
              <label class="text-gray-400 text-sm mb-1.5 block">E-Mail</label>
              <input v-model="form.email" type="email" placeholder="deine@email.com"
                class="w-full bg-gray-700/50 border border-gray-600/50 text-white rounded-xl
                       px-4 py-3 text-sm focus:outline-none focus:border-indigo-500
                       transition-colors placeholder-gray-600">
            </div>
            <div>
              <label class="text-gray-400 text-sm mb-1.5 block">Nachricht</label>
              <textarea v-model="form.message" rows="4" placeholder="Deine Nachricht..."
                class="w-full bg-gray-700/50 border border-gray-600/50 text-white rounded-xl
                       px-4 py-3 text-sm focus:outline-none focus:border-indigo-500
                       transition-colors placeholder-gray-600 resize-none"></textarea>
            </div>
            <button type="submit"
              class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3
                     rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25
                     flex items-center justify-center gap-2">
              <i class="fas fa-paper-plane text-sm"></i> Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({ name: '', email: '', message: '' })

const contacts = [
  { label: 'E-Mail',    value: 'cuma.kaya@hicoders.ch', icon: 'fas fa-envelope',       bg: 'bg-indigo-900/40', color: 'text-indigo-400', href: 'mailto:cuma.kaya@hicoders.ch', target: '_self'  },
  { label: 'Telefon',   value: '+41 77 807 45 86',      icon: 'fas fa-phone',          bg: 'bg-green-900/40',  color: 'text-green-400',  href: 'tel:+41778074586',             target: '_self'  },
  { label: 'LinkedIn',  value: 'Cuma Kaya',             icon: 'fab fa-linkedin',       bg: 'bg-blue-900/40',   color: 'text-blue-400',   href: 'https://linkedin.com',         target: '_blank' },
  { label: 'GitHub',    value: 'github.com',            icon: 'fab fa-github',         bg: 'bg-gray-700/60',   color: 'text-gray-300',   href: 'https://github.com',           target: '_blank' },
  { label: 'Standort',  value: 'Altdorf, Uri, Schweiz', icon: 'fas fa-map-marker-alt', bg: 'bg-red-900/40',    color: 'text-red-400',    href: '#',                            target: '_self'  },
]

const send = () => {
  window.open(`mailto:cuma.kaya@hicoders.ch?subject=Kontakt von ${form.name}&body=${form.message}`)
}
</script>
