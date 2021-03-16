import { Injectable } from '@angular/core';
import * as data from './survey-fields.json';
import { Validators, FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FieldService {

  private group: any = {};

  getFields() {
    // tslint:disable-next-line: no-string-literal
    return data['default'];
  }

  getFormGroup(formFields) {
    formFields.forEach(item => {
      const validators = [];
      if (item.required) {
        validators.push(Validators.required);
      }
      if (item.length > 0) {
        validators.push(Validators.maxLength(item.length));
      }
      this.group[item.key] = item.options ?
        new FormArray([], validators) : new FormControl('', validators);
    });
    return new FormGroup(this.group);
  }
}
