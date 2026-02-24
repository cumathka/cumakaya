<template>
  <section id="contact" class="section-pad bg-slate-950">
    <div class="max-w-4xl mx-auto">

      <div data-aos="fade-up" class="text-center mb-16">
        <p class="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">{{ t.contact.subtitle }}</p>
        <h2 class="section-title">{{ t.contact.title }}</h2>
        <p class="section-subtitle">{{ t.contact.text }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact info cards -->
        <div data-aos="fade-right" class="space-y-4">
          <a v-for="info in contacts" :key="info.id" :href="info.href" :target="info.target"
            class="card flex items-center gap-4 hover:-translate-y-0.5 group block">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" :class="info.bg">
              <i :class="info.icon + ' text-lg ' + info.color"></i>
            </div>
            <div>
              <p class="text-gray-500 text-xs mb-0.5">{{ getLabel(info.id) }}</p>
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
              <label class="text-gray-400 text-sm mb-1.5 block">{{ t.contact.name }}</label>
              <input v-model="form.name" type="text" :placeholder="t.contact.placeholder.name" class="w-full bg-gray-700/50 border border-gray-600/50 text-white rounded-xl
                       px-4 py-3 text-sm focus:outline-none focus:border-indigo-500
                       transition-colors placeholder-gray-600">
            </div>
            <div>
              <label class="text-gray-400 text-sm mb-1.5 block">{{ t.contact.email }}</label>
              <input v-model="form.email" type="email" :placeholder="t.contact.placeholder.email" class="w-full bg-gray-700/50 border border-gray-600/50 text-white rounded-xl
                       px-4 py-3 text-sm focus:outline-none focus:border-indigo-500
                       transition-colors placeholder-gray-600">
            </div>
            <div>
              <label class="text-gray-400 text-sm mb-1.5 block">{{ t.contact.message }}</label>
              <textarea v-model="form.message" rows="4" :placeholder="t.contact.placeholder.message" class="w-full bg-gray-700/50 border border-gray-600/50 text-white rounded-xl
                       px-4 py-3 text-sm focus:outline-none focus:border-indigo-500
                       transition-colors placeholder-gray-600 resize-none"></textarea>
            </div>
            <button type="submit" class="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3
                     rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25
                     flex items-center justify-center gap-2">
              <i class="fab fa-whatsapp text-lg"></i> {{ t.contact.send }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const form = reactive({ name: '', email: '', message: '' })

// Helper to get labels dynamically
const getLabel = (id) => {
  const map = {
    email: t.value.about.email,
    phone: t.value.about.phone,
    linkedin: 'LinkedIn',
    github: 'GitHub',
    location: t.value.about.location
  }
  return map[id] || ''
}

const contacts = [
  { id: 'email', value: 'cuma.kaya@hicoders.ch', icon: 'fas fa-envelope', bg: 'bg-indigo-900/40', color: 'text-indigo-400', href: 'mailto:cuma.kaya@hicoders.ch', target: '_self' },
  { id: 'phone', value: '+41 77 807 45 86', icon: 'fas fa-phone', bg: 'bg-green-900/40', color: 'text-green-400', href: 'tel:+41778074586', target: '_self' },
  { id: 'linkedin', value: 'Cuma Kaya', icon: 'fab fa-linkedin', bg: 'bg-blue-900/40', color: 'text-blue-400', href: 'https://linkedin.com', target: '_blank' },
  { id: 'github', value: 'github.com', icon: 'fab fa-github', bg: 'bg-gray-700/60', color: 'text-gray-300', href: 'https://github.com', target: '_blank' },
  { id: 'location', value: 'Altdorf, Uri, Schweiz', icon: 'fas fa-map-marker-alt', bg: 'bg-red-900/40', color: 'text-red-400', href: '#', target: '_self' },
]

const send = () => {
  const text = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  window.open(`https://wa.me/41778074586?text=${encodeURIComponent(text)}`, '_blank')
}
</script>
