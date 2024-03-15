'use client';

import Image from "next/image";
import { ReactTyped } from "react-typed";
import Header from "./Header";

interface HomeLayoutProps {
  messages: string[];
}

export default function HomeLayout({ messages }: HomeLayoutProps) {
  return (
    <main className="flex full flex-col items-center justify-center p-4">
      <Header />

        <div className="aspect-video relative w-full md:w-1/2">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/invent-solutions.svg"
            alt="Invent Solutions Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        <ReactTyped
          strings={messages}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="text-sm sm:text-xl md:text-2xl text-balance [&_span]:text-balance"
        />
      
      <footer className="w-full text-center p-2 sm:p-4 md:p-6 mt-auto fixed bottom-0">
        <p>Invent Solutions - CNPJ: 17.499.859/0001-90</p>
      </footer>
    </main>
  );
}
