<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <div class="Actualites">
    <h1>Actualités</h1>
    <Actualites1 />
    <Actualites2 />
    <Actualites3 />
  </div>
</template>

<script>
import Actualites1 from "../components/Actualites1.vue";
import Actualites2 from "../components/Actualites2.vue";
import Actualites3 from "../components/Actualites3.vue";

export default {
  name: "Actualites",
  components: {
    Actualites1,
    Actualites2,
    Actualites3,
  },
};

</script>
<style scoped>
.Actualites {
  width: 1440px;
  height: 600px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fcf8f2;
  font-family: "Prompt", sans-serif;

}
.Actualites h1{
  font-size: 48px;
  font-weight: 600;
}

.card {
    width: 400px;
    height: auto;
    float: left;
    margin-left: 50px;
    padding: 10px;
    margin-top: 50px;
}
</style>
