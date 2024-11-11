import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


export class SelectItem {
    constructor(
        public text: string,
        public value?: string,
        public icon?: IconDefinition,
        public timestamp?: string,
        public localTimestamp?: string,
        public displayBtnText?: string
    ) {}
}