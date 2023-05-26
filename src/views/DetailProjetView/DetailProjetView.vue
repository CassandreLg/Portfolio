<script>
import { getProject } from '../../api/projectsApi';
import BackButton from '../../components/buttons/BackButton.vue';

export default {
    data() {
        return {
            item: undefined
        }
    },
    mounted() {
        const projectId = this.$route.params.id
        this.item = getProject(projectId)
    },
    components: {
        BackButton
    }

}
</script>

<template>
    <div v-if="item">
        <div class="container">
            <div>
                <BackButton @click="this.$router.push('/projets')"> </BackButton>
            </div>

            <div class="project">
                <div class="img">
                    <img :src="item.cover" :alt="item.title" />
                </div>

                <div class="content">
                    <h1>{{ item.title }}</h1>
                    <p class="description">{{ item.description }}</p>
                </div>
            </div>

            <div class="details">
                <hr color=#A8A8A8>
                <div class="infos">
                    <p>Expertise : {{ item.themes }}</p>
                    <p>Date : {{ item.date }}</p>
                    <p>Contexte : {{ item.context }}</p>
                </div>
                <hr color=#A8A8A8>
            </div>

        </div>

    </div>
    <div v-else>
        <p>Contenu en cours de chargement</p>
    </div>
</template>

<style scoped>
h1 {
    font-family: 'Naibo';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 95%;
}

p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 146.5%;
}

.container {
    display: flex;
    flex-direction: column;
    margin-top: 10rem;
    padding-left: 10rem;
    padding-right: 10rem;
}

.project {
    display: flex;
    margin-top: 2rem;
}

.img {
    flex-basis: 60%;
    margin-right: 3rem;
}

.img img {
    max-width: 100%;
}

.content {
    flex-basis: 40%;
}

.description {
    padding-top: 3rem;
}

.details {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.infos {
    display: flex;
    justify-content: center;
}

.infos p {
    padding: 1rem;
    color: #A8A8A8;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 146.5%;
}
</style>