import "server-only";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  id: () => import("@/dictionaries/id.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
