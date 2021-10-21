import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LoginForm } from './login-form';
let LoginComponent = class LoginComponent {
    constructor(formBuilder, loginGQL) {
        this.formBuilder = formBuilder;
        this.loginGQL = loginGQL;
    }
    ngOnInit() {
        this.formGroup = this.formBuilder.formGroup(LoginForm);
    }
    submit() {
        const data = this.formGroup.getRawValue();
        this.loginGQL.mutate(data).subscribe();
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss'],
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map