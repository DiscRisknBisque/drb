import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "🥏🎲🦞",
  EMAIL: "joshquin@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_TALKS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const TALKS: Metadata = {
  TITLE: "Talks",
  DESCRIPTION:
    "A collection of my talks and podcast appearances, with links to videos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://x.com/DiscRisknBisque",
  },
  {
    NAME: "github",
    HREF: "https://github.com/DiscRisknBisque",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/joshuaquintal/",
  },
];
