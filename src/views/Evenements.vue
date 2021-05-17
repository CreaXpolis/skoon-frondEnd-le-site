<template>
  <div class="home">
    <SkoonAccroche/>
    <!--<form action="Evenements.vue" method="Get">
    <div>
<label for="site-search">Entrez une adresse:</label>
<input type="search" id="site-search" name="q"
       aria-label="Search through site content">
  </div>
    </form>-->
<button>Search</button>

  </div>
    <div class="wrapper">
    <div class="grid">
      <EventView
      v-for="Evenements in Evenements"
      :key="Evenements.id"
      :id="Evenements.id"
      :nom="Evenements.nom"
      :description="Evenements.description"
      :adresse_id="Evenement.adresse_id"></EventView>
    </div>
    </div>
</template>

<script>
import EventView from '@/components/EventView.vue';
import SkoonAccroche from "../components/SkoonAccroche.vue";

export default {
  components: {
   SkoonAccroche, EventView,
    
  },

  props: ["Evenements"],

  mounted() {
    this.fetchAllEvents();
  },

  methods: {
  
    fetchAllEvents() {
      fetch("https://localhost:8081/evenement")
        .then((response) => response.json())
        .then((data) => {
          this.$store.commit("setEvenements", data);
        })
        .catch((err) => {
          console.error("erreur de chargement", err);
        });
    },
    computed: {
      Evenements() {
        return this.$store.getters.Evenements;
      },
    },
  },
};
</script>

<style scoped>
.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		width: 100%;
		gap: 10px;
}

h1{
  font-family: "Prompt", sans-serif;
  font-size: 36px;
  font-weight: 300;
  color: #a94d19;

  margin: 0;
  background-color: #fcf8f2;

}
.wrapper div:nth-child(4n + 1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #1ecaae;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 10px;
  grid-auto-flow: dense;
}
label {
    display: block;
    font:  "Prompt", sans-serif;

}

input,
label {
    height: 70px;
}


</style>


