import { Component, OnInit, Input } from '@angular/core';
import { FieldBase } from '../survey-field/field-base';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent implements OnInit {

  @Input() field: FieldBase<string>;
  @Input() form: FormGroup;
  @Input() submitted;
  constructor() { }

  ngOnInit() {
  }

  get f() { return this.form.controls[this.field.key]; }

  onChange(event) {
    const interestIn = this.form.get('interestIn') as FormArray;
    if (event.checked) {
      interestIn.push(new FormControl(event.source.value));
    } else {
      const i = interestIn.controls.findIndex(x => x.value === event.source.value);
      interestIn.removeAt(i);
    }
  }
}
