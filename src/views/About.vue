<template>
  <div>
    <!-- Hero Section -->
    <section class="pt-24 bg-gradient-to-br from-primary-1 to-primary-2 text-white">
      <div class="container section-padding">
        <div class="text-center" data-aos="fade-up">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">Nossa História</h1>
          <p class="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Mais de uma década dedicada ao cuidado da sua saúde e bem-estar
          </p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Uma Jornada de <span class="text-primary-1">Dedicação</span> e <span class="text-secondary">Excelência</span>
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              Fundada em 2013, a SC Clínica nasceu do sonho de transformar vidas através da fisioterapia. 
              Nossa missão sempre foi proporcionar tratamentos de qualidade, baseados em evidências científicas 
              e com um atendimento humanizado que vai além da técnica.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed mb-8">
              Ao longo dos anos, evoluímos constantemente, investindo em tecnologia de ponta, 
              capacitação profissional e ampliação de nossas especialidades para atender 
              todas as necessidades de nossos pacientes.
            </p>
            
            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="text-center">
                <div class="text-2xl font-bold text-primary-1">10+</div>
                <div class="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-primary-1">5000+</div>
                <div class="text-sm text-gray-600">Pacientes Atendidos</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-primary-1">15+</div>
                <div class="text-sm text-gray-600">Especialidades</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-primary-1">98%</div>
                <div class="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Instalações da SC Clínica" 
              class="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="section-padding bg-gradient-to-br from-secondary/20 to-primary-2/10">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Nossos Valores</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Os pilares que guiam nossa atuação e definem quem somos
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(value, index) in values" :key="index" 
               class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-1 to-primary-2 rounded-full flex items-center justify-center mb-6 mx-auto">
              <component :is="value.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">{{ value.title }}</h3>
            <p class="text-gray-600 text-center leading-relaxed" v-if="value.description">{{ value.description }}</p>
            <ul v-else class="text-gray-600 space-y-2">
              <li v-for="item in value.items" :key="item" class="flex items-center">
                <svg class="w-4 h-4 text-primary-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <TimelineSection :timeline="timeline" />

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-br from-primary-1 to-primary-2 text-white">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Faça Parte da Nossa História</h2>
          <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Venha conhecer nossa clínica e descobrir como podemos cuidar da sua saúde
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/#agendamento" class="btn-secondary bg-white text-primary-1 text-lg px-8 py-4 hover:bg-gray-100">
              Agendar Avaliação Gratuita
            </router-link>
            <router-link to="/equipe" class="btn-secondary border-white text-white text-lg px-8 py-4 hover:bg-white hover:text-primary-1">
              Conhecer Nossa Equipe
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script>
import { ref } from 'vue'
import TimelineSection from '../components/sections/TimelineSection.vue'
import FooterSection from '../components/sections/FooterSection.vue'

export default {
  name: 'About',
  components: {
    TimelineSection,
    FooterSection
  },
  setup() {
    const values = ref([
      {
        title: 'Missão',
        icon: 'MissionIcon',
        description: 'Proporcionar tratamentos fisioterapêuticos de excelência, promovendo a recuperação, prevenção e melhoria da qualidade de vida de nossos pacientes através de cuidado humanizado e tecnologia avançada.'
      },
      {
        title: 'Visão',
        icon: 'VisionIcon',
        description: 'Ser referência nacional em fisioterapia, reconhecida pela inovação, qualidade dos serviços e impacto positivo na vida das pessoas, expandindo nosso alcance para transformar mais vidas.'
      },
      {
        title: 'Valores',
        icon: 'ValuesIcon',
        items: ['Excelência técnica', 'Humanização', 'Inovação contínua', 'Ética profissional', 'Trabalho em equipe']
      }
    ])

    const timeline = ref([
      {
        ano: '2013',
        titulo: 'Fundação da SC Clínica',
        descricao: 'Início das atividades com foco em fisioterapia ortopédica e uma equipe de 3 profissionais dedicados.'
      },
      {
        ano: '2015',
        titulo: 'Expansão dos Serviços',
        descricao: 'Incorporação de fisioterapia neurológica e respiratória, ampliando o atendimento para diferentes especialidades.'
      },
      {
        ano: '2017',
        titulo: 'Nova Sede',
        descricao: 'Mudança para instalações maiores e modernas, com equipamentos de última geração e ambiente acolhedor.'
      },
      {
        ano: '2019',
        titulo: 'Certificação de Qualidade',
        descricao: 'Conquista de certificações importantes e reconhecimento como centro de referência em fisioterapia.'
      },
      {
        ano: '2021',
        titulo: 'Era Digital',
        descricao: 'Implementação de tecnologias avançadas, telemedicina e sistemas de gestão integrados.'
      },
      {
        ano: '2023',
        titulo: 'Expansão da Equipe',
        descricao: 'Chegamos a uma equipe de 15+ especialistas, cobrindo todas as áreas da fisioterapia moderna.'
      }
    ])

    return {
      values,
      timeline
    }
  }
}
</script>

<style scoped>
.text-primary-1 {
  color: #2AB391;
}

.text-secondary {
  color: #E9D8A6;
}
</style>