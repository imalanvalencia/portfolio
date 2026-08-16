export const categories = {
  web: 'Web',
  mobile: 'Mobile',
  design: 'Design',
} as const;

export type Category = keyof typeof categories;
