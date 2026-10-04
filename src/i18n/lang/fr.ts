import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Accueil",
    posts: "Posts",
    tags: "Tags",
    about: "A propos",
    archives: "Archives",
    search: "Rechercher",
  },
  post: {
    publishedAt: "Publié à",
    updatedAt: "Mis à jour",
    sharePostIntro: "Partager ce post :",
    sharePostOn: "Partager ce post sur {{platform}}",
    sharePostViaEmail: "Partager ce post par courriel",
    tagLabel: "Tags",
    backToTop: "Retour en haut",
    goBack: "Retour",
    editPage: "Modifier la page",
    previousPost: "Post précédent",
    nextPost: "Post suivant",
  },
  pagination: {
    prev: "Précédent",
    next: "Suivant",
    page: "Page",
  },
  home: {
    socialLinks: "Réseaux sociaux ",
    featured: "Posts en avant",
    recentPosts: "Posts récents",
    allPosts: "Tous les posts",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Tous droits réservés",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Tous les articles ayant le tag",

    tagsTitle: "Tags",
    tagsDesc: "Tous les tags utilisés sur ce post.",

    postsTitle: "Posts",
    postsDesc: "Tous les articles de Solidaires 35.",

    archivesTitle: "Archives",
    archivesDesc: "Tous les articles archivés de Solidaires 35.",

    searchTitle: "Rechercher",
    searchDesc: "Rechercher un article...",
  },
  a11y: {
    skipToContent: "Aller au contenu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    toggleTheme: "Changer de thème",
    searchPlaceholder: "Rechercher des posts...",
    noResults: "Aucun résultat trouvé",
    goToPreviousPage: "Aller à la page précédente",
    goToNextPage: "Aller à la page suivante",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page introuvable",
    goHome: "Retourner à l'accueil",
  },
} satisfies UIStrings;
