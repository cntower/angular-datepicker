import {Component, OnInit} from '@angular/core';
import {DateComponent} from '../../common/date-component.component';
import {FormControl} from '@angular/forms';
import {IDatePickerConfig} from '../../../../../lib';
import {DEF_CONF} from '../../common/conts/consts';

@Component({
  selector: 'dp-day-demo',
  templateUrl: './day-demo.component.html',
  styleUrls: ['./day-demo.component.less']
})
export class DayDemoComponent extends DateComponent implements OnInit {
  control: FormControl;
  config: IDatePickerConfig = {
    ...DEF_CONF,
    format: 'D.M.Y',
    outputFormat: 'DD.MM.Y',
  };

  ngOnInit(): void {
    this.control = this.buildForm();
  }
}

