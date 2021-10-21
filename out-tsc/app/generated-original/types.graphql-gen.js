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
//# sourceMappingURL=types.graphql-gen.js.map