import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let FormValidationService = class FormValidationService {
    constructor() {
        this.errorMessages = {
            required: 'Ce champ est requis.',
            pattern: 'Format incorrect.',
            mobile: 'Numero mobile invalid..',
            min: 'La valeur requise doit etre supperieur.',
            max: 'La valeur requise doit etre inferieur.',
            maxLength: 'La(e) ( taille | nombre ) maximal est dépassée.',
            MustNotMatch: 'Cette valeur doit etre different de celle du champ qui précéde.',
            mustBeEqualOrBigger: 'Le(a) ( nombre | taille )  doit etre supperieur ou egale de celle du champ qui précéde.',
            verificationError: 'Erreur de verification.',
            fileMisMatch: 'format de ficher incorrect.',
            fileMaxSize: 'taille du(des) ficher(s) tros grand.',
            UnAcceptableValue: 'Valeur non recevable.',
            alreadyExist: 'Cet element existe deja dans la base de donnee.',
            minLength: 'Taille tros faible.',
            InvalidSysDate: 'date de l\'appareil invalide et ne permet pas deprocéder a une verification.',
            passwordConf: 'Les mots de passe ne correspondent pas.'
        };
        //
    }
};
FormValidationService = __decorate([
    Injectable()
], FormValidationService);
export { FormValidationService };
//# sourceMappingURL=form-validation.service.js.map