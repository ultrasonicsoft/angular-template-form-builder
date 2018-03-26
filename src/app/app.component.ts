import { Component } from '@angular/core';
import { NgFormBuilder } from './ng-form-builder';
import { DomSanitizer, SafeUrl, SafeHtml } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  jsonData = `{    
    "firstName": "Balram",
    "lastName": "Chavan",
    "password": "secret",
    "age": 30
}`;

  formBuilder = new NgFormBuilder();
  resultHtml: SafeHtml;
  textHtml = '';
  textTs = '';
  showOutput = false;

  constructor(private sanitizer: DomSanitizer) {
  }

  onSubmit(formValues: JSON) {
    let result = this.formBuilder.getTemplateForm(this.jsonData);
    this.resultHtml = this.sanitizer.bypassSecurityTrustHtml(result);

    this.textHtml = result;
    this.textTs = this.formBuilder.getTsCode();
    this.showOutput = true;
    // console.log(`${result}`);
  }

  reset(form: NgForm) {
    form.reset();
    this.resultHtml = '';
    this.textHtml = '';
    this.textTs = '';
    this.showOutput = false;    
  }  
}
