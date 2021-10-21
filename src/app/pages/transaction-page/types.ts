import {
    CreateTransactionInput,
    Maybe,
    Scalars,
    UpdateTransactionHasMany,
    UpdateTransactionInput, UpsertTransactionInput
} from '../../../generated/types.graphql-gen';

export class UpdateTransactionHasManyModel implements UpdateTransactionHasMany{
    create: Maybe<Array<CreateTransactionInput>>;
    delete: Maybe<Array<Scalars['ID']>>;
    update: Maybe<Array<UpdateTransactionInput>>;
    upsert: Maybe<Array<UpsertTransactionInput>>;

}
