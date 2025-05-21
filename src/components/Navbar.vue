<template>
  <nav class="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
    <div class="container flex items-center justify-between px-4 py-4 mx-auto">
      <!-- Logo -->
      <a href="#" class="flex items-center">
        <svg class="w-10 h-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm0 85c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"/>
          <path d="M65 35H50c-1.1 0-2 .9-2 2v10h-8c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h8v2c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V37c0-1.1-.9-2-2-2zm-2 25H52V47h-12v-8h12V37h13v23z"/>
        </svg>
        <span class="ml-3 text-xl font-bold text-gray-800">SC Clínica</span>
      </a>

      <!-- Mobile Menu Toggle -->
      <div class="block md:hidden">
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="p-2 text-gray-600 transition-colors duration-300 rounded hover:text-blue-600 focus:outline-none"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex md:items-center">
        <a v-for="(item, index) in navItems" :key="index" :href="item.href" 
          class="px-4 py-2 ml-4 text-sm font-medium text-gray-700 transition-colors duration-300 rounded hover:text-blue-600 hover:bg-blue-50">
          {{ item.label }}
        </a>
        <a href="#contact" class="px-4 py-2 ml-6 text-sm font-medium text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700">
          Agendar Consulta
        </a>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-show="mobileMenuOpen" 
      class="md:hidden"
      :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 bg-white sm:px-3">
        <a v-for="(item, index) in navItems" :key="index" :href="item.href" 
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-blue-600 hover:bg-blue-50">
          {{ item.label }}
        </a>
        <a href="#contact"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 mt-4 text-base font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Agendar Consulta
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuOpen: false,
      navItems: [
        { label: 'Início', href: '#home' },
        { label: 'Serviços', href: '#services' },
        { label: 'Sobre Nós', href: '#about' },
        { label: 'Equipe', href: '#team' },
        { label: 'Depoimentos', href: '#testimonials' },
        { label: 'Contato', href: '#contact' }
      ]
    }
  }
}
</script>
