# HelpDesk

Application web de gestion des demandes de support informatique pour **Atlas Solutions**, une entreprise fictive de services numériques. Elle permet de consulter, ajouter, modifier et supprimer des incidents signalés par les collaborateurs.

L'application fonctionne uniquement dans le navigateur, sans backend ni base de données. Les données sont stockées dans un tableau JavaScript : elles reviennent à leur état de départ quand on recharge la page.

Projet individuel réalisé du 19 au 23 octobre 2026 (HTML, CSS et JavaScript Vanilla).

## Technologies utilisées

- **HTML5** sémantique (`header`, `main`, `section`, `article`, `form`, `footer`)
- **CSS3** : variables CSS, Flexbox, CSS Grid, media queries (mobile, tablette, ordinateur)
- **JavaScript Vanilla** : tableaux d'objets, fonctions, manipulation du DOM, événements
- **Font Awesome** pour les icônes
- **Git / GitHub** pour le versionnement
- **Jira** pour le suivi des user stories et des tâches

## Fonctionnalités développées

- **Affichage dynamique** : les demandes sont générées depuis un tableau d'objets JavaScript, sous forme de cartes (identifiant, titre, description, catégorie, priorité).
- **Ajout d'une demande** : formulaire avec titre, priorité, catégorie et description, sans rechargement de la page.
- **Validation du formulaire** : les champs vides ou contenant uniquement des espaces sont refusés, avec un message d'erreur sous le champ concerné.
- **Modification d'une demande** : le bouton « Modifier » remplit le formulaire, puis « Enregistrer les modifications » met à jour la carte.
- **Suppression d'une demande** : le bouton « Supprimer » ouvre une boîte de confirmation (Confirmer / Annuler). L'annulation conserve la demande.
- **Design responsive** : la grille de cartes passe de 1 colonne (mobile) à 2 (tablette) puis 3 (ordinateur).

## Structure des fichiers

```
helpdesk/
├── index.html        # structure de la page et formulaire
├── css/
│   └── style.css     # styles, variables et media queries
├── js/
│   └── script.js     # données, affichage et événements
└── README.md
```

## Organisation du code JavaScript

| Élément | Rôle |
|---|---|
| `demandes` | tableau d'objets contenant toutes les demandes |
| `ajout_demande()` | valide le formulaire, puis ajoute ou modifie une demande |
| `Afficher()` | vide la liste et la redessine depuis le tableau |
| `modification(d)` | remplit le formulaire avec la demande choisie |
| `supprimer(d)` | retire la demande du tableau et met l'affichage à jour |
| `idModification` | vaut `null` pour un ajout, ou l'id de la demande en cours de modification |
| `obj_supprimer` | mémorise la demande en attente de confirmation de suppression |

## Lancer l'application

Aucune installation n'est nécessaire.

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/[utilisateur]/helpdesk.git
   cd helpdesk
   ```
2. Ouvrir `index.html` dans un navigateur.

Option : utiliser l'extension **Live Server** de VS Code (clic droit sur `index.html`, puis « Open with Live Server »).

## Liens

- Dépôt GitHub : [À compléter]
- Tableau Jira : [À compléter]
