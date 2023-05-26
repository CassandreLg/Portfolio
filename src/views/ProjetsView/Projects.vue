<script>
import { useProjectsStore } from '../../stores/projects';

const projectsStore = useProjectsStore();

export default {
    mounted() {     
        projectsStore.fetchProjects();
    },
    computed: {
        filteredItems() {
            return projectsStore.items.filter(item => item.type == projectsStore.selectedType);
        }
    }
}
</script>


<template>
    <ul class="container">
        <li v-for="item in filteredItems" :key="item.id" class="card" @click="this.$router.push('/projet-detail/' + item.id)">
            <div class="card__image">
                <img :src="item.cover" :alt="item.title" />
            </div>
            <h2 class="card__title">{{ item.title }}</h2>
        </li>
    </ul>
</template>

<style>
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.container li {
    list-style-type: none;
}

.card {
    width: 28rem;
    height: 18rem;
    margin: 2rem;
    font-size: 1rem;
    cursor: pointer;
}

.card__image img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.card:hover {
    position: relative;
}

.card:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(248, 239, 230, 0.95);
    z-index: 1;
}

.card:hover h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #C07156;
    text-align: center;
    z-index: 2;
}

.card__image {
    position: relative;
    height: 100%;
}

.card__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #C07156;
    text-align: center;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    font-family: "Naibo";
}

.card:hover .card__title {
    opacity: 1;
}
</style>