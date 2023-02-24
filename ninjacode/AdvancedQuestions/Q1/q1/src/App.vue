<template>
    <div id="app">
        <SidebarComponent />
        <MainComponent />
    </div>
</template>

<script>
import SidebarComponent from './components/Sidebar.vue';
import MainComponent from './components/Main.vue';

export default {
    name: 'App',
    components: {
        SidebarComponent,
        MainComponent,
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
  display: flex;
  min-height: 100vh;
}
</style>