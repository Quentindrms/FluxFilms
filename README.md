# FluxFilms

FluxFilms est une application web développée pour les passionnés de cinéma et de séries. Elle offre une interface épurée et réactive pour explorer un vaste catalogue d'œuvres, consulter des informations détaillées et découvrir de nouveaux contenus.

Ce projet a été conçu pour démontrer la mise en œuvre d'une architecture front-end moderne avec React, en mettant l'accent sur la qualité du code, la performance et l'expérience utilisateur.

## Fonctionnalités

  * **Navigation Intuitive** : Explorez facilement les films et les séries les plus populaires du moment.
  * **Pages de Détails Complètes** : Accédez à des informations riches pour chaque film ou série, incluant le synopsis, la distribution, les recommandations et plus encore.
  * **Découverte d'Acteurs** : Consultez la filmographie détaillée de chaque acteur et actrice.
  * **Recherche Performante** : Trouvez rapidement le contenu que vous cherchez (fonctionnalité en cours de développement).
  * **Design Responsive** : Profitez d'une expérience de navigation optimale sur tous les appareils, du bureau au mobile.

## Technologies et Outils

Ce projet est construit sur un écosystème moderne et performant :

  * **React (v19)** : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
  * **Vite** : Outil de build nouvelle génération offrant un environnement de développement rapide et une compilation optimisée pour la production.
  * **TypeScript** : Pour un code plus robuste, lisible et facile à maintenir grâce au typage statique.
  * **React Router (v7)** : Pour la gestion de la navigation et du routage au sein de l'application.
  * **ESLint** : Pour garantir une qualité de code constante et le respect des bonnes pratiques.

## Démarrage du projet

Pour exécuter ce projet en local, suivez ces étapes :

1.  **Clonage du dépôt**

    ```bash
    git clone <URL_DU_DÉPÔT>
    cd fluxfilms
    ```

2.  **Installation des dépendances**

    ```bash
    npm install
    ```

3.  **Lancement du serveur de développement**

    ```bash
    npm run dev
    ```

    L'application sera alors accessible à l'adresse `http://localhost:5173`.

## Scripts disponibles

Le projet inclut plusieurs scripts pour faciliter le développement et le déploiement :

  * `npm run dev`: Démarre le serveur de développement avec rechargement à chaud.
  * `npm run build`: Compile et optimise l'application pour la production dans le dossier `dist`.
  * `npm run lint`: Analyse le code source avec ESLint pour détecter les erreurs et les incohérences.
  * `npm run preview`: Lance un serveur local pour prévisualiser la version de production après le `build`.
