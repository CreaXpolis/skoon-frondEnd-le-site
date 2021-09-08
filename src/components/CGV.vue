<template>
  <footer>
    <div class="googlapple">
      <div class="apple">
        <img src="../assets/media/apple-store1.png" alt="Appli Apple" />
      </div>
      <div class="google">
        <img src="../assets/media/google-play1.png" alt="Appli Google" />
      </div>
    </div>
    <div class="cgv">
      <h2>Mentions légales</h2>
      <ul>
        <li>
          <a href="#" title="Conditions générales d'utilisation"
            >Conditions générales d'utilisation</a
          >
        </li>
        <li>
          <a href="#" title="Politique de confidentialité"
            >Politique de confidentialité</a
          >
        </li>
        <li>
          <a href="#" title="Politique de confidentialité"
            >Utilisation de cookies</a
          >
        </li>
      </ul>
    </div>
    <div class="autres">
      <h2>Autres</h2>
      <ul>
        <li><a href="#" title="Presse">Presse</a></li>
        <li><a href="#" title="Aide">Aide</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'CGV'
}
</script>

<style scoped>
footer {
  margin-top: 0px;
  width: 100%;
  height: 350px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px;
  list-style: none;
  background-color: #fcf8f2;
}

footer h2 {
  margin-left: 40px;
}

h2 {
  font-size: 2em;
  font-weight: 700;
  font-family: "Prompt", sans-serif;
  text-transform: uppercase;
  color: #49ada1;
  margin-bottom: 20px;
}

.googlapple {
  float: left;
  margin-top: 80px;
  margin-right: 80px;
  margin-left: 40px;
}

.cgv {
  margin-top: 05%;
  float: left;
  margin-right: 80px;
}

.cgv a {
  font-family: "Prompt", sans-serif;
  font-size: 1.7em;
  font-weight: 300;
  color: #a94d19;
  text-decoration: none;
  list-style: none;
}
.cgv li {
  text-decoration: none;
  list-style: none;
}

.autres {
  margin-top: 05%;
  float: left;
}

.autres a {
  font-family: "Prompt", sans-serif;
  font-size: 36px;
  font-weight: 300;
  color: #a94d19;
  text-decoration: none;
  list-style: none;
}
.autres li {
  text-decoration: none;
  list-style: none;
}

@media only screen and (max-width: 460px){
  footer{
    width: 60%;
    margin: 0;
  }
  .apple >img {
    width: 150%;
    margin-left: 40%;
  }
  .google >img {
    width: 150%;
    margin-left: 40%;
  }
}



</style>