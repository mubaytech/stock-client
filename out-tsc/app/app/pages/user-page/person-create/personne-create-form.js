import { __decorate } from "tslib";
import { pattern, prop, required } from '@rxweb/reactive-form-validators';
export class PersonneCreateForm {
}
__decorate([
    required(),
    pattern({
        expression: {
            pattern: /^([a-zA-Z0-9]{2,30})(\s[a-zA-Z0-9]{1,30}){0,4}$/
        }
    })
], PersonneCreateForm.prototype, "adresse_1", void 0);
__decorate([
    prop(),
    pattern({
        expression: {
            pattern: /^([a-zA-Z0-9]{2,30})(\s[a-zA-Z0-9]{1,30}){0,4}$/
        }
    })
], PersonneCreateForm.prototype, "adresse_2", void 0);
__decorate([
    required()
], PersonneCreateForm.prototype, "cni", void 0);
__decorate([
    required()
], PersonneCreateForm.prototype, "contact_1", void 0);
__decorate([
    prop()
], PersonneCreateForm.prototype, "contact_2", void 0);
__decorate([
    required()
], PersonneCreateForm.prototype, "date_de_naiss", void 0);
__decorate([
    prop()
], PersonneCreateForm.prototype, "email", void 0);
__decorate([
    required()
], PersonneCreateForm.prototype, "genre", void 0);
__decorate([
    required()
], PersonneCreateForm.prototype, "image", void 0);
__decorate([
    required()
], PersonneCreateForm.prototype, "imagePiece", void 0);
__decorate([
    required()
], PersonneCreateForm.prototype, "nationalite", void 0);
__decorate([
    required(),
    pattern({
        expression: {
            pattern: /^([a-zA-Z]{3,30})(\s[a-zA-Z]{2,30})$/
        }
    })
], PersonneCreateForm.prototype, "nom", void 0);
__decorate([
    required()
], PersonneCreateForm.prototype, "region", void 0);
__decorate([
    required()
], PersonneCreateForm.prototype, "ville", void 0);
//# sourceMappingURL=personne-create-form.js.map