import {Injectable} from '@angular/core';
import {maskOptions} from "../../shared/mask/mask.directive";

@Injectable()
export class FormValidationService {
  errorMessages = {
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


  constructor() {
    //
  }
}

export const MASK_EMAIL = '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]';
export const MASK_PHONE = '(+9{1,3}) 99 999 99 99';
export const MASK_PHONE_NAT = '(+221) 99 999 99 99';
export const INPUT_MASKS = {
  email: MASK_EMAIL,
  phone: MASK_PHONE,
  phone_nat: MASK_PHONE_NAT,
  phone_display: [MASK_PHONE, MASK_PHONE_NAT],
  username: ['A{4,20}', MASK_PHONE, MASK_EMAIL],
  cni: ['A 9{7}', '9 9{3} 9{4} 9{5}'],
  ine: ['I{5,9}'],
  code: '9{5,9}',
  code_inscription: '9{5,9} 9{2}',
  nom: 'A{2,30} A{1,30}[ A{1,30}][ A{1,30}][ A{1,30}][ A{1,30}]',
  prenom: 'A{1,30}[ A{1,30}][ A{1,30}][ A{1,30}][ A{1,30}][ A{1,30}]',
  nom_famille: 'A{2,30}',
  adresse: 'X{2,30}[ X{1,30}][ X{1,30}][ X{1,30}][ X{1,30}][ X{1,30}][ X{1,30}][ X{1,30}][ X{1,30}][ X{1,30}][ X{1,30}][ X{1,30}]',
  adresseOptions: {
    definitions: {
      X: {
        validator: '[a-zA-Z0-9]',
        casing: 'upper',
        definitionSymbol: 'i'
      },
    }
  } as maskOptions,
  currencyOption: {
    prefix: ' CFA ',
    alias: 'currency',
    radixPoint: '.',
    unmaskAsNumber: true
  } as maskOptions,
  ineOptions: {
    definitions: {
      I: {
        validator: '[a-zA-Z0-9]',
        casing: 'upper',
        definitionSymbol: 'i'
      },
    }
  } as maskOptions,
};
