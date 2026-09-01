// Единственное место для правки контента визитки (общие тексты — в i18n.ts).
import type { Lang } from './i18n';

export const profile = {
  name: 'ZICO EFOOTBALL',
  photo: '/photo.jpg', // используется только как og:image при шаринге ссылки
  statValue: 900,
  statSuffix: '+',
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string; // ключ иконки из Icon.astro
  color: string; // фирменный цвет иконки/бренда
};

export const socials: SocialLink[] = [
  {
    name: 'YouTube',
    url: 'https://youtube.com/@zicoefootball7777?si=xMcJECgXi7OaJSob',
    icon: 'youtube',
    color: '#ff3b3b',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/zico_efootball/',
    icon: 'instagram',
    color: '#e1306c',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/zicoefootballuz',
    icon: 'telegram',
    color: '#29a9eb',
  },
  { name: 'Coins Donate', url: 'https://t.me/zicocoins', icon: 'coins', color: '#ffd166' },
  { name: 'Account Shop', url: 'https://t.me/zicoshopkanal', icon: 'shop', color: '#3ddc84' },
  { name: 'Premium', url: 'https://t.me/zicopremiumbot', icon: 'premium', color: '#ffd166' },
];

export type Video = {
  id: string; // id ролика на YouTube
  title: Record<Lang, string>; // переводы названия — переключаются вместе с языком сайта
  thumb: string; // обложка лежит локально: свой сервер отдаёт её быстрее, чем ytimg
};

export const videos: Video[] = [
  {
    id: 'Uhw18SOz5BI',
    title: {
      ru: 'Бросил вызов ТОП-1 мира — а он сказал, что я просто ютубер 😳',
      uz: "Dunyo TOP-1 iga chaqiriq tashladim — u esa meni shunchaki YouTuber dedi 😳",
      ky: 'Дүйнөнүн ТОП-1ине чакырык таштадым — ал мени жөн эле YouTuber деди 😳',
      en: 'I Challenged the WORLD TOP 1 — He Said I’m Just a YouTuber 😳',
    },
    thumb: '/thumbs/Uhw18SOz5BI.jpg',
  },
  {
    id: '5iqUHg6g6DU',
    title: {
      ru: 'Обыграл игрока из ТОП-5 дивизиона со счёта 0:2 до 3:2! 🔥',
      uz: "Divizion TOP-5 o'yinchisini 0:2 dan 3:2 ga yutdim! 🔥",
      ky: 'Дивизиондун ТОП-5 оюнчусун 0:2ден 3:2ге уттум! 🔥',
      en: 'I BEAT A DIVISION TOP 5 PLAYER FROM 0–2 TO 3–2! 🔥',
    },
    thumb: '/thumbs/5iqUHg6g6DU.jpg',
  },
  {
    id: 'C95tqjUyw7Q',
    title: {
      ru: 'Zico против ТОП-9 дивизиона 🥶 это просто безумие 🤯',
      uz: 'Zico divizion TOP-9 ga qarshi 🥶 bu aql bovar qilmas 🤯',
      ky: 'Zico дивизиондун ТОП-9уна каршы 🥶 бул укмуш 🤯',
      en: 'Zico Vs Division top 9 🥶 its insaneee 🤯',
    },
    thumb: '/thumbs/C95tqjUyw7Q.jpg',
  },
];
