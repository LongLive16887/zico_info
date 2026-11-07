export type Lang = 'ru' | 'uz' | 'ky' | 'en';

// Порядок кнопок в переключателе.
// Добавляя язык: сюда, в Lang, во все словари ниже, в titles видео и тексты баннеров (profile.ts)
// и в ogLocale (Layout.astro). Страница /<язык>/ и запись в sitemap появятся сами.
export const langs: Lang[] = ['ky', 'uz', 'ru', 'en'];

export const defaultLang: Lang = 'uz';

// У каждого языка свой адрес — так Google индексирует все версии, а не одну узбекскую.
// Язык по умолчанию живёт на корне, остальные — /ru/, /ky/, /en/.
export const pathFor = (lang: Lang) => (lang === defaultLang ? '/' : `/${lang}/`);

// Язык страницы — по первому сегменту адреса; корень и 404 — язык по умолчанию.
export function langFromUrl(url: URL): Lang {
  const segment = url.pathname.split('/')[1];
  return langs.includes(segment as Lang) ? (segment as Lang) : defaultLang;
}

export const t = {
  // Заголовок вкладки и сниппета в поиске: имя, игра, «стример» и настоящее имя — то, что ищут
  metaTitle: {
    ru: 'ZICO EFOOTBALL — стример eFootball Mobile Мухаммадазиз',
    uz: 'ZICO EFOOTBALL — eFootball Mobile strimeri Muhammadaziz',
    ky: 'ZICO EFOOTBALL — eFootball Mobile стримери Мухаммадазиз',
    en: 'ZICO EFOOTBALL — eFootball Mobile streamer Muhammadaziz',
  },
  // Описание под заголовком в выдаче: 120–160 символов, длиннее Google обрежет
  metaDescription: {
    ru: 'ZICO EFOOTBALL — Мухаммадазиз, стример eFootball Mobile из Кыргызстана. Официальные страницы: YouTube, Instagram, Telegram, Coins Donate, Account Shop, Premium.',
    uz: "ZICO EFOOTBALL — qirg'izistonlik eFootball Mobile strimeri Muhammadaziz. Rasmiy sahifalar: YouTube, Instagram, Telegram, Coins Donate, Account Shop, Premium.",
    ky: 'ZICO EFOOTBALL — кыргызстандык eFootball Mobile стримери Мухаммадазиз. Расмий барактар: YouTube, Instagram, Telegram, Coins Donate, Account Shop, Premium.',
    en: 'ZICO EFOOTBALL — Muhammadaziz, eFootball Mobile streamer from Kyrgyzstan. Official pages: YouTube, Instagram, Telegram, Coins Donate, Account Shop, Premium.',
  },
  tagline: {
    ru: 'Стример eFootball Mobile',
    uz: 'eFootball Mobile strimeri',
    ky: 'eFootball Mobile стримери',
    en: 'eFootball Mobile streamer',
  },
  statsLabel: {
    ru: 'учеников (Premium)',
    uz: 'shogird (Premium)',
    ky: 'окуучу (Premium)',
    en: 'students (Premium)',
  },
  bio: {
    ru: 'Меня зовут Мухаммадазиз, я стример по eFootball Mobile из Кыргызстана. Мне 19 лет. Здесь собраны мои официальные страницы.',
    uz: "Mening ismim Muhammadaziz, men Qirg'izistondan eFootball Mobile bo'yicha strimerman. Yoshim 19 da. Bu yerda mening rasmiy sahifalarim jamlangan.",
    ky: 'Менин атым Мухаммадазиз, мен Кыргызстандан eFootball Mobile боюнча стримермин. Жашым 19да. Бул жерде менин расмий барактарым чогултулган.',
    en: "My name is Muhammadaziz, I'm an eFootball Mobile streamer from Kyrgyzstan. I'm 19. All my official pages are here.",
  },
  linksTitle: {
    ru: 'Официальные страницы',
    uz: 'Rasmiy sahifalar',
    ky: 'Расмий барактар',
    en: 'Official pages',
  },
  videosTitle: {
    ru: 'Последние видео',
    uz: "So'nggi videolar",
    ky: 'Акыркы видеолор',
    en: 'Latest videos',
  },
  watchAll: {
    ru: 'Все видео',
    uz: 'Barcha videolar',
    ky: 'Бардык видеолор',
    en: 'All videos',
  },
} satisfies Record<string, Record<Lang, string>>;
