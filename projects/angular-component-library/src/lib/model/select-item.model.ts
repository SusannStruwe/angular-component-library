import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { PlanState } from './plan-state.enum';



export class SelectItem {
    constructor(
        public text: string,
        public icon?: IconDefinition,
        public planState?: PlanState,
        public timestamp?: string,
        public localTimestamp?: string,
    ) {}
}