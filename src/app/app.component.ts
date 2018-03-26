import { Component } from '@angular/core';
import { NgFormBuilder } from './ng-form-builder';
import { DomSanitizer, SafeUrl, SafeHtml } from '@angular/platform-browser';

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
    "age": 10,
    "somedate":"2014-01-01T23:28:56.782Z"
}`;

  formBuilder = new NgFormBuilder();
  resultHtml: SafeHtml;
  textHtml = '';

  constructor(private sanitizer: DomSanitizer) {
    // this.dangerousUrl = 'javascript:alert("Hi there")';    
  }

  onSubmit(formValues: JSON) {

    let result = this.formBuilder.getTemplateForm(this.jsonData);
    this.resultHtml = this.sanitizer.bypassSecurityTrustHtml(result);
    this.textHtml = result;

    // this.textHtml = this.process(result);
    this.textHtml = result;
    
    console.log(`${result}`);
  }

  process(str) {

    var div = document.createElement('div');
    div.innerHTML = str.trim();

    return this.format(div, 0).innerHTML;
  }

  format(node, level) {

    var indentBefore = new Array(level++ + 1).join('  '),
      indentAfter = new Array(level - 1).join('  '),
      textNode;

    for (var i = 0; i < node.children.length; i++) {

      textNode = document.createTextNode('\n' + indentBefore);
      node.insertBefore(textNode, node.children[i]);

      this.format(node.children[i], level);

      if (node.lastElementChild == node.children[i]) {
        textNode = document.createTextNode('\n' + indentAfter);
        node.appendChild(textNode);
      }
    }

    return node;
  }
}
