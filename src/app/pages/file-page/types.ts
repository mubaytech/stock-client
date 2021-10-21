import {
    CreateFileModelBelongsTo, CreateFileModelInput,
    Maybe,
    Scalars, UpdateFileModelInput, UpsertFileModelInput,
} from '../../../generated/types.graphql-gen';

export class CreateFileModeBelongsToModel implements CreateFileModelBelongsTo {
    connect: Maybe<Scalars['ID']>;
    create: Maybe<CreateFileModelInput>;
    update: Maybe<UpdateFileModelInput>;
    upsert: Maybe<UpsertFileModelInput>;
}
