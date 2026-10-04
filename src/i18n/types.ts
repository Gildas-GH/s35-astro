export interface UIStrings {
  nav: {
    home: string;
    posts: string;
    tags: string;
    about: string;
    archives: string;
    search: string;
  };
  post: {
    publishedAt: string;
    updatedAt: string;
    sharePostIntro: string;
    sharePostOn: string;
    sharePostViaEmail: string;
    tagLabel: string;
    backToTop: string;
    goBack: string;
    editPage: string;
    previousPost: string;
    nextPost: string;
  };
  pagination: {
    prev: string;
    next: string;
    page: string;
  };
  home: {
    socialLinks: string;
    featured: string;
    recentPosts: string;
    allPosts: string;
  };
  footer: {
    copyright: string;
    allRightsReserved: string;
  };
  pages: {
    tagTitle: string;
    tagDesc: string;

    tagsTitle: string;
    tagsDesc: string;

    postsTitle: string;
    postsDesc: string;

    archivesTitle: string;
    archivesDesc: string;

    searchTitle: string;
    searchDesc: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    searchPlaceholder: string;
    noResults: string;
    goToPreviousPage: string;
    goToNextPage: string;
  };
  notFound: {
    title: string;
    message: string;
    goHome: string;
  };
}

export interface Formation {
  id: number;
  url: string;
  title: string;
  date_start: string; // ISO "YYYY-MM-DD"
  date_end: string; // ISO "YYYY-MM-DD"
  is_complete: boolean;
  search_description: string; // HTML
  structure: {
    id: number;
    name: string;
    email: string;
    is_interpro: boolean;
  };
  topic_tags: {
    id: string;
    name: string;
  }[];
  zip_code: string;
  city: string;
  is_online: boolean;
  status: "to_be_confirmed";
}

export interface Page {
  id: number
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded: {
    "wp:featuredmedia": {
      source_url: string;
      title: { rendered: string };
    }[]
    "wp:term": Category[][]
  };
  link: string;
  date: string;
  modified: string;
}

export interface Category {
  id: number;
  link: string;
  name: string;
  slug: string;
}