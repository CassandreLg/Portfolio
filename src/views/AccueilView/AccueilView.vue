<script>

</script>

<template>
  <div class="container">
    <div class="titre">
      <h1>Cassandre</h1>
      <h1>Lelong</h1>
      <h2>Développeuse Créative</h2>
      <div class="etDesigner">
        <h2>&</h2>
        <h3>Designer Graphique</h3>
      </div>
    </div>

    <!-- ILLUSTRATIONS -->

    <div class="cloud_1">
      <img src="/src/assets/img/cloud_1.png" alt="illustration nuage">
    </div>

    <div class="cloud_2">
      <img src="/src/assets/img/cloud_2.png" alt="illustration nuage">
    </div>

    <div class="plant_4">
      <img src="/src/assets/img/plant_4.png" alt="illustration plante">
    </div>

    <div class="plant_4_2">
      <img src="/src/assets/img/plant_4.png" alt="illustration plante">
    </div>

    <div class="plant_3">
      <img src="/src/assets/img/plant_3.png" alt="illustration plante">
    </div>

    <div class="plant_1">
      <img src="/src/assets/img/plant_1.png" alt="illustration plante">
    </div>

    <div class="plant_1_1">
      <img src="/src/assets/img/plant_1.png" alt="illustration plante">
    </div>

    <div class="plant_4_1">
      <img src="/src/assets/img/plant_4.png" alt="illustration plante">
    </div>

    <div class="plant_5">
      <img src="/src/assets/img/plant_5.png" alt="illustration plante">
    </div>

    <div class="plant_3_1">
      <img src="/src/assets/img/plant_3.png" alt="illustration plante">
    </div>

    <div class="plant_3_2">
      <img src="/src/assets/img/plant_3.png" alt="illustration plante">
    </div>

    <div class="plant_2">
      <img src="/src/assets/img/plant_2.png" alt="illustration plante">
    </div>

    <div class="plant_2_2">
      <img src="/src/assets/img/plant_2.png" alt="illustration plante">
    </div>

    <div class="plant_6">
      <img src="/src/assets/img/plant_6.png" alt="illustration plante">
    </div>
  </div>
</template>

<!-- STYLE -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #F8EFE6;
  overflow: hidden;
}

h1 {
  font-size: 4rem;
  font-family: "Naibo";
  text-align: center;
  color: #C07156;

}

.titre h1 {
  margin-block-start: -2rem;
  margin-block-end: 0;
  z-index: 1;
}

h2 {
  font-size: 2.5rem;
  font-family: "Naibo";
  text-align: center;
  color: #837C69;
}

.titre h2 {
  margin-block-start: 0;
  margin-block-end: 0;
  z-index: 1;
}

.etDesigner{
  display: flex;
  justify-content: center;
}

.etDesigner h2{
  margin-right: 1rem;
}

.etDesigner h3{
  font-size: 2.3rem;
  font-family: "Naibo";
  text-align: center;
  color: #A5A489;
  background-color: #fffbf8;
  display: inline-block;
  z-index: 1;
  margin-block-end: 0;
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

@keyframes deplacement {
  0% {
    left: 29rem;
    opacity: 0%;
  }

  5% {
    opacity: 100%;
  }

  60% {
    opacity: 100%;
  }

  90% {
    opacity: 100%
  }

  100% {
    left: 60%;
    opacity: 0%;
  }
}

@keyframes deplacement2 {
  0% {
    right: 38rem;
    opacity: 0%;
  }

  5% {
    opacity: 90%;
  }

  60% {
    opacity: 90%;
  }

  90% {
    opacity: 90%
  }

  100% {
    right: 0%;
    opacity: 0%;
  }
}

/* ILLUSTRATIONS */
.cloud_1 {
  position: absolute;
  left: 29rem;
  top: 23rem;
  animation: deplacement 45s linear infinite;
}

.cloud_1 img {
  width: 400px;
}

.cloud_2 {
  position: absolute;
  top: 12rem;
  right: 38rem;
  animation: deplacement2 80s linear infinite;
}

.cloud_2 img {
  width: 250px;
}

.plant_1 {
  position: absolute;
  bottom: -5rem;
  left: 0.5rem;
}

.plant_1 img {
  width: 290px;
}

.plant_3 {
  position: absolute;
  bottom: -5rem;
  left: 13rem;
}

.plant_3 img {
  width: 175px;
  transform: rotate(0.1turn);
}

.plant_3_1 {
  position: absolute;
  bottom: -5rem;
  right: 18rem;
}

.plant_3_1 img {
  width: 120px;
  transform: rotate(-0.05turn);
}

.plant_3_2 {
  position: absolute;
  bottom: -19rem;
  right: 28rem;
}

.plant_3_2 img {
  width: 300px;
  transform: rotate(0.25turn);
}

.plant_1_1 {
  position: absolute;
  bottom: -5rem;
  right: 10rem;
}

.plant_1_1 img {
  width: 200px;
  transform: rotate(-0.1turn);
}

.plant_2 {
  position: absolute;
  bottom: -6rem;
  right: -2rem;
}

.plant_2 img {
  width: 250px;
  transform: rotate(-0.03turn);
}

.plant_2_2 {
  position: absolute;
  bottom: -19rem;
  right: 46rem;
}

.plant_2_2 img {
  width: 350px;
  -webkit-transform: scaleX(-1);
  transform: rotate(0.20turn);
}

.plant_5 {
  position: absolute;
  bottom: -0.5rem;
  left: 20rem;
}

.plant_5 img {
  width: 450px;
}

.plant_6 {
  position: absolute;
  bottom: -3rem;
  left: 45rem;
}

.plant_6 img {
  width: 200px;
  transform: rotate(-0.04turn);
}

.plant_4 {
  position: absolute;
  bottom: -0.5rem;
  left: 0rem;
}

.plant_4 img {
  width: 250px;
}

.plant_4_2 {
  position: absolute;
  bottom: -1rem;
  left: 46rem;
}

.plant_4_2 img {
  width: 230px;
  transform: rotate(0turn);
  -webkit-transform: scaleX(-1);
}

.plant_4_1 {
  position: absolute;
  bottom: -0.5rem;
  right: -5rem;
}

.plant_4_1 img {
  width: 400px;
}</style>