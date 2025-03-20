# gestion-etudiants
Plateforme de gestion d’étudiants. 


 Objectif du TP 
● Travailler en équipe sur un projet modulaire (chaque groupe gère une partie du 
projet). 
● Apprendre à utiliser Git pour collaborer (branches, merge, pull request). 
● Mettre en pratique les bases du JavaScript (DOM, événements, stockage local). 

 Projet : Une Plateforme de Gestion d'Étudiants 

 Fonctionnalités principales : 
● Groupe 1 : Interface d'accueil + navigation 
● Groupe 2 : Gestion des étudiants (ajout/suppression/liste) 
● Groupe 3 : Gestion des enseignants 
● Groupe 4 : Gestion des cours 
● Groupe 5 : Affichage des statistiques (ex: nombre d’étudiants par cours) 

 Organisation du travail en équipe 
Créer un dépôt GitHub nommé gestion-etudiants (fait par le professeur). 
1. Chaque groupe crée une branche Git 
● Groupe 1 : feature/navigation 
● Groupe 2 : feature/gestion-etudiants 
● Groupe 3 : feature/gestion-enseignants 
● Groupe 4 : feature/gestion-cours 
● Groupe 5 : feature/statistiques 
2. Les groupes travaillent chacun sur leur partie 
3. Ils committent et pushent leur code sur GitHub 
4. Merge des branches pour assembler le projet final 

 Étapes du TP 

 1. Initialisation du projet Git 
Le professeur (ou un étudiant) crée un repository GitHub. 
Tous les groupes clonent le projet : 
git clone https://github.com/utilisateur/projet-gestion-etudiants.git 
cd projet-gestion-etudiants 

 2. Création des branches de travail 
Chaque groupe crée une branche dédiée pour sa partie : 
git checkout -b feature/gestion-etudiants  # Exemple pour le groupe 2 
Ils travaillent sur leur code, puis ajoutent et commitent leurs modifications : 
git add . 
git commit -m "Ajout de la gestion des étudiants" 
git push origin feature/gestion-etudiants 

 3. Fusion des travaux dans main 
Après validation, chaque groupe fait une pull request sur GitHub pour fusionner sa 
branche avec main. 
L'enseignant (ou un leader technique) revue le code, puis accepte la fusion : 
git checkout main 
git pull origin main 
git merge feature/gestion-etudiants 
git push origin main 

 4. Test final & Déploiement 
Une fois toutes les parties intégrées, chaque groupe teste la plateforme complète. 
Optionnel : Déployer sur GitHub Pages ou Vercel.
