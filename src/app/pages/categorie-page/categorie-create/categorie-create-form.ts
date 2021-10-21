import {prop, required} from '@rxweb/reactive-form-validators';
import {
    CreateCategorieBelongsToMany,
    CreateCategorieInput,
    CreateFileModelBelongsTo, CreateUnitesDeMesureBelongsToMany,
    Scalars
} from '../../../../generated/types.graphql-gen';
import {Maybe} from 'graphql/jsutils/Maybe';


export class CategorieCreateForm implements CreateCategorieInput {
    @prop()
    children: CreateCategorieBelongsToMany;

    @prop()
    description: Maybe<Scalars['String']>;

    @prop()
    image: CreateFileModelBelongsTo;

    @prop()
    @required()
    nom: Scalars['String'];

    @prop()
    parent_id: Maybe<Scalars['ID']>;

    @prop()
    uniteDeMesure: CreateUnitesDeMesureBelongsToMany;
}
