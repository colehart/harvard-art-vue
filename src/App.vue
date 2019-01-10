<template>
  <div id="app">
    <GalleriesContainer msg="Welcome to Harvard Art Vue."/>
  </div>
</template>

<script>
import GalleriesContainer from './components/GalleriesContainer.vue'
export default {
  name: 'app',
  components: {
    GalleriesContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
