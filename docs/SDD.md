# SDD — Portfolio V1 GitHub Pages

## État technique constaté
Application React construite avec Vite, point d'entrée src/main.jsx, page src/App.jsx, composants de présentation et CSS. La sortie de build est dist/ ; .github/workflows/deploy.yml déploie GitHub Pages lors d'un push sur main, donc toute fusion main peut publier.

## Composants et flux
édition des composants ou données → npm run build → revue du rendu → PR → fusion sur main déclenchant le workflow Pages. Les sources de vérité sont les fichiers réellement présents, puis README.md ; ne pas créer une seconde définition concurrente des contenus.

## Correspondance exigences
- **REQ-001** — Relire les contenus visibles, leurs sources et les chemins de fichiers ; consigner les divergences.
- **REQ-002** — Contrôler les liens et les ressources utilisés par le visiteur ; ne pas annoncer de succès sans ouverture réelle.
- **REQ-003** — Vérifier les contraintes d'affichage et de publication pertinentes ; conserver une preuve de la revue.

## Données, sécurité et retour arrière
déploiement public automatique sur main, liens/CV obsolètes, images et données personnelles publiées. Ne pas publier de secrets ou d'informations privées. Toute mutation Git est réversible par une PR ciblée ; ne pas réécrire l'historique. Le dépôt n'implique pas de base de données métier.

## Vérifications et déploiement
Vérifier d'abord les scripts présents et le diff. Commandes documentées dans README : `npm install`, `npm run dev`, `npm run build`, `npm run preview`. Aucun build n'a été exécuté dans cette mission. Aucun résultat CI n'est présumé. Ne pas déclencher d'Actions payantes ni de production sans autorisation.
