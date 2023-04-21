<script>
</script>

<template>
    <div class="container">
        <h1>C</h1>

        <div class="menu">
            <ul>
                <li><router-link to="/">Accueil</router-link></li>
                <li><router-link to="/projets">Projets</router-link></li>
                <li><router-link to="/a-propos">À propos</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </div>
        <div class="burger">
            <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
            <font-awesome-icon icon="fa-solid fa-bars" size="2xl" style="color: #837c69;" />
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-family: "Ragantie";
    font-size: 4rem;
    color: #C07156;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    position: fixed;
    width: 100vw;
}

.menu li {
    list-style-type: none;
    display: inline-block;
    padding: 1rem;
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
}

a {
    text-decoration: none;
    color: #837C69;
}

a:hover {
    text-decoration: none;
    color: #D6A17F;
}

a.router-link-active {
    color: #C07156;
    text-decoration: none;
}

.burger {
    display: none;
}

@media only screen and (max-width: 575px) {
    .burger {
        display: block;
        cursor: pointer;
        padding: 0.5rem;
    }
    .menu{
        display: none;
    }

}
</style>