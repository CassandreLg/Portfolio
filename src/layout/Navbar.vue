<script>
export default {
    data() {
        return {
            view: {
                topOfPage: true
            }
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            if (window.pageYOffset > 0) {
                if (this.view.topOfPage) this.view.topOfPage = false
            } else {
                if (!this.view.topOfPage) this.view.topOfPage = true
            }
        }
    }
}



</script>

<template>
    <div class="container">
        <nav :class="{ 'onScroll': !view.topOfPage }">
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
        </nav>
    </div>
</template>

<style scoped>
h1 {
    font-family: "Ragantie";
    font-size: 4rem;
    color: #C07156;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 5rem;
    position: fixed;
    left: 0;
    top: 0;
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
    transition: 0.5s;
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

    .menu {
        display: none;
    }

}

nav.onScroll {
    box-shadow: 0 0 5px #8e8e8e;
    background-color: rgba(255, 255, 255, 0.95);
    /* transition: 0.3s; */
}
</style>