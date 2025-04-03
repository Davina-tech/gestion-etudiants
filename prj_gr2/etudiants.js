
let etudiants = JSON.parse(localStorage.getItem('etudiants')) || [];

function afficherEtudiants() {
    const listeEtudiants = document.getElementById('listeEtudiants');
    listeEtudiants.innerHTML = ''; 

    etudiants.forEach((etudiant, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${etudiant.nom} ${etudiant.prenom} - ${etudiant.email} 
            <button onclick="supprimerEtudiant(${index})">Supprimer</button>`;
        listeEtudiants.appendChild(li);
    });
}


document.getElementById('formEtudiant').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;

   
    const nouvelEtudiant = { nom, prenom, email };

  
    etudiants.push(nouvelEtudiant);

    localStorage.setItem('etudiants', JSON.stringify(etudiants));

    document.getElementById('formEtudiant').reset();

    afficherEtudiants();
});

function supprimerEtudiant(index) {
    etudiants.splice(index, 1);

    localStorage.setItem('etudiants', JSON.stringify(etudiants));

    afficherEtudiants();
}

afficherEtudiants();
