import { __decorate } from "tslib";
import { model, prop } from '@rxweb/reactive-form-validators';
let DepotCreateForm = class DepotCreateForm {
};
__decorate([
    prop()
], DepotCreateForm.prototype, "nom", void 0);
__decorate([
    prop()
], DepotCreateForm.prototype, "region", void 0);
__decorate([
    prop()
], DepotCreateForm.prototype, "slug", void 0);
__decorate([
    prop({
        ignore: () => true
    })
], DepotCreateForm.prototype, "transactions", void 0);
__decorate([
    prop()
], DepotCreateForm.prototype, "ville", void 0);
__decorate([
    prop()
], DepotCreateForm.prototype, "web", void 0);
__decorate([
    prop()
], DepotCreateForm.prototype, "adresse_1", void 0);
__decorate([
    prop()
], DepotCreateForm.prototype, "contact_1", void 0);
__decorate([
    prop()
], DepotCreateForm.prototype, "contact_2", void 0);
__decorate([
    prop()
], DepotCreateForm.prototype, "email", void 0);
__decorate([
    prop()
], DepotCreateForm.prototype, "image", void 0);
DepotCreateForm = __decorate([
    model([{
            propNames: [':all:'], validationConfig: { required: true }
        }])
], DepotCreateForm);
export { DepotCreateForm };
//# sourceMappingURL=depot-create-form.js.map