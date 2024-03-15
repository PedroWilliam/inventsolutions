import {useTranslations} from 'next-intl';
import HomeLayout from "@/components/HomeLayout";

const messageArray = Array.from({ length: 10 });

export default function Home() {
  const t = useTranslations('Home');

  const messages = messageArray.map((_, index) => t(`message${index}`));

  return (
    <HomeLayout messages={messages}/>
  );
}
