<script>

</script>


<template>
  <div class="container">

    <div class="apropos">

      <div class="title">
        <h1>A propos</h1>
      </div>

      <div class="text">

        <p>
          Hello !
          Je suis Cassandre, une Développeuse Front créative récemment reconvertie :)
          Auparavant Designer graphique et Illustratrice, j’aime donner vie à de beaux projets et les rendre uniques en
          combinant mes compétences en développement web et en design graphique.

          Durant mon temps libre, j’élève des geckos à crête, je dessine et je collectionne des plantes 🌱 J’aime aussi
          partir
          à l’aventure avec mon chien 🐾
        </p>
      </div>

      <div class="img">
        <img src="/src/assets/img/portrait.jpg" alt="Cassandre Portrait">
      </div>

    </div>

  </div>
</template>

<style scoped>

.apropos {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem;
  margin-top: 10rem;
}
.title{
  flex-basis: 20%;
}

.text {
  flex-basis: 40%;
  padding-left: 2rem;
  padding-right: 2rem;
}

.img {
  flex-basis: 30%;
}

.img img {
  max-width: 100%;
}

.title h1 {
  font-size: 4rem;
  font-family: "Naibo";
  color: #C07156;
  transform: rotate(-0.25turn);
  margin-block-start: 0;
  margin-block-end: 0;
}

.text p {
  font-size: 1.3rem;
  font-family: 'Segoe UI';
}
</style>