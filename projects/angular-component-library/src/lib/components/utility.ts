export const accentColors: string[] = [
    '--accent-color-light',
    '--accent-color',
    '--accent-color-dark',
    '--list-item-color',
    '--row-highlight-color',
    '--btn-color',
    '--btn-border-color'
];

export const bgColors: string[] = [
    '--bg-color',
    '--component-bg-color',
    '--content-bg-color'
];

export const compColors: string[] = [
    '--text-color',
    '--fa-icon-color',
    '--table-light-color',
    '--table-dark-color',
    '--toggle-btn-background',
    '--tooltip-background',
    '--modal-background',
    '--menu-background',
    '--tabs-background',
    '--tabs-content-color',
    '--tab-color',
    '--placeholder-color',
    '--border-color-rgb',
    '--border-color',
    '--border-color-light',
    '--brightness',
    '--collapse-background',
    '--not-emphrazed-color',
    '--not-emphrazed-color-dark',
    '--delete-color-light',
    '--delete-color',
    '--delete-color-dark'
];

export const toastAndAlertColors: string[] = [
    '--toast-info-color-light',
    '--toast-info-color',
    '--toast-info-color-dark',
    '--toast-success-color-light',
    '--toast-success-color',
    '--toast-success-color-dark',
    '--toast-error-color-light',
    '--toast-error-color',
    '--toast-error-color-dark',
    '--toast-warning-color-light',
    '--toast-warning-color',
    '--toast-warning-color-dark'
];

export const jobStateColors: string[] = [
    '--job-pending-color',
    '--job-successful-color',
    '--job-running-color',
    '--job-failed-color'
];

export const changesStateColors: string[] = [
    '--modified-data-color',
    '--added-data-color-light-rgb',
    '--added-data-color',
    '--deleted-data-color-light-rgb',
    '--deleted-data-color'
];

export const bridgeMsgColors: string[] = [
    '--level-warning-color',
    '--level-error-color'
];

export const tasksStateColros: string[] = [
    '--current-color',
    '--current-color-dark',
    '--frozen-color',
    '--frozen-color-dark',
    '--manual-color',
    '--manual-color-dark',
    '--urgent-color',
    '--urgent-color-dark',
    '--free-color',
    '--free-color-dark',
    '--tardiness-color',
    '--hide-color',
    '--downtime-color'
];

export type RGB = [number, number, number];

export function luminance(rgb: RGB) {
    const srgb = rgb.map((value) => value / 255);

    const [R, G, B] = srgb.map((value) =>
        value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
    );

    const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;

    return luminance;
}

export function getRgbColorFromHex(hex: string) {
    hex = hex.slice(1);
    const value = parseInt(hex, 16);
    const r = (value >> 16) & 255;
    const g = (value >> 8) & 255;
    const b = value & 255;

    return [r, g, b] as RGB;
}

export function contrast(foregroundColor: RGB, backgroundColor: RGB) {
    const l1 = luminance(foregroundColor);
    const l2 = luminance(backgroundColor);

    const lightest = Math.max(l1, l2);
    const darkest = Math.min(l1, l2);

    const contrast = (lightest + 0.05) / (darkest + 0.05);

    return Math.floor(contrast * 100) / 100;
}
