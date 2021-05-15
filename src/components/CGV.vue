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
      <h1>Mentions légales</h1>
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
      <h1>Autres</h1>
      <ul>
        <li><a href="#" title="Presse">Presse</a></li>
        <li><a href="#" title="Aide">Aide</a></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 0px;
  width: 1440px;
  height: 350px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px;
  list-style: none;
  background-color: #fcf8f2;
}

footer h1 {
  margin-left: 40px;
}

h1 {
  font-size: 48px;
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
  margin-left: 80px;
}

.cgv {
  margin-top: 0px;
  float: left;
  margin-right: 80px;
}

.cgv h1 {
  margin-left: 0;
}

.cgv a {
  font-family: "Prompt", sans-serif;
  font-size: 36px;
  font-weight: 300;
  color: #a94d19;
  text-decoration: none;
  list-style: none;
}
.cgv li {
  text-decoration: none;
  list-style: none;
}

.autres h1 {
  margin-left: 0;
}
.autres {
  margin-top: 0px;
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




</style>