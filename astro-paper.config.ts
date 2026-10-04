import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://www.solidaires35.fr/",
    title: "Solidaires 35",
    description: "Union départementale de SUD / Solidaires en Ille-et-Vilaine.",
    author: "Solidaires 35",
    profile: "https://www.solidaires35.fr",
    ogImage: "default-og.jpg",
    lang: "fr",
    timezone: "Europe/Paris",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "bluesky",   url: "https://bsky.app/profile/solidaires35.solidaires.org" },
    { name: "facebook",  url: "https://www.facebook.com/solidaires35/" },
    { name: "instagram", url: "https://www.instagram.com/solidaires_35/" },
    { name: "mail",      url: "mailto:contact@solidaires35.fr" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});