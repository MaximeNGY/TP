import express from 'express';
import * as fs from "node:fs/promises";


const app = express();
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Notre app express écoute sur le port 3000')
});

app.get('/', (requete, reponse) => {
  console.log('Requete GET / reçue');
  reponse.send('Hello World!')
});

app.get('/profil/:id', async (requete, reponse) => {
  const parid = requete.params.id;
  console.log(`Requete /profil/'${parid}' reçue`);
  let profilsTexte = await fs.readFile('profils.json', 'utf8');
  let profils = JSON.parse(profilsTexte);
  reponse.send(profils[`${parid}`]);
})

// app.get('/bonjour', (requete, reponse) => {
//   console.log('Requete GET /bonjour reçue');
//   reponse.send('Bonjour à toi!')
// })

// app.get('/miaou', (requete, reponse) => {
//   console.log('Requete GET /bonjour reçue');
//   reponse.send(
//     `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     </head>
//     <body>
//         <img src="https://moodle.iutv.univ-paris13.fr/img/bjs2/chat2.svg" alt="chat2">
//     </body>
//     </html>
//     `
//   )
// })