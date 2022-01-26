import { Location } from "react-router-dom";

const PAGES = [
  'home',
  'leaderboard',
  'yesterdays',
  'how_it_works',
  'contribute',
] as const;

export type Page = typeof PAGES[number];

const pageUrls: { [key in Page]: string } = {
  home: "/",
  leaderboard: "/leaderboard",
  yesterdays: "/yesterdays",
  how_it_works: "/how-it-works",
  contribute: "/contribute",
};

export const currentPage = (location: Location): Page | undefined => {
  const { pathname } = location;
  return PAGES.find(page => pageUrls[page] === pathname);
}

export const pathForPage = (page: Page): string => pageUrls[page];
