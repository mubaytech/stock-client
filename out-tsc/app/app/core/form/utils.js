export function IS_FORM_VALID(form, updateValueOptions = {}) {
    if (!form.valid) {
        form.markAllAsTouched();
        form.updateValueAndValidity(updateValueOptions);
        return false;
    }
    return true;
}
export function UPDATE_VALUE_AND_VALIDITY(form) {
    for (const control of Object.values(form.controls)) {
        control.updateValueAndValidity();
    }
}
//# sourceMappingURL=utils.js.map