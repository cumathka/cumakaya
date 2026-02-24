<template>
  <section id="education" class="section-pad bg-slate-900/50">
    <div class="max-w-5xl mx-auto">

      <div data-aos="fade-up" class="text-center mb-16">
        <p class="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Mein Werdegang</p>
        <h2 class="section-title">Ausbildung & Kurse</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(edu, i) in education" :key="edu.title"
             class="card flex flex-col hover:-translate-y-1"
             data-aos="fade-up" :data-aos-delay="i * 100">

          <div class="flex items-start gap-3 mb-4">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" :class="edu.iconBg">
              <i :class="edu.icon + ' text-lg ' + edu.iconColor"></i>
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
const education = [
  {
    title: 'AWS Re-Start + Cloud Kurs',
    institution: 'AWS / Cloud Bootcamp',
    year: '2023',
    icon: 'fab fa-aws', iconBg: 'bg-orange-900/40', iconColor: 'text-orange-400',
    items: ['AWS Dienste (EC2, S3, IAM)', 'Cloud-Sicherheit', 'Terraform & CloudFormation', 'Automatisierung']
  },
  {
    title: 'Full Stack Web-Entwicklung',
    institution: 'Hi-Coders (9 Monate)',
    year: '2022',
    icon: 'fas fa-laptop-code', iconBg: 'bg-indigo-900/40', iconColor: 'text-indigo-400',
    items: ['HTML, CSS, JavaScript', 'React, Angular, Vue.js', 'Node.js & Java', 'Responsive Design']
  },
  {
    title: 'Lehramt Mathematik & Naturwiss.',
    institution: 'Atatürk Universität, Erzurum',
    year: '2006',
    icon: 'fas fa-graduation-cap', iconBg: 'bg-green-900/40', iconColor: 'text-green-400',
    items: ['Pädagogik & Didaktik', 'Physik, Chemie, Biologie', 'Computergestützte Mathematik', 'Laborunterricht']
  },
]
</script>
