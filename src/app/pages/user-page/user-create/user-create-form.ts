import {
    ConnectPermission,
    CreateDepotBelongsTo, CreateDepotInput,
    CreatePermissionBelongsToMany,
    CreatePersonneBelongsTo, CreatePersonneInput, CreateRoleBelongsToMany,
    CreateUserInput, Depot, FileModel, Permission, Personne, Scalars
} from '../../../../generated/types.graphql-gen';
import {alphaNumeric, compare, minLength, model, or, prop, required, sanitize} from '@rxweb/reactive-form-validators';

export class UserCreateForm implements CreateUserInput {

    @prop({defaultValue: null})
    depot: CreateDepotBelongsTo;

    @required()
    identite: CreatePersonneBelongsTo;

    @prop({defaultValue: null})
    permissions: CreatePermissionBelongsToMany;

    @required()
    roles: CreateRoleBelongsToMany;

    @required()
    username: Scalars['String'];

    @required()
    @alphaNumeric()
    password: Scalars['String'];

    @compare({fieldName: 'password', messageKey: 'passwordConf', message: 'Les mots de passe ne correspondent pas.'})
    password_conf: string;
}
