<template>
  <div id="app">
    <Title></Title>
    <AboutMe></AboutMe>
    <Works></Works>
  </div>
</template>

<script>
import Title from './components/Title.vue'
import AboutMe from './components/AboutMe.vue'
import Works from './components/Works.vue'

export default {
  name: 'App',
  components: {
    Title,
    AboutMe,
    Works
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, 'Noto Sans JP', sans-serif;
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
