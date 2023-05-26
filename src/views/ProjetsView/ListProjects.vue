<script>
import { useProjectsStore } from '../../stores/projects';

const projectsStore = useProjectsStore();

export default {

    mounted() {
        projectsStore.fetchProjects();
    },
    computed: {
        filteredItems() {
            return projectsStore.filteredItems();
        }
    }
}
</script>


<template>
    <ul class="container">
        <li v-for="item in filteredItems" :key="item.id" @click="this.$router.push('/projet-detail/' + item.id)">
            <h2>{{ item.title }}</h2>
        </li>
    </ul>
</template>

<style></style>