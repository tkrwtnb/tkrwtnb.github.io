<template>
  <v-app>
    <Title></Title>
    <AboutMe></AboutMe>
  </v-app>
</template>

<script>
import Title from './components/Title'
import AboutMe from './components/AboutMe'

export default {
  name: 'App',

  components: {
    Title,
    AboutMe
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>