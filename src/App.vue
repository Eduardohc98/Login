<template>
  <div id="app">
    <div id="nav">
      <!-- <Login></Login> -->
      <!-- <Cajero></Cajero> -->
      <Cocina></Cocina>


      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <!-- <router-view/> --> 
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Cajero from './components/Cajero.vue'
import Cocina from './components/Cocina.vue'
// import HelloWord from './components/HelloWorld.vue'

export default {
   name: 'app',

   components:{
     Login,
    //  HelloWord
     Cajero,
     Cocina
   },
  //  methods: {
  //    loginRouter: function(){
  //      <Login></Login>
  //    }
  //  }


  
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
