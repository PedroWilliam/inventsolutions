"use client"

import Image from "next/image";
import { ReactTyped } from "react-typed";
import translations from "./translations";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

type LocaleKey = keyof typeof translations;

export default function Home() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const locale:LocaleKey = searchParams.get("locale") as LocaleKey ?? "pt-BR";

  function switchLocale(newLocale: string) {
    router.push(pathName + "?locale=" + newLocale );
  }

  const typedStrings = translations[locale];

  return (
    <main className="flex flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <button onClick={() => switchLocale('pt-BR')} className="mx-2">PT</button>
          | 
          <button onClick={() => switchLocale('en-US')} className="mx-2">EN</button>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center z-[-1]">
        <Image
          className="relative z-10 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/invent-solutions.svg"
          alt="Invent Solutions Logo"
          width={800}
          height={450}
          priority
        />
        <div className="mt-[-60px] sm:mt-[-140px]">
          <ReactTyped
            strings={typedStrings}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="text-xl"
          />
        </div>
      </div>

      <footer className="absolute bottom-0 w-full text-center p-4">
        <p>Invent Solutions - CNPJ: 17.499.859/0001-90</p>
      </footer>
    </main>
  );
}
