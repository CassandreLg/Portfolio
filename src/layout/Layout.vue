<script>
import Navbar from './Navbar.vue';
  
export default {
  components: {
    Navbar,
  }
}
</script>

<template>
  <div class="navbar">
    	<Navbar />
  </div>

    <slot></slot>
</template>

<style>
.navbar{
  position: fixed;
  z-index: 2;
  top: 0;
}
</style>