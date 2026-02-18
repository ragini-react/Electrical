"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Sun, Moon, Check, X } from "lucide-react";

const themes = [
  { name: "blue", color: "#1e40af", label: "Blue" },
  { name: "purple", color: "#7c3aed", label: "Purple" },
  { name: "pink", color: "#db2777", label: "Pink" },
  { name: "green", color: "#059669", label: "Green" },
  { name: "yellow", color: "#d97706", label: "Yellow" },
  { name: "red", color: "#dc2626", label: "Red" },
  { name: "orange", color: "#ea580c", label: "Orange" },
  { name: "teal", color: "#0d9488", label: "Teal" },
  { name: "indigo", color: "#4f46e5", label: "Indigo" },
  { name: "cyan", color: "#0891b2", label: "Cyan" },
  { name: "lime", color: "#65a30d", label: "Lime" },
  { name: "rose", color: "#e11d48", label: "Rose" },
  { name: "sky", color: "#0284c7", label: "Sky" },
  { name: "violet", color: "#8b5cf6", label: "Violet" },
  { name: "fuchsia", color: "#c026d3", label: "Fuchsia" },
  { name: "amber", color: "#f59e0b", label: "Amber" },
];

export default function ThemeSelector() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [colorTheme, setColorTheme] = useState("blue");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const savedColorTheme = localStorage.getItem("colorTheme") || "blue";
    setColorTheme(savedColorTheme);
    document.documentElement.setAttribute("data-theme", savedColorTheme);
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.contains("dark");
    
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  const handleColorThemeChange = (themeName: string) => {
    setColorTheme(themeName);
    localStorage.setItem("colorTheme", themeName);
    document.documentElement.setAttribute("data-theme", themeName);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={panelRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 bg-white dark:bg-[#252525] rounded-xl shadow-2xl p-4 w-72 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                Color Theme
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close theme selector"
              >
                <X size={20} className="text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Dark/Light Mode Toggle */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Mode
              </p>
              <div className="flex gap-2">
                <button
                  onClick={toggleDarkMode}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border-2 transition-all ${
                    resolvedTheme === "light"
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <Sun size={16} className="text-yellow-500" />
                  <span className="text-xs font-medium text-gray-900 dark:text-white">
                    Light
                  </span>
                </button>
                <button
                  onClick={toggleDarkMode}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border-2 transition-all ${
                    resolvedTheme === "dark"
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <Moon size={16} className="text-blue-500" />
                  <span className="text-xs font-medium text-gray-900 dark:text-white">
                    Dark
                  </span>
                </button>
              </div>
            </div>

            {/* Color Themes */}
            <div>
              <div className="grid grid-cols-4 gap-2">
                {themes.map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => handleColorThemeChange(theme.name)}
                    className="relative group"
                  >
                    <div
                      className={`w-full aspect-square rounded-lg transition-all ${
                        colorTheme === theme.name
                          ? "ring-2 ring-offset-1 dark:ring-offset-[#252525] scale-105"
                          : "hover:scale-105"
                      }`}
                      style={{
                        backgroundColor: theme.color,
                        boxShadow: colorTheme === theme.name ? `0 0 0 2px ${theme.color}` : 'none',
                      }}
                    >
                      {colorTheme === theme.name && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Check className="text-white" size={16} strokeWidth={4} />
                        </div>
                      )}
                    </div>
                    <p className="text-[10px] text-center mt-1 text-gray-600 dark:text-gray-400 font-medium">
                      {theme.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-all"
        style={{
          background: `linear-gradient(135deg, var(--theme-primary), var(--theme-primary-dark))`,
        }}
      >
        <Palette className="text-white" size={20} />
      </motion.button>
    </div>
  );
}
