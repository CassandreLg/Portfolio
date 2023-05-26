<script>
import Input from './Input.vue';
import Button from '../buttons/Button.vue';

export default {
    components: {
        Input,
        Button
    },
    data() {
        return {
            myInputValue: ''
        }
    }
}
</script>

<template>
    <div class="form">
        <Input name="Nom" label="Nom" placeholder="Nom" type="text" v-bind:value="myInputValue" @update:value="myInputValue = $event" />

        <Input name="Prenom" label="Prenom" placeholder="Prénom" type="text" v-bind:value="myInputValue" @update:value="myInputValue = $event" />

        <Input name="Email" label="Email" placeholder="Email" type="email" v-bind:value="myInputValue" @update:value="myInputValue = $event" />

        <Input name="Telephone" label="Telephone" placeholder="Téléphone" type="text" v-bind:value="myInputValue" @update:value="myInputValue = $event" />

        <Input name="Objet" label="Objet" placeholder="Objet de votre message" type="text" v-bind:value="myInputValue" @update:value="myInputValue = $event" />

        <Button type="submit"> Envoyer </Button>
    
    </div>
</template>

<style scoped>
.form{
    display: flex;
    flex-direction: column;
    align-items: start;
    /* max-width: 100%; */
}
</style>
