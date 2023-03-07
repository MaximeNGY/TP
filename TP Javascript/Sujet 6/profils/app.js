import express from 'express';
import * as fs from "node:fs/promises";

const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

// Lance le serveur
app.listen(3000, () => {
  console.log('Notre app « profils » écoute sur le port 3000');
  console.log('http://localhost:3000/');
});

// Envoie des données du profils.
app.get('/profil/:id', async (requete, reponse) => {
  console.log('Requete GET /profil/:id reçue');
  let id = requete.params.id;
  let profilsTexte = await fs.readFile('profils.json', 'utf8');
  let profils = JSON.parse(profilsTexte);
  reponse.send(profils[id]);
});

// Reçoit les données du profil.
app.post('/profil/:id', async (requete, reponse) => {
  console.log('Requete POST /profil/:id reçue');
  let id=requete.params.id;
  let profilsTexte=await fs.readFile('profils.json','utf8');
  let profils=JSON.parse(profilsTexte);
  // Attention: ici on ne fait aucune validation.
  // Il faudrait valider les données (nottament "portrait" et les nombres) et vérifier les noms des champs.
  profils[id]=requete.body;
  await fs.writeFile('profils.json',JSON.stringify(profils));
  reponse.send({message:'ok'});
});


// On récupère les données du profils.
app.get('/profil', async (requete, reponse) => {
  console.log('Requete GET /profil reçue');
  let profilsTexte=await fs.readFile('profils.json','utf8');
  let profils=JSON.parse(profilsTexte);
  let noms={};
  for(let profil of Object.values(profils)){
    noms[profil.id]=profil.nom;
  }
  reponse.send(noms);
});