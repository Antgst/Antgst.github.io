# PRD — Portfolio V1 GitHub Pages

## Vision et public
Portfolio public React/Vite avec cinq sections (accueil, parcours, compétences, projets, contact), composants sous src/components, données projets sous src/data/projects.js et styles CSS sous src/styles.

Public cible : recruteurs et visiteurs recherchant le parcours et les réalisations. Le dépôt est un support personnel, pas un service multi-utilisateur.

## Exigences vérifiables
- **REQ-001 (P0)** — Afficher les sections et projets décrits dans le README sans liens cassés. **Acceptation :** revue du fichier concerné et preuve de vérification avant livraison.
- **REQ-002 (P1)** — Conserver une interface responsive et accessible sur mobile et desktop. **Acceptation :** revue du fichier concerné et preuve de vérification avant livraison.
- **REQ-003 (P1)** — Construire le site via les scripts réellement présents et garder la publication distincte de la validation. **Acceptation :** revue du fichier concerné et preuve de vérification avant livraison.

## État et limites
Les fonctions décrites correspondent à la structure et au README observés sur main le 1er novembre 2026 ; leur fonctionnement en production n'a pas été testé durant cet audit. Le contenu doit rester cohérent avec les autres supports, sans synchronisation automatique présumée.

## Hors périmètre
Ne pas déclencher de publication GitHub Pages ni modifier le workflow de déploiement dans cette mission.

## Risques et livraison
déploiement public automatique sur main, liens/CV obsolètes, images et données personnelles publiées. Budget supplémentaire : 0 €. Toute modification doit passer par une branche et une PR ; distinguer validation documentaire, tests locaux et déploiement réel. Une PR ouverte n'est pas une livraison.
