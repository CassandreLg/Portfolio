<script>
import Input from './Input.vue';

export default {
  components: {
    Input
  },
  data() {
    return {
      nom: ''
    };
  }
};
</script>

<template>
    <form>
      <Input name="nom" label="Nom" type="text" placeholder="Nom *" v-model="nom" />
    </form>
  </template>