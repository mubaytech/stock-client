import { __decorate } from "tslib";
import { model, prop } from '@rxweb/reactive-form-validators';
let LoginForm = class LoginForm {
};
__decorate([
    prop()
], LoginForm.prototype, "username", void 0);
__decorate([
    prop()
], LoginForm.prototype, "password", void 0);
LoginForm = __decorate([
    model([{
            propNames: [':all:'], validationConfig: { required: true }
        }])
], LoginForm);
export { LoginForm };
//# sourceMappingURL=login-form.js.map