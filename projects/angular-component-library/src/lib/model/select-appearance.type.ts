export const SELECT_APPEARANCES = [
    'light',
    'light-gray',
    'scheduler',
    'sidebar'
] as const;

export type SelectAppearance = (typeof SELECT_APPEARANCES)[number];
