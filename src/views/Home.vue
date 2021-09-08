<template>
<body>
  <div class="home">
    <SkoonAccroche/>
    <Skoonestla/>
    <FooterPlan/>
    <CGV/>

    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</body>
</template>

<script>

import SkoonAccroche from "../components/SkoonAccroche.vue";
import Skoonestla from "../components/Skoonestla.vue";
import FooterPlan from "../components/FooterPlan.vue";
import CGV from "../components/CGV.vue";

export default {
 name: 'Home',
components: {
  SkoonAccroche, Skoonestla, FooterPlan, CGV
  }
}
</script>

<style >
body{
  width:100%;
}
</style>

