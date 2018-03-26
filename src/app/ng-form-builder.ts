import { TypeHelper } from "./type-helper";

export class NgFormBuilder {
    beginFormTemplate = `
    <div class="container">
    <form #form="ngForm" (ngSubmit)="onSubmit(form.value)">`;

    endFormTemplate = `
    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
  </div>`;

    controlTemplate = `
    <div class="form-group">
<input type="$TYPE$" name="$NAME$" [(ngModel)]="$NAME$" class="form-control" value="$PLACEHOLDER$">
</div>`;

    newForm = '';

    public getTemplateForm(jsonData: string) {
        this.newForm = this.beginFormTemplate;

        let jsonObject = JSON.parse(jsonData);

        for (var property in jsonObject) {
            if (jsonObject.hasOwnProperty(property)) {
                let value = jsonObject[property.toString()];
                let type = TypeHelper.getType(value);
                if (type == 'date') {
                    value = Date.parse(value);
                    value = new Date(value);
                }
                let template = this.controlTemplate.replace("$TYPE$", type);
                template = template.replace("$NAME$", property);
                template = template.replace("$NAME$", property);
                template = template.replace("$PLACEHOLDER$", value);

                this.newForm += template;
            }
        }

        this.newForm += this.endFormTemplate;
        return this.newForm;
    }
}