/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

const accents = {
  amber: {
    name: "Phosphor Amber",
    primary: "#F59E0B",
    primaryHover: "#D97706",
    glow: "rgba(245, 158, 11, 0.15)",
    border: "rgba(245, 158, 11, 0.3)",
    badgeBg: "rgba(245, 158, 11, 0.1)",
    text: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-500",
  },
  cyan: {
    name: "Electric Cyan",
    primary: "#0EA5E9",
    primaryHover: "#0284C7",
    glow: "rgba(14, 165, 233, 0.15)",
    border: "rgba(14, 165, 233, 0.3)",
    badgeBg: "rgba(14, 165, 233, 0.1)",
    text: "text-sky-500 dark:text-sky-400",
    bg: "bg-sky-500",
  },
  emerald: {
    name: "Emerald Matrix",
    primary: "#10B981",
    primaryHover: "#059669",
    glow: "rgba(16, 185, 129, 0.15)",
    border: "rgba(16, 185, 129, 0.3)",
    badgeBg: "rgba(16, 185, 129, 0.1)",
    text: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-500",
  },
  indigo: {
    name: "Indigo",
    primary: "#6366F1",
    primaryHover: "#4F46E5",
    glow: "rgba(99, 102, 241, 0.15)",
    border: "rgba(99, 102, 241, 0.3)",
    badgeBg: "rgba(99, 102, 241, 0.1)",
    text: "text-indigo-500 dark:text-indigo-400",
    bg: "bg-indigo-500",
  },
  rose: {
    name: "Precision Rose",
    primary: "#F43F5E",
    primaryHover: "#E11D48",
    glow: "rgba(244, 63, 94, 0.15)",
    border: "rgba(244, 63, 94, 0.3)",
    badgeBg: "rgba(244, 63, 94, 0.1)",
    text: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-500",
  },
};

const ThemeAccentContext = createContext({
  accentKey: "amber",
  accent: accents.amber,
  setAccentKey: () => {},
  availableAccents: accents,
});

export const ThemeAccentProvider = ({ children }) => {
  const [accentKey, setAccentKey] = useState("amber");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_accent");
    if (saved && accents[saved]) {
      setAccentKey(saved);
    }
  }, []);

  const changeAccent = (key) => {
    if (accents[key]) {
      setAccentKey(key);
      localStorage.setItem("portfolio_accent", key);
    }
  };

  return (
    <ThemeAccentContext.Provider
      value={{
        accentKey,
        accent: accents[accentKey],
        setAccentKey: changeAccent,
        availableAccents: accents,
      }}
    >
      {children}
    </ThemeAccentContext.Provider>
  );
};

export const useThemeAccent = () => useContext(ThemeAccentContext);
