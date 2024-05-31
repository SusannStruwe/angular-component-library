import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconService } from '../../services/icon.service';
import { PlanState } from '../../model/plan-state.enum';



/**
 * Component to create and show plan state icon
 *
 * @howToUse
 * ```
 * <plan-state-icon
 *   [state]="SUCCESFUL"
 * ></plan-state-icon>
 * ```
 */
@Component({
    selector: 'plan-state-icon',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './plan-state-icon.component.html',
    styleUrls: ['./plan-state-icon.component.scss']
})
export class PlanStateIconComponent {
    @Input() state: string = '';

    planState: typeof PlanState = PlanState;

    faStar: IconDefinition;
    faCircleExclamation: IconDefinition;
    faCircleCheck: IconDefinition;
    faClock: IconDefinition;

    constructor(private iconService: IconService) {
        this.faStar = this.iconService.faStar;
        this.faCircleExclamation = this.iconService.faCircleExclamation;
        this.faCircleCheck = this.iconService.faCircleCheck;
        this.faClock = this.iconService.faClock;
    }
}
