import { __decorate } from "tslib";
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export var TypeCommande;
(function (TypeCommande) {
    TypeCommande["Vente"] = "VENTE";
    TypeCommande["Aquisition"] = "AQUISITION";
})(TypeCommande || (TypeCommande = {}));
export var EtatCommande;
(function (EtatCommande) {
    EtatCommande["Recent"] = "RECENT";
    EtatCommande["Usage"] = "USAGE";
})(EtatCommande || (EtatCommande = {}));
export var Genre;
(function (Genre) {
    Genre["H"] = "H";
    Genre["F"] = "F";
})(Genre || (Genre = {}));
export var RegisterStatuses;
(function (RegisterStatuses) {
    RegisterStatuses["MustVerifyEmail"] = "MUST_VERIFY_EMAIL";
    RegisterStatuses["Success"] = "SUCCESS";
})(RegisterStatuses || (RegisterStatuses = {}));
export var TypeClient;
(function (TypeClient) {
    TypeClient["Client"] = "Client";
    TypeClient["Fournisseur"] = "FOURNISSEUR";
})(TypeClient || (TypeClient = {}));
/** The available directions for ordering a list of records. */
export var SortOrder;
(function (SortOrder) {
    /** Sort records in ascending order. */
    SortOrder["Asc"] = "ASC";
    /** Sort records in descending order. */
    SortOrder["Desc"] = "DESC";
})(SortOrder || (SortOrder = {}));
/** Specify if you want to include or exclude trashed results from a query. */
export var Trashed;
(function (Trashed) {
    /** Only return trashed results. */
    Trashed["Only"] = "ONLY";
    /** Return both trashed and non-trashed results. */
    Trashed["With"] = "WITH";
    /** Only return non-trashed results. */
    Trashed["Without"] = "WITHOUT";
})(Trashed || (Trashed = {}));
/** The available SQL operators that are used to filter query results. */
export var SqlOperator;
(function (SqlOperator) {
    /** Equal operator (`=`) */
    SqlOperator["Eq"] = "EQ";
    /** Not equal operator (`!=`) */
    SqlOperator["Neq"] = "NEQ";
    /** Greater than operator (`>`) */
    SqlOperator["Gt"] = "GT";
    /** Greater than or equal operator (`>=`) */
    SqlOperator["Gte"] = "GTE";
    /** Less than operator (`<`) */
    SqlOperator["Lt"] = "LT";
    /** Less than or equal operator (`<=`) */
    SqlOperator["Lte"] = "LTE";
    /** Simple pattern matching (`LIKE`) */
    SqlOperator["Like"] = "LIKE";
    /** Negation of simple pattern matching (`NOT LIKE`) */
    SqlOperator["NotLike"] = "NOT_LIKE";
    /** Whether a value is within a set of values (`IN`) */
    SqlOperator["In"] = "IN";
    /** Whether a value is not within a set of values (`NOT IN`) */
    SqlOperator["NotIn"] = "NOT_IN";
    /** Whether a value is within a range of values (`BETWEEN`) */
    SqlOperator["Between"] = "BETWEEN";
    /** Whether a value is not within a range of values (`NOT BETWEEN`) */
    SqlOperator["NotBetween"] = "NOT_BETWEEN";
    /** Whether a value is null (`IS NULL`) */
    SqlOperator["IsNull"] = "IS_NULL";
    /** Whether a value is not null (`IS NOT NULL`) */
    SqlOperator["IsNotNull"] = "IS_NOT_NULL";
})(SqlOperator || (SqlOperator = {}));
export const TestDocument = gql `
    query test {
  files(first: 30) {
    data {
      id
      created_at
    }
    paginatorInfo {
      count
      currentPage
      firstItem
      lastPage
      total
    }
  }
}
    `;
let TestGQL = class TestGQL extends Apollo.Query {
    constructor(apollo) {
        super(apollo);
        this.document = TestDocument;
    }
};
TestGQL = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TestGQL);
export { TestGQL };
export const CreateFileModelDocument = gql `
    mutation CreateFileModel {
  createFileModel(input: {exist: false}) {
    id
    nom
    path
    url
    exist
    thumbnail_path
    thumbnail_url
    created_at
    updated_at
  }
}
    `;
let CreateFileModelGQL = class CreateFileModelGQL extends Apollo.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateFileModelDocument;
    }
};
CreateFileModelGQL = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CreateFileModelGQL);
export { CreateFileModelGQL };
export const UploadFileDocument = gql `
    mutation UploadFile($id: ID!, $file: Upload!) {
  uploadFile(id: $id, file: $file) {
    id
    nom
    path
    url
    exist
    thumbnail_path
    thumbnail_url
    created_at
    updated_at
  }
}
    `;
