import {model, prop, propObject, sanitize} from '@rxweb/reactive-form-validators';
import {CreateDepotInput, FileModel, Scalars, UpdateTransactionHasMany} from '../../../../generated/types.graphql-gen';
import {UpdateTransactionHasManyModel} from '../../transaction-page/types';
import {CreateFileModeBelongsToModel} from '../../file-page/types';


@model([{
    propNames: [':all:'], validationConfig: {required: true}
}])
export class DepotCreateForm implements CreateDepotInput {
    @prop()
    nom: Scalars['String'];

    @prop()
    region: Scalars['String'];

    @prop()
    slug: Scalars['String'];

    @prop({
        ignore: () => true
    })
    transactions: UpdateTransactionHasMany;

    @prop()
    ville: Scalars['String'];

    @prop()
    web: Scalars['String'];

    @prop()
    adresse_1: Scalars['String'];

    @prop()
    contact_1: Scalars['String'];

    @prop()
    contact_2: Scalars['String'];

    @prop()
    email: Scalars['String'];

    @prop()
    image: CreateFileModeBelongsToModel;
}
