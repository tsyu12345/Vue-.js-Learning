<template>
  <div id="app">
    <Sidebar />
    <Main />
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue';
  import Main from './components/Main.vue';

  export default {
    name: 'App',
    components: {
      Sidebar,
      Main
    }
  }
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
}
</style>
