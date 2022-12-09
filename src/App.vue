<template>
  <div id="app">
    <!-- <Home/> -->
    <router-view />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home,
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  background-color: #d0d0d0;
/* opacity: 0.6; */
background-image:  linear-gradient(30deg, #d8d8d8 12%, transparent 12.5%, transparent 87%, #d8d8d8 87.5%, #d8d8d8), linear-gradient(150deg, #d8d8d8 12%, transparent 12.5%, transparent 87%, #d8d8d8 87.5%, #d8d8d8), linear-gradient(30deg, #d8d8d8 12%, transparent 12.5%, transparent 87%, #d8d8d8 87.5%, #d8d8d8), linear-gradient(150deg, #d8d8d8 12%, transparent 12.5%, transparent 87%, #d8d8d8 87.5%, #d8d8d8), linear-gradient(60deg, #d8d8d877 25%, transparent 25.5%, transparent 75%, #d8d8d877 75%, #d8d8d877), linear-gradient(60deg, #d8d8d877 25%, transparent 25.5%, transparent 75%, #d8d8d877 75%, #d8d8d877);
background-size: 28px 49px;
background-position: 0 0, 0 0, 14px 25px, 14px 25px, 0 0, 14px 25px;
  /* background-color: #2c3e50; */
  max-height: 100vh;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  /* background-color: #2c3e50; */
}
</style>
