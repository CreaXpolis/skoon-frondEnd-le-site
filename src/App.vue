<template>
 <body>
    <div class="logo">
      <img src="./assets/logoskoon3.svg" alt="logo SKOON"/>
    </div>
    <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/actualites">Actualités</router-link>|
    <router-link to="/evenements">Événements</router-link>|
    <router-link to="/connexion">Connexion</router-link>
  </div>
  <router-view />
 </body>
</template>

<style>

#app {
  font-family: Prompt, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a94d19;
  background-color: #fcf8f2;
}

#nav {
  padding: 10px;
  background-color: #fcf8f2;
}
.logo img {
  height: 54px;
  float: left;
  margin-left: 50px;
  margin-top: 0px;
}

#nav a {
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
  color: #a94d19;
  margin: 50px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #49ada1;
}
@media only screen and (max-width: 460px){
  .logo img {
  height: 54px;
  float: none;
  margin-left: 0px;
  margin-top: 0px;
 
}
#nav {
  padding: 20px;
  background-color: #fcf8f2;
  width: 70%;
  margin-left: 30px;
}
nav a {
  text-align: center;
  
}
}
</style>