let UploadFileGQL = class UploadFileGQL extends Apollo.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UploadFileDocument;
    }
};
UploadFileGQL = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UploadFileGQL);
export { UploadFileGQL };
export const LoginDocument = gql `
    mutation Login($username: String!, $password: String!) {
  login(input: {username: $username, password: $password}) {
    access_token
    expires_in
    token_type
    refresh_token
    user {
      id
      username
      created_at
      updated_at
      identite {
        id
        nom
        genre
        date_de_naiss
        cni
        region
        ville
        contact_1
        contact_2
        adresse_1
        adresse_2
        created_at
        updated_at
        nationalite {
          id
          nom
        }
      }
      permissions {
        id
        nom
        slug
        description
        created_at
        updated_at
      }
      roles {
        id
        nom
        slug
        slug
        active
        description
        created_at
        updated_at
        permissions {
          id
          nom
          slug
          description
          created_at
          updated_at
        }
      }
      depot {
        id
        nom
        region
        ville
        web
        web
        slug
        image {
          id
          nom
          thumbnail_url
          url
          type
          exist
        }
        email
        adresse_1
        contact_1
        contact_2
        created_at
        updated_at
      }
    }
  }
}
    `;
let LoginGQL = class LoginGQL extends Apollo.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = LoginDocument;
    }
};
LoginGQL = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginGQL);
export { LoginGQL };
export const CreateDepotDocument = gql `
    mutation createDepot($adresse_1: String!, $contact_1: String!, $contact_2: String!, $email: String!, $image: CreateFileModelBelongsTo!, $nom: String!, $region: String!, $slug: String!, $ville: String!, $web: String!) {
  createDepot(
    input: {adresse_1: $adresse_1, contact_1: $contact_1, contact_2: $contact_2, email: $email, image: $image, nom: $nom, region: $region, slug: $slug, transactions: {}, ville: $ville, web: $web}
  ) {
    adresse_1
    contact_1
    contact_2
    created_at
    email
    id
    image {
      id
      nom
      url
      thumbnail_path
      thumbnail_url
      url
      created_at
      updated_at
    }
    nom
    region
    slug
    updated_at
    ville
    web
  }
}
    `;
let CreateDepotGQL = class CreateDepotGQL extends Apollo.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateDepotDocument;
    }
};
CreateDepotGQL = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CreateDepotGQL);
export { CreateDepotGQL };
export const RolesDocument = gql `
    query Roles {
  roles(first: 10) {
    data {
      active
      created_at
      description
      id
      nom
      slug
      updated_at
    }
  }
}
    `;
let RolesGQL = class RolesGQL extends Apollo.Query {
    constructor(apollo) {
        super(apollo);
        this.document = RolesDocument;
    }
};
RolesGQL = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RolesGQL);
export { RolesGQL };
export const CreateUserDocument = gql `
    mutation CreateUser($identite: CreatePersonneBelongsTo!, $depot: CreateDepotBelongsTo!, $roles: CreateRoleBelongsToMany!, $permissions: CreatePermissionBelongsToMany!, $username: String!, $password: String!) {
  createUser(
    input: {identite: $identite, depot: $depot, permissions: $permissions, roles: $roles, username: $username, password: $password}
  ) {
    created_at
    deleted_at
    depot {
      adresse_1
      contact_1
      contact_2
      created_at
      email
      id
      image {
        created_at
        exist
        id
        nom
        path
        thumbnail_path
        thumbnail_url
        type
        updated_at
        url
      }
      nom
      region
      updated_at
      ville
      web
    }
    id
    identite {
      adresse_1
      adresse_2
      cni
      contact_1
      contact_2
      created_at
      date_de_naiss
      deleted_at
      email
      genre
      id
      image {
        created_at
        exist
        id
        nom
        path
        thumbnail_path
        thumbnail_url
        type
        updated_at
        url
      }
      nationalite {
        id
        nom
      }
      nom
      region
      updated_at
      ville
    }
    permissions {
      id
      nom
      slug
      description
    }
    roles {
      active
      description
      id
      level
      nom
      slug
      permissions {
        id
        nom
        slug
        description
      }
    }
    updated_at
    username
  }
}
    `;
let CreateUserGQL = class CreateUserGQL extends Apollo.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateUserDocument;
    }
};
CreateUserGQL = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CreateUserGQL);
export { CreateUserGQL };
//# sourceMappingURL=types.graphql-gen.js.map