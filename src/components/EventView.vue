<template>
  <div class="wrapper">
    <div class="EventView">
      <div class="general">
        <div class="id">{{ id }}</div>
        <div class="nom">{{ nom }}</div>
        <div class="description">{{ description }}</div>
        <div class="adresse_id">{{ adresse_id }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventView",
  props: ["id", "nom", "description", "adresse_id"],
  methods: {},
  data: () => {
    return {
      value: "valeur",
    };
  },
  computed: {
    Evenements() {
      return {
        id: this.id,
        nom: this.nom,
        description: this.descritpion,
        adresse_id: this.adresse_id,
      };
    },
  },
};
</script>

<style scoped>
.EventView {
  background-color: #bdddec;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: column;
  padding: 15px 20px;
  border-radius: 15px;
  gap: 10px;
  height: 100%;
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
</style>