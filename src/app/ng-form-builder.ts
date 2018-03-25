import { TypeHelper } from "./type-helper";

export class NgFormBuilder {
    beginFormTemplate = `<form #form="ngForm" (ngSubmit)="onSubmit(form.value)">`;

    endFormTemplate = `<button type="submit">Submit</button>
  </form>`;

    controlTemplate = `<div>
<input type="$TYPE$" name="$NAME$" [(ngModel)]="$NAME$">
</div>`;

    newForm = '';

    public getTemplateForm(jsonData: string) {
        this.newForm = this.beginFormTemplate;

        let jsonObject = JSON.parse(jsonData);

        for (var property in jsonObject) {
            if (jsonObject.hasOwnProperty(property)) {
                let value = jsonObject[property.toString()];
                let type = TypeHelper.getType(value);
                
                let template = this.controlTemplate.replace("$TYPE$", type);
                template = template.replace("$NAME$", property);
                template = template.replace("$NAME$", property);
                this.newForm += template;
            }
        }

        this.newForm += this.endFormTemplate;
        return this.newForm;
    }
}