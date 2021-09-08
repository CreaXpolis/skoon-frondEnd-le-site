<template>
    <header>
      <div class="imglead">
        <img src="../assets/media/collect.jpeg " alt="Bouteille plastique sur la plage" />
      </div>
    </header>
      <div class="accroche">événements <br> de <br> collects</div>

</template>

<script>
export default {
    name: 'SkoonAccroche'
}
</script>

<style scoped>

header {
  width: 100%;
}
.imglead {
  position: relative;
  margin: 0 auto;
  text-align: center;
  margin-top: 60px;
}
.imglead img {
  width: 90%;
  height: 650px;
  text-align: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px; 
}
.accroche {
  position: absolute;
  width: 100%;
  top: 40%;
  text-align: center;
  font-size: 5.6rem;
  font-weight: 600;
  color: #fce72f;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  font-family: "Prompt", sans-serif;
  text-transform: uppercase;
}
@media only screen and (max-width: 460px){
header {
  width: 100%;
}
.imglead {
  position: relative;
  margin: 0 auto;
  text-align: center;
  margin-top: 60px;
}
.imglead img {
 width: 390px;
  height: 360px;
  text-align: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px; 
  margin-right: 30px;
  margin-left: -5px;
}
.accroche {
  position: absolute;
  width: 90%;
  top: 50%;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: #fce72f;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  font-family: "Prompt", sans-serif;
  text-transform: uppercase;
}
}

@media only screen and (min-width: 350px) and (max-width: 750px){
header {
  width: 100%;
}
.imglead {
  position: relative;
  margin: 0 auto;
  text-align: center;
  margin-top: 60px;
}
.imglead img {
  width: 290px;
  height: 230px;
  text-align: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px; 
}
.accroche {
  position: absolute;
  width: 100%;
  top: 46%;
  text-align: center;
  font-size: 2.3rem;
  font-weight: 590;
  color: #fce72f;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  font-family: "Prompt", sans-serif;
  text-transform: uppercase;

}
}
</style>
