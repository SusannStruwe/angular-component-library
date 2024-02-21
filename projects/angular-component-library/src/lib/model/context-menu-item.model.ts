import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Feature } from './feature.enum';


export class ContextMenuItem {
    constructor(
        public text: string,
        public feature: Feature,
        public icon?: IconDefinition,
    ) {}
}
