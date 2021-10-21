import { __decorate } from "tslib";
import { alphaNumeric, compare, model, prop, required } from '@rxweb/reactive-form-validators';
let UserCreateForm = class UserCreateForm {
};
__decorate([
    prop()
], UserCreateForm.prototype, "depot", void 0);
__decorate([
    required()
], UserCreateForm.prototype, "identite", void 0);
__decorate([
    prop()
], UserCreateForm.prototype, "permissions", void 0);
__decorate([
    required()
], UserCreateForm.prototype, "roles", void 0);
__decorate([
    required()
], UserCreateForm.prototype, "username", void 0);
__decorate([
    required(),
    alphaNumeric()
], UserCreateForm.prototype, "password", void 0);
__decorate([
    compare({ fieldName: 'password', messageKey: 'passwordConf', message: 'Les mots de passe ne correspondent pas.' })
], UserCreateForm.prototype, "password_conf", void 0);
UserCreateForm = __decorate([
    model([
        { propNames: [':all:'], validationConfig: { required: true } }
    ])
], UserCreateForm);
export { UserCreateForm };
//# sourceMappingURL=user-create-form.js.map