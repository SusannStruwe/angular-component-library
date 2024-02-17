import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { JobState } from './job-state.enum';


export class SelectItem {
    constructor(
        public text: string,
        public icon?: IconDefinition,
        public planState?: JobState,
        public timestamp?: string,
        public localTimestamp?: string,
    ) {}
}