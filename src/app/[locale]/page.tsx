import { unstable_setRequestLocale } from 'next-intl/server';
import {useTranslations} from 'next-intl';
import HomeLayout from "@/components/HomeLayout";

const messageArray = Array.from({ length: 10 });

interface Props {
  params: { locale: string };
}

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Home');

  const messages = messageArray.map((_, index) => t(`message${index}`));

  return (
    <HomeLayout messages={messages}/>
  );
}
