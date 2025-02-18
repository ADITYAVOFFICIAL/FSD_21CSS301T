"use client";

import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-100 to-zinc-200 transition-colors duration-500 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-800 dark:text-white sm:text-[5rem]">
          Dark Mode <span className="text-blue-500">Toggle</span>
        </h1>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-zinc-700 dark:text-zinc-300">
            Click the toggle to switch between light and dark mode
          </p>
          <p className="text-l text-zinc-700 dark:text-zinc-300 font-extrabold">
            ADITYA VERMA [RA2211027010019]
          </p>
          <div className="mt-8">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </main>
  );
}