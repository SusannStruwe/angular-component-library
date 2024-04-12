import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { JobStatusState } from './job-status-state.enum';


export class SelectItem {
    constructor(
        public text: string,
        public icon?: IconDefinition,
        public planState?: JobStatusState,
        public timestamp?: string,
        public localTimestamp?: string,
    ) {}
}