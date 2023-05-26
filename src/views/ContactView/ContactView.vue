
<script>
import Form from '../../components/form/Form.vue';

export default {
    components: {
        Form
    },
    data() {
        return {

        };
    }
};
</script>



<template>
    <div class="container">
        <div class="form">
            <Form></Form>
        </div>

        <div class="content">
            <h1>On discute ?</h1>
        </div>

    </div>
</template>

<style scoped>
.container {
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.content h1{
  font-size: 2.5rem;
  font-family: "Naibo";
  text-align: center;
  color: #837C69;
}

.form{
    flex-basis: 33%;
    /* width: 100%; */
}

</style>