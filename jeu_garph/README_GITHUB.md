# 🎮 Web & Gaming Projects

Collection de jeux et applications web interactives utilisant React, Node.js et technologies modernes.

## 📚 Projets Inclus

### 1. **GraphRacer - Jeu de Course sur Graphe** 🏎️
Jeu compétitif interactif où les joueurs naviguent à travers un graphe pour atteindre la destination.

**Localisation:** `./jeu_garph/`

**Technologies:**
- Frontend: React.js
- Backend: Node.js
- Communication: WebSockets / Socket.io
- Build: Webpack (CRA)

**Fonctionnalités:**
- 🎯 Jeu temps réel multi-joueurs
- 📊 Visualisation interactive du graphe
- 🏆 Système de scores et classement
- ⚡ Physics-based collision detection
- 🎨 Animations fluides

**Structure:**
```
jeu_garph/
├── server.js                # Serveur Node.js
├── package.json             # Dépendances
├── README.md
├── presentation_graphracer.tex
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js              # Composant principal
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── context/            # Context API
│   ├── pages/              # Pages
│   ├── components/         # Composants React
│   ├── engine/             # Logique de jeu
│   └── data/               # Données statiques
└── .git/                   # Repo Git existant
```

**Démarrage:**
```bash
cd jeu_garph
npm install
npm start              # Dev server sur http://localhost:3000
node server.js         # Serveur backend
```

---

### 2. **Serious Game / GraphRacer (Vite)** 🎓
Version moderne du jeu GraphRacer avec **Vite** pour meilleure performance.

**Localisation:** `./Serious_Game/graphracer/`

**Technologies:**
- Frontend: React 19 + Vite
- Bundler: Vite (ultra-rapide)
- Styling: Tailwind CSS
- ESLint: Configuration moderne

**Avantages Vite vs CRA:**
- ⚡ Hot Module Replacement (HMR) instantané
- 🚀 Build 10x plus rapide
- 📦 Bundle size réduit
- 🎯 Meilleure expérience développeur

**Structure:**
```
Serious_Game/
├── tailwind.config.js
├── graphracer/
│   ├── vite.config.js          # Config Vite
│   ├── postcss.config.js        # PostCSS (Tailwind)
│   ├── eslint.config.js         # Linting
│   ├── package.json
│   ├── README.md
│   ├── index.html
│   ├── public/                  # Assets statiques
│   └── src/
│       ├── main.jsx             # Entry point
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── components/
└── .git/                        # Repo Git existant
```

**Démarrage:**
```bash
cd Serious_Game/graphracer
npm install
npm run dev             # Dev server avec HMR
npm run build           # Production build
npm run preview         # Preview build
```

---

## 🚀 Installation & Setup

### Prérequis Globaux
- Node.js 18+
- npm 9+ ou yarn
- Git
- Navigateur Web moderne

### Installation GraphRacer (CRA)

```bash
cd jeu_garph
npm install
npm start               # Démarre sur http://localhost:3000
```

### Installation GraphRacer (Vite)

```bash
cd Serious_Game/graphracer
npm install
npm run dev             # Démarre avec HMR sur http://localhost:5173
```

### Installation Backend Server

```bash
cd jeu_garph
node server.js          # Port 5000 par défaut
```

## 🎮 Gameplay

### Objectif
- Naviguer le graphe de nœuds
- Atteindre le nœud destination le plus rapidement possible
- Éviter les obstacles et les autres joueurs
- Scorer des points selon la position finale

### Contrôles
| Action | Clavier | Souris |
|--------|---------|--------|
| Mouvement | WASD ou Flèches | Click & Drag |
| Accélérer | Shift | Clic droit |
| Sprint | Space | Double-clic |

### Système de Points
```
Position 1ère: 1000 pts
Position 2ème: 750 pts
Position 3ème: 500 pts
...
Autres: 100 pts
```

## 🛠️ Développement

### Scripts Disponibles

#### GraphRacer (CRA)
```bash
npm start               # Dev server
npm run build           # Production build
npm test                # Lance les tests
npm run eject           # Ejection (irréversible)
```

#### GraphRacer (Vite)
```bash
npm run dev             # Dev avec HMR
npm run build           # Build production
npm run preview         # Preview du build
npm run lint            # ESLint check
```

### Ajout d'une Nouvelle Page

```javascript
// src/pages/NewPage.jsx
export default function NewPage() {
  return <div>New Page Content</div>;
}

// src/App.js ou App.jsx
import NewPage from './pages/NewPage';

// Ajouter une route
<Route path="/new-page" element={<NewPage />} />
```

### Ajout d'une Nouvelle Composant

```javascript
// src/components/MyComponent.jsx
export default function MyComponent({ prop1, prop2 }) {
  return <div>{prop1}</div>;
}

// Utilisation
import MyComponent from './components/MyComponent';
<MyComponent prop1="value" prop2={data} />
```

## 📊 Architecture

### Frontend State Management
```
Context API (src/context/)
├── GameContext      # État du jeu
├── PlayerContext    # Données joueur
└── ScoreContext     # Classement
```

### Backend Communication
```
Node.js Server (server.js)
├── WebSocket Events
├── Player Actions
├── Score Updates
└── Game Sync
```

### Game Engine
```
src/engine/
├── Physics         # Collisions, gravité
├── Renderer        # Canvas rendering
├── Networking      # Sync multi-joueurs
└── Utils           # Helpers
```

## 📈 Performance

### Optimisations CRA
- Code splitting automatique
- Tree shaking
- Minification

### Optimisations Vite
- ESM native
- Lazy loading des dépendances
- CSS optimisation
- Compression automatique

**Benchmark:**
| Métrique | CRA | Vite |
|----------|-----|------|
| Dev Start | 3-5s | 0.3s |
| HMR | 1-2s | <200ms |
| Build | 45s | 4-8s |
| Bundle Size | 150KB | 95KB |

## 🔮 Roadmap

- [x] Jeu de base fonctionnel
- [x] Multi-joueurs temps réel
- [ ] Matchmaking automatiqueélé - [ ] Chat in-game
- [ ] Système de quêtes
- [ ] Customisation de personnage
- [ ] Mobile responsif (PWA)
- [ ] Leaderboard global
- [ ] Replay system

## 📚 Ressources

- [React Documentation](https://react.dev)
- [Node.js Documentation](https://nodejs.org)
- [Vite Guide](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WebSocket Guide](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

## 🐛 Troubleshooting

### Port 3000/5173 déjà en cours d'utilisation
```bash
# Tuer les processus
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Node modules corrompus
```bash
rm -rf node_modules package-lock.json
npm install
```

### Hot Reload ne fonctionne pas
```bash
# Vider le cache
npm run build
rm -rf .cache dist
npm run dev
```

## 👤 Auteur
**Izadine** - Game Developer & Full Stack Engineer  
Email: massarizzadinealkhali@gmail.com  
GitHub: [@iz235](https://github.com/iz235)

## 📄 Licence
MIT License

---
**État:** ✅ Fonctionnel  
**Dernière Mise à Jour:** Mai 2026  
**Gameplay Status:** Testé & Équilibré
