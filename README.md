# Kasa API

## Prerequisites

You need Docker to launch the app API or you can use service installing nodejs on your system and running in backend forlder the following commandes: `npm install` then `npm start`

## Launch Project

With Docker run command

`docker-compose up -d`

To stop project run
`docker-compose down`

# Installation de Vite

Se déplacer dans l'intérieur du projet pour l'intallation vite depuis GitHub :

Exécuter :
npm create vite@latest my-react-app -- --template react

# Lancer le Backend

Se déplacer dans GitBash :
Documents > Openclassroom > Kasa Project > Backend

Exécuter :
npm start

# Lancer le Frontend

Dans une nouvelle fenêtre Gitbash se déplacer de la sorte :
Documents > Openclassroom > Kasa Project > Frontend > src

Exécuter :
npm run dev

# Lancer les tests

En ouvrant une nouvelle page (3) Gitbash, se déplacer jusqu'à arriver dans le dossier test :
Documents > Openclassroom > Kasa Project > Frontend > src > test

Exécuter :
npm run test:ui

####

Une fois ces étapes suivi, vous aurez les résultats suivant :
le backend lancé (API disponible),
le frontend accessible dans ton navigateur,
les tests exécutables via l’interface UI.

# Les tests en questions :

Les différentes fonctionnalités testés sont les suivantes :
Banniere.test.jsx -->
Présence de la bannière,
Présence du titre H1,
Présence de l'overlay
Rerender pour l'utilisation de la bannière sur une autre page.

Second composant testé :
Slidershow.jsx -->
Affichage du slidershow et de la première image chargé,
Le bouton qui met à jour le compteur qui se trouve en bas du slidershow,
Bouton précédent qui met également le compteur à jour,
L'écoute du clique, et s'assurer qu'elle s'effectue en boucle,
Le masquage du compteur s'il y a qu'une seule image.
