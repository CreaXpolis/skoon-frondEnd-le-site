<template>
  <CardEvent>
  <div class="render" v-for="evenement in evenements"
      :key="evenement.id"
      :nom="evenement.nom"
      :description="evenement.description">
        <a> <img
          src="../assets/mancleans.jpg"
          alt="man cleans" /> </a>
         <router-link to="/IdEvent">
         <h2> {{evenement.nom}}</h2>
        </router-link> 
          <p>{{evenement.description}}</p>
       </div>
   </CardEvent>    
</template>

<script>
import { mapState } from "vuex";
import CardEvent from "../components/CardEvent.vue";

export default {
  components: {   
     CardEvent,
  },
  created() {
    this.$store.dispatch("evenements/fetchAllEvents");
  },

  computed: {
    ...mapState("evenements", ["evenements"]),
  },
};
</script>

<style scoped>

.render{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-between;
  box-shadow: 5px 5px 5px rgba(197, 240, 9, 0.3);
  background-color: white;
  text-align: justify;
  width: 20%;
  margin: 50px;
 
}
.render img{
    width: 80%;
    height: 70%;
    margin-left: 10%;
    margin-top: 20%;
    
}
h2 {
  font-size: 1.5rem;
  color: #49ada1;
  text-align: center;
  padding-bottom: 10px;
}
p{ 
  text-align: center;
}
.render:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0,0,0,0.11),
    0 24px 46px var(--box-shadow-color);
}
@media only screen and (max-width: 460px){
  .render{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-between;
  box-shadow: 5px 5px 5px rgba(197, 240, 9, 0.3);
  background-color: white;
  text-align: justify;
  width: 40%;
  margin: 10px;
  margin-right: 25px;
 
}

}
@media only screen and (min-width: 460px) and (max-width: 750px){
  .render{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-between;
  box-shadow: 5px 5px 5px rgba(197, 240, 9, 0.3);
  background-color: white;
  text-align: justify;
  width: 30%;
  margin: 10px;
  margin-right: 25px;
 
}
}
</style>