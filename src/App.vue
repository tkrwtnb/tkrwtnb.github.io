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
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;400;500;700;800;900&display=swap');
.v-application {
  font-family: "M Plus 1p", sans-serif;
}
</style>