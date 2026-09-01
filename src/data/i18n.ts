export type Lang = 'ru' | 'uz' | 'ky';

// Порядок кнопок в переключателе.
export const langs: Lang[] = ['ky', 'uz', 'ru'];

export const defaultLang: Lang = 'uz';

export const t = {
  tagline: {
    ru: 'Стример eFootball Mobile',
    uz: 'eFootball Mobile strimeri',
    ky: 'eFootball Mobile стримери',
  },
  linksTitle: {
    ru: 'Официальные страницы',
    uz: 'Rasmiy sahifalar',
    ky: 'Расмий барактар',
  },
  videosTitle: {
    ru: 'Последние видео',
    uz: "So'nggi videolar",
    ky: 'Акыркы видеолор',
  },
  watchAll: {
    ru: 'Все видео',
    uz: 'Barcha videolar',
    ky: 'Бардык видеолор',
  },
} satisfies Record<string, Record<Lang, string>>;
