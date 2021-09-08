<template>
  <div>
    <GridCardEvent>
  <div class="card">
    <slot></slot>
  </div>  
    </GridCardEvent>   
  </div>

</template>

<script>
import GridCardEvent from "../components/GridCardEvent.vue";
export default {
  name: "CardEvent",
  components: { 
  GridCardEvent
  }
};
</script>
<style scoped>
.card{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  box-shadow: 5px 5px 5px rgba(63, 16, 170, 0.3);
  text-align: justify;
  width: 100%;
}

</style>
