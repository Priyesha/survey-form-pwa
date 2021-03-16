import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FieldService } from './survey-field/field-service';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';

import { MatInputModule } from '@angular/material/input';
import { MatTabsModule, MatFormFieldModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [FieldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
