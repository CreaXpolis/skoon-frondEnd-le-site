<template>
  <main class="corps">
    <section class="intro">
      <div class="intro1">
        <h1>Skoon</h1>
        <p>
          est née de l’envie d’insuffler un nouveau souffle à notre
          environnement qui suffoque.<br />
          Les Skooners ont decidés de remonter leurs manches et donner de leurs
          temps pour en donner plus à notre planète.
        </p>
      </div>
    </section>
    <div class="img">
      <img
        src="../assets/crabpolutionsea.jpg"
        alt="Une main rammasse une bouteille plastique"
        style="margin-top: 60px; height:70%;"
      />
    </div>
    <section class="about1">
      <h3>La pollution est partout</h3>
      <p>
        Nos mers, nos océans, nos fleuves et nos rivières mais aussi dans nos
        forêts, campagnes et villes. Comme nous tu as dû voir, les platanes
        recouvert de sacs plastique, les megots s’entasser dans les canivau, les
        mouchoires, bouteilles et cannettes choire sur les pavés.
      </p>
    </section>
    <section class="cent">
      <div class="imgpollution">
        <img src="../assets/fagnplastic1.jpg" alt="megots pollution plage" />
      </div>
      <div class="megots">
        <h2>25 000</h2>
        <p>Tonnes de mégots/an <br />rien qu’en France.</p>
        <h2>1 à 2</h2>
        <p>Ans pour la disparition <br />d’un mégot dans la <br />nature.</p>
      </div>
    </section>
    <div class="img">
      <img
        src="../assets/media/petites-filles1.jpg"
        alt="Petites filles sur la plages"
      />
    </div>
    <section class="about2">
      <h3>JOINS TOI AUX SKOONER DE FRANCE ET D’AILLEURS</h3>
      <p>
        Parce que la terre est notre responsabilité à tous, parce qu’il n’est
        pas nécessaire d’attendre que nos gouvernements agissent, et surtout
        parce que c’est à la portée de tous. Viens, joins-toi à nous, aide nous
        à rallonger la vie des ours blancs, des perroquets bleus de Patagonie
        mais un peu aussi la tienne.
      </p>
    </section>
    <section class="cent">
      <div class="cent1">
        <h3>Comment ça marche</h3>
        <img
          src="../assets/media/incone-group1.svg"
          alt="Icones de partage"
        />
      </div>
      <hr
        style="width:1140px; color: #a94d19; height: 1px; float:left; margin-left: 45px; margin-top: 80px; margin-bottom: 50px;"
      />
    </section>
  </main>
</template>

<style scoped>
.corps {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: center;
  margin-top: 10%;
  margin-top: auto;
  background-color: #fcf8f2;
  font-family: "Prompt", sans-serif;
}
section {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  padding: 20px;
  margin: 90px;
  background-color: #fcf8f2;
  font-family: "Prompt", sans-serif;
  font-size: 1.3rem;
  color: #a94d19;
  text-align: justify;
  max-height: 350px;
}
.intro {
  width: 100%;
  text-align: start;
}
.intro1 {
  width: 60%;
}
h3 {
  font-size: 1.4rem;
  color: #49ada1;
  text-align: center;
  text-transform: uppercase; 
}
h1 {
  font-size: 3rem;
  color: #49ada1;
}
.about1 {
  width: 30%;
  margin-left: 20%;
  margin-top: 10px;
}
.about2 {
width: 30%;
  margin-left: 20%;
}
.img img {
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  max-height: 600px;
  width: 450px;
  margin-top: 20%;
  margin-left: 30%;
}
.text {
  float: justify;
}
.cent {
  width: 100%;
  text-align: center;
  margin-left: 10px;
}
.cent1 {
  width: 60%;
}
.cent1 img {
  width: 50rem;
  margin-top: 30px;
}
.imgpollution img {
  position: relative;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 60%;
  margin-top: 17%;
}
.megots {
  position: absolute;
  color: #fce72f;
  text-align: center;
  font-size: 1.6rem;
}

@media only screen and (max-width: 460px){
.corps {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  margin-top: 10%;
  margin-top: auto;
  background-color: #fcf8f2;
  font-family: "Prompt", sans-serif;
  width: 100%;
}
section {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  background-color: #fcf8f2;
  font-family: "Prompt", sans-serif;
  font-size: 1.1rem;
  color: #a94d19;
  text-align: justify;
  width: 100%;
  margin: 30px;
}

.img img {
  max-height: 250px;
  width: 200px;
  margin-top: 20%;
  margin-left: 0;
}
.intro {
 width: 50%;
  text-align: start;
}
.intro1 {
  width: 300px;
}
.about1{
  margin-top: 30px;
  margin-left: 0;
  width: 60%;
}
.about2{
  margin-top: 70px;
  margin-left: 0;
  width: 60%;
}
.imgpollution img {
  position: relative;
  width: 320px;
  height: 250px;
  margin-top: 5%;
  margin-right: 20px;
}
.megots {
  position: absolute;
  color: #fce72f;
  text-align: center;
  font-size: 1rem;
}
.cent{
 margin-top: 30%;
}
.cent1 {

  width: 60%;
  margin-top: 10%;
  margin-right: 40%;
}
.cent1 > h3{
  width:100%;
  margin-left: 30%;
}
.cent1 img {
  width: 350px;
}
}
</style>
