<template>
  <body>
    <section class="forms-section">
      <h1 class="section-title">Formulaires SKOON</h1>
      <div class="forms">
        <div class="form-wrapper is-active">
          <button type="button" class="switcher switcher-login">
            Connexion
            <span class="underline"></span>
          </button>
          <form class="form form-login">
            <fieldset>
              <legend>
                Veuillez entrer votre Email et votre Mot de passe pour vous
                connecter.
              </legend>
              <div class="input-block">
                <label for="login-email">E-mail</label>
                <input id="login-email" type="email" required />
              </div>
              <div class="input-block">
                <label for="login-password">Mot de passe</label>
                <input id="login-password" type="password" required />
              </div>
            </fieldset>
            <button type="submit" class="btn-login">Envoyer</button>
          </form>
        </div>

        <div class="form-wrapper">
          <button type="button" class="switcher switcher-signup">
            Inscription
            <span class="underline"></span>
          </button>
          <form class="form form-signup">
            <fieldset>
              <legend>Veuillez remplir les champs pour vous inscrire.</legend>
              <div class="input-block">
                <label for="signup-pseudo">Pseudo</label>
                <input id="signup-pseudo" type="text" required />
              </div>
              <div class="input-block">
                <label for="signup-name">Nom</label>
                <input id="signup-name" type="text" required />
              </div>
              <div class="input-block">
                <label for="signup-date">Date de naissance</label>
                <input id="date" type="date" required />
              </div>
              <div class="input-block">
                <label for="signup-premon">Prénom</label>
                <input id="signup-prenom" type="text" required />
              </div>
              <div class="input-block">
                <label for="signup-email">E-mail</label>
                <input id="signup-email" type="email" required />
              </div>
              <div class="input-block">
                <label for="signup-rue">Rue</label>
                <input id="signup-rue" type="text" required />
              </div>
              <div class="input-block">
                <label for="signup-cp">Code Postale</label>
                <input id="signup-cp" type="number" required />
              </div>
              <div class="input-block">
                <label for="signup-ville">Ville</label>
                <input id="signup-ville" type="text" required />
              </div>
              <div class="input-block">
                <label for="signup-password">Mot de passe</label>
                <input id="signup-password" type="password" required />
              </div>
              <div class="input-block">
                <label for="signup-password-confirm"
                  >Confirmer mot de passe</label
                >
                <input id="signup-password-confirm" type="password" required />
              </div>
              <div class="input-block">
                <label for="signup-cgv">J'accepte les CGV</label>
                <input id="signup-cgv" type="checkbox" required />
              </div>
            </fieldset>
            <button type="submit" class="btn-signup">Envoyer</button>
          </form>
        </div>
      </div>
    </section>

    <!--<script src="script.js"></script>-->
  </body>
</template>

