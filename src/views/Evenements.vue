<template>
    <SkoonAccroche2/>   
    <EventView />
   <FooterPlan/>
   <CGV/>
</template>

<script>
import SkoonAccroche2 from "../components/SkoonAccroche2.vue";
import EventView from "../components/EventView.vue";
import FooterPlan from "../components/FooterPlan.vue";
import CGV from "../components/CGV.vue";

export default {
  components: {
   SkoonAccroche2,
   FooterPlan,
   CGV,
   EventView
  
  },

};
</script>

<style scoped>
.renderEvents{
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
}
</style>