<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logoskoon1.svg" />
    <skoonAccroche/>
    <skoonestla/>
    <skoonPoll/>
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
export default {
 name: 'Home',
components: {
  SkoonAccroche, Skoonestla, SkoonPoll
}
}
</script>


