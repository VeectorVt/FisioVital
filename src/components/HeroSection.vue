<template>
  <section id="home" class="pt-24 overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
    <div class="container flex flex-col items-center px-4 py-16 md:py-24 md:flex-row">
      <div class="w-full mb-16 text-center md:w-1/2 md:pr-12 md:text-left md:mb-0" data-aos="fade-up">
        <h1 class="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
          Cuidado especializado para sua saúde física
        </h1>
        <p class="mb-8 text-lg text-gray-600 md:text-xl">
          A SC Clínica oferece tratamentos personalizados de fisioterapia para ajudar você a recuperar sua mobilidade e eliminar a dor, melhorando sua qualidade de vida.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a href="#contact" class="btn-primary">
            Agendar Consulta
          </a>
          <a href="#services" class="btn-secondary">
            Nossos Serviços
          </a>
        </div>
      </div>
      <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200">
        <img 
          src="https://pixabay.com/get/g1dfff3abe0546c6229eb162cf00132998655546be7db8fe64db32c990013c3e88526e680caecb920f995edcf619e302edec5caebce6ed2e822571d9b482cb3ee_1280.jpg"
          alt="Interior da clínica de fisioterapia" 
          class="object-cover w-full h-auto rounded-lg shadow-xl"
        />
      </div>
    </div>
    <div class="container px-4 py-8 mx-auto">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="flex items-center p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
          <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-semibold text-gray-800">Profissionais Certificados</h3>
            <p class="text-gray-600">Equipe de fisioterapeutas com formação especializada</p>
          </div>
        </div>
        <div class="flex items-center p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
          <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-semibold text-gray-800">Atendimento Personalizado</h3>
            <p class="text-gray-600">Planos de tratamento adaptados às suas necessidades</p>
          </div>
        </div>
        <div class="flex items-center p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
          <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-semibold text-gray-800">Tecnologia Avançada</h3>
            <p class="text-gray-600">Equipamentos modernos para tratamentos eficazes</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>
