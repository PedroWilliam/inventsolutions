import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

const locales = ['en', 'pt-BR'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invent Solutions - Soluções Tecnológicas Inovadoras para Mobile e WebApps",
  description: "A Invent Solutions é especializada na criação de Apps Móveis, WebApps e APIs escaláveis, transformando sua visão digital em realidade. Descubra nossas soluções tecnológicas inovadoras hoje.",
  keywords: "Invent Solutions, Apps Móveis, WebApps, APIs Escaláveis, Transformação Digital, Soluções Tecnológicas, Inovação, Tecnologia",
  authors: [{name: "Invent Solutions"}],
};

export default function LocaleLayout({ children, params: {locale} }: Props) {
  
  return (
    <html lang={locale} className='full'>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${openSans.className} full`}>{children}</body>
    </html>
  );
}

