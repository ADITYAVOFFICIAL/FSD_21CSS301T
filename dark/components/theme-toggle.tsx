"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-14 w-24 items-center justify-center rounded-full bg-gradient-to-b from-zinc-200 to-zinc-300 shadow-lg dark:from-zinc-700 dark:to-zinc-800"
    >
      <motion.div
        className="absolute left-2 h-10 w-10 rounded-full bg-white shadow-md dark:left-12 dark:bg-zinc-900"
        layout
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      />
      <Sun className="absolute left-3 h-6 w-6 text-yellow-500 dark:left-13 dark:text-zinc-600" />
      <Moon className="absolute right-3 h-6 w-6 text-zinc-600 dark:text-yellow-500" />
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}