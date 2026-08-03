// Единственное место для правки контента визитки (кроме переводов — они в i18n.ts).
export const profile = {
  name: 'ZICO',
  photo: '/photo-placeholder.svg', // TODO: заменить на public/photo.jpg с реальным фото и поменять путь здесь
  statValue: '900+',
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string; // ключ иконки из Icon.astro
};

export const socials: SocialLink[] = [
  {
    name: 'YouTube',
    url: 'https://youtube.com/@zicoefootball7777?si=xMcJECgXi7OaJSob',
    icon: 'youtube',
  },
  { name: 'Instagram', url: 'https://www.instagram.com/zico_efootball/', icon: 'instagram' },
  { name: 'Telegram', url: 'https://t.me/zicoefootballuz', icon: 'telegram' },
  { name: 'Donate', url: 'https://t.me/zicocoins', icon: 'donate' },
  { name: 'Shop', url: 'https://t.me/zicoshopkanal', icon: 'shop' },
  { name: 'Premium', url: 'https://t.me/zicosinfo', icon: 'premium' },
];
