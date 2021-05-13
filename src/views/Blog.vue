<template>
<body>
    <main>
        <header>
            <div class="imglead">
                <img src="../assets/media/img-lead.jpg" alt="Bouteille plastique sur la plage">
            </div>
        </header>

        <div>
            <div class="accroche">Ensemble<br>sauvons notre planète</div>
        </div>

        <div class="intro">
            <h1>Skoon</h1>
            <p>est née de l’envie d’insuffler un nouveau souffle à notre environnement qui suffoque.<br>
                Les Skooners ont decidés de remonter leurs manches et donner de leurs temps pour en donner plus à notre
                planète.</p>
        </div>

        <section class="pollution">
            <div>
                <img src="../assets/media/plages-nettoyage2.jpg" alt="Une main rammasse une bouteille plastique" style="float:left; margin-right:50px">
            </div>
            <div class="textpol">
                <h1>La pollution est partout</h1>
                <p>nos mers, nos océans, nos fleuves et nos rivières
                    mais aussi dans nos forêts, campagnes et villes.
                    Comme nous, tu as dû voir les platanes recouverts
                    de sacs plastique, les mégots s’entasser dans les caniveaux,
                    les mouchoirs, bouteilles et cannettes choir sur le pavé.</p>
            </div>

        </section>
        <section class="chiffres">

            <div class="25000" style="float: left; margin-left: 80px;">
                <h1>25 000</h1>
                <p>Tonnes de mégots/an <br>rien qu’en France.</p>
            </div>
            <div>
                <img src="../assets/media/Panneau1.png" alt="Panneau d'interdiction ordures"
                    style=" float: left;  margin-left: 100px; margin-right: 100px">
            </div>
            <div class="1a2">
                <h1>1 à 2</h1>
                <p>Ans pour la disparition <br> d’un mégot dans la <br> nature.</p>
            </div>

        </section>
        <section class="joinus">
            <div>
                <img src="../assets/media/petites-filles1.jpg" alt="Petites filles sur la plages"
                    style="float:right; margin-left:50px">
            </div>
            <div class="textjoin">
                <h1>JOINS TOI AUX SKOONER DE FRANCE ET D’AILLEURS</h1>
                <p>Parce que la terre est notre responsabilité à tous,
                    parce qu’il n’est pas nécessaire d’attendre que nos
                    gouvernements agissent, et surtout parce que c’est à la portée de tous.
                    Viens, joins-toi à nous, aide nous à rallonger
                    la vie des ours blancs, des perroquets bleus de Patagonie
                    mais un peu aussi la tienne.</p>
            </div>

        </section>
        <section class="icones">

            <div class="textpol">
                <h1>Comment ça marche</h1>
            </div>
            <div>
                <img src="../assets/media/incone-group1.svg" alt="Icones de partage" style="float:left;">
            </div>
            <hr style="width:1350px; color: #a94d19; height: 1px; float:left; margin-left: 45px; margin-top: 50px; margin-bottom: 50px;">

        </section>


        <footer>
            <div class="plan">
                <h1>Plan du site</h1>
                <connec>
                    <ul>
                        <li><a href="#" title="Connexion">Connexion</a></li>
                        <li><a href="#" title="Pourquoi">Pourquoi</a></li>
                        <li><a href="#" title="Actualités">Actualités</a></li>
                        <li><a href="#" title="Blog">Blog</a></li>
                    </ul>
                </connec>
            </div>

            <div class="googlapple">
                <div class="apple">
                    <img src="../assets/media/apple-store1.png" alt="Appli Apple">
                </div>
                <div class="google">
                    <img src="../assets/media/google-play1.png" alt="Appli Google">
                </div>   
            </div>
            <div class="cgv">
                <h1>Mentions légales</h1>
                <ul>
                    <li><a href="#" title="Conditions générales d'utilisation">Conditions générales d'utilisation</a></li>
                    <li><a href="#" title="Politique de confidentialité">Politique de confidentialité</a></li>
                    <li><a href="#" title="Politique de confidentialité">Utilisation de cookies</a></li>
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

    </main>


</body>
</template>



<style scoped>
*{
    box-sizing: border-box;    
}

body{
    font-size: 36px;
    font-weight: 300;
    color: #a94d19;
    font-family: 'Prompt', sans-serif;
    margin: 0;
    background-color: #FCF8F2;
}

a {
    text-decoration: none;
}

* {
margin: 0;
padding: 0;
}

h1 {
    font-size: 48px;
    font-weight: 700;
    font-family: 'Prompt', sans-serif;
    text-transform: uppercase; 
    color: #49ADA1;
    margin-bottom: 20px;
}



main {
    width: 100%;
    vertical-align: top;
    margin-top: 0;
}

header {
    width: 1440px;
    height: 78px;
    margin-top: 0;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
}


.imglead {
    margin-top: 0;  
} 


.accroche {
    height: 520px;
    text-align: center;
    font-size: 80px;
    font-weight: 600;
    color: #FCE72F;
    text-shadow: 5px 5px rgba(0, 0, 0, 0.3);
    font-family: 'Prompt', sans-serif;
    text-transform: uppercase; 
    line-height: 13 0px;  
    margin-right: auto;
    margin-left: auto;
    margin-top: 100px;  
}    


.intro {
    font-size: 46px;
    font-weight: 400;
    margin-top: 0;
    width: 1440px;
    text-align: left;
    margin-right: auto;
    margin-left: auto;
    padding: 10px;
}

section {
    margin-top: 40px;
    width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding: 10px;
}

.chiffres {
    width: 1440px;
    height: 380px;
    margin-top: 80px;
}

.chiffres h1 {
    font-size: 96px;
    font-weight: 700;
    margin: 0;
}
.chiffres p {
    font-size: 36px;
    font-weight: 500;
}

footer {
    margin-top: 40px;
    width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding: 10px;
    list-style: none;
}

footer h1 {
margin-left: 40px;
}

connec li {
    display: inline-block;
    text-align: center;
}

connec a {
    font-family: 'Prompt', sans-serif;
    font-size: 36px;
    font-weight: 300; 
    display: block;
    width: 200px;
    color: #a94d19;
    text-decoration: none;
    margin-left: 30px;
    margin-right: 30px;
    text-align: center;
    font-family: 'Prompt', sans-serif;
    font-size: 36px;
    font-weight: 300;    
}

.googlapple {
    float: left;
    margin-top: 80px;
    margin-right: 80px;
}

.cgv {
    margin-top: 50px;
    float: left;
    margin-right: 80px;
}

.cgv h1 {
    margin-left: 0;
}

.cgv a {
    color: #a94d19;
}
.cgv li {
    text-decoration: none;
    list-style: none;    
}

.autres h1 {
    margin-left: 0;
}
.autres {
    margin-top: 50px;
    float: left;
}

.autres a {
    color: #a94d19;
}
.autres li {
    text-decoration: none;
    list-style: none;
}


</style>