<!-- Question 1 -->

<!-- <script setup>
  let nom='Tom';

  function exemple(){
     console.log('ca marche!');
  }

  function exemple2(e){
     console.log('input',e.target.value);
  }
</script>

<template>
   <h1 @click="exemple">Hello {{nom}}</h1>
   <input @keyup="exemple2" />
</template>

<style scoped>
</style> -->

<!-- Question 2 -->

<!-- <script setup>
  function bouger(e){
     console.log('input',e.pageX);
  }
</script>

<template>
   <div id="cadre" @mousemove="bouger"></div>
</template>

<style scoped>
#cadre{
   width: 300px;
   height: 300px;
   border: 1px solid black;
}
</style> -->

<!-- Question 3 -->

<!-- ref() -->

<!-- <script setup>
  import {ref,reactive} from 'vue';
  let nom=ref('Tom');

  function exemple(){
     console.log('click');
     nom.value='Leila';
  }
</script>

<template>
   <h1 @click="exemple">Hello {{nom}}</h1>
</template> -->

<!-- reactive() -->

<!-- <script setup>
  import {ref,reactive} from 'vue';
  let user=reactive({nom:'Tom',age: 25});

  function exemple(){
     console.log('click');
     user.nom='Leila';
  }
</script>

<template>
    <h1 @click="exemple">Hello {{user.nom}}, Age: {{user.age}}</h1>
</template> -->


<!-- Actualiser la position du curseur sur l'élément -->

<!-- <script setup>
  import {ref,reactive} from 'vue';

  let sourisX=ref(0);

  function bouger(e){
     console.log('input',e.pageX);
     sourisX.value = e.pageX;
  }
</script>

<template>
   <p>Position X: <span>{{ sourisX }}</span></p>
   <div id="cadre" @mousemove="bouger"></div>
</template>

<style scoped>
#cadre{
   width: 300px;
   height: 300px;
   border: 1px solid black;
}
</style> -->


<!-- Question 4.17 : Déplacement de l'image -->

<!-- <script setup>
  import {ref,reactive} from 'vue';
  let x=ref(0);  
  function bouger(e){
     console.log('input',e.pageX);
     x.value=e.pageX;
  }
</script>

<template>
   <img id="piece" :style="'left:'+x+'px'" src="https://moodle.iutv.univ-paris13.fr/img/bjs2/piece-chat.svg"/>
   <div id="cadre" @mousemove="bouger"></div>
</template>

<style scoped>
#cadre{
   width: 300px;
   height: 300px;
   border: 1px solid black;
}

#piece{
   position: absolute;
   top: 0;
}
</style> -->


<!-- Question 4.19 : Nom joueur -->

<!-- Mon code : -->

<!-- <script setup>
  import {ref,reactive} from 'vue';
  let nom=ref(''); 
  function exemple(){
    const input = document.getElementById('input');
     nom.value=input.value;
  }
</script>

<template>
  <p>Le joueur {{nom}} a 500 points.</p>
  <p>Le joueur {{nom}} a fini le niveau 3.</p>
  <p>Le joueur {{nom}} est classé 4e.</p>
  <input id="input" @keyup="exemple"/>
</template>

<style scoped>
</style> -->

<!-- Correction : -->

<!-- <script setup>
  import {ref,reactive} from 'vue';
  let nom=ref('Tom');
  function touche(e){
    nom.value=e.target.value;
  }
</script>

<template>
  <p>Le joueur {{nom}} a 500 points.</p>
  <p>Le joueur {{nom}} a fini le niveau 3.</p>
  <p>Le joueur {{nom}} est classé 4e.</p>
  Nom: <input @keyup="touche" />
</template>

<style scoped>
</style> -->

<!-- 4.20: JS directement dans l'attribut événement -->

<!-- <script setup>
  import {ref,reactive} from 'vue';
  let c=ref(0);
  let nom=ref('Tom');
</script>

<template>
  <p>Le joueur {{nom}} a {{c}} points.</p>
  <p>Le joueur {{nom}} a fini le niveau 3.</p>
  <p>Le joueur {{nom}} est classé 4e.</p>
  Nom: <input @keyup="e=>nom=e.target.value" />
  Nom: <input @keyup="nom=$event.target.value" />
  <input type="button" @click="c++" value="cliquer"/>
</template>

<style scoped>
</style> -->

<!-- Question 4.23 + 4.25 -->

<!-- <script setup>
import { ref, reactive } from 'vue';
</script>

<template>
    <table>
        <tr v-for="ligne in 6">
            <td v-for="colonne in 7">{{ ligne }},{{ colonne }}</td>
        </tr>
    </table>
</template>

<style scoped>
table {
    border-collapse: collapse;
}

td {
    border: 1px solid black;
    width: 70px;
    height: 70px;
    text-align: center;
}
</style> -->

<!-- Question 4.29 -->

<!-- Mon code -->

<!-- <script setup>
  import {ref,reactive} from 'vue';
  let tableau = [
  ['c', '', '', '', '', '', 's'],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['s', '', '', '', '', '', 'c'],
];

</script>

<template>
  <table>
    <tr v-for="(ligne, index) in tableau" :key="index">
      <td v-for="colonne in ligne">{{ colonne }}</td>
    </tr>
  </table>
</template>

<style scoped>
table {
   border-collapse: collapse;
}
td {
   border: 1px solid black;
   width: 70px;
   height: 70px;
   text-align: center;
}
</style> -->


<!-- Correction : -->

<script setup>
  import {ref,reactive} from 'vue';
  let tableau=[
     ['c','' ,'' ,'' ,'' ,'' ,'s'],
     ['' ,'' ,'' ,'' ,'' ,'' ,'' ],
     ['' ,'' ,'' ,'' ,'' ,'' ,'' ],
     ['' ,'' ,'' ,'' ,'' ,'' ,'' ],
     ['' ,'' ,'' ,'' ,'' ,'' ,'' ],
     ['s','' ,'' ,'' ,'' ,'' ,'c'],
  ];
</script>

<template>
  <table>
    <tr v-for="ligne in 6">
      <td v-for="colonne in 7">{{tableau[ligne-1][colonne-1]}}</td>
    </tr>
  </table>
</template>

<style scoped>
table {
   border-collapse: collapse;
}
td {
   border: 1px solid black;
   width: 70px;
   height: 70px;
   text-align: center;
}
</style>