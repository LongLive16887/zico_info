// Единственное место для правки контента визитки (общие тексты — в i18n.ts).
import type { Lang } from './i18n';

export const profile = {
  name: 'ZICO EFOOTBALL',
  photo: '/photo.jpg', // используется только как og:image при шаринге ссылки
  statValue: 900,
  statSuffix: '+',
};

export type Promo = {
  url: string;
  handle: string; // подпись в пилюле над заголовком: куда ведёт баннер
  art: string; // квадрат 360×360, на сайте показывается кругом
  alt: string;
  tone: 'blue' | 'navy'; // фон карточки в цветах продукта, сами цвета — в Promo.astro
  icon: 'search' | 'trophy'; // иконка на кнопке
  title: Record<Lang, string> | string; // строка — одна на все языки (название)
  text: Record<Lang, string>;
  cta: Record<Lang, string>;
};

// Рекламные баннеры под текстом о себе, сверху вниз.
export const promos: Promo[] = [
  {
    url: 'https://t.me/akkaunttop_bot',
    handle: '@akkaunttop_bot',
    // название «Akkaunt Top» нарисовано на самом арте, поэтому отдельной надписью его не дублируем
    art: '/akkaunttop.webp',
    alt: 'Akkaunt Top',
    tone: 'blue',
    icon: 'search',
    // uz — формулировки владельца (03.11.2026), остальные языки переведены с них.
    // ru и ky короче узбекского нарочно: заголовок стоит в узкой колонке рядом с лого,
    // и дословный перевод уходил в 4–5 строк
    title: {
      ru: 'Не находите идеальный аккаунт?',
      uz: "O'zingizga ideal akkaunt topa olmayapsizmi?",
      ky: 'Идеалдуу аккаунт таппай жатасызбы?',
      en: "Can't find your ideal account?",
    },
    text: {
      ru: 'Соберите свой состав — найдём аккаунт под него: с процентом совпадения, ценой и продавцом.',
      uz: "Tarkibingizni yig'ing — tarkibingiz bo'yicha akkaunt topib beramiz: mos kelish foizi, narx va sotuvchi bilan.",
      ky: 'Курамыңызды жыйнаңыз — курамыңыз боюнча аккаунт таап беребиз: дал келүү пайызы, баасы жана сатуучусу менен.',
      en: "Build your squad — we'll find an account to match it, with match rate, price and seller.",
    },
    // uz — дословно подпись кнопки в самом боте
    cta: {
      ru: 'Найти аккаунт',
      uz: 'Akkaunt qidirish',
      ky: 'Аккаунт издөө',
      en: 'Find an account',
    },
  },
  {
    url: 'https://proleague.zico.uz',
    handle: 'proleague.zico.uz',
    // на арте написано «ZICOS PRO LEAGUE», лига же называется ZICO PRO LEAGUE — заголовок по названию
    art: '/proleague.webp',
    alt: 'ZICO PRO LEAGUE',
    tone: 'navy',
    icon: 'trophy',
    // uz — фраза владельца (05.11.2026), разделена по тире: название — в заголовок, остальное — в текст
    title: 'ZICO PRO LEAGUE',
    text: {
      ru: 'Лига, где собрались игроки мирового уровня!',
      uz: "Jahon miqyosidagi o'yinchilar jamlangan liga!",
      ky: 'Дүйнөлүк деңгээлдеги оюнчулар чогулган лига!',
      en: 'A league of world-class players!',
    },
    cta: {
      ru: 'Перейти к лиге',
      uz: "Ligaga o'tish",
      ky: 'Лигага өтүү',
      en: 'Go to the league',
    },
  },
];

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
