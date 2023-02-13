import { CommonModule, Time } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Order, PlanningItem, PlanningState, TimeSpan } from '../planning-item';
import * as moment from 'moment';
import { BtnGoupComponent } from 'src/app/buttons/btn-group/btn-group.component';

const WINDOW_BREAKPOINT_DAILY = 1350;

@Component({
  selector: 'scheduling-component',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule, BtnGoupComponent],
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent {
  order1: Order = new Order('12233', 'Maschine 1', moment().subtract(16, 'hours').toDate(), moment().subtract(9, 'hours').toDate(), PlanningState.STARTED);
  order2: Order = new Order('44555', 'Maschine 1', moment().subtract(8, 'hours').toDate(), moment().subtract(7, 'hours').toDate(), PlanningState.MAINTAIN);
  order3: Order = new Order('66666', 'Maschine 1', moment().subtract(6, 'hours').toDate(), moment().subtract(0, 'hours').toDate(), PlanningState.DISRUPTED);
  planningItem: PlanningItem = new PlanningItem(null, 'Maschine 1', [this.order1, this.order2, this.order3]);
  planningItem2: PlanningItem = new PlanningItem(null, 'Maschine 2', [this.order1, this.order2, this.order3]);
  planningItem3: PlanningItem = new PlanningItem(null, 'Maschine 3', [this.order1, this.order2, this.order3]);
  planningItems: PlanningItem[] = [this.planningItem, this.planningItem2, this.planningItem3];

  timeSpan = TimeSpan.DAY; 
  currentDate = "";
  buttons = [
    {text:TimeSpan.DAY},
    {text:TimeSpan.WEEK},
    {text:TimeSpan.MONTH}
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(){
    
  }

  ngAfterViewChecked(){
    this.cdr.detectChanges();
  }

  itemSelected(item:PlanningItem){
    console.log(item);
  }

  clickedBtn(btn: any){
    this.timeSpan = btn.text as TimeSpan;
    this.cdr.detectChanges();
  }

  isCurrent(item: string):boolean{
    if(this.timeSpan == TimeSpan.DAY){
      let current = new Date().getHours();
      return current.toString() +':00' == item;
    }else{
      let current = this.timeSpan == TimeSpan.WEEK ? moment().format('DD.MM'): moment().format('DD');
      return current.toString() == item;
    }
  }

  getColumns() {
    let columns = [];

    switch(this.timeSpan){
      case  TimeSpan.MONTH: columns = this.getDays();
        break;
      case  TimeSpan.DAY: columns = this.getHours();
        break;
      case  TimeSpan.WEEK: columns = this.getWeekDays();
        break;
    }
    return columns;
  }

  getLeftPosition(startDate: Date):number{
    const cellWidth = this.getCellWidth();
    // day -> cell is 60min
    // week & month > cell is 24h -> 1.440min
    if(this.timeSpan == TimeSpan.DAY){
      const startHour = startDate.getHours();
      const startMinutes = startDate.getMinutes();
      const position = startHour * cellWidth + (startMinutes*cellWidth / 100);
      return  Math.round(position);

    }else{
      const schedulerStart = this.timeSpan == TimeSpan.WEEK ? moment().startOf('week') : moment().startOf('month') ;
      const startDay = startDate.getDay();
      const startHour = startDate.getHours();
      const startMinutes = startDate.getMinutes();
      const position = startHour * cellWidth + (startMinutes*cellWidth / 100);
      return  Math.round(position);
    }
  }

  getItemWidth(startDate: Date, endDate: Date):number{
    const cellWidth = this.getCellWidth();
    const duration = moment.duration(moment(endDate).diff(moment(startDate)));
    const minuteDuration = duration.asMinutes();
    // day -> cell is 60min
    // week & month > cell is 24h -> 1.440min
    return Math.round((minuteDuration/(this.timeSpan == TimeSpan.DAY ? 60 : 1440)) * cellWidth);
  }


  getCellWidth():number{
    const backgroundEl = document.getElementsByClassName('background')[0];
    const cellWidth = backgroundEl.children[1].getClientRects()[0].width;
    return cellWidth;
  }


  getDays():string[]{
    const days = [];
    const dateStart = moment().startOf('month');
    const dateEnd = moment().endOf('month');

    while (dateStart.isBefore(dateEnd)) {
       days.push(dateStart.format('DD'))
       dateStart.add(1, 'days')
    }
    return days;
  }

  getWeekDays():string[]{
    const days = [];
    const dateStart = moment().startOf('week');
    const dateEnd = moment().endOf('week');

    while (dateStart.isBefore(dateEnd)) {
       days.push(dateStart.format('DD.MM'))
       dateStart.add(1, 'days')
    }
    return days;
  }


  getHours(): string[] {
    const header = [];
    const step = window.innerWidth < WINDOW_BREAKPOINT_DAILY ? 2 : 1; // If window is smaller than WINDOW_BREAKPOINT_DAILY only every second hour is drawn
    for (let i = 0; i < 24; i = i + step) {
      header.push(`${this.padLeadingZero(i % 24)}:00`);
    }
    return header;
  }

  padLeadingZero(num: number): string {
    if (num < 10) return `0${num}`;
    else return `${num}`;
  }


}
