<template>
  <div class="font-poppins">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <TeamSection />
    <TestimonialsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import AboutSection from './components/AboutSection.vue';
import TeamSection from './components/TeamSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    HeroSection,
    ServicesSection,
    AboutSection,
    TeamSection,
    TestimonialsSection,
    ContactSection,
    FooterSection
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #2b6cb0;
  --secondary: #48bb78;
  --light: #f7fafc;
  --dark: #2d3748;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-gray-50;
}

.section-padding {
  @apply py-16 md:py-24;
}

.container {
  @apply px-4 mx-auto max-w-7xl;
}

.btn-primary {
  @apply px-6 py-3 text-white transition-all duration-300 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50;
}

.btn-secondary {
  @apply px-6 py-3 transition-all duration-300 bg-white border border-blue-600 rounded-md text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50;
}

.section-title {
  @apply mb-2 text-3xl font-bold text-gray-800 md:text-4xl;
}

.section-subtitle {
  @apply mb-12 text-lg text-gray-600;
}
</style>
