import { prop, required } from "@rxweb/reactive-form-validators";
import {
    CreateFileModelBelongsTo,
    CreateNationaliteBelongsTo,
    CreatePersonneInput,
    Scalars,
    Sexe,
    TypeRole,
} from "../../../../generated/types.graphql-gen";

export class PersonneCreateForm implements CreatePersonneInput {
    @prop()
    role: TypeRole;

    @required({
        conditionalExpression: (x: { role: TypeRole }) =>
            x?.role === TypeRole.Gerant,
    })
    adresse_1: Scalars["String"];

    @prop()
    adresse_2: Scalars["String"];

    @required({
        conditionalExpression: (x: { role: TypeRole }) =>
            x?.role === TypeRole.Gerant,
    })
    cni: Scalars["String"];

    @required({
        conditionalExpression: (x: { role: TypeRole }) =>
            x?.role === TypeRole.Gerant,
    })
    contact_1: Scalars["String"];

    @prop()
    contact_2: Scalars["String"];

    @required({
        conditionalExpression: (x: { role: TypeRole }) =>
            x?.role === TypeRole.Gerant,
    })
    date_de_naiss: Scalars["Date"];

    @prop({
        defaultValue: null,
    })
    email: Scalars["String"];

    @prop({
        defaultValue: null,
    })
    @required({
        conditionalExpression: (x: { role: TypeRole }) =>
            x?.role === TypeRole.Gerant,
    })
    sexe: Sexe;

    @required({
        conditionalExpression: (x: { role: TypeRole }) =>
            x?.role === TypeRole.Gerant,
    })
    image: CreateFileModelBelongsTo;

    @required({
        conditionalExpression: (x: { role: TypeRole }) =>
            x?.role === TypeRole.Gerant,
    })
    imagePiece: CreateFileModelBelongsTo;

    @required({
        conditionalExpression: (x: { role: TypeRole }) =>
            x?.role === TypeRole.Gerant,
    })
    nationalite: CreateNationaliteBelongsTo;

    @required()
    nom: Scalars["String"];
}
