# Analyse des Performances des Posts LinkedIn - Dashboard Next.js

Ce projet est une application [Next.js](https://nextjs.org) développée pour analyser les performances des publications sur LinkedIn, en se basant sur des données scrapées et traitées via un pipeline de données. Le tableau de bord interactif visualise des indicateurs clés de performance (KPI) tels que les thèmes viraux, les hashtags stratégiques, les moments optimaux de publication, et la longueur idéale des posts. L’objectif est d’aider les créateurs de contenu et les professionnels du marketing à optimiser leur stratégie de publication pour maximiser l’engagement et la viralité sur LinkedIn.

Pour plus de détails sur le pipeline de données (scraping, transformation, stockage, automatisation), consultez le dépôt dédié :  
[**LinkedIn Performance Pipeline Repository**](https://github.com/Martial2023/Linkedin-Performance-Analytics-Pipeline)

## Fonctionnalités du Projet

- **Dashboard Interactif** : Visualisation des KPI via des graphiques dynamiques (courbes, histogrammes, heatmaps) pour explorer les tendances d’engagement.
- **Analyse des Thèmes** : Identification des thèmes à fort engagement comme `WorkplaceCulture`, `DigitalTransformation`, `Leadership`, et `IA`.
- **Hashtags Stratégiques** : Mise en évidence des hashtags performants (par exemple, `#digitaltransformation`, `#ai`) pour booster la visibilité.
- **Optimisation du Timing** : Analyse des moments à fort engagement (par exemple, mercredi soir : 530.5, vendredi fin de journée : 359.7).
- **Longueur des Posts** : Comparaison des longueurs de posts (215 mots pour fort engagement vs 165 mots pour faible engagement).

- **Connexion MongoDB et Fallback CSV** : Récupération des KPI depuis MongoDB avec un fallback vers des fichiers CSV en cas d’erreur.

## Prérequis

Avant de lancer le projet, assurez-vous d’avoir les éléments suivants :

- **Node.js** : Version 18 ou supérieure (vérifiez avec `node -v`).
- **MongoDB** : Une base de données `linkedin_kpi_db` configurée (par exemple, MongoDB Atlas) avec les collections nécessaires (par exemple, `themes`, `hashtags`, `engagement_timing`). Ajoutez l’URL de connexion dans un fichier `.env` :
  ```
  MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/linkedin_kpi_db?retryWrites=true&w=majority
  NEXT_PUBLIC_VERCEL_URL=https://your-vercel-app.vercel.app
  ```
- **Dépendances** : Les dépendances du projet doivent être installées (voir ci-dessous).

## Installation et Lancement

Ce projet a été initialisé avec [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Suivez ces étapes pour le lancer :

1. **Cloner le Répertoire** :
   ```bash
   git clone https://github.com/Martial2023/Linkedin-Performance-Analytics
   cd linkedin_posts_analysis
   ```

2. **Installer les Dépendances** :
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   # ou
   bun install
   ```

3. **Configurer les Variables d’Environnement** :
   Créez un fichier `.env` à la racine du projet et ajoutez les variables nécessaires :
   ```
   MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/linkedin_kpi_db?retryWrites=true&w=majority
   NEXT_PUBLIC_VERCEL_URL=https://your-vercel-app.vercel.app
   ```

4. **Lancer le Serveur de Développement** :
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   # ou
   bun dev
   ```

5. **Accéder au Dashboard** :
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le tableau de bord.

Le dashboard se mettra à jour automatiquement à mesure que vous modifiez les fichiers (par exemple, `app/page.tsx` pour la page principale).

## Structure du Projet

- **`app/`** : Contient les pages et les Server Actions.
  - `page.tsx` : Page principale affichant le tableau de bord.
  - `actions/` : Server Actions pour récupérer les KPI (par exemple, `getEngagementTiming.ts`, ).
- **`components/`** : Composants React pour les visualisations.
- **`lib/`** : Fonctions utilitaires.
- **`public/Kpis_csv/`** : Dossier pour les fichiers CSV de fallback (par exemple, `engagement_timing.csv`, `themes.csv`).
- **`types/`** : Définitions TypeScript pour les données (par exemple, `EngagementPostTheme`, `TopHashtagImpact`).

## Exemple de KPI Visualisé

Le dashboard affiche des KPI comme l’engagement par jour et période. Par exemple, pour `engagement_timing.csv` :
- **Données** : Mercredi soir (jour 3) avec un engagement moyen de 530.5, vendredi fin de journée (jour 5) avec 359.7.

## Contribution

Si vous souhaitez contribuer à ce projet, veuillez ouvrir une issue ou soumettre une pull request sur GitHub. Toute suggestion pour améliorer les visualisations, ajouter de nouveaux KPI, ou optimiser l’interface utilisateur est la bienvenue !

## Lien vers le Pipeline de Données

Pour plus de détails sur le pipeline de données (scraping, transformation, stockage, automatisation), consultez le dépôt dédié :  
[**LinkedIn Performance Pipeline Repository**](https://github.com/Martial2023/Linkedin-Performance-Analytics-Pipeline)

---