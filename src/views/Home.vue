<template>
  <div class="home">
    <SkoonAccroche/>
    <Skoonestla/>
    <SkoonPoll/>
    <SkoonChiffres/>
    <SkoonFilles/>
    <IconeGroupe/>
    <FooterPlan/>
    <CGV/>

    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
 //@ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//export default {
 // name: 'Home',
//  components: {
//    HelloWorld, 
//  }
//}

import SkoonAccroche from "../components/SkoonAccroche.vue";
import Skoonestla from "../components/Skoonestla.vue";
import SkoonPoll from "../components/SkoonPoll.vue";
import SkoonChiffres from "../components/SkoonChiffres.vue";
import SkoonFilles from "../components/SkoonFilles.vue";
import IconeGroupe from "../components/IconeGroupe.vue";
import FooterPlan from "../components/FooterPlan.vue";
import CGV from "../components/CGV.vue";

export default {
 name: 'Home',
components: {
  SkoonAccroche, Skoonestla, SkoonPoll, SkoonChiffres, SkoonFilles, IconeGroupe, FooterPlan, CGV
  }
}
</script>


