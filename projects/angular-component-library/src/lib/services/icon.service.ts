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
    faMagnifyingGlassChart,
    faClipboardList,
    faUsers,
    faGauge,
    faLanguage,
    faRightFromBracket,
    faArrowDown,
    faArrowRight,
    faCircleMinus,
    faCodeBranch,
    faGlobe,
    faUserGroup,
    faChartGantt,
    faTable,
    faClockRotateLeft,
    faTriangleExclamation,
    faCircleRight,
    faPlay
} from '@fortawesome/free-solid-svg-icons';
import {
    faSquarePlus,
    faSquare,
    faSquareCheck,
    faCircleCheck,
    faClock,
    faCopy,
    faCirclePause
} from '@fortawesome/free-regular-svg-icons';

/**
 * Icon service to manage fa icons
 */
@Injectable({
    providedIn: 'root'
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
    faArrowRight: IconDefinition = faArrowRight;
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
    faCircleMinus: IconDefinition = faCircleMinus;
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
    faGauge: IconDefinition = faGauge;
    faUsers: IconDefinition = faUsers;

    faClipboardList: IconDefinition = faClipboardList;
    faMagnifyingGlassChart: IconDefinition = faMagnifyingGlassChart;
    faLanguage: IconDefinition = faLanguage;
    faRightFromBracket: IconDefinition = faRightFromBracket;
    faArrowDown: IconDefinition = faArrowDown;
    faBranch: IconDefinition = faCodeBranch;
    faGlobe: IconDefinition = faGlobe;
    faChartGantt: IconDefinition = faChartGantt;
    faUserGroup: IconDefinition = faUserGroup;
    faTable: IconDefinition = faTable;
    faCircleRight: IconDefinition = faCircleRight;
    faTriangleExclamation: IconDefinition = faTriangleExclamation;
    faClockRotateLeft: IconDefinition = faClockRotateLeft;
    faPlay: IconDefinition = faPlay;

    // free regular
    faSquarePlus: IconDefinition = faSquarePlus;
    faSquare: IconDefinition = faSquare;
    faSquareCheck: IconDefinition = faSquareCheck;
    faCircleCheck: IconDefinition = faCircleCheck;
    faCirclePause: IconDefinition = faCirclePause;
    faClock: IconDefinition = faClock;
    faCopy: IconDefinition = faCopy;
}
