<template>
  <div>
    <!-- Hero Section -->
    <section class="pt-24 bg-gradient-to-br from-primary-1 to-primary-2 text-white">
      <div class="container section-padding">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">Nossa Equipe Especializada</h1>
          <p class="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Conheça os profissionais dedicados e altamente qualificados que cuidam da sua saúde e bem-estar
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(membro, index) in equipe" :key="index" 
               class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
            <!-- Photo -->
            <div class="relative overflow-hidden">
              <img :src="membro.foto" :alt="membro.nome" class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-primary-1/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div class="text-white text-center">
                  <p class="font-medium">{{ membro.especializacao }}</p>
                </div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ membro.nome }}</h3>
              <p class="text-primary-1 font-medium mb-3">{{ membro.cargo }}</p>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ membro.bio }}</p>
              
              <!-- Qualifications -->
              <div class="mb-4">
                <div v-for="qual in membro.qualificacoes" :key="qual" 
                     class="inline-block px-2 py-1 mb-1 mr-1 text-xs text-primary-1 bg-primary-1/10 rounded-full">
                  {{ qual }}
                </div>
              </div>

              <!-- Experience -->
              <div class="mb-4">
                <h4 class="font-semibold text-gray-800 mb-2">Experiência:</h4>
                <p class="text-gray-600 text-sm">{{ membro.experiencia }}</p>
              </div>

              <!-- Specialties -->
              <div class="mb-4">
                <h4 class="font-semibold text-gray-800 mb-2">Especialidades:</h4>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li v-for="especialidade in membro.especialidades" :key="especialidade" class="flex items-center">
                    <svg class="w-3 h-3 text-primary-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    {{ especialidade }}
                  </li>
                </ul>
              </div>
              
              <!-- Social Links -->
              <div class="flex space-x-3">
                <a v-if="membro.linkedin" :href="membro.linkedin" 
                   class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-1 hover:text-white transition-all duration-300">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a v-if="membro.instagram" :href="membro.instagram" 
                   class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-1 hover:text-white transition-all duration-300">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 715.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </a>
                <a v-if="membro.email" :href="'mailto:' + membro.email" 
                   class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-1 hover:text-white transition-all duration-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-br from-primary-1 to-primary-2 text-white">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Agende uma Consulta com Nossa Equipe</h2>
          <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Nossos especialistas estão prontos para cuidar da sua saúde e bem-estar
          </p>
          <router-link to="/#agendamento" class="btn-secondary bg-white text-primary-1 text-lg px-8 py-4 hover:bg-gray-100">
            Agendar Avaliação Gratuita
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script>
import { ref } from 'vue'
import FooterSection from '../components/sections/FooterSection.vue'

export default {
  name: 'Team',
  components: {
    FooterSection
  },
  setup() {
    const equipe = ref([
      {
        nome: 'Dra. Ana Silva',
        cargo: 'Fisioterapeuta Ortopédica - Coordenadora',
        foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Especialista em tratamento de lesões esportivas e reabilitação pós-cirúrgica com mais de 8 anos de experiência.',
        especializacao: 'Ortopedia e Traumatologia',
        qualificacoes: ['CREFITO-3 12345', 'Pós-graduação USP', 'RPG', 'Pilates'],
        experiencia: '8 anos de experiência clínica, coordenadora da equipe desde 2020',
        especialidades: ['Lesões esportivas', 'Reabilitação pós-cirúrgica', 'Dor lombar', 'Artrose', 'Tendinites'],
        linkedin: '#',
        instagram: '#',
        email: 'ana.silva@scclinica.com.br'
      },
      {
        nome: 'Dr. Carlos Oliveira',
        cargo: 'Fisioterapeuta Neurológico',
        foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Especialista em reabilitação neurológica com mestrado em neurociência aplicada.',
        especializacao: 'Neurologia Aplicada',
        qualificacoes: ['CREFITO-3 23456', 'Mestrado UNIFESP', 'Bobath', 'PNF'],
        experiencia: '6 anos focados em reabilitação neurológica',
        especialidades: ['AVC', 'Parkinson', 'Esclerose múltipla', 'Paralisia cerebral', 'Distúrbios do equilíbrio'],
        linkedin: '#',
        instagram: '#',
        email: 'carlos.oliveira@scclinica.com.br'
      },
      {
        nome: 'Dra. Mariana Santos',
        cargo: 'Especialista em Pilates Clínico',
        foto: 'https://images.unsplash.com/photo-1594824780851-afef48d9c0a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Especialista em Pilates terapêutico com formação avançada em biomecânica do movimento.',
        especializacao: 'Pilates Clínico e Biomecânica',
        qualificacoes: ['CREFITO-3 34567', 'Pilates Completo', 'Biomecânica UNICAMP'],
        experiencia: '5 anos especializados em Pilates e correção postural',
        especialidades: ['Pilates terapêutico', 'Correção postural', 'Fortalecimento core', 'Flexibilidade', 'Respiração'],
        linkedin: '#',
        instagram: '#',
        email: 'mariana.santos@scclinica.com.br'
      },
      {
        nome: 'Dr. João Costa',
        cargo: 'Fisioterapeuta Respiratório',
        foto: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Especialista em fisioterapia respiratória e cardiorrespiratória com ampla experiência hospitalar.',
        especializacao: 'Fisioterapia Respiratória',
        qualificacoes: ['CREFITO-3 45678', 'Especialização INCOR', 'UTI Respiratória'],
        experiencia: '7 anos em fisioterapia respiratória hospitalar e ambulatorial',
        especialidades: ['Fisioterapia respiratória', 'Reabilitação cardíaca', 'DPOC', 'Asma', 'Pneumonia'],
        linkedin: '#',
        instagram: '#',
        email: 'joao.costa@scclinica.com.br'
      },
      {
        nome: 'Dra. Laura Ferreira',
        cargo: 'Fisioterapeuta Pediátrica',
        foto: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Especialista no desenvolvimento neuropsicomotor infantil e reabilitação pediátrica.',
        especializacao: 'Fisioterapia Pediátrica',
        qualificacoes: ['CREFITO-3 56789', 'Pós-graduação Pediatria', 'Bobath Pediátrico'],
        experiencia: '4 anos dedicados ao atendimento infantil',
        especialidades: ['Desenvolvimento motor', 'Paralisia cerebral infantil', 'Atraso neuropsicomotor', 'Ortopedia pediátrica'],
        linkedin: '#',
        instagram: '#',
        email: 'laura.ferreira@scclinica.com.br'
      },
      {
        nome: 'Dr. Rafael Miranda',
        cargo: 'Acupunturista',
        foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Especialista em acupuntura tradicional chinesa e medicina integrativa.',
        especializacao: 'Acupuntura e Medicina Chinesa',
        qualificacoes: ['CREFITO-3 67890', 'Acupuntura AMBA', 'Medicina Chinesa'],
        experiencia: '6 anos praticando acupuntura e técnicas orientais',
        especialidades: ['Acupuntura tradicional', 'Dor crônica', 'Fibromialgia', 'Ansiedade', 'Insônia'],
        linkedin: '#',
        instagram: '#',
        email: 'rafael.miranda@scclinica.com.br'
      }
    ])

    return {
      equipe
    }
  }
}
</script>

<style scoped>
.text-primary-1 {
  color: #2AB391;
}
</style>