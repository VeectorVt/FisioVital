<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="relative pt-24 overflow-hidden min-h-screen gradient-bg">
      <!-- Video Background -->
      <div class="absolute inset-0 z-0">
        <video 
          autoplay 
          muted 
          loop 
          playsinline
          class="object-cover w-full h-full"
          poster="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        >
          <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="SC Clínica" class="object-cover w-full h-full">
        </video>
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 container flex flex-col items-center px-4 py-24 md:py-32 md:flex-row min-h-screen justify-center">
        <div class="w-full text-center md:w-2/3 animate-fade-in">
          <h1 class="mb-6 text-5xl font-bold text-white md:text-7xl leading-tight">
            Sua <span class="text-secondary">Recuperação</span><br>
            Nossa <span class="text-primary-2">Especialidade</span>
          </h1>
          <p class="mb-8 text-xl text-white md:text-2xl opacity-90 max-w-3xl mx-auto">
            Transforme sua vida com nossos tratamentos especializados de fisioterapia. 
            Agende sua avaliação gratuita e descubra o caminho para uma vida sem dor.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 justify-center">
            <a href="#agendamento" class="btn-primary text-lg px-8 py-4 animate-float">
              🎯 Agende sua Avaliação Gratuita
            </a>
            <a href="#services" class="btn-secondary text-lg px-8 py-4">
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <ServicesSection />
    
    <!-- CTA Section -->
    <CTASection />
    
    <!-- About Preview Section -->
    <AboutPreview />
    
    <!-- Testimonials Section -->
    <TestimonialsSection />
    
    <!-- Team Preview Section -->
    <TeamPreview />
    
    <!-- Location Section -->
    <LocationSection />
    
    <!-- Booking Section -->
    <BookingSection />
    
    <!-- Instagram Section -->
    <InstagramSection />
    
    <!-- Contact Section -->
    <ContactSection />
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script>
import ServicesSection from '../components/sections/ServicesSection.vue'
import CTASection from '../components/sections/CTASection.vue'
import AboutPreview from '../components/sections/AboutPreview.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import TeamPreview from '../components/sections/TeamPreview.vue'
import LocationSection from '../components/sections/LocationSection.vue'
import BookingSection from '../components/sections/BookingSection.vue'
import InstagramSection from '../components/sections/InstagramSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import FooterSection from '../components/sections/FooterSection.vue'

export default {
  name: 'Home',
  components: {
    ServicesSection,
    CTASection,
    AboutPreview,
    TestimonialsSection,
    TeamPreview,
    LocationSection,
    BookingSection,
    InstagramSection,
    ContactSection,
    FooterSection
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.text-primary-2 {
  color: #7DD8C0;
}

.text-secondary {
  color: #E9D8A6;
}
</style>