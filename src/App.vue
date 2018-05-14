<template>
  <div id="app">
    <HelloWorld/>
    <Intro/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Intro from '@/components/Intro'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Intro
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