<script>
export default {

  mounted() {
    this.reverse();
  },
  methods: {
    reverse() {
      const switchers = [...document.querySelectorAll(".switcher")];
      switchers.forEach((item) => {
        item.addEventListener("click", function () {
          switchers.forEach((item) =>
            item.parentElement.classList.remove("is-active")
          );
          this.parentElement.classList.add("is-active");
        });
      });
    },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Prompt, -apple-system, "Helvetica Neue", "Segoe UI", Arial,
    sans-serif;
  background: #f1f1f1;
}

.forms-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-title {
  font-size: 32px;
  letter-spacing: 1px;
  color: #49ada1;
}

.forms {
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
}

.form-wrapper {
  animation: hideLayer 0.3s ease-out forwards;
}

.form-wrapper.is-active {
  animation: showLayer 0.3s ease-in forwards;
}

@keyframes showLayer {
  50% {
    z-index: 1;
  }
  100% {
    z-index: 1;
  }
}

@keyframes hideLayer {
  0% {
    z-index: 1;
  }
  49.999% {
    z-index: 1;
  }
}

.switcher {
  position: relative;
  cursor: pointer;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #a94d19;
  background-color: transparent;
  border: none;
  outline: none;
  transform: translateX(0);
  transition: all 0.3s ease-out;
}

.form-wrapper.is-active .switcher-login {
  color: #49ada1;
  transform: translateX(90px);
}

.form-wrapper.is-active .switcher-signup {
  color: #49ada1;
  transform: translateX(-90px);
}

.underline {
  position: absolute;
  bottom: -5px;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  width: 100%;
  height: 2px;
}

.underline::before {
  content: "";
  position: absolute;
  top: 0;
  left: inherit;
  display: block;
  width: inherit;
  height: inherit;
  background-color: currentColor;
  transition: transform 0.2s ease-out;
}

.switcher-login .underline::before {
  transform: translateX(101%);
}

.switcher-signup .underline::before {
  transform: translateX(-101%);
}

.form-wrapper.is-active .underline::before {
  transform: translateX(0);
}

.form {
  overflow: hidden;
  min-width: 260px;
  margin-top: 50px;
  padding: 30px 25px;
  border-radius: 5px;
  transform-origin: top;
}

.form-login {
  animation: hideLogin 0.3s ease-out forwards;
}

.form-wrapper.is-active .form-login {
  animation: showLogin 0.3s ease-in forwards;
}

@keyframes showLogin {
  0% {
    background: #d7e7f1;
    transform: translate(40%, 10px);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    background-color: #fcf8f2;
    transform: translate(35%, -20px);
  }
}

@keyframes hideLogin {
  0% {
    background-color: #fcf8f2;
    transform: translate(35%, -20px);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    background: #d7e7f1;
    transform: translate(40%, 10px);
  }
}

.form-signup {
  animation: hideSignup 0.3s ease-out forwards;
}

.form-wrapper.is-active .form-signup {
  animation: showSignup 0.3s ease-in forwards;
}

@keyframes showSignup {
  0% {
    background: #d7e7f1;
    transform: translate(-40%, 10px) scaleY(0.8);
  }
  50% {
    transform: translate(0, 0) scaleY(0.8);
  }
  100% {
    background-color: #fcf8f2;
    transform: translate(-35%, -20px) scaleY(1);
  }
}

@keyframes hideSignup {
  0% {
    background-color: #fcf8f2;
    transform: translate(-35%, -20px) scaleY(1);
  }
  50% {
    transform: translate(0, 0) scaleY(0.8);
  }
  100% {
    background: #d7e7f1;
    transform: translate(-40%, 10px) scaleY(0.8);
  }
}

.form fieldset {
  position: relative;
  opacity: 0;
  margin: 0;
  padding: 0;
  border: 0;
  transition: all 0.3s ease-out;
  display: flex;
  flex-wrap: wrap;
  width: 455px;
}

.form-login fieldset {
  transform: translateX(-50%);
}

.form-signup fieldset {
  transform: translateX(50%);
}

.form-wrapper.is-active fieldset {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 0.4s ease-in, transform 0.35s ease-in;
}

.form legend {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
}

.input-block {
  margin-bottom: 20px;
  margin-left: 20px;
}

.input-block label {
  font-size: 14px;
  color: #a94d19;
}

.input-block input {
  display: block;
  width: 100%;
  margin-top: 8px;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 16px;
  line-height: 40px;
  color: #a94d19;
  background: #f8f7f8;
  border: 1px solid #a94d19;
  border-radius: 2px;
}

.form [type="submit"] {
  opacity: 0;
  display: block;
  min-width: 120px;
  margin: 30px auto 10px;
  font-size: 18px;
  line-height: 40px;
  border-radius: 25px;
  border: none;
  transition: all 0.3s ease-out;
}

.form-wrapper.is-active .form [type="submit"] {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.4s ease-in;
}

.btn-login {
  color: #fbfdff;
  background: #a94d19;
  transform: translateX(-30%);
}

.btn-signup {
  color: #fff;
  background: #a94d19;
  /*box-shadow: inset 0 0 0 2px #a7e245;*/
  transform: translateX(30%);
}
</style>