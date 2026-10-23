let demandes = [
  {
    id: 1,
    titre: "Connexion Wi-Fi instable",
    description: "Le réseau se déconnecte régulièrement.",
    categorie: "Réseau",
    priorite: "Haute",
  },
  {
    id: 2,
    titre: "Ordinateur en panne",
    description: "L'ordinateur ne démarre plus.",
    categorie: "Matériel",
    priorite: "Haute",
  },
  {
    id: 3,
    titre: "Problème de clavier",
    description: "Certaines touches ne fonctionnent plus.",
    categorie: "Matériel",
    priorite: "Moyenne",
  },
];
let next_id = "4";
let obj_supprimer = null;
let p_title = document.querySelector(".titleErreur");
let p_description = document.querySelector(".title-description-Erreur");
let idModification = null;
    const messageConfirmation = document.querySelector(".message_de_confirmation");
// Ajouter ou modifier une demande
function ajout_demande() {
  const probleme = document.getElementById("probleme");
  const priorite = document.getElementById("priorite");
  const Categorie = document.getElementById("Categorie");
  const description = document.getElementById("description");
  let valid = true;
  if (probleme.value.trim() === "") {
    valid = false;
    p_title.classList.remove("hidden");
  } else p_title.classList.add("hidden");
  if (description.value.trim() === "") {
    valid = false;
    p_description.classList.remove("hidden");
  } else p_description.classList.add("hidden");
if(valid){
  if (idModification === null) {
    // Ajouter
    const nouvelleDemande = {
      id: next_id,
      titre: probleme.value,
      description: description.value,
      categorie: Categorie.value,
      priorite: priorite.value,
    };
    p_title.classList.add("hidden");
    p_description.classList.add("hidden");
    demandes.push(nouvelleDemande);
    next_id++;
    probleme.value = "";
    description.value = "";
  } else {
    // Modifier
    const demande = demandes.find(function (d) {
      return d.id == idModification;
    });

    if (demande) {
      demande.titre = probleme.value;
      demande.description = description.value;
      demande.categorie = Categorie.value;
      demande.priorite = priorite.value;
     } 
    idModification = null;
    probleme.value = "";
    description.value = "";
    document.getElementById("btn-ajouter").textContent = "+ Ajouter la demande";
  }
}
  Afficher();
  
}

const btn_1 = document.getElementById("btn-ajouter");

btn_1.addEventListener("click", function (e) {
  e.preventDefault();
  ajout_demande();
});

// Afficher toutes les demandes
function Afficher() {
  const liste = document.getElementById("liste-demandes");
  liste.innerHTML = "";
  demandes.forEach(function (d) {
    const carte = document.createElement("article");
    carte.classList.add("carte-demande");

    const header_div = document.createElement("div");
    header_div.classList.add("carte-header");

    const span_id = document.createElement("span");
    span_id.classList.add("identifiant");
    span_id.textContent = `HD: ${d.id}`;

    const h3 = document.createElement("h3");
    h3.textContent = d.titre;

    header_div.append(span_id, h3);

    const paragraphe = document.createElement("p");
    paragraphe.classList.add("paraghraph");
    paragraphe.textContent = d.description;

    const div_infos = document.createElement("div");
    div_infos.classList.add("carte-infos");

    const categorie = document.createElement("span");
    categorie.classList.add("categorie");
    categorie.textContent = d.categorie;

    const priorite = document.createElement("span");
    priorite.classList.add("priorite");
    priorite.textContent = d.priorite;

    div_infos.append(categorie, priorite);

    const div_action = document.createElement("div");
    div_action.classList.add("carte-actions");

    const button_modifie = document.createElement("button");
    button_modifie.classList.add("btn-modifier");
    button_modifie.textContent = "✎ Modifier";

    // click sur modifiaction
    button_modifie.addEventListener("click", function () {
      modification(d);
    });

    const button_supprimer = document.createElement("button");
    button_supprimer.classList.add("btn-supprimer");
    button_supprimer.textContent = "♜ Supprimer";
    // click sur suprimer

    messageConfirmation.classList.add("hidden")
    button_supprimer.addEventListener("click", function () {
         messageConfirmation.classList.remove("hidden")
         obj_supprimer = d;
         
    });
     const button_annuler = document.getElementById("btn_annuler");
     button_annuler.addEventListener("click", function () {
         messageConfirmation.classList.add("hidden")
    });   
    
    div_action.append(button_modifie, button_supprimer);
    carte.append(header_div, paragraphe, div_infos, div_action);
    liste.append(carte);
  });
}

const btn_confirmer = document.getElementById("btn_confirm");
btn_confirmer.addEventListener("click", function () {
                supprimer(obj_supprimer);
                messageConfirmation.classList.add("hidden")
         });
function modification(d) {
  idModification = d.id;
  document.getElementById("probleme").value = d.titre;
  document.getElementById("description").value = d.description;
  document.getElementById("Categorie").value = d.categorie;
  document.getElementById("priorite").value = d.priorite;
  document.getElementById("btn-ajouter").textContent =
    "Enregistrer les modifications";
}
Afficher();
function supprimer(d) {
    demandes.splice(demandes.indexOf(d), 1);
    if (d.id == idModification) {
        idModification = null;
        probleme.value = "";
        description.value = "";
        document.getElementById("btn-ajouter").textContent = "+ Ajouter la demande";
    }

   Afficher();
}

