import { SELECT_APPEARANCES, SelectAppearance } from './select-appearance.type';

/** @deprecated Use SelectAppearance instead. */
export type SelectStyle = SelectAppearance;

/** @deprecated Use SELECT_APPEARANCES or SelectAppearance instead. */
export const SelectStyle = {
    LIGHT: SELECT_APPEARANCES[0],
    LIGHT_GRAY: SELECT_APPEARANCES[1],
    SCHEDULER: SELECT_APPEARANCES[2],
    SIDEBAR: SELECT_APPEARANCES[3]
} as const;
