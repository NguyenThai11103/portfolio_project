import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { siteContent } from "../data/portfolioData";

const LocaleContext = createContext(null);

const getInitialLanguage = () => {
  const savedLanguage = window.localStorage.getItem("portfolio-language");
  return savedLanguage === "en" || savedLanguage === "vi" ? savedLanguage : "vi";
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within a LocaleProvider");
  return context;
};

export const LocaleProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
    const isVietnamese = language === "vi";
    const title = isVietnamese
      ? "Nguyễn Ngọc Duy Thái | Fullstack Developer"
      : "Nguyen Ngoc Duy Thai | Fullstack Developer";
    const description = isVietnamese
      ? "Portfolio của Nguyễn Ngọc Duy Thái - Fullstack Developer chuyên Web Architecture và Blockchain/Web3 tại Đà Nẵng."
      : "Portfolio of Nguyen Ngoc Duy Thai - a Fullstack Developer specializing in web architecture and Blockchain/Web3 in Da Nang.";

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", isVietnamese ? "vi_VN" : "en_US");
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
  }, [language]);

  const value = useMemo(() => ({
    language,
    content: siteContent[language],
    toggleLanguage: () => setLanguage((current) => (current === "vi" ? "en" : "vi")),
  }), [language]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};
