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
  statsLabel: {
    ru: 'учеников (Premium)',
    uz: 'shogird (Premium)',
    ky: 'окуучу (Premium)',
  },
  bio: {
    ru: 'Меня зовут Мухаммадазиз, я стример по eFootball Mobile из Кыргызстана. Мне 19 лет. Здесь собраны мои официальные страницы.',
    uz: "Mening ismim Muhammadaziz, men Qirg'izistondan eFootball Mobile bo'yicha strimerman. Yoshim 19 da. Bu yerda mening rasmiy sahifalarim jamlangan.",
    ky: 'Менин атым Мухаммадазиз, мен Кыргызстандан eFootball Mobile боюнча стримермин. Жашым 19да. Бул жерде менин расмий барактарым чогултулган.',
  },
} satisfies Record<string, Record<Lang, string>>;
