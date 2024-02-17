import { Injectable } from '@angular/core';
import {
    faCaretDown,
    faCog,
    faEllipsisVertical,
    faArrowLeft,
    faFilter,
    faRoute,
    faPlus,
    faMinus,
    faCircleDot,
    faSort,
    faSquareMinus,
    faEye,
    faEyeSlash,
    faSpinner,
    faArrowRightArrowLeft,
    faBuilding,
    faSignOut,
    faUser,
    faGripVertical,
    faLink,
    faSave,
    faTrash,
    faCalendar,
    faFile,
    faUpload,
    faCheck,
    faCircleInfo,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faChevronUp,
    faInfoCircle,
    faLocationCrosshairs,
    faRotate,
    faGear,
    faWrench,
    IconDefinition,
    faXmark,
    faCircleXmark,
    faStar,
    faMagnifyingGlass,
    faCircleExclamation,
    faPalette,
} from '@fortawesome/free-solid-svg-icons';
import {
    faSquarePlus,
    faSquare,
    faSquareCheck,
    faCircleCheck,
    faClock,
} from '@fortawesome/free-regular-svg-icons';

/**
 * Icon service to manage fa icons
 */
@Injectable({
    providedIn: 'root',
})
export class IconService {
    // free solid
    faArrow: IconDefinition = faArrowLeft;
    faFilter: IconDefinition = faFilter;
    faRoute: IconDefinition = faRoute;
    faCaretDown: IconDefinition = faCaretDown;
    faCog: IconDefinition = faCog;
    faCalendar: IconDefinition = faCalendar;
    faEllipsisVertical: IconDefinition = faEllipsisVertical;
    faPlus: IconDefinition = faPlus;
    faMinus: IconDefinition = faMinus;
    faDelete: IconDefinition = faSquareMinus;
    faModified: IconDefinition = faCircleDot;
    faSort: IconDefinition = faSort;
    faLoader: IconDefinition = faSpinner;
    faEye: IconDefinition = faEye;
    faEyeSlash: IconDefinition = faEyeSlash;
    faUser: IconDefinition = faUser;
    faBuilding: IconDefinition = faBuilding;
    faSignOut: IconDefinition = faSignOut;
    faArrowRightArrowLeft: IconDefinition = faArrowRightArrowLeft;
    faSave: IconDefinition = faSave;
    faTrash: IconDefinition = faTrash;
    faGridVerticalDot: IconDefinition = faGripVertical;
    faLink: IconDefinition = faLink;
    faUpload: IconDefinition = faUpload;
    faFile: IconDefinition = faFile;
    faCircleInfo: IconDefinition = faCircleInfo;
    faCheck: IconDefinition = faCheck;
    faChevronLeft: IconDefinition = faChevronLeft;
    faChevronRight: IconDefinition = faChevronRight;
    faRotate: IconDefinition = faRotate;
    faInfoCircle: IconDefinition = faInfoCircle;
    faCircleXmark: IconDefinition = faCircleXmark;
    faLocationCrosshairs: IconDefinition = faLocationCrosshairs;
    faWrench: IconDefinition = faWrench;
    faChevronDown: IconDefinition = faChevronDown;
    faChevronUp: IconDefinition = faChevronUp;
    faGear: IconDefinition = faGear;
    faXmark: IconDefinition = faXmark;
    faMagnifyingGlass: IconDefinition = faMagnifyingGlass;
    faStar: IconDefinition = faStar;
    faCircleExclamation: IconDefinition = faCircleExclamation;
    faPalette: IconDefinition = faPalette;

    // free regular
    faSquarePlus: IconDefinition = faSquarePlus;
    faSquare: IconDefinition = faSquare;
    faSquareCheck: IconDefinition = faSquareCheck;
    faCircleCheck: IconDefinition = faCircleCheck;
    faClock: IconDefinition = faClock;
}
