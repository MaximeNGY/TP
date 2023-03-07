const principal = document.getElementById('profil-principal');
const formulaire = document.getElementById('formulaire');

// Chercher les noms pour créer la liste en haut de la page
const noms = await simple_fetch('profil');
for (const [id, nom] of Object.entries(noms)) {
  const li = document.createElement('li');
  li.setAttribute('data-id', id);
  li.textContent = nom;
  liste.append(li);
}

// Afficher le profil quand l'utilisateur clique sur un nom
liste.addEventListener('click', (event) => {
  if (event.target.nodeName !== 'LI') { return; }
  const id = event.target.getAttribute('data-id');
  afficher_profil(id);
});

async function afficher_profil(id) {
  const profil = await simple_fetch('profil/' + id);
  principal.style.display = 'block';
  principal.querySelector('.nom').textContent = profil.nom;
  principal.querySelector('.portrait').src = profil.portrait;
  principal.querySelector('.portrait').className = 'portrait ' + profil.sexe;
  principal.querySelector('.messages').textContent = profil.messages + ' messages';
  principal.querySelector('.likes').textContent = profil.likes + ' likes';
  principal.querySelector('.description').textContent = profil.description;
  principal.setAttribute('data-id', id);
}

// Afficher et remplir le formulaire quand l'utilisateur clique sur editer
document.getElementById('editer').addEventListener('click', async () => {
  formulaire.style.display = 'block';
  const id = principal.getAttribute('data-id');
  console.log(id);
  const profil = await simple_fetch('profil/' + id);
  formulaire.setAttribute('data-id', id);
  formulaire.querySelector('#edit-nom').value = profil.nom;
  formulaire.querySelector('#edit-sexe').value = profil.sexe;
  formulaire.querySelector('#edit-portrait').value = profil.portrait;
  formulaire.querySelector('#edit-messages').value = profil.messages;
  formulaire.querySelector('#edit-likes').value = profil.likes;
  formulaire.querySelector('#edit-description').value = profil.description;
});

document.getElementById('enregistrer').addEventListener('click',async ()=>{
  const id=formulaire.getAttribute('data-id');
  const profil={id};
  profil.nom        =document.getElementById('edit-nom'        ).value;
  profil.sexe       =document.getElementById('edit-sexe'       ).value;
  profil.portrait   =document.getElementById('edit-portrait'   ).value;
  profil.messages   =document.getElementById('edit-messages'   ).value;
  profil.likes      =document.getElementById('edit-likes'      ).value;
  profil.description=document.getElementById('edit-description').value;
  await simple_fetch('profil/'+id,{post:profil});
  formulaire.style.display = 'none';
  afficher_profil(id);
});

document.getElementById('fermer').addEventListener('click',async ()=>{
  formulaire.style.display = 'none';
});




// -------Question 4.9-----------//
// simple_fetch('http://localhost:3000/profil').then((response)=>{
//   for(const valeur of Object.entries(response)){
//     let li=document.createElement('li');
//     li.textContent=valeur[1];
//     li.setAttribute('data-id', valeur[0]);
//     liste.appendChild(li);
// }});

// const liste = document.getElementById('liste');
// const principal=document.getElementById('profil-principal');

// // Afficher le profil quand l'utilisateur clique sur un nom
// liste.addEventListener('click',(event)=>{
//   if(event.target.nodeName!=='LI'){return;}
//   const id=event.target.getAttribute('data-id');
//   afficher_profil(id);
// });

// async function afficher_profil(id){
//   const profil=await simple_fetch('profil/'+id);
//   principal.querySelector('.nom'        ).textContent=profil.nom;
//   principal.querySelector('.portrait'   ).src=profil.portrait;
//   principal.querySelector('.portrait'   ).className='portrait '+profil.sexe;
//   principal.querySelector('.messages'   ).textContent=profil.messages+' messages';
//   principal.querySelector('.likes'      ).textContent=profil.likes+' likes';
//   principal.querySelector('.description').textContent=profil.description;
// }

// -------Question 3.9-------------//
// const liste = document.getElementById('liste');
// const principal = document.getElementById('profil-principal');

// liste.addEventListener('click', (event) => {
//     if (event.target.nodeName !== 'LI') { return; }
//     console.log('click li');
//     const id = event.target.getAttribute('data-id');
//     afficher_profil(id);
// });

// function afficher_profil(id) {
//     simple_fetch(`http://localhost:3000/profil/${id}`)
//         .then(response => {
//             console.log(response);
//             principal.querySelector('.nom').textContent = response.nom;
//             principal.querySelector('.portrait').src = response.portrait;
//             principal.querySelector('.messages').textContent = response.messages + " messages";
//             principal.querySelector('.likes').textContent = response.likes + " likes";
//             principal.querySelector('.description').value = response.description;
//         });
// }