<script>
import Projects from './Projects.vue'
import ProjectsMenu from '../../components/ProjectsMenu.vue'

export default {
    components: {
        Projects,
        ProjectsMenu
    },
};
</script>


<template>
    <div class="title">
        <h1>Projets</h1>
    </div>

    <main class="container">

        <div class="content">
            <ProjectsMenu />
            <Projects />
        </div>

    </main>
</template>

<style scoped>

.menu{
    display: flex;
    justify-content: start;
}

.title h1 {
    position: fixed;
    left: 0;
    top: 50%;
    font-size: 3.5rem;
    font-family: "Naibo";
    color: #C07156;
    transform: rotate(-0.25turn);
    margin-block-start: 0;
    margin-block-end: 0;
    flex-basis: 20%;
}

</style>