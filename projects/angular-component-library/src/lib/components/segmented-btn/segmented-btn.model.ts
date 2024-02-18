import { IconProp } from '@fortawesome/fontawesome-svg-core';

export class SegmentedBtnItem {
    constructor(
        public text: string,
        public value: string,
        public isDisabled: boolean,
        public icon?: IconProp,
    ) {}
}
