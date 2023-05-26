<script>
import { RouterView } from 'vue-router'
import Layout from './layout/Layout.vue'

  
export default {
  components: {
    Layout
  }
}

</script>

<template>
	<Layout>
    <RouterView></RouterView>
  </Layout>
</template>