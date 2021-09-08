<template>

 <footer>
            <div class="plan">
                <h2>Plan du site</h2>
                <div class="connect">
                    <ul>
                        <li><a href="#" title="Home">Home</a></li>
                        <li><a href="#" title="Actualites">Actualités</a></li>
                        <li><a href="#" title="Évenements">Événements</a></li>
                        <li><a href="#" title="Connexion">Connexion</a></li>
                    </ul>
                </div>
            </div>
</footer>
    
</template>

<script>
export default {
    name: 'FooterPlan'
}
</script>

<style scoped>

h2 {
    font-size: 2em;
    font-weight: 700;
    font-family: 'Prompt', sans-serif;
    text-transform: uppercase; 
    color: #49ADA1;
    margin-bottom: 20px;
}

footer {
    margin-top: 40px;
    width: 1140px;
    margin-right: auto;
    margin-left: auto;
    padding: 10px;
    list-style: none;
}

footer h1 {
margin-left: 40px;
}

.connect li {
    display: inline-block;
    text-align: center;
}

.connect a {
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
@media only screen and (max-width: 460px){
    footer {
    width: 80%;
    margin-right: 70px;
}
.connect >ul {
    width: 20%;
    margin-left: -20px;
}
}
</style>