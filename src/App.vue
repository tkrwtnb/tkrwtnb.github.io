<template>
  <div id="app">
    <Title></Title>
    <AboutMe></AboutMe>
  </div>
</template>

<script>
import Title from './components/Title.vue'
import AboutMe from './components/AboutMe.vue'

export default {
  name: 'App',
  components: {
    Title,
    AboutMe
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}

html {
  background-color: #212121;
  padding: 0%;
  margin: 0%;

}
</style>
