export type Lang = 'ru' | 'uz' | 'ky' | 'en';

// Порядок кнопок в переключателе.
// Добавляя язык: сюда, в Lang, во все словари ниже, в titles видео (profile.ts)
// и в правила .i18n в global.css — CSS не умеет сопоставлять атрибуты между собой.
export const langs: Lang[] = ['ky', 'uz', 'ru', 'en'];

export const defaultLang: Lang = 'uz';

export const t = {
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
