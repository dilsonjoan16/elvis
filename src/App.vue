<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>
    <Index/>-->
    <!--<Home msg="Welcome to Your Vue.js App"/>
    <hr>
    <Modul/>-->
    <IndexMovie/>
    <hr>
    <PokeApi/>
    <hr>
    <Movie/>
  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'
import Index from './components/Index.vue'*/
/*import Home from './components/Home.vue'
import Modul from './components/Modul.vue'*/
import IndexMovie from './components/IndexMovie'
import PokeApi from './components/PokeApi.vue'
import Movie from './components/Movie.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //Index,
    //Home,
    //Modul,
    IndexMovie,
    PokeApi,
    Movie
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
  margin-top: 60px;
}
</style>
