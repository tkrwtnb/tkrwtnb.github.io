<template>
  <v-app>
    <Title></Title>
    <AboutMe></AboutMe>
    <Works></Works>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Title from './components/Title'
import AboutMe from './components/AboutMe'
import Works from './components/Works'
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    Title,
    AboutMe,
    Works,
    Footer
  },

  data: () => ({
    //
  }),
  
};
</script>

<style>

</style>