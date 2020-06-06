<template>
  <v-app>
    <Title></Title>
    <AboutMe></AboutMe>
    <Works></Works>
  </v-app>
</template>

<script>
import Title from './components/Title'
import AboutMe from './components/AboutMe'
import Works from './components/Works'

export default {
  name: 'App',

  components: {
    Title,
    AboutMe,
    Works
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>