import { Component } from '@angular/core';
import { FieldBase } from './survey-field/field-base';
import { FieldService } from './survey-field/field-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Survey';
  activeTab = 0;
  fields: FieldBase<string>[];
  totalTabs: number;
  success = false;

  constructor(service: FieldService) {
    const data = service.getFields();
    this.fields = data;
    this.totalTabs = data.length;
  }
}
