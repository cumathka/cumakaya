<template>
  <section id="skills" class="section-pad bg-slate-950">
    <div class="max-w-6xl mx-auto">

      <div data-aos="fade-up" class="text-center mb-16">
        <p class="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Was ich kann</p>
        <h2 class="section-title">Fähigkeiten & Technologien</h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(cat, i) in skills" :key="cat.title"
             class="card hover:-translate-y-1"
             data-aos="fade-up" :data-aos-delay="i * 80">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" :class="cat.bg">
              <i :class="cat.icon + ' text-lg ' + cat.color"></i>
            </div>
            <h3 class="font-bold text-white">{{ cat.title }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in cat.items" :key="s"
              class="bg-gray-700/60 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg
                     border border-gray-600/40 hover:border-indigo-500/50 hover:text-indigo-300
                     transition-colors cursor-default">
              {{ s }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  {
    title: 'Frontend',
    icon: 'fas fa-palette', bg: 'bg-blue-900/40', color: 'text-blue-400',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Vue.js 3', 'React', 'Angular', 'Bootstrap']
  },
  {
    title: 'Backend',
    icon: 'fas fa-server', bg: 'bg-green-900/40', color: 'text-green-400',
    items: ['Node.js', 'Java Spring Boot', 'REST APIs', 'Firebase', 'MySQL']
  },
  {
    title: 'Cloud & DevOps',
    icon: 'fab fa-aws', bg: 'bg-orange-900/40', color: 'text-orange-400',
    items: ['AWS EC2', 'AWS S3', 'IAM', 'CloudWatch', 'Terraform', 'CloudFormation', 'CI/CD']
  },
  {
    title: 'Cybersecurity',
    icon: 'fas fa-shield-alt', bg: 'bg-red-900/40', color: 'text-red-400',
    items: ['Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'Pentesting', 'Netzwerkanalyse']
  },
  {
    title: 'System & Linux',
    icon: 'fab fa-linux', bg: 'bg-purple-900/40', color: 'text-purple-400',
    items: ['Bash/Zsh Scripting', 'SSH', 'Cron Jobs', 'rsync', 'macOS', 'UTM-VM', 'ufw']
  },
  {
    title: 'Tools',
    icon: 'fas fa-tools', bg: 'bg-indigo-900/40', color: 'text-indigo-400',
    items: ['Git & GitHub', 'Jira', 'Postman', 'AutoCAD', 'Alphacam', 'MS Office']
  },
]
</script>
