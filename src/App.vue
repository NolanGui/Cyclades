<template>
  <div id="app">
    <v-app>
      <Header />
      <main>
        <router-view />
      </main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: Arial, sans-serif;
  overflow: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
}

main {
  flex-grow: 1;
  background-color: #f9f9f9;
  padding: 20px;
  overflow: auto;
}
</style>
