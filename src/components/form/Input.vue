<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    }
  }
};
</script>

<template>
    <div class="input">
      <input :id="name" :name="name" :type="type" :placeholder="placeholder" :value="value" @input="$emit('update:value', $event.target.value)" />
    </div>
  </template>

  <style scoped>

input{
    border: solid 2px #A5A489;
    padding: 1rem;
    border-radius: 50px;
    width: 100%;
    margin-top: 1rem;
    box-sizing: border-box;
}

.input{
  max-width: 100%;
  width: 100%;
}
</style>