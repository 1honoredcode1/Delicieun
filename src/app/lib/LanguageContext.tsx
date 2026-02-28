"use client";

import { createContext, useContext, useState } from "react";
import { languages, Language, defaultLang } from "../lib/contants/index";

// eslint-disable-next-line
const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(defaultLang);

  const t = languages[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
