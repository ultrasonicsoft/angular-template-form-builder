import { Component } from '@angular/core';
import { NgFormBuilder } from './ng-form-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  
  jsonData = `{    
    "userName": "Balram",
    "password": "Chavan",
    "age": 10
}`;
  formBuilder = new NgFormBuilder();
  resultHtml = '';

  onSubmit(formValues: JSON) {

    let result = this.formBuilder.getTemplateForm(this.jsonData);
    this.resultHtml = result;
    console.log(`${result}`);
  }
}
