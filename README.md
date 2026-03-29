# Portfolio React

Migration du portfolio vers React + Vite.

## Lancer le projet

```bash
npm install
npm run dev
```

## Scripts utiles

```bash
npm run lint
npm run build
npm run preview
```

## Structure

- `src/main.jsx` : point d'entree React (monte l'app dans `#root`)
- `src/App.jsx` : routes principales (`/` et `/projets`)
- `src/components/` : briques reutilisables (header, footer, carte projet, animation)
- `src/pages/` : pages React
- `src/data/projects.js` : donnees projets IUT et perso
- `src/styles/site.css` : style global du site
- `assets/images/profile.jpg` : photo de profil

## Stack

- React
- Vite
- React Router DOM
- Framer Motion (animations au scroll)
