// Единственное место для правки контента визитки (кроме переводов — они в i18n.ts).
export const profile = {
  name: 'ZICO EFOOTBALL',
  nameLines: ['ZICO', 'EFOOTBALL'], // заголовок набирается в две строки
  handle: '@zico_efootball',
  photo: '/photo.jpg',
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
  { name: 'Premium', url: 'https://t.me/zicosinfo', icon: 'premium', color: '#ffd166' },
];
