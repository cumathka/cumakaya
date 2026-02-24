<template>
  <div class="min-h-screen">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
    <FooterSection />
    <BackToTop />
  </div>
</template>

<script setup>
import NavBar         from './components/NavBar.vue'
import HeroSection    from './components/HeroSection.vue'
import AboutSection   from './components/AboutSection.vue'
import SkillsSection  from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection  from './components/EducationSection.vue'
import ContactSection    from './components/ContactSection.vue'
import FooterSection     from './components/FooterSection.vue'
import BackToTop         from './components/BackToTop.vue'
</script>
