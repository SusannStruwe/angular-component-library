import { Component } from '@angular/core';

export const PREFIX = '--';

/**
 * Component to get and set sass/ css variables
 */
@Component({
    selector: 'sass-helper',
    standalone: true,
    template: '<div></div>'
})
export class SassHelperComponent {
    /**
     * Read the custom property of body section with given name
     * @param name
     * @returns
     */
    readProperty(name: string): string {
        const bodyStyles = window.getComputedStyle(document.body);
        return bodyStyles.getPropertyValue(PREFIX + name);
    }

    /**
     * Overwrites the custom property of body section with given name
     * @param value
     * @param name
     */
    setProperty(value: string, name: string): void {
        document.body.style.setProperty(PREFIX + name, value);
    }
}
