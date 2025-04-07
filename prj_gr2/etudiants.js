let etudiants = JSON.parse(localStorage.getItem('etudiants')) || [];

function afficherEtudiants() {
    const listeEtudiants = document.getElementById('listeEtudiants');
    listeEtudiants.innerHTML = ''; 

    etudiants.forEach((etudiant, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${etudiant.nom} ${etudiant.prenom}</strong> - ${etudiant.email} <br>
            <span><strong>Date de naissance:</strong> ${etudiant.dateNaissance}</span> <br>
            <span><strong>Date d'inscription:</strong> ${etudiant.dateInscription}</span> <br>
            <span><strong>Branche d'étude:</strong> ${etudiant.brancheEtude}</span>
            <button onclick="supprimerEtudiant(${index})">Supprimer 🗑️</button>`;
        listeEtudiants.appendChild(li);
    });
}

document.getElementById('formEtudiant').addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const dateNaissance = document.getElementById('dateNaissance').value;
    const dateInscription = document.getElementById('dateInscription').value;
    const brancheEtude = document.getElementById('brancheEtude').value;

    // Validation : Si la branche d'étude n'est pas choisie, ne pas ajouter l'étudiant
    if (!brancheEtude) {
        alert("Veuillez choisir une branche d'étude !");
        return;
    }

    const nouvelEtudiant = { nom, prenom, email, dateNaissance, dateInscription, brancheEtude };

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
