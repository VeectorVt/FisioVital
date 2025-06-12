<template>
  <div id="app">
    <Navbar />
    <router-view />
    <FloatingButtons />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FloatingButtons from './components/FloatingButtons.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    FloatingButtons
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f7fafc;
  margin: 0;
  padding: 0;
}

.section-padding {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .section-padding {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

.container {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
}

.btn-primary {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #2AB391, #7DD8C0);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(42, 179, 145, 0.3);
  text-decoration: none;
}

.btn-primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(42, 179, 145, 0.4);
  background: linear-gradient(135deg, #7DD8C0, #2AB391);
}

.btn-secondary {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: #2AB391;
  background-color: white;
  border: 2px solid #2AB391;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-secondary:hover {
  background: linear-gradient(135deg, #2AB391, #7DD8C0);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(42, 179, 145, 0.3);
}

.gradient-bg {
  background: linear-gradient(-45deg, #2AB391, #7DD8C0, #E9D8A6, #2AB391);
  background-size: 400% 400%;
  animation: parallax 15s ease infinite;
}

@keyframes parallax {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.floating-btn {
  position: fixed;
  z-index: 1000;
  transition: all 0.3s ease;
}

.floating-btn:hover {
  transform: scale(1.1);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>