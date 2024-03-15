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
    <main className="flex flex-col items-center justify-center p-4">
      <div className="z-10 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-5xl w-full flex flex-col lg:flex-row items-center justify-between font-mono text-xs sm:text-sm md:text-base">
        <div className="fixed bottom-0 left-0 flex h-12 sm:h-24 md:h-36 lg:h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:relative lg:h-auto lg:w-auto lg:bg-none p-2">
          <button onClick={() => switchLocale('pt-BR')} className="mx-1 sm:mx-2">PT</button>
          |
          <button onClick={() => switchLocale('en-US')} className="mx-1 sm:mx-2">EN</button>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center z-[-1] w-full max-w-5xl">
        <div className="relative w-full h-0 pb-[56.25%]">
          <Image
            className="relative top-0 left-0 z-10 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/invent-solutions.svg"
            alt="Invent Solutions Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="mt-[-60px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-140px]">
          <ReactTyped
            strings={typedStrings}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="text-lg sm:text-xl md:text-2xl"
          />
        </div>
      </div>

      <footer className="absolute bottom-10 w-full text-center p-2 sm:p-4 md:p-6">
        <p>Invent Solutions - CNPJ: 17.499.859/0001-90</p>
      </footer>
    </main>
  );
}
