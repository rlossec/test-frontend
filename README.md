### **🚀 Quick Start**
 Linux MaxOS :
`cd alt-frontend && npm install && npm run dev`  
Windows :
`cd alt-frontend & npm install & npm run dev`

### **🏗️ Architecture**

_Structure projet et organisation du code sur 3 pages_

J'ai utilisé Vite pour avoir la base pour React + TypeScript.  
J'ai du débuté par les types et le routage des 3 pages mères. Et Le layout de base.

```.md
src/
 ├─ assets/  
 ├─ components/ 
 ├─ config/         # données paramétrables (départements, catégories outils)
 ├─ context/        # contextes globaux (thème, notifications)
 ├─ hooks/          # un hook par modèle + thèmes/notifs
 ├─ icons/          # Un modèle de base, et des JSX de heroicons.
 ├─ layout/         # structure de base commune au page
 ├─ pages/          # Dashboard, Tools, Analytics
 ├─ styles/         
 ├─ types/          
 ├─ utils/          # Eléments de logique, extérieurs à la logique des modèles
 └─ routes.tsx      # qui définit les différentes routes
```
Précisions pour le dossier `components`  :  
Des dossiers modèle, ici je n'ai eu besoin que de composant par rapport à Tool.  
Des dossiers page, ici dashboard et analytics ont leur propre dossier. On retrouve en sous dossier l'architecture des composants principaux.  
Un dossier common pour les éléments que je peux réutiliser dans d'autres projets, boutons, éléments de formulaire etc...


### **🎨 Design System Evolution**

_Comment le design s'est construit et maintenu sur 3 jours_
1. Premier jour : Très sommaire, Layout minimaliste avec : header, contenu, footer(vide). Et la décomposition en sous composant du header.
2. Deuxième jour : Définition du thème, ajout des icônes. Configuration des sous composants du headers. Des adaptations des couleur pour le theme dans les propriété css.
3. Troisième jour : Rien

### **🔗 Navigation & User Journey**

_Flow utilisateur complet : Dashboard → Tools → Analytics_

### **📊 Data Integration Strategy**

_Gestion des données du JSON server à travers les pages_
Ma stratégie :
1. Recherche des chiffres attendus et des données nécessaires
2. Recherche des endpoints nécessaires et des calculs
3. Récupération des données au niveau de la page mère
4. Adaptation dans certains cas (Most Least used Tools) pour une intégration au niveau du composant

Au niveau de la structure, j'ai rapidement défini une série de hooks par modèle.  
D'abord le hook ne contenait qu'une fonction qui récupérait uniquement la liste via le GET, url param.
J'ai codé les url param quand j'en avais besoin.
J'aurai coder les méthode CRUD des Tool ensuite


### **📱 Progressive Responsive Design**

_Approche mobile-first et adaptation par page_
Uniquement le Header

### **🧪 Testing Strategy**

_Tests unitaires et stratégie QA sur l'ensemble_
Rien

### **⚡ Performance Optimizations**

_Techniques utilisées pour une app 3-pages optimale_

- Eviter les appels API multiples : Hooks appeler en priorité dans la page
- UseCallback dans mes fonctions définies dans mes hooks

### **🎯 Design Consistency Approach**

_Comment vous avez maintenu la cohérence sans mockups J7-J8_

Système de composants réutilisables même si je n'ai pas eu le temps faire bcp.
J'avais aussi pas mal de composants de projet persos qui m'ont permis de gagner du temps comme les boutons ou RangeSlider

### **📈 Data Visualization Philosophy**

_Choix de charts library et intégration design system_
D'abord m'assurer que les données sont récupérées. Pas le temps pour mettre la librarie

### **🔮 Next Steps / Complete App Vision**

_Évolutions possibles pour une app SaaS Tools complète_


### Choix

Oublie manquant prioritaires :
- Gestion des erreurs et chargement minimales. Il faudrait coder un cadre unifié.
- Page View/Edit et Add Tool : placeholder uniquement -> Endpoints et Liaisons
- ToolsPage : couleurs pastilles car non visibles
- Search adaptée : trop couteux en temps pour ce que j'avais de dispo
- Analytics : Chart

Pour avoir des données fictives :
- Une date fictive du jour dans le fichier de config.

Pas prioritaire:
- Dashboard : filtrer sur updated_at du dernier mois.
- Dashboard : fonction dans utils pour formatter les nombres
- ToolsPage : Toggle relier à un endpoint 
- ToolsPage : Mise en forme Filtres
