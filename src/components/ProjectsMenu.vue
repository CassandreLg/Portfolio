<script>
import projectTypeEnum from '../api/projectTypeEnum';
import { useProjectsStore } from '../stores/projects';

const projectsStore = useProjectsStore();

export default {
    data() {
        return {
            projectTypes: projectTypeEnum
        }
    },

    methods: {
        onElementClick: (type) => {
            projectsStore.setSelectedType(type)
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="menu">
            <ul class="elements">
                <li @click="onElementClick(projectTypes.DESIGN)">Design Graphique / UI</li>
                <li @click="onElementClick(projectTypes.DEV)">Développement Web</li>
                <li @click="onElementClick(projectTypes.ILLU)">Illustration</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 8rem;
    margin-bottom: 2rem;
}

.menu ul {
    text-align: center;
}

.menu li {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    font-family: "Naibo";
    font-size: 1.3rem;
    color: #EAD6C9;
    display: inline;
}

a {
    text-decoration: none;
    color: #EAD6C9;
}

a:hover {
    text-decoration: none;
    color: #D6A17F;
    transition: 0.5s;
}

a.router-link-active {
    color: #C07156;
    text-decoration: none;
}

.elements {
    display: inline-block;
}
</style>