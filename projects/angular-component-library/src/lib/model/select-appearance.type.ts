export const SELECT_APPEARANCES = [
    'light',
    'light-gray',
    'scheduler',
    'sidebar'
] as const;

/**
 * @deprecated Use theme-based select styling or another non-scheduler appearance.
 */
export type DeprecatedSchedulerSelectAppearance = 'scheduler';

export type SelectAppearance =
    | 'light'
    | 'light-gray'
    | DeprecatedSchedulerSelectAppearance
    | 'sidebar';
