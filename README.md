# Portfolio Antgst — V1

Landing page portfolio premium construite avec React, Vite, Motion for React et CSS custom.

## Stack

- React
- Vite
- Motion for React
- CSS custom avec variables CSS
- Déploiement compatible GitHub Pages

## Installation

```bash
npm install
npm run dev
```

## Build local

```bash
npm run build
npm run preview
```

## Déploiement GitHub Pages

### Cas recommandé pour `Antgst.github.io`

Gardez `base: "/"` dans `vite.config.js`, puis :

```bash
npm run build
npm run deploy
```

### Cas d'un repo projet

Exemple pour un repo `portfolio` :

```bash
VITE_BASE_PATH="/portfolio/" npm run build
npx gh-pages -d dist
```

Sur Windows PowerShell :

```powershell
$env:VITE_BASE_PATH="/portfolio/"; npm run build; npx gh-pages -d dist
```

## Personnalisation rapide

1. Mettre à jour les liens dans `src/components/Contact.jsx`.
2. Mettre à jour les liens GitHub/Demo dans `src/data/projects.js`.
3. Remplacer `src/assets/images/portrait-placeholder.svg` par un portrait final si disponible.
4. Ajouter un CV dans `public/cv-antoine.pdf` puis remplacer le lien CV dans `Contact.jsx`.

## Critères couverts

- 5 sections : Hero, Parcours, Compétences, Projets, Contact.
- Projets dynamiques avec cards cliquables.
- HBNB actif par défaut.
- Textes, badges, liens et ambiance visuelle changent au clic.
- Animations courtes avec Motion for React.
- CSS responsive desktop/tablette/mobile.
- Structure modulaire et maintenable.


---

## Personnalisation Antoine — V1.1

Cette version inclut :

- LinkedIn : https://www.linkedin.com/in/antoinegousset/
- Email : ant.gousset@gmail.com
- CV : `public/antoine-gousset-cv-2026.pdf`
- HBNB : https://github.com/Antgst/holbertonschool-hbnb
- Simple Shell : https://github.com/Antgst/holbertonschool-simple_shell
- SaaS B2B Marketplace : affiché comme projet en cours, sans lien GitHub pour l’instant
- Déploiement cible : repo `Antgst.github.io`
