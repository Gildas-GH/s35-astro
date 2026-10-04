# Solidaires 35

Voici une proposition pour refaire le site de Solidaires 35. J'ai utilisé le framework Astro pour créer les composants. Si vous êtes habitués à React, vous devriez comprendre facilement comment ça fonctionne. Astro permet de générer le HTML côté serveur : c'est mieux pour le référencement, plus économe pour le client, et plus rapide si on met en place un bon cache (pas encore fait).

J'ai utilisé le thème Astro Paper, légèrement modifié pour mettre en place Scotchlidaires, les couleurs de Solidaires, et la bordure zig-zag en mode découpage.

Après avoir modifié le design, j'ai branché une intégration WordPress, pour lire les articles existants du site Solidaires 35 et les afficher sur ce nouveau site.

Pour les pages, je les ai toutes réécrites avec un template qui affiche des fichiers Markdown (contenant des en têtes)

Pour modifier les pages Markdown, j'ai branché Pages CMS qui est un éditeur visuel pour le Markdown avec en-têtes. Tous les en-têtes sont typés dans `.pages.yml` et `src/content.config.ts `.

Enfin, j'ai ajouté la liste de syndicats avec le même système que les pages.

Je pense qu'il est judicieux de migrer toutes les articles WordPress dans des fichiers Markdown (peut-être en créant un script)

Attention : je n'ai pas conservé les URL, il faudra gérer ça mieux

## Features

- [x] type-safe markdown
- [x] super fast performance
- [x] accessible (Keyboard/VoiceOver)
- [x] responsive (mobile ~ desktops)
- [x] SEO-friendly
- [x] light & dark mode
- [x] static search ([Pagefind](https://pagefind.app/))
- [x] draft posts & pagination
- [x] sitemap & rss feed
- [x] MDX support
- [x] collapsible table of contents
- [x] followed best practices
- [x] highly customizable
- [x] dynamic OG image generation for blog posts ([Blog Post](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/))
- [x] i18n ready

## Project Structure

Inside of AstroPaper, you'll see the following folders and files:

```bash
/
├── public/
│   ├── pagefind/          # auto-generated on build
│   ├── favicon.svg
│   └── default-og.jpg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   ├── content/
│   │   ├── pages/
│   │   │   └── about.md
│   │   └── posts/
│   │       └── some-blog-posts.md
│   ├── i18n/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── config.ts
│   └── content.config.ts
├── astro-paper.config.ts  # user-defined configurations
└── astro.config.ts
```

All blog posts are stored in the `src/content/posts/` directory. You can organise posts into subdirectories — the subdirectory name becomes part of the post URL.

## Running Locally

You can start the project by running the following commands:

```bash
# install dependencies if you haven't done so in the previous step.
pnpm install

# start running the project
pnpm dev
```
