<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/actualités">Actualités</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/connexion">Connexion</router-link>
  </div>
  <router-view />
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
  padding: 30px;
  background-color: #fcf8f2;
}

#nav a {
  font-size: 36px;
  font-weight: 600;
  color: #a94d19;
  margin: 50px;
}

#nav a.router-link-exact-active {
  color: #49ada1;
}
</style>
