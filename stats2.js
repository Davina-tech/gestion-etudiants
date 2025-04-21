class cours_obj {
  constructor(cours, Et_nbr, duree) {
    this.cours = cours;
    this.Et_nbr = Et_nbr;
    this.duree = duree;
  }
}

let cours_hold = document.getElementById('cours');
let cours1 = new cours_obj('Math', 50, 1.5);
let cours2 = new cours_obj('JS', 40, 3);
let cours3 = new cours_obj('C', 70, 3);
let cours = [cours1,cours2,cours3];

function cours_add(obj) {
  let cours_container = document.createElement('div');
  cours_container.classList.add('buttom_bar');

  let cours_show = document.createElement('h3');
  let Et_show = document.createElement('h3');
  let duree_show = document.createElement('h3');

  cours_show.textContent = obj.cours;
  Et_show.textContent = obj.Et_nbr;
  duree_show.textContent = obj.duree + " heures";

  cours_container.appendChild(cours_show);
  cours_container.appendChild(Et_show);
  cours_container.appendChild(duree_show);

  cours_hold.appendChild(cours_container);
}

cours.forEach(cours_add);

function togg() {
  const log = document.getElementById('log');
  log.style.display = (log.style.display === 'none') ? 'flex' : 'none';
}
