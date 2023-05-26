<script>
import { useProjectsStore } from '../../stores/projects';
import Input from '../../components/form/Input.vue';
import Button from '../../components/buttons/Button.vue';


const projectsStore = useProjectsStore();

export default {
    components: {
        Input,
        Button,
    },

    data() {
        return {
            titre: '',
            description: '',
            date: '',
            contexte: '',
            themes: '',
            lien: '',

            type: '&#xf0d7 Développement',
            types: [
                { text: 'Développement', value: 'DEV' },
                { text: 'Design Graphique', value: 'DESIGN' },
                { text: 'Illustration', value: 'ILLU' }
            ]
        };
    }
}
</script>

<template>
    <div class="container">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

        <Form>
            <div class="form">
                <Input name="Titre" label="Titre" placeholder="Titre" type="text" v-bind:value="titre"
                    @update:value="titre = $event" />

                <Input name="Description" label="Description" placeholder="Description" type="text"
                    v-bind:value="description" @update:value="description = $event" />

                <Input name="Date" label="Date" placeholder="Année de réalisation" type="text" v-bind:value="date"
                    @update:value="date = $event" />

                <Input name="Contexte" label="Telephone" placeholder="Contexte" type="text" v-bind:value="myInputValue"
                    @update:value="myInputValue = $event" />


                <!-- <select name="Type" id="Type">
                    <option value="DEV" class="fa">
                        <p>Développement</p>
                    </option>
                    <option value="DESIGN">
                        Design Graphique
                    </option>
                    <option value="ILLU">
                        Illustration
                    </option>
                </select> -->

                <!-- <v-select v-model="type" :items="types" label="Type" outlined>
                    <template v-slot:prepend-item>
                        <v-icon>mdi-caret-down</v-icon>
                    </template>
                </v-select> -->

                <Input name="Thèmes" label="Objet" placeholder="Thème(s)" type="text" v-bind:value="myInputValue"
                    @update:value="myInputValue = $event" />

                <Input name="Lien" label="Objet" placeholder="Lien" type="text" v-bind:value="myInputValue"
                    @update:value="myInputValue = $event" />

                <Button type="submit"> Envoyer </Button>

            </div>
        </Form>

    </div>
</template>

<style>
.container {
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 1rem;
    /* max-width: 100%; */
}

select {
    border: solid 2px rgb(165, 164, 137);
    padding: 1rem;
    border-radius: 50px;
    width: 100%;
    margin-top: 1rem;
    box-sizing: border-box;
    font-family: 'FontAwesome';
}
</style>