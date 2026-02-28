import { en } from "./en";
import { no } from "./no";

export const languages = {
  en,
  no,
};

export type Language = keyof typeof languages;
export const defaultLang: Language = "en";
