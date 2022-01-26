import { Location } from "react-router-dom";

const PAGES = [
  'home',
  'quiz',
  'how_it_works',
  'leaderboard',
  'practice',
  'about',
  'login',
  'signup',
  'dashboard'
] as const;

export type Page = typeof PAGES[number];

const pageUrls: { [key in Page]: string } = {
  home: "/",
  quiz: "/quiz",
  how_it_works: "/how-it-works",
  leaderboard: "/leaderboard",
  practice: "/practice",
  about: "/about",
  login: "/login",
  signup: "/signup",
  dashboard: "/dashboard"
};

export const currentPage = (location: Location): Page | undefined => {
  const { pathname } = location;
  return PAGES.find(page => pageUrls[page] === pathname);
}

export const pathForPage = (page: Page): string => pageUrls[page];
