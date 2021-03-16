import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FieldBase } from '../survey-field/field-base';
import { FormGroup } from '@angular/forms';
import { FieldService } from '../survey-field/field-service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: FieldBase<string>[] = [];
  surveyForm: FormGroup;
  @Input() totalTabs;
  @Input() index;
  @Input() activeTab;
  @Output() selectedTab = new EventEmitter<number>();
  @Output() complt = new EventEmitter<boolean>();
  submitted = false;

  constructor(private service: FieldService) { }

  ngOnInit() {
    this.surveyForm = this.service.getFormGroup(this.fields);
  }

  onSubmit() {
    this.submitted = true;
    if (this.surveyForm.valid) {
      if (this.activeTab < (this.totalTabs - 1)) {
        this.selectedTab.emit(++this.activeTab);
      } else {
        this.complt.emit(true);
        console.log(this.surveyForm.value);
      }
    }
  }
}
