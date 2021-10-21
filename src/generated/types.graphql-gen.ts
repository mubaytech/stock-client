import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sP` & e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: any;
  /**
   * Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals,
   * as they may not be parsed correctly on the server side. Use `String` literals if you are
   * dealing with really large numbers to be on the safe side.
   */
  Mixed: any;
  /** A date string with format `Y-m-d` & e.g. `2011-05-23`. */
  Date: any;
  Upload: any;
  /** A datetime string with format `Y-m-d H:i:s` & e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
};





export type Query = {
  __typename?: 'Query';
  categorie: Categorie;
  categorieUnitesDeMesure?: Maybe<CategorieUnitesDeMesure>;
  uniteDeMesures: Array<UnitesDeMesure>;
  uniteDeMesure?: Maybe<UnitesDeMesure>;
  client?: Maybe<Client>;
  Commande?: Maybe<Commande>;
  depot?: Maybe<FileModel>;
  Facture?: Maybe<Facture>;
  Stock?: Maybe<Stock>;
  Transaction?: Maybe<Transaction>;
  file?: Maybe<FileModel>;
  nationalite?: Maybe<Nationalite>;
  permission?: Maybe<Permission>;
  personne?: Maybe<Personne>;
  role?: Maybe<Role>;
  setting?: Maybe<Setting>;
  user?: Maybe<User>;
  categories?: Maybe<CategoriePaginator>;
  categorieUnitesDeMesures?: Maybe<CategorieUnitesDeMesurePaginator>;
  clients?: Maybe<ClientPaginator>;
  Commandes?: Maybe<CommandePaginator>;
  depots?: Maybe<FileModelPaginator>;
  Factures?: Maybe<FacturePaginator>;
  Stocks?: Maybe<StockPaginator>;
  Transactions?: Maybe<TransactionPaginator>;
  files?: Maybe<FileModelPaginator>;
  nationalites?: Maybe<NationalitePaginator>;
  permissions?: Maybe<PermissionPaginator>;
  personnes?: Maybe<PersonnePaginator>;
  roles?: Maybe<RolePaginator>;
  settings?: Maybe<SettingPaginator>;
  users?: Maybe<UserPaginator>;
};


export type QueryUniteDeMesuresArgs = {
  root?: Maybe<Scalars['Boolean']>;
  where?: Maybe<QueryUniteDeMesuresWhereWhereConditions>;
};


export type QueryUniteDeMesureArgs = {
  id: Scalars['ID'];
};


export type QueryCategoriesArgs = {
  root?: Maybe<Scalars['Boolean']>;
  where?: Maybe<QueryCategoriesWhereWhereConditions>;
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QueryCategorieUnitesDeMesuresArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QueryClientsArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QueryCommandesArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QueryDepotsArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QueryFacturesArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QueryStocksArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QueryTransactionsArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QueryFilesArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QueryNationalitesArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QueryPermissionsArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QueryPersonnesArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QueryRolesArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QuerySettingsArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  first: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
};

export type Categorie = HasNom & HasNode & HasSlug & HasDescription & MayBeHasImage & HasCreatedAt & HasUpdatedAt & {
  __typename?: 'Categorie';
  id: Scalars['ID'];
  nom: Scalars['String'];
  slug: Scalars['String'];
  image?: Maybe<FileModel>;
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
  description: Scalars['String'];
  children: Array<Categorie>;
  hasChildren: Scalars['Int'];
  ancestors: Array<Categorie>;
  unitesDeMesures: Array<UnitesDeMesure>;
  pivot: CategorieUnitesDeMesure;
};

export type HasNom = {
  nom: Scalars['String'];
};

export type HasNode = {
  id: Scalars['ID'];
};

export type HasSlug = {
  slug: Scalars['String'];
};

export type HasDescription = {
  description: Scalars['String'];
};

export type MayBeHasImage = {
  image?: Maybe<FileModel>;
};

export type FileModel = HasNode & HasCreatedAt & HasUpdatedAt & {
  __typename?: 'FileModel';
  id: Scalars['ID'];
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
  nom?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  thumbnail_path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  exist: Scalars['Boolean'];
};

export type HasCreatedAt = {
  created_at: Scalars['DateTimeTz'];
};


export type HasUpdatedAt = {
  updated_at: Scalars['DateTimeTz'];
};

export type UnitesDeMesure = HasNode & HasNom & HasSlug & HasCreatedAt & HasUpdatedAt & {
  __typename?: 'UnitesDeMesure';
  id: Scalars['ID'];
  nom: Scalars['String'];
  symbole?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
  description?: Maybe<Scalars['String']>;
  children: Array<UnitesDeMesure>;
  hasChildren: Scalars['Int'];
  ancestors: Array<UnitesDeMesure>;
  categories: Array<Categorie>;
  pivot?: Maybe<CategorieUnitesDeMesure>;
};

export type CategorieUnitesDeMesure = HasNode & HasCreatedAt & HasUpdatedAt & {
  __typename?: 'CategorieUnitesDeMesure';
  id: Scalars['ID'];
  cathegorie: Categorie;
  uniteDeMesure: UnitesDeMesure;
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
};

/** Dynamic WHERE conditions for the `where` argument on the query `uniteDeMesures`. */
export type QueryUniteDeMesuresWhereWhereConditions = {
  /** The column that is used for the condition. */
  column?: Maybe<QueryUniteDeMesuresWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: Maybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: Maybe<Scalars['Mixed']>;
  /** A set of conditions that requires all conditions to match. */
  AND?: Maybe<Array<QueryUniteDeMesuresWhereWhereConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: Maybe<Array<QueryUniteDeMesuresWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: Maybe<QueryUniteDeMesuresWhereWhereConditionsRelation>;
};

/** Allowed column names for the `where` argument on field `uniteDeMesures` on type `Query`. */
export enum QueryUniteDeMesuresWhereColumn {
  Id = 'ID',
  UnitesDeMesureId = 'UNITES_DE_MESURE_ID'
}

/** The available SQL operators that are used to filter query results. */
export enum SqlOperator {
  /** Equal operator (`=`) */
  Eq = 'EQ',
  /** Not equal operator (`!=`) */
  Neq = 'NEQ',
  /** Greater than operator (`>`) */
  Gt = 'GT',
  /** Greater than or equal operator (`>=`) */
  Gte = 'GTE',
  /** Less than operator (`<`) */
  Lt = 'LT',
  /** Less than or equal operator (`<=`) */
  Lte = 'LTE',
  /** Simple pattern matching (`LIKE`) */
  Like = 'LIKE',
  /** Negation of simple pattern matching (`NOT LIKE`) */
  NotLike = 'NOT_LIKE',
  /** Whether a value is within a set of values (`IN`) */
  In = 'IN',
  /** Whether a value is not within a set of values (`NOT IN`) */
  NotIn = 'NOT_IN',
  /** Whether a value is within a range of values (`BETWEEN`) */
  Between = 'BETWEEN',
  /** Whether a value is not within a range of values (`NOT BETWEEN`) */
  NotBetween = 'NOT_BETWEEN',
  /** Whether a value is null (`IS NULL`) */
  IsNull = 'IS_NULL',
  /** Whether a value is not null (`IS NOT NULL`) */
  IsNotNull = 'IS_NOT_NULL'
}


/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `uniteDeMesures`. */
export type QueryUniteDeMesuresWhereWhereConditionsRelation = {
  /** The relation that is checked. */
  relation: Scalars['String'];
  /** The comparison operator to test against the amount. */
  operator?: Maybe<SqlOperator>;
  /** The amount to test. */
  amount?: Maybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: Maybe<QueryUniteDeMesuresWhereWhereConditions>;
};

export type Client = HasNode & HasNom & HasImage & HasEmail & HasAdresse1 & HasContact1 & HasContact2 & HasCreatedAt & HasUpdatedAt & {
  __typename?: 'Client';
  id: Scalars['ID'];
  nom: Scalars['String'];
  email: Scalars['String'];
  adresse_1: Scalars['String'];
  contact_1: Scalars['String'];
  contact_2: Scalars['String'];
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
  image: FileModel;
  commandes: Array<Commande>;
};

export type HasImage = {
  image: FileModel;
};

export type HasEmail = {
  email: Scalars['String'];
};

export type HasAdresse1 = {
  adresse_1: Scalars['String'];
};

export type HasContact1 = {
  contact_1: Scalars['String'];
};

export type HasContact2 = {
  contact_2: Scalars['String'];
};

export type Commande = HasNode & HasCreatedAt & HasUpdatedAt & HasDeletedAt & HasDescription & {
  __typename?: 'Commande';
  id: Scalars['ID'];
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
  deleted_at?: Maybe<Scalars['DateTimeTz']>;
  description: Scalars['String'];
  type: TypeCommande;
  etat: EtatCommande;
  age: Scalars['DateTimeTz'];
  date_expiration: Scalars['DateTimeTz'];
  date: Scalars['DateTimeTz'];
  depot: Depot;
  user: User;
  stock: Stock;
  client: Client;
  transactions: Array<Transaction>;
  detail: CommandeStock;
};

export type HasDeletedAt = {
  deleted_at?: Maybe<Scalars['DateTimeTz']>;
};

export enum TypeCommande {
  Vente = 'VENTE',
  Aquisition = 'AQUISITION'
}

export enum EtatCommande {
  Recent = 'RECENT',
  Usage = 'USAGE'
}

export type Depot = HasNode & HasCreatedAt & HasUpdatedAt & HasImage & HasNom & HasSlug & HasAdresse1 & HasContact1 & HasContact2 & HasEmail & {
  __typename?: 'Depot';
  id: Scalars['ID'];
  nom: Scalars['String'];
  slug: Scalars['String'];
  adresse_1: Scalars['String'];
  contact_1: Scalars['String'];
  contact_2: Scalars['String'];
  email: Scalars['String'];
  web: Scalars['String'];
  region: Scalars['String'];
  ville: Scalars['String'];
  image: FileModel;
  transactions: Array<Transaction>;
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
};

export type Transaction = HasNode & HasCreatedAt & HasDeletedAt & HasUpdatedAt & {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
  deleted_at?: Maybe<Scalars['DateTimeTz']>;
  montant: Scalars['Float'];
  date: Scalars['DateTimeTz'];
  Depot: Depot;
  commade: Commande;
  factures: Array<Facture>;
};

export type Facture = HasNode & HasCreatedAt & HasUpdatedAt & HasDeletedAt & {
  __typename?: 'Facture';
  id: Scalars['ID'];
  deleted_at?: Maybe<Scalars['DateTimeTz']>;
  updated_at: Scalars['DateTimeTz'];
  created_at: Scalars['DateTimeTz'];
  montant: Scalars['Float'];
  date: Scalars['DateTimeTz'];
  transaction: Transaction;
};

export type User = HasNode & HasCreatedAt & HasUpdatedAt & HasDeletedAt & {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
  deleted_at?: Maybe<Scalars['DateTimeTz']>;
  depot?: Maybe<Depot>;
  identite: Personne;
  permissions?: Maybe<Array<Permission>>;
  roles: Array<Role>;
};

export type Personne = HasNode & HasCreatedAt & HasUpdatedAt & MayBeHasImage & HasNom & MayBeHasAdresse1 & MayBeHasAdresse2 & MayBeHasContact1 & MayBeHasContact2 & MayBeHasEmail & HasDeletedAt & {
  __typename?: 'Personne';
  id: Scalars['ID'];
  nom: Scalars['String'];
  sexe?: Maybe<Sexe>;
  date_de_naiss?: Maybe<Scalars['Date']>;
  cni?: Maybe<Scalars['String']>;
  adresse_1?: Maybe<Scalars['String']>;
  adresse_2?: Maybe<Scalars['String']>;
  contact_1?: Maybe<Scalars['String']>;
  contact_2?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<FileModel>;
  imagePieceIdentite?: Maybe<FileModel>;
  nationalite?: Maybe<Nationalite>;
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
  deleted_at?: Maybe<Scalars['DateTimeTz']>;
};

export type MayBeHasAdresse1 = {
  adresse_1?: Maybe<Scalars['String']>;
};

export type MayBeHasAdresse2 = {
  adresse_2?: Maybe<Scalars['String']>;
};

export type MayBeHasContact1 = {
  contact_1?: Maybe<Scalars['String']>;
};

export type MayBeHasContact2 = {
  contact_2?: Maybe<Scalars['String']>;
};

export type MayBeHasEmail = {
  email?: Maybe<Scalars['String']>;
};

export enum Sexe {
  Homme = 'HOMME',
  Femme = 'FEMME'
}


export type Nationalite = HasNode & HasNom & HasCreatedAt & HasUpdatedAt & HasSlug & {
  __typename?: 'Nationalite';
  id: Scalars['ID'];
  nom: Scalars['String'];
  slug: Scalars['String'];
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
};

export type Permission = HasNode & HasNom & HasCreatedAt & HasUpdatedAt & HasSlug & HasDescription & {
  __typename?: 'Permission';
  id: Scalars['ID'];
  nom: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
};

export type Role = HasNode & HasNom & HasCreatedAt & HasUpdatedAt & HasDescription & {
  __typename?: 'Role';
  id: Scalars['ID'];
  nom: Scalars['String'];
  description: Scalars['String'];
  slug: TypeRole;
  active: Scalars['Int'];
  level?: Maybe<Scalars['Int']>;
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
  permissions?: Maybe<Array<Permission>>;
};

export enum TypeRole {
  SuperAdministrateur = 'SUPER_ADMINISTRATEUR',
  Administrateur = 'ADMINISTRATEUR',
  Gerant = 'GERANT',
  Utilisateur = 'UTILISATEUR'
}

export type Stock = HasNode & HasImage & HasNom & HasSlug & HasCreatedAt & HasUpdatedAt & {
  __typename?: 'Stock';
  id: Scalars['ID'];
  nom: Scalars['String'];
  slug: Scalars['String'];
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
  image: FileModel;
  categorie: CategorieUnitesDeMesure;
  user: User;
  commande?: Maybe<Array<Commande>>;
  StockDetail: CommandeStock;
  prix_de_vente_unitaire?: Maybe<Scalars['Float']>;
};

export type CommandeStock = HasNode & HasCreatedAt & HasUpdatedAt & HasDeletedAt & {
  __typename?: 'CommandeStock';
  id: Scalars['ID'];
  deleted_at?: Maybe<Scalars['DateTimeTz']>;
  updated_at: Scalars['DateTimeTz'];
  created_at: Scalars['DateTimeTz'];
  quantite: Scalars['Float'];
  prix_achat_unitaire: Scalars['Float'];
  prix_de_vente_unitaire: Scalars['Float'];
  remise: Scalars['Float'];
  remise_description: Scalars['String'];
  taxe: Scalars['Float'];
  taxe_description: Scalars['String'];
};

export type Setting = HasNode & HasCreatedAt & HasUpdatedAt & {
  __typename?: 'Setting';
  id: Scalars['ID'];
  nom: Scalars['String'];
  slug: Scalars['String'];
  type: Scalars['String'];
  value: SettingValue;
  pivot?: Maybe<SettingUser>;
  description?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
};

export type SettingValue = {
  __typename?: 'SettingValue';
  value?: Maybe<Scalars['Mixed']>;
  valueType: Scalars['String'];
};

export type SettingUser = {
  __typename?: 'SettingUser';
  value?: Maybe<SettingValue>;
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
};

/** Dynamic WHERE conditions for the `where` argument on the query `categories`. */
export type QueryCategoriesWhereWhereConditions = {
  /** The column that is used for the condition. */
  column?: Maybe<QueryCategoriesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: Maybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: Maybe<Scalars['Mixed']>;
  /** A set of conditions that requires all conditions to match. */
  AND?: Maybe<Array<QueryCategoriesWhereWhereConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: Maybe<Array<QueryCategoriesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: Maybe<QueryCategoriesWhereWhereConditionsRelation>;
};

/** Allowed column names for the `where` argument on field `categories` on type `Query`. */
export enum QueryCategoriesWhereColumn {
  CategorieId = 'CATEGORIE_ID'
}

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `categories`. */
export type QueryCategoriesWhereWhereConditionsRelation = {
  /** The relation that is checked. */
  relation: Scalars['String'];
  /** The comparison operator to test against the amount. */
  operator?: Maybe<SqlOperator>;
  /** The amount to test. */
  amount?: Maybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: Maybe<QueryCategoriesWhereWhereConditions>;
};

/** A paginated list of Categorie items. */
export type CategoriePaginator = {
  __typename?: 'CategoriePaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of Categorie items. */
  data: Array<Categorie>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

/** A paginated list of CategorieUnitesDeMesure items. */
export type CategorieUnitesDeMesurePaginator = {
  __typename?: 'CategorieUnitesDeMesurePaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of CategorieUnitesDeMesure items. */
  data: Array<CategorieUnitesDeMesure>;
};

/** A paginated list of Client items. */
export type ClientPaginator = {
  __typename?: 'ClientPaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of Client items. */
  data: Array<Client>;
};

/** A paginated list of Commande items. */
export type CommandePaginator = {
  __typename?: 'CommandePaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of Commande items. */
  data: Array<Commande>;
};

/** A paginated list of FileModel items. */
export type FileModelPaginator = {
  __typename?: 'FileModelPaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of FileModel items. */
  data: Array<FileModel>;
};

/** A paginated list of Facture items. */
export type FacturePaginator = {
  __typename?: 'FacturePaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of Facture items. */
  data: Array<Facture>;
};

/** A paginated list of Stock items. */
export type StockPaginator = {
  __typename?: 'StockPaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of Stock items. */
  data: Array<Stock>;
};

/** A paginated list of Transaction items. */
export type TransactionPaginator = {
  __typename?: 'TransactionPaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of Transaction items. */
  data: Array<Transaction>;
};

/** A paginated list of Nationalite items. */
export type NationalitePaginator = {
  __typename?: 'NationalitePaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of Nationalite items. */
  data: Array<Nationalite>;
};

/** A paginated list of Permission items. */
export type PermissionPaginator = {
  __typename?: 'PermissionPaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of Permission items. */
  data: Array<Permission>;
};

/** A paginated list of Personne items. */
export type PersonnePaginator = {
  __typename?: 'PersonnePaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of Personne items. */
  data: Array<Personne>;
};

/** A paginated list of Role items. */
export type RolePaginator = {
  __typename?: 'RolePaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of Role items. */
  data: Array<Role>;
};

/** A paginated list of Setting items. */
export type SettingPaginator = {
  __typename?: 'SettingPaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of Setting items. */
  data: Array<Setting>;
};

/** A paginated list of User items. */
export type UserPaginator = {
  __typename?: 'UserPaginator';
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of User items. */
  data: Array<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: AuthPayload;
  refreshToken: RefreshTokenPayload;
  logout: LogoutResponse;
  forgotPassword: ForgotPasswordResponse;
  updateForgottenPassword: ForgotPasswordResponse;
  register: RegisterResponse;
  socialLogin: AuthPayload;
  verifyEmail: AuthPayload;
  updatePassword: UpdatePasswordResponse;
  createCategorie: Categorie;
  updateCategorie: Categorie;
  upsertCategorie: Categorie;
  createCategorieUnitesDeMesure: CategorieUnitesDeMesure;
  updateCategorieUnitesDeMesure: CategorieUnitesDeMesure;
  upsertCategorieUnitesDeMesure: CategorieUnitesDeMesure;
  createUnitesDeMesure: UnitesDeMesure;
  updateUnitesDeMesure: UnitesDeMesure;
  upsertUnitesDeMesure: UnitesDeMesure;
  createClient: Client;
  updateClient: Client;
  upsertClient: Client;
  createCommande: Commande;
  updateCommande: Commande;
  upsertCommande: Commande;
  createDepot: Depot;
  updateDepot: Depot;
  DepotUpsert: Depot;
  createFacture: Facture;
  updateFacture: Facture;
  upsertFacture: Facture;
  createStock: Stock;
  updateStock: Stock;
  upsertStock: Stock;
  createTransaction: Transaction;
  updateTransaction: Transaction;
  upsertTransaction: Transaction;
  createFileModel: FileModel;
  updateFileModel: FileModel;
  upsertFileModel: FileModel;
  uploadFile: FileModel;
  createNationalite: Nationalite;
  updateNationalite: Nationalite;
  upsertNationalite: Nationalite;
  createPermission: Permission;
  updatePermission: Permission;
  upsertPermission: Permission;
  createPersonne: Personne;
  updatePersonne: Personne;
  upsertPersonne: Personne;
  createRole: Role;
  updateRole: Role;
  upsertRole: Role;
  createSetting: Setting;
  updateSetting: Setting;
  upsertSetting: Setting;
  createUser: User;
  updateUser: User;
  upsertUser: User;
};


export type MutationLoginArgs = {
  input?: Maybe<LoginInput>;
};


export type MutationRefreshTokenArgs = {
  input?: Maybe<RefreshTokenInput>;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationUpdateForgottenPasswordArgs = {
  input?: Maybe<NewPasswordWithCodeInput>;
};


export type MutationRegisterArgs = {
  input?: Maybe<RegisterInput>;
};


export type MutationSocialLoginArgs = {
  input: SocialLoginInput;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePassword;
};


export type MutationCreateCategorieArgs = {
  input?: Maybe<CreateCategorieInput>;
};


export type MutationUpdateCategorieArgs = {
  input?: Maybe<UpdateCategorieInput>;
};


export type MutationUpsertCategorieArgs = {
  input?: Maybe<UpsertCategorieInput>;
};


export type MutationCreateCategorieUnitesDeMesureArgs = {
  input?: Maybe<CreateCategorieUnitesDeMesureInput>;
};


export type MutationUpdateCategorieUnitesDeMesureArgs = {
  input?: Maybe<UpdateCategorieUnitesDeMesureInput>;
};


export type MutationUpsertCategorieUnitesDeMesureArgs = {
  input?: Maybe<UpsertCategorieUnitesDeMesureInput>;
};


export type MutationCreateUnitesDeMesureArgs = {
  input?: Maybe<CreateUnitesDeMesureInput>;
};


export type MutationUpdateUnitesDeMesureArgs = {
  input?: Maybe<UpdateUnitesDeMesureInput>;
};


export type MutationUpsertUnitesDeMesureArgs = {
  input?: Maybe<UpsertUnitesDeMesureInput>;
};


export type MutationCreateClientArgs = {
  input?: Maybe<CreateClientInput>;
};


export type MutationUpdateClientArgs = {
  input?: Maybe<UpdateClientInput>;
};


export type MutationUpsertClientArgs = {
  input?: Maybe<UpsertClientInput>;
};


export type MutationCreateCommandeArgs = {
  input?: Maybe<CreateCommandeInput>;
};


export type MutationUpdateCommandeArgs = {
  input?: Maybe<UpdateCommandeInput>;
};


export type MutationUpsertCommandeArgs = {
  input?: Maybe<UpsertCommandeInput>;
};


export type MutationCreateDepotArgs = {
  input?: Maybe<CreateDepotInput>;
};


export type MutationUpdateDepotArgs = {
  input?: Maybe<UpdateDepotInput>;
};


export type MutationDepotUpsertArgs = {
  input?: Maybe<UpsertDepotInput>;
};


export type MutationCreateFactureArgs = {
  input?: Maybe<CreateFactureInput>;
};


export type MutationUpdateFactureArgs = {
  input?: Maybe<UpdateFactureInput>;
};


export type MutationUpsertFactureArgs = {
  input?: Maybe<UpsertFactureInput>;
};


export type MutationCreateStockArgs = {
  input?: Maybe<CreateStockInput>;
};


export type MutationUpdateStockArgs = {
  input?: Maybe<UpdateStockInput>;
};


export type MutationUpsertStockArgs = {
  input?: Maybe<UpsertStockInput>;
};


export type MutationCreateTransactionArgs = {
  input?: Maybe<CreateTransactionInput>;
};


export type MutationUpdateTransactionArgs = {
  input?: Maybe<UpdateTransactionInput>;
};


export type MutationUpsertTransactionArgs = {
  input?: Maybe<UpsertTransactionInput>;
};


export type MutationCreateFileModelArgs = {
  input?: Maybe<CreateFileModelInput>;
};


export type MutationUpdateFileModelArgs = {
  input?: Maybe<UpdateFileModelInput>;
};


export type MutationUpsertFileModelArgs = {
  input?: Maybe<UpsertFileModelInput>;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
  id: Scalars['ID'];
};


export type MutationCreateNationaliteArgs = {
  input?: Maybe<CreateNationaliteInput>;
};


export type MutationUpdateNationaliteArgs = {
  input?: Maybe<UpdateNationaliteInput>;
};


export type MutationUpsertNationaliteArgs = {
  input?: Maybe<UpsertNationaliteInput>;
};


export type MutationCreatePermissionArgs = {
  input?: Maybe<CreatePermissionInput>;
};


export type MutationUpdatePermissionArgs = {
  input?: Maybe<UpdatePermissionInput>;
};


export type MutationUpsertPermissionArgs = {
  input?: Maybe<UpsertPermissionInput>;
};


export type MutationCreatePersonneArgs = {
  input?: Maybe<CreatePersonneInput>;
};


export type MutationUpdatePersonneArgs = {
  input?: Maybe<UpdatePersonneInput>;
};


export type MutationUpsertPersonneArgs = {
  input?: Maybe<UpsertPersonneInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationUpsertRoleArgs = {
  input?: Maybe<UpsertRoleInput>;
};


export type MutationCreateSettingArgs = {
  input?: Maybe<CreateSettingInput>;
};


export type MutationUpdateSettingArgs = {
  input?: Maybe<UpdateSettingInput>;
};


export type MutationUpsertSettingArgs = {
  input?: Maybe<UpsertSettingInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationUpsertUserArgs = {
  input?: Maybe<UpsertUserInput>;
};

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  access_token?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  expires_in?: Maybe<Scalars['Int']>;
  token_type?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type RefreshTokenInput = {
  refresh_token?: Maybe<Scalars['String']>;
};

export type RefreshTokenPayload = {
  __typename?: 'RefreshTokenPayload';
  access_token: Scalars['String'];
  refresh_token: Scalars['String'];
  expires_in: Scalars['Int'];
  token_type: Scalars['String'];
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  status: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  status: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type NewPasswordWithCodeInput = {
  email: Scalars['String'];
  token: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};

export type RegisterInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  tokens?: Maybe<AuthPayload>;
  status: RegisterStatuses;
};

export enum RegisterStatuses {
  MustVerifyEmail = 'MUST_VERIFY_EMAIL',
  Success = 'SUCCESS'
}

export type SocialLoginInput = {
  provider: Scalars['String'];
  token: Scalars['String'];
};

export type VerifyEmailInput = {
  token: Scalars['String'];
};

export type UpdatePassword = {
  old_password: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};

export type UpdatePasswordResponse = {
  __typename?: 'UpdatePasswordResponse';
  status: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type CreateCategorieInput = {
  nom: Scalars['String'];
  image: CreateFileModelBelongsTo;
  description?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['ID']>;
  children: CreateCategorieBelongsToMany;
  uniteDeMesure: CreateUnitesDeMesureBelongsToMany;
};

export type CreateFileModelBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateFileModelInput>;
  update?: Maybe<UpdateFileModelInput>;
  upsert?: Maybe<UpsertFileModelInput>;
};

export type CreateFileModelInput = {
  nom?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  thumbnail_path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  exist: Scalars['Boolean'];
};

export type UpdateFileModelInput = {
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  thumbnail_path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  exist?: Maybe<Scalars['Boolean']>;
};

export type UpsertFileModelInput = {
  id?: Maybe<Scalars['ID']>;
  nom?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  thumbnail_path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  exist?: Maybe<Scalars['Boolean']>;
};

export type CreateCategorieBelongsToMany = {
  create?: Maybe<Array<CreateCategorieInput>>;
  upsert?: Maybe<Array<UpsertCategorieInput>>;
  connect?: Maybe<Array<Scalars['ID']>>;
  sync?: Maybe<Array<Scalars['ID']>>;
};

export type UpsertCategorieInput = {
  id?: Maybe<Scalars['ID']>;
  nom?: Maybe<Scalars['String']>;
  image?: Maybe<CreateFileModelBelongsTo>;
  description?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['ID']>;
  children?: Maybe<UpdateCategorieHasMany>;
  uniteDeMesure?: Maybe<CreateUnitesDeMesureBelongsToMany>;
};

export type UpdateCategorieHasMany = {
  create?: Maybe<Array<CreateCategorieInput>>;
  update?: Maybe<Array<UpdateCategorieInput>>;
  upsert?: Maybe<Array<UpsertCategorieInput>>;
  delete?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateCategorieInput = {
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  image?: Maybe<CreateFileModelBelongsTo>;
  description?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['ID']>;
  children?: Maybe<UpdateCategorieHasMany>;
  uniteDeMesure?: Maybe<CreateUnitesDeMesureBelongsToMany>;
};

export type CreateUnitesDeMesureBelongsToMany = {
  create?: Maybe<Array<CreateUnitesDeMesureInput>>;
  upsert?: Maybe<Array<UpsertUnitesDeMesureInput>>;
  connect?: Maybe<Array<Scalars['ID']>>;
  sync?: Maybe<Array<Scalars['ID']>>;
};

export type CreateUnitesDeMesureInput = {
  nom: Scalars['String'];
  symbole: Scalars['String'];
  slug: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['ID']>;
  children: UpdateUnitesDeMesureBelongsToMany;
  categories: CreateCategorieBelongsToMany;
};

export type UpdateUnitesDeMesureBelongsToMany = {
  create?: Maybe<Array<CreateUnitesDeMesureInput>>;
  connect?: Maybe<Array<Scalars['ID']>>;
  update?: Maybe<Array<UpdateUnitesDeMesureInput>>;
  upsert?: Maybe<Array<UpsertUnitesDeMesureInput>>;
  sync?: Maybe<Array<Scalars['ID']>>;
  syncWithoutDetaching?: Maybe<Array<Scalars['ID']>>;
  delete?: Maybe<Array<Scalars['ID']>>;
  disconnect?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateUnitesDeMesureInput = {
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  symbole?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['ID']>;
  children?: Maybe<UpdateUnitesDeMesureBelongsToMany>;
  categories?: Maybe<CreateCategorieBelongsToMany>;
};

export type UpsertUnitesDeMesureInput = {
  id?: Maybe<Scalars['ID']>;
  nom?: Maybe<Scalars['String']>;
  symbole?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['ID']>;
  children?: Maybe<UpdateUnitesDeMesureBelongsToMany>;
  categories?: Maybe<CreateCategorieBelongsToMany>;
};

export type CreateCategorieUnitesDeMesureInput = {
  cathegorie: CreateCategorieBelongsTo;
  uniteDeMesure: CreateUserBelongsTo;
};

export type CreateCategorieBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateCategorieInput>;
  update?: Maybe<UpdateCategorieInput>;
  upsert?: Maybe<UpsertCategorieInput>;
};

export type CreateUserBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateUserInput>;
  update?: Maybe<UpdateUserInput>;
  upsert?: Maybe<UpsertUserInput>;
};

export type CreateUserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  depot: CreateDepotBelongsTo;
  identite: CreatePersonneBelongsTo;
  permissions: CreatePermissionBelongsToMany;
  roles: CreateRoleBelongsToMany;
  settings?: Maybe<ConnectSettingBelongsToMany>;
};

export type CreateDepotBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateDepotInput>;
  update?: Maybe<UpdateDepotInput>;
  upsert?: Maybe<UpsertDepotInput>;
};

export type CreateDepotInput = {
  nom: Scalars['String'];
  slug: Scalars['String'];
  adresse_1: Scalars['String'];
  contact_1: Scalars['String'];
  contact_2: Scalars['String'];
  email: Scalars['String'];
  web: Scalars['String'];
  region: Scalars['String'];
  ville: Scalars['String'];
  image: CreateFileModelBelongsTo;
  transactions: UpdateTransactionHasMany;
};

export type UpdateTransactionHasMany = {
  create?: Maybe<Array<CreateTransactionInput>>;
  update?: Maybe<Array<UpdateTransactionInput>>;
  upsert?: Maybe<Array<UpsertTransactionInput>>;
  delete?: Maybe<Array<Scalars['ID']>>;
};

export type CreateTransactionInput = {
  montant: Scalars['Float'];
  date: Scalars['DateTimeTz'];
  Depot: CreateDepotBelongsTo;
  commade: CreateCommandeBelongsTo;
  factures: UpdateFactureHasMany;
};

export type CreateCommandeBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateCommandeInput>;
  update?: Maybe<UpdateCommandeInput>;
  upsert?: Maybe<UpsertCommandeInput>;
};

export type CreateCommandeInput = {
  description: Scalars['String'];
  type: TypeCommande;
  etat: EtatCommande;
  age: Scalars['DateTimeTz'];
  date_expiration: Scalars['DateTimeTz'];
  date: Scalars['DateTimeTz'];
  depot: CreateFileModelBelongsTo;
  user: CreateUserBelongsTo;
  stock: CreateStockBelongsToMany;
  client: CreateClientBelongsTo;
  transactions: UpdateTransactionHasMany;
};

export type CreateStockBelongsToMany = {
  create?: Maybe<Array<CreateStockInput>>;
  upsert?: Maybe<Array<UpsertStockInput>>;
  connect?: Maybe<Array<ConnectStock>>;
  sync?: Maybe<Array<ConnectStock>>;
};

export type CreateStockInput = {
  nom: Scalars['String'];
  slug: Scalars['String'];
  image: CreateFileModelBelongsTo;
  categorie: CreateCategorieUnitesDeMesureBelongsTo;
  user: CreateUserBelongsTo;
  commande: CreateCommandeBelongsToMany;
  prix_de_vente_unitaire: Scalars['Float'];
};

export type CreateCategorieUnitesDeMesureBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateCategorieUnitesDeMesureInput>;
  update?: Maybe<UpdateCategorieUnitesDeMesureInput>;
  upsert?: Maybe<UpsertCategorieUnitesDeMesureInput>;
};

export type UpdateCategorieUnitesDeMesureInput = {
  id: Scalars['ID'];
  cathegorie?: Maybe<CreateCategorieBelongsTo>;
  uniteDeMesure?: Maybe<CreateUserBelongsTo>;
};

export type UpsertCategorieUnitesDeMesureInput = {
  id?: Maybe<Scalars['ID']>;
  cathegorie?: Maybe<CreateCategorieBelongsTo>;
  uniteDeMesure?: Maybe<CreateUserBelongsTo>;
};

export type CreateCommandeBelongsToMany = {
  create?: Maybe<Array<CreateCommandeInput>>;
  upsert?: Maybe<Array<UpsertCommandeInput>>;
  connect?: Maybe<Array<ConnectCommande>>;
  sync?: Maybe<Array<ConnectCommande>>;
};

export type UpsertCommandeInput = {
  id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<TypeCommande>;
  etat?: Maybe<EtatCommande>;
  age?: Maybe<Scalars['DateTimeTz']>;
  date_expiration?: Maybe<Scalars['DateTimeTz']>;
  date?: Maybe<Scalars['DateTimeTz']>;
  depot?: Maybe<CreateFileModelBelongsTo>;
  user?: Maybe<CreateUserBelongsTo>;
  stock?: Maybe<CreateStockBelongsToMany>;
  client?: Maybe<CreateClientBelongsTo>;
  transactions?: Maybe<UpdateTransactionHasMany>;
};

export type CreateClientBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateClientInput>;
  update?: Maybe<UpdateClientInput>;
  upsert?: Maybe<UpsertClientInput>;
};

export type CreateClientInput = {
  nom: Scalars['String'];
  email: Scalars['String'];
  adresse_1: Scalars['String'];
  contact_1: Scalars['String'];
  contact_2: Scalars['String'];
  image: CreateFileModelBelongsTo;
  commandes: UpdateCommandeHasMany;
};

export type UpdateCommandeHasMany = {
  create?: Maybe<Array<CreateCommandeInput>>;
  update?: Maybe<Array<UpdateCommandeInput>>;
  upsert?: Maybe<Array<UpsertCommandeInput>>;
  delete?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateCommandeInput = {
  id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<TypeCommande>;
  etat?: Maybe<EtatCommande>;
  age?: Maybe<Scalars['DateTimeTz']>;
  date_expiration?: Maybe<Scalars['DateTimeTz']>;
  date?: Maybe<Scalars['DateTimeTz']>;
  depot?: Maybe<CreateFileModelBelongsTo>;
  user?: Maybe<CreateUserBelongsTo>;
  stock?: Maybe<CreateStockBelongsToMany>;
  client?: Maybe<CreateClientBelongsTo>;
  transactions?: Maybe<UpdateTransactionHasMany>;
};

export type UpdateClientInput = {
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  adresse_1?: Maybe<Scalars['String']>;
  contact_1?: Maybe<Scalars['String']>;
  contact_2?: Maybe<Scalars['String']>;
  image?: Maybe<UpdateFileModelBelongsTo>;
  commandes?: Maybe<UpdateCommandeHasMany>;
};

export type UpdateFileModelBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateFileModelInput>;
  update?: Maybe<UpdateFileModelInput>;
  upsert?: Maybe<UpsertFileModelInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type UpsertClientInput = {
  id?: Maybe<Scalars['ID']>;
  nom?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  adresse_1?: Maybe<Scalars['String']>;
  contact_1?: Maybe<Scalars['String']>;
  contact_2?: Maybe<Scalars['String']>;
  image?: Maybe<UpdateFileModelBelongsTo>;
  commandes?: Maybe<UpdateCommandeHasMany>;
};

export type ConnectCommande = {
  id: Scalars['ID'];
  quantite: Scalars['Float'];
  prix_achat_unitaire: Scalars['Float'];
  prix_de_vente_unitaire: Scalars['Float'];
  remise: Scalars['Float'];
  remise_description: Scalars['String'];
  taxe: Scalars['Float'];
  taxe_description: Scalars['String'];
};

export type UpsertStockInput = {
  id?: Maybe<Scalars['ID']>;
  slug: Scalars['String'];
  image: CreateFileModelBelongsTo;
  categorie: CreateCategorieUnitesDeMesureBelongsTo;
  user: CreateUserBelongsTo;
  commande: CreateCommandeBelongsToMany;
  prix_de_vente_unitaire: Scalars['Float'];
};

export type ConnectStock = {
  id: Scalars['ID'];
  quantite: Scalars['Float'];
  prix_achat_unitaire: Scalars['Float'];
  prix_de_vente_unitaire: Scalars['Float'];
  remise: Scalars['Float'];
  remise_description: Scalars['String'];
  taxe: Scalars['Float'];
  taxe_description: Scalars['String'];
};

export type UpdateFactureHasMany = {
  create?: Maybe<Array<CreateFactureInput>>;
  update?: Maybe<Array<UpdateFactureInput>>;
  upsert?: Maybe<Array<UpsertFactureInput>>;
  delete?: Maybe<Array<Scalars['ID']>>;
};

export type CreateFactureInput = {
  montant: Scalars['Float'];
  date: Scalars['DateTimeTz'];
  transaction: CreateTransactionBelongsTo;
};

export type CreateTransactionBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateTransactionInput>;
  update?: Maybe<UpdateTransactionInput>;
  upsert?: Maybe<UpsertTransactionInput>;
};

export type UpdateTransactionInput = {
  id: Scalars['ID'];
  montant?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['DateTimeTz']>;
  Depot?: Maybe<CreateDepotBelongsTo>;
  commade?: Maybe<CreateCommandeBelongsTo>;
  factures?: Maybe<UpdateFactureHasMany>;
};

export type UpsertTransactionInput = {
  id?: Maybe<Scalars['ID']>;
  montant?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['DateTimeTz']>;
  Depot?: Maybe<CreateDepotBelongsTo>;
  commade?: Maybe<CreateCommandeBelongsTo>;
  facture?: Maybe<UpdateFactureHasMany>;
};

export type UpdateFactureInput = {
  id: Scalars['ID'];
  montant?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['DateTimeTz']>;
  transaction?: Maybe<CreateTransactionBelongsTo>;
};

export type UpsertFactureInput = {
  id?: Maybe<Scalars['ID']>;
  montant?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['DateTimeTz']>;
  transaction?: Maybe<CreateTransactionBelongsTo>;
};

export type UpdateDepotInput = {
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  adresse_1?: Maybe<Scalars['String']>;
  contact_1?: Maybe<Scalars['String']>;
  contact_2?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  ville?: Maybe<Scalars['String']>;
  image?: Maybe<UpdateFileModelBelongsTo>;
  transactions?: Maybe<UpdateTransactionHasMany>;
};

export type UpsertDepotInput = {
  id?: Maybe<Scalars['ID']>;
  nom?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  adresse_1?: Maybe<Scalars['String']>;
  contact_1?: Maybe<Scalars['String']>;
  contact_2?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  ville?: Maybe<Scalars['String']>;
  image?: Maybe<UpdateFileModelBelongsTo>;
  transactions?: Maybe<UpdateTransactionHasMany>;
};

export type CreatePersonneBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreatePersonneInput>;
  update?: Maybe<UpdatePersonneInput>;
  upsert?: Maybe<UpsertPersonneInput>;
};

export type CreatePersonneInput = {
  nom: Scalars['String'];
  sexe?: Maybe<Sexe>;
  date_de_naiss?: Maybe<Scalars['Date']>;
  cni?: Maybe<Scalars['String']>;
  adresse_1?: Maybe<Scalars['String']>;
  adresse_2?: Maybe<Scalars['String']>;
  contact_1?: Maybe<Scalars['String']>;
  contact_2?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image: CreateFileModelBelongsTo;
  imagePieceIdentite?: Maybe<CreateFileModelBelongsTo>;
  nationalite: CreateNationaliteBelongsTo;
};

export type CreateNationaliteBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateNationaliteInput>;
  update?: Maybe<UpdateNationaliteInput>;
  upsert?: Maybe<UpsertNationaliteInput>;
};

export type CreateNationaliteInput = {
  nom: Scalars['String'];
  slug: Scalars['String'];
};

export type UpdateNationaliteInput = {
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpsertNationaliteInput = {
  id?: Maybe<Scalars['ID']>;
  nom?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpdatePersonneInput = {
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  sexe?: Maybe<Sexe>;
  date_de_naiss?: Maybe<Scalars['Date']>;
  cni?: Maybe<Scalars['String']>;
  adresse_1?: Maybe<Scalars['String']>;
  adresse_2?: Maybe<Scalars['String']>;
  contact_1?: Maybe<Scalars['String']>;
  contact_2?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  ville?: Maybe<Scalars['String']>;
  image?: Maybe<UpdateFileModelBelongsTo>;
  imagePieceIdentite: CreateFileModelBelongsTo;
  nationalite?: Maybe<UpdateNationaliteBelongsTo>;
};

export type UpdateNationaliteBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateNationaliteInput>;
  update?: Maybe<UpdateNationaliteInput>;
  upsert?: Maybe<UpsertNationaliteInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type UpsertPersonneInput = {
  id?: Maybe<Scalars['ID']>;
  nom?: Maybe<Scalars['String']>;
  sexe?: Maybe<Sexe>;
  date_de_naiss?: Maybe<Scalars['Date']>;
  cni?: Maybe<Scalars['String']>;
  adresse_1?: Maybe<Scalars['String']>;
  adresse_2?: Maybe<Scalars['String']>;
  contact_1?: Maybe<Scalars['String']>;
  contact_2?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  ville?: Maybe<Scalars['String']>;
  image?: Maybe<UpdateFileModelBelongsTo>;
  imagePieceIdentite: CreateFileModelBelongsTo;
  nationalite?: Maybe<UpdateNationaliteBelongsTo>;
};

export type CreatePermissionBelongsToMany = {
  create?: Maybe<Array<CreatePermissionInput>>;
  upsert?: Maybe<Array<UpsertPermissionInput>>;
  connect?: Maybe<Array<ConnectPermission>>;
  sync?: Maybe<Array<ConnectPermission>>;
};

export type CreatePermissionInput = {
  nom: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
};

export type UpsertPermissionInput = {
  id?: Maybe<Scalars['ID']>;
  nom?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ConnectPermission = {
  id: Scalars['ID'];
  date_expiration?: Maybe<Scalars['DateTimeTz']>;
};

export type CreateRoleBelongsToMany = {
  create?: Maybe<Array<CreateRoleInput>>;
  upsert?: Maybe<Array<UpsertRoleInput>>;
  connect?: Maybe<Array<Scalars['ID']>>;
  sync?: Maybe<Array<Scalars['ID']>>;
};

export type CreateRoleInput = {
  nom: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  active: Scalars['Int'];
  level: Scalars['Int'];
  permission: CreatePermissionBelongsToMany;
};

export type UpsertRoleInput = {
  id?: Maybe<Scalars['ID']>;
  nom?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  permission?: Maybe<CreatePermissionBelongsToMany>;
};

export type ConnectSettingBelongsToMany = {
  connect?: Maybe<Array<ConnectSettingInput>>;
  sync?: Maybe<Array<ConnectSettingInput>>;
  syncWithoutDetaching?: Maybe<Array<ConnectSettingInput>>;
};

export type ConnectSettingInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<SettingValueInput>;
};

export type SettingValueInput = {
  value?: Maybe<Scalars['Mixed']>;
  valueType: Scalars['String'];
};

export type UpdateUserInput = {
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  depot?: Maybe<UpdateDepotBelongsTo>;
  identite?: Maybe<UpdatePersonneBelongsTo>;
  permissions?: Maybe<UpdatePermissionBelongsToMany>;
  roles?: Maybe<UpdateRoleBelongsToMany>;
  settings?: Maybe<ConnectSettingBelongsToMany>;
};

export type UpdateDepotBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateDepotInput>;
  update?: Maybe<UpdateDepotInput>;
  upsert?: Maybe<UpsertDepotInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type UpdatePersonneBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreatePersonneInput>;
  update?: Maybe<UpdatePersonneInput>;
  upsert?: Maybe<UpsertPersonneInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type UpdatePermissionBelongsToMany = {
  create?: Maybe<Array<CreatePermissionInput>>;
  connect?: Maybe<Array<Scalars['ID']>>;
  update?: Maybe<Array<UpdatePermissionInput>>;
  upsert?: Maybe<Array<UpsertPermissionInput>>;
  sync?: Maybe<Array<ConnectPermission>>;
  syncWithoutDetaching?: Maybe<Array<ConnectPermission>>;
  delete?: Maybe<Array<Scalars['ID']>>;
  disconnect?: Maybe<Array<Scalars['ID']>>;
};

export type UpdatePermissionInput = {
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type UpdateRoleBelongsToMany = {
  create?: Maybe<Array<CreateRoleInput>>;
  connect?: Maybe<Array<Scalars['ID']>>;
  update?: Maybe<Array<UpdateRoleInput>>;
  upsert?: Maybe<Array<UpsertRoleInput>>;
  sync?: Maybe<Array<Scalars['ID']>>;
  syncWithoutDetaching?: Maybe<Array<Scalars['ID']>>;
  delete?: Maybe<Array<Scalars['ID']>>;
  disconnect?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateRoleInput = {
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  permission?: Maybe<UpdatePermissionBelongsToMany>;
};

export type UpsertUserInput = {
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  depot?: Maybe<UpdateDepotBelongsTo>;
  identite?: Maybe<UpdatePersonneBelongsTo>;
  permissions?: Maybe<UpdatePermissionBelongsToMany>;
  roles?: Maybe<UpdateRoleBelongsToMany>;
  settings?: Maybe<ConnectSettingBelongsToMany>;
};

export type UpdateStockInput = {
  id: Scalars['ID'];
  slug: Scalars['String'];
  image: CreateFileModelBelongsTo;
  categorie: CreateCategorieUnitesDeMesureBelongsTo;
  user: CreateUserBelongsTo;
  commande: CreateCommandeBelongsToMany;
  prix_de_vente_unitaire: Scalars['Float'];
};


export type CreateSettingInput = {
  nom: Scalars['String'];
  slug: Scalars['String'];
  type: Scalars['String'];
  value: SettingValueInput;
  description: Scalars['String'];
};

export type UpdateSettingInput = {
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value: SettingValueInput;
  description?: Maybe<Scalars['String']>;
};

export type UpsertSettingInput = {
  id?: Maybe<Scalars['ID']>;
  nom?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value: SettingValueInput;
  description?: Maybe<Scalars['String']>;
};


export enum _ {
  Void = 'VOID'
}

export type HasAdresse2 = {
  adresse_2: Scalars['String'];
};

export type MayBeHasNode = {
  id?: Maybe<Scalars['ID']>;
};

export type MayBeHasCreatedAt = {
  created_at?: Maybe<Scalars['DateTimeTz']>;
};

export type MayBeHasUpdatedAt = {
  updated_at?: Maybe<Scalars['DateTimeTz']>;
};

export type MayBeHasDeletedAt = {
  deleted_at?: Maybe<Scalars['DateTimeTz']>;
};

export type MayBeHasNom = {
  nom?: Maybe<Scalars['String']>;
};

export type MayBeHasSlug = {
  slug?: Maybe<Scalars['String']>;
};

export type MayBeHasDescription = {
  description?: Maybe<Scalars['String']>;
};

export type UpdateCategorieBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateCategorieInput>;
  update?: Maybe<UpdateCategorieInput>;
  upsert?: Maybe<UpsertCategorieInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type UpdateCategorieBelongsToMany = {
  create?: Maybe<Array<CreateCategorieInput>>;
  connect?: Maybe<Array<Scalars['ID']>>;
  update?: Maybe<Array<UpdateCategorieInput>>;
  upsert?: Maybe<Array<UpsertCategorieInput>>;
  sync?: Maybe<Array<Scalars['ID']>>;
  syncWithoutDetaching?: Maybe<Array<Scalars['ID']>>;
  delete?: Maybe<Array<Scalars['ID']>>;
  disconnect?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateCategorieUnitesDeMesureBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateCategorieUnitesDeMesureInput>;
  update?: Maybe<UpdateCategorieUnitesDeMesureInput>;
  upsert?: Maybe<UpsertCategorieUnitesDeMesureInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type CreateUnitesDeMesureBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateUnitesDeMesureInput>;
  update?: Maybe<UpdateUnitesDeMesureInput>;
  upsert?: Maybe<UpsertUnitesDeMesureInput>;
};

export type UpdateUnitesDeMesureBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateUnitesDeMesureInput>;
  update?: Maybe<UpdateUnitesDeMesureInput>;
  upsert?: Maybe<UpsertUnitesDeMesureInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type UpdateUnitesDeMesureHasMany = {
  create?: Maybe<Array<CreateUnitesDeMesureInput>>;
  update?: Maybe<Array<UpdateUnitesDeMesureInput>>;
  upsert?: Maybe<Array<UpsertUnitesDeMesureInput>>;
  delete?: Maybe<Array<Scalars['ID']>>;
};

export enum TypeClient {
  Client = 'Client',
  Fournisseur = 'FOURNISSEUR'
}

export type UpdateClientBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateClientInput>;
  update?: Maybe<UpdateClientInput>;
  upsert?: Maybe<UpsertClientInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type UpdateCommandeBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateCommandeInput>;
  update?: Maybe<UpdateCommandeInput>;
  upsert?: Maybe<UpsertCommandeInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type UpdateCommandeBelongsToMany = {
  create?: Maybe<Array<CreateCommandeInput>>;
  connect?: Maybe<Array<Scalars['ID']>>;
  update?: Maybe<Array<UpdateCommandeInput>>;
  upsert?: Maybe<Array<UpsertCommandeInput>>;
  sync?: Maybe<Array<ConnectCommande>>;
  syncWithoutDetaching?: Maybe<Array<ConnectCommande>>;
  delete?: Maybe<Array<Scalars['ID']>>;
  disconnect?: Maybe<Array<Scalars['ID']>>;
};

export type CreateFactureBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateFactureInput>;
  update?: Maybe<UpdateFactureInput>;
  upsert?: Maybe<UpsertFactureInput>;
};

export type UpdateFactureBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateFactureInput>;
  update?: Maybe<UpdateFactureInput>;
  upsert?: Maybe<UpsertFactureInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type CreateStockBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateStockInput>;
  update?: Maybe<UpdateStockInput>;
  upsert?: Maybe<UpsertStockInput>;
};

export type UpdateStockBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateStockInput>;
  update?: Maybe<UpdateStockInput>;
  upsert?: Maybe<UpsertStockInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type UpdateStockBelongsToMany = {
  create?: Maybe<Array<CreateStockInput>>;
  connect?: Maybe<Array<Scalars['ID']>>;
  update?: Maybe<Array<UpdateStockInput>>;
  upsert?: Maybe<Array<UpsertStockInput>>;
  sync?: Maybe<Array<ConnectStock>>;
  syncWithoutDetaching?: Maybe<Array<ConnectStock>>;
  delete?: Maybe<Array<Scalars['ID']>>;
  disconnect?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateStockHasMany = {
  create?: Maybe<Array<CreateStockInput>>;
  update?: Maybe<Array<UpdateStockInput>>;
  upsert?: Maybe<Array<UpsertStockInput>>;
  delete?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateTransactionBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateTransactionInput>;
  update?: Maybe<UpdateTransactionInput>;
  upsert?: Maybe<UpsertTransactionInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type CreatePermissionBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreatePermissionInput>;
  update?: Maybe<UpdatePermissionInput>;
  upsert?: Maybe<UpsertPermissionInput>;
};

export type UpdatePermissionBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreatePermissionInput>;
  update?: Maybe<UpdatePermissionInput>;
  upsert?: Maybe<UpsertPermissionInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type PermissionRole = HasNode & HasCreatedAt & HasUpdatedAt & {
  __typename?: 'PermissionRole';
  id: Scalars['ID'];
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
};

export type PermissionUser = HasNode & HasCreatedAt & HasUpdatedAt & {
  __typename?: 'PermissionUser';
  id: Scalars['ID'];
  date_expiration: Scalars['DateTimeTz'];
  created_at: Scalars['DateTimeTz'];
  updated_at: Scalars['DateTimeTz'];
};

export type CreateRoleBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateRoleInput>;
  update?: Maybe<UpdateRoleInput>;
  upsert?: Maybe<UpsertRoleInput>;
};

export type UpdateRoleBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateRoleInput>;
  update?: Maybe<UpdateRoleInput>;
  upsert?: Maybe<UpsertRoleInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type CreateSettingBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateSettingInput>;
  update?: Maybe<UpdateSettingInput>;
  upsert?: Maybe<UpsertSettingInput>;
};

export type UpdateSettingBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateSettingInput>;
  update?: Maybe<UpdateSettingInput>;
  upsert?: Maybe<UpsertSettingInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type CreateSettingBelongsToMany = {
  create?: Maybe<Array<CreateSettingInput>>;
  upsert?: Maybe<Array<UpsertSettingInput>>;
  connect?: Maybe<Array<ConnectSettingInput>>;
  sync?: Maybe<Array<ConnectSettingInput>>;
};

export type UpdateSettingBelongsToMany = {
  create?: Maybe<Array<CreateSettingInput>>;
  connect?: Maybe<Array<ConnectSettingInput>>;
  update?: Maybe<Array<UpdateSettingInput>>;
  upsert?: Maybe<Array<UpsertSettingInput>>;
  sync?: Maybe<Array<ConnectSettingInput>>;
  syncWithoutDetaching?: Maybe<Array<ConnectSettingInput>>;
  delete?: Maybe<Array<Scalars['ID']>>;
  disconnect?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateUserBelongsTo = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<CreateUserInput>;
  update?: Maybe<UpdateUserInput>;
  upsert?: Maybe<UpsertUserInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type CreateUserBelongsToMany = {
  create?: Maybe<Array<CreateUserInput>>;
  upsert?: Maybe<Array<UpsertUserInput>>;
  connect?: Maybe<Array<Scalars['ID']>>;
  sync?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateUserBelongsToMany = {
  create?: Maybe<Array<CreateUserInput>>;
  connect?: Maybe<Array<Scalars['ID']>>;
  update?: Maybe<Array<UpdateUserInput>>;
  upsert?: Maybe<Array<UpsertUserInput>>;
  sync?: Maybe<Array<Scalars['ID']>>;
  syncWithoutDetaching?: Maybe<Array<Scalars['ID']>>;
  delete?: Maybe<Array<Scalars['ID']>>;
  disconnect?: Maybe<Array<Scalars['ID']>>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  /** Count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

/** Dynamic WHERE conditions for queries. */
export type WhereConditions = {
  /** The column that is used for the condition. */
  column?: Maybe<Scalars['String']>;
  /** The operator that is used for the condition. */
  operator?: Maybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: Maybe<Scalars['Mixed']>;
  /** A set of conditions that requires all conditions to match. */
  AND?: Maybe<Array<WhereConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: Maybe<Array<WhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: Maybe<WhereConditionsRelation>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
  /** The relation that is checked. */
  relation: Scalars['String'];
  /** The comparison operator to test against the amount. */
  operator?: Maybe<SqlOperator>;
  /** The amount to test. */
  amount?: Maybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: Maybe<WhereConditions>;
};

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = (
  { __typename?: 'Query' }
  & { files?: Maybe<(
    { __typename?: 'FileModelPaginator' }
    & { data: Array<(
      { __typename?: 'FileModel' }
      & Pick<FileModel, 'id' | 'created_at'>
    )>, paginatorInfo: (
      { __typename?: 'PaginatorInfo' }
      & Pick<PaginatorInfo, 'count' | 'currentPage' | 'firstItem' | 'lastPage' | 'total'>
    ) }
  )> }
);

export type CreateFileModelMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateFileModelMutation = (
  { __typename?: 'Mutation' }
  & { createFileModel: (
    { __typename?: 'FileModel' }
    & Pick<FileModel, 'id' | 'nom' | 'path' | 'url' | 'exist' | 'thumbnail_path' | 'thumbnail_url' | 'created_at' | 'updated_at'>
  ) }
);

export type UploadFileMutationVariables = Exact<{
  id: Scalars['ID'];
  file: Scalars['Upload'];
}>;


export type UploadFileMutation = (
  { __typename?: 'Mutation' }
  & { uploadFile: (
    { __typename?: 'FileModel' }
    & Pick<FileModel, 'id' | 'nom' | 'path' | 'url' | 'exist' | 'thumbnail_path' | 'thumbnail_url' | 'created_at' | 'updated_at'>
  ) }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'access_token' | 'expires_in' | 'token_type' | 'refresh_token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'created_at' | 'updated_at'>
      & { identite: (
        { __typename?: 'Personne' }
        & Pick<Personne, 'id' | 'nom' | 'sexe' | 'date_de_naiss' | 'cni' | 'contact_1' | 'contact_2' | 'adresse_1' | 'adresse_2' | 'created_at' | 'updated_at'>
        & { nationalite?: Maybe<(
          { __typename?: 'Nationalite' }
          & Pick<Nationalite, 'id' | 'nom'>
        )> }
      ), permissions?: Maybe<Array<(
        { __typename?: 'Permission' }
        & Pick<Permission, 'id' | 'nom' | 'slug' | 'description' | 'created_at' | 'updated_at'>
      )>>, roles: Array<(
        { __typename?: 'Role' }
        & Pick<Role, 'id' | 'nom' | 'slug' | 'active' | 'description' | 'created_at' | 'updated_at'>
        & { permissions?: Maybe<Array<(
          { __typename?: 'Permission' }
          & Pick<Permission, 'id' | 'nom' | 'slug' | 'description' | 'created_at' | 'updated_at'>
        )>> }
      )>, depot?: Maybe<(
        { __typename?: 'Depot' }
        & Pick<Depot, 'id' | 'nom' | 'region' | 'ville' | 'web' | 'slug' | 'email' | 'adresse_1' | 'contact_1' | 'contact_2' | 'created_at' | 'updated_at'>
        & { image: (
          { __typename?: 'FileModel' }
          & Pick<FileModel, 'id' | 'nom' | 'thumbnail_url' | 'url' | 'type' | 'exist'>
        ) }
      )> }
    )> }
  ) }
);

export type CreateCategorieMutationVariables = Exact<{
  nom: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  uniteDeMesure: CreateUnitesDeMesureBelongsToMany;
  children: CreateCategorieBelongsToMany;
  image: CreateFileModelBelongsTo;
  parent_id: Scalars['ID'];
}>;


export type CreateCategorieMutation = (
  { __typename?: 'Mutation' }
  & { createCategorie: (
    { __typename?: 'Categorie' }
    & Pick<Categorie, 'id' | 'nom' | 'slug'>
    & { unitesDeMesures: Array<(
      { __typename?: 'UnitesDeMesure' }
      & Pick<UnitesDeMesure, 'id' | 'nom' | 'slug' | 'description'>
    )>, image?: Maybe<(
      { __typename?: 'FileModel' }
      & Pick<FileModel, 'id' | 'url' | 'thumbnail_url' | 'exist'>
    )>, ancestors: Array<(
      { __typename?: 'Categorie' }
      & Pick<Categorie, 'id' | 'nom' | 'slug'>
    )> }
  ) }
);

export type CategorieRecursivePartsFragment = (
  { __typename?: 'Categorie' }
  & Pick<Categorie, 'description'>
);

export type CategorieFieldsFragment = (
  { __typename?: 'Categorie' }
  & Pick<Categorie, 'id' | 'nom' | 'slug' | 'created_at' | 'updated_at' | 'description' | 'hasChildren'>
  & { image?: Maybe<(
    { __typename?: 'FileModel' }
    & Pick<FileModel, 'id' | 'nom' | 'thumbnail_url' | 'url' | 'created_at' | 'exist' | 'updated_at'>
  )>, unitesDeMesures: Array<(
    { __typename?: 'UnitesDeMesure' }
    & Pick<UnitesDeMesure, 'id' | 'nom' | 'symbole' | 'slug' | 'created_at' | 'updated_at' | 'description'>
  )> }
);

export type CategoriesQueryVariables = Exact<{
  where?: Maybe<QueryCategoriesWhereWhereConditions>;
  root?: Maybe<Scalars['Boolean']>;
}>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<(
    { __typename?: 'CategoriePaginator' }
    & { data: Array<(
      { __typename?: 'Categorie' }
      & CategorieFieldsFragment
      & CategorieRecursivePartsFragment
    )> }
  )> }
);

export type UnitesDeMesureRecursivePartsFragment = (
  { __typename?: 'UnitesDeMesure' }
  & { children: Array<(
    { __typename?: 'UnitesDeMesure' }
    & UnitesDeMesureFieldsFragment
  )> }
);

export type UnitesDeMesureFieldsFragment = (
  { __typename?: 'UnitesDeMesure' }
  & Pick<UnitesDeMesure, 'id' | 'nom' | 'symbole' | 'slug' | 'hasChildren' | 'created_at' | 'updated_at' | 'description'>
);

export type UnitesDeMesureFindQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UnitesDeMesureFindQuery = (
  { __typename?: 'Query' }
  & { uniteDeMesure?: Maybe<(
    { __typename?: 'UnitesDeMesure' }
    & UnitesDeMesureFieldsFragment
    & UnitesDeMesureRecursivePartsFragment
  )> }
);

export type UnitesDeMesuresQueryVariables = Exact<{
  where?: Maybe<QueryUniteDeMesuresWhereWhereConditions>;
  root?: Maybe<Scalars['Boolean']>;
}>;


export type UnitesDeMesuresQuery = (
  { __typename?: 'Query' }
  & { uniteDeMesures: Array<(
    { __typename?: 'UnitesDeMesure' }
    & UnitesDeMesureFieldsFragment
  )> }
);

export type CreateDepotMutationVariables = Exact<{
  adresse_1: Scalars['String'];
  contact_1: Scalars['String'];
  contact_2: Scalars['String'];
  email: Scalars['String'];
  image: CreateFileModelBelongsTo;
  nom: Scalars['String'];
  region: Scalars['String'];
  slug: Scalars['String'];
  ville: Scalars['String'];
  web: Scalars['String'];
}>;


export type CreateDepotMutation = (
  { __typename?: 'Mutation' }
  & { createDepot: (
    { __typename?: 'Depot' }
    & Pick<Depot, 'adresse_1' | 'contact_1' | 'contact_2' | 'created_at' | 'email' | 'id' | 'nom' | 'region' | 'slug' | 'updated_at' | 'ville' | 'web'>
    & { image: (
      { __typename?: 'FileModel' }
      & Pick<FileModel, 'id' | 'nom' | 'url' | 'thumbnail_path' | 'thumbnail_url' | 'created_at' | 'updated_at'>
    ) }
  ) }
);

export type NationalitesQueryVariables = Exact<{ [key: string]: never; }>;


export type NationalitesQuery = (
  { __typename?: 'Query' }
  & { nationalites?: Maybe<(
    { __typename?: 'NationalitePaginator' }
    & { data: Array<(
      { __typename?: 'Nationalite' }
      & Pick<Nationalite, 'id' | 'nom' | 'slug' | 'created_at' | 'updated_at'>
    )> }
  )> }
);

export type RolesQueryVariables = Exact<{ [key: string]: never; }>;


export type RolesQuery = (
  { __typename?: 'Query' }
  & { roles?: Maybe<(
    { __typename?: 'RolePaginator' }
    & { data: Array<(
      { __typename?: 'Role' }
      & Pick<Role, 'active' | 'created_at' | 'description' | 'id' | 'nom' | 'slug' | 'updated_at'>
    )> }
  )> }
);

export type CreateUserMutationVariables = Exact<{
  identite: CreatePersonneBelongsTo;
  depot: CreateDepotBelongsTo;
  roles: CreateRoleBelongsToMany;
  permissions: CreatePermissionBelongsToMany;
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'created_at' | 'deleted_at' | 'id' | 'updated_at' | 'username'>
    & { depot?: Maybe<(
      { __typename?: 'Depot' }
      & Pick<Depot, 'adresse_1' | 'contact_1' | 'contact_2' | 'created_at' | 'email' | 'id' | 'nom' | 'region' | 'updated_at' | 'ville' | 'web'>
      & { image: (
        { __typename?: 'FileModel' }
        & Pick<FileModel, 'created_at' | 'exist' | 'id' | 'nom' | 'path' | 'thumbnail_path' | 'thumbnail_url' | 'type' | 'updated_at' | 'url'>
      ) }
    )>, identite: (
      { __typename?: 'Personne' }
      & Pick<Personne, 'adresse_1' | 'adresse_2' | 'cni' | 'contact_1' | 'contact_2' | 'created_at' | 'date_de_naiss' | 'deleted_at' | 'email' | 'sexe' | 'id' | 'nom' | 'updated_at'>
      & { image?: Maybe<(
        { __typename?: 'FileModel' }
        & Pick<FileModel, 'created_at' | 'exist' | 'id' | 'nom' | 'path' | 'thumbnail_path' | 'thumbnail_url' | 'type' | 'updated_at' | 'url'>
      )>, nationalite?: Maybe<(
        { __typename?: 'Nationalite' }
        & Pick<Nationalite, 'id' | 'nom'>
      )> }
    ), permissions?: Maybe<Array<(
      { __typename?: 'Permission' }
      & Pick<Permission, 'id' | 'nom' | 'slug' | 'description'>
    )>>, roles: Array<(
      { __typename?: 'Role' }
      & Pick<Role, 'active' | 'description' | 'id' | 'level' | 'nom' | 'slug'>
      & { permissions?: Maybe<Array<(
        { __typename?: 'Permission' }
        & Pick<Permission, 'id' | 'nom' | 'slug' | 'description'>
      )>> }
    )> }
  ) }
);

export const CategorieRecursivePartsFragmentDoc = gql`
    fragment CategorieRecursiveParts on Categorie {
  description
}
    `;
export const CategorieFieldsFragmentDoc = gql`
    fragment CategorieFields on Categorie {
  id
  nom
  slug
  created_at
  updated_at
  description
  hasChildren
  image {
    id
    nom
    thumbnail_url
    url
    created_at
    exist
    updated_at
  }
  unitesDeMesures {
    id
    nom
    symbole
    slug
    created_at
    updated_at
    description
  }
}
    `;
export const UnitesDeMesureFieldsFragmentDoc = gql`
    fragment UnitesDeMesureFields on UnitesDeMesure {
  id
  nom
  symbole
  slug
  hasChildren
  created_at
  updated_at
  description
}
    `;
export const UnitesDeMesureRecursivePartsFragmentDoc = gql`
    fragment UnitesDeMesureRecursiveParts on UnitesDeMesure {
  children {
    ...UnitesDeMesureFields
  }
}
    ${UnitesDeMesureFieldsFragmentDoc}`;
export const TestDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class TestGQL extends Apollo.Query<TestQuery, TestQueryVariables> {
    document = TestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateFileModelDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class CreateFileModelGQL extends Apollo.Mutation<CreateFileModelMutation, CreateFileModelMutationVariables> {
    document = CreateFileModelDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UploadFileDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class UploadFileGQL extends Apollo.Mutation<UploadFileMutation, UploadFileMutationVariables> {
    document = UploadFileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
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
        sexe
        date_de_naiss
        cni
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

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateCategorieDocument = gql`
    mutation CreateCategorie($nom: String!, $description: String, $uniteDeMesure: CreateUnitesDeMesureBelongsToMany!, $children: CreateCategorieBelongsToMany!, $image: CreateFileModelBelongsTo!, $parent_id: ID!) {
  createCategorie(
    input: {nom: $nom, description: $description, uniteDeMesure: $uniteDeMesure, image: $image, parent_id: $parent_id, children: $children}
  ) {
    id
    nom
    slug
    unitesDeMesures {
      id
      nom
      slug
      description
    }
    image {
      id
      url
      thumbnail_url
      exist
    }
    ancestors {
      id
      nom
      slug
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCategorieGQL extends Apollo.Mutation<CreateCategorieMutation, CreateCategorieMutationVariables> {
    document = CreateCategorieDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CategoriesDocument = gql`
    query Categories($where: QueryCategoriesWhereWhereConditions, $root: Boolean) {
  categories(first: 100, where: $where, root: $root) {
    data {
      ...CategorieFields
      ...CategorieRecursiveParts
    }
  }
}
    ${CategorieFieldsFragmentDoc}
${CategorieRecursivePartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CategoriesGQL extends Apollo.Query<CategoriesQuery, CategoriesQueryVariables> {
    document = CategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UnitesDeMesureFindDocument = gql`
    query UnitesDeMesureFind($id: ID!) {
  uniteDeMesure(id: $id) {
    ...UnitesDeMesureFields
    ...UnitesDeMesureRecursiveParts
  }
}
    ${UnitesDeMesureFieldsFragmentDoc}
${UnitesDeMesureRecursivePartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UnitesDeMesureFindGQL extends Apollo.Query<UnitesDeMesureFindQuery, UnitesDeMesureFindQueryVariables> {
    document = UnitesDeMesureFindDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UnitesDeMesuresDocument = gql`
    query UnitesDeMesures($where: QueryUniteDeMesuresWhereWhereConditions, $root: Boolean) {
  uniteDeMesures(where: $where, root: $root) {
    ...UnitesDeMesureFields
  }
}
    ${UnitesDeMesureFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UnitesDeMesuresGQL extends Apollo.Query<UnitesDeMesuresQuery, UnitesDeMesuresQueryVariables> {
    document = UnitesDeMesuresDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateDepotDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class CreateDepotGQL extends Apollo.Mutation<CreateDepotMutation, CreateDepotMutationVariables> {
    document = CreateDepotDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NationalitesDocument = gql`
    query Nationalites {
  nationalites(first: 1000) {
    data {
      id
      nom
      slug
      created_at
      updated_at
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NationalitesGQL extends Apollo.Query<NationalitesQuery, NationalitesQueryVariables> {
    document = NationalitesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RolesDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class RolesGQL extends Apollo.Query<RolesQuery, RolesQueryVariables> {
    document = RolesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateUserDocument = gql`
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
      sexe
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
      updated_at
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

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }