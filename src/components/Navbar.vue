<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
    <div class="container flex items-center justify-between py-4">
      <router-link to="/" class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-gradient-to-br from-primary-1 to-primary-2 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-lg">SC</span>
        </div>
        <span class="text-xl font-bold text-gray-800">SC Clínica</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden space-x-8 md:flex">
        <router-link 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.to"
          class="font-medium text-gray-600 hover:text-primary-1 transition-colors duration-300"
          :class="{ 'text-primary-1': $route.name === item.name }"
        >
          {{ item.label }}
        </router-link>
      </div>

      <div class="hidden md:block">
        <router-link to="/#agendamento" class="btn-primary">
          Agendar Consulta
        </router-link>
      </div>

      <!-- Mobile menu button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <!-- Mobile menu -->
      <div v-show="mobileMenuOpen" class="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
        <div class="flex flex-col space-y-4 p-4">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.to"
            @click="mobileMenuOpen = false"
            class="font-medium text-gray-600"
            :class="{ 'text-primary-1': $route.name === item.name }"
          >
            {{ item.label }}
          </router-link>
          <router-link to="/#agendamento" @click="mobileMenuOpen = false" class="btn-primary w-full text-center">
            Agendar Consulta
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Navbar',
  setup() {
    const mobileMenuOpen = ref(false)
    
    const navItems = [
      { name: 'Home', label: 'Início', to: '/' },
      { name: 'Home', label: 'Serviços', to: '/#services' },
      { name: 'About', label: 'Sobre', to: '/sobre' },
      { name: 'Team', label: 'Equipe', to: '/equipe' },
      { name: 'Home', label: 'Contato', to: '/#contact' }
    ]

    return {
      mobileMenuOpen,
      navItems
    }
  }
}
</script>

<style scoped>
.router-link-active {
  color: #2AB391;
}
</style>