import { useEffect, useState } from "preact/hooks";
import ExtensionList from "./components/ExtensionList";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Title from "./components/Title";

import type { TypeTheme } from "./types";
import cn from "@meltdownjs/cn";


export function App() {
  const [theme, setTheme] = useState<TypeTheme>(() => window.localStorage.getItem('theme') as TypeTheme || 'light');

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
    const rootElement = document.getElementById('body')!;
    rootElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={cn('min-w-90 min-h-screen flex flex-col bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540]')}>
      <div className={'container bg-inherit mx-auto max-w-7xl px-3 pt-8'}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className={'flex flex-col justify-center items-center gap-4 py-8 md:flex-row md:justify-between'}>
          <Title className="dark:text-white/95">Extensions List</Title>
          <Filter />
        </div>

        <ExtensionList />
      </div>
    </div>
  )
}
