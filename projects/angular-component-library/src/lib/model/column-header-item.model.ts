export class ColumnHeaderItem {
    constructor(
        public title: string,
        public property: string,
        public type: ColumnType,
        public canFiltered: boolean,
    ) {}
}

export enum ColumnType {
    STRING = 'string',
    NUMBER = 'number',
    DATE = 'date',
    TIME_DURATION = 'timeDuration',
    MAP = 'map',
}
