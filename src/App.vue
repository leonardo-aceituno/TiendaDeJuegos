<template>
  <div id="app">
    <Navbar></Navbar>
    
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Navbar from "./components/navbar"

  export default {
    name: 'App',
    components: {
      Navbar,
    }
    
  }
</script>




<style scoped>
 .vista-enter-active, .vista-leave-active {
      transition: opacity .1s;
  }
  .vista-enter, .vista-leave-to{
      opacity: 0;
  }
</style>
