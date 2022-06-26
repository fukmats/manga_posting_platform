/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoriesInput = {
  id?: string | null,
  name: string,
};

export type ModelCategoriesConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoriesConditionInput | null > | null,
  or?: Array< ModelCategoriesConditionInput | null > | null,
  not?: ModelCategoriesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Categories = {
  __typename: "Categories",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCategoriesInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategoriesInput = {
  id: string,
};

export type CreateContentsInput = {
  id?: string | null,
  thumbnailUrl: string,
  categoryName: string,
};

export type ModelContentsConditionInput = {
  thumbnailUrl?: ModelStringInput | null,
  categoryName?: ModelStringInput | null,
  and?: Array< ModelContentsConditionInput | null > | null,
  or?: Array< ModelContentsConditionInput | null > | null,
  not?: ModelContentsConditionInput | null,
};

export type Contents = {
  __typename: "Contents",
  id: string,
  thumbnailUrl: string,
  categoryName: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContentsInput = {
  id: string,
  thumbnailUrl?: string | null,
  categoryName?: string | null,
};

export type DeleteContentsInput = {
  id: string,
};

export type ModelCategoriesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoriesFilterInput | null > | null,
  or?: Array< ModelCategoriesFilterInput | null > | null,
  not?: ModelCategoriesFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCategoriesConnection = {
  __typename: "ModelCategoriesConnection",
  items:  Array<Categories | null >,
  nextToken?: string | null,
};

export type ModelContentsFilterInput = {
  id?: ModelIDInput | null,
  thumbnailUrl?: ModelStringInput | null,
  categoryName?: ModelStringInput | null,
  and?: Array< ModelContentsFilterInput | null > | null,
  or?: Array< ModelContentsFilterInput | null > | null,
  not?: ModelContentsFilterInput | null,
};

export type ModelContentsConnection = {
  __typename: "ModelContentsConnection",
  items:  Array<Contents | null >,
  nextToken?: string | null,
};

export type CreateCategoriesMutationVariables = {
  input: CreateCategoriesInput,
  condition?: ModelCategoriesConditionInput | null,
};

export type CreateCategoriesMutation = {
  createCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoriesMutationVariables = {
  input: UpdateCategoriesInput,
  condition?: ModelCategoriesConditionInput | null,
};

export type UpdateCategoriesMutation = {
  updateCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoriesMutationVariables = {
  input: DeleteCategoriesInput,
  condition?: ModelCategoriesConditionInput | null,
};

export type DeleteCategoriesMutation = {
  deleteCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContentsMutationVariables = {
  input: CreateContentsInput,
  condition?: ModelContentsConditionInput | null,
};

export type CreateContentsMutation = {
  createContents?:  {
    __typename: "Contents",
    id: string,
    thumbnailUrl: string,
    categoryName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentsMutationVariables = {
  input: UpdateContentsInput,
  condition?: ModelContentsConditionInput | null,
};

export type UpdateContentsMutation = {
  updateContents?:  {
    __typename: "Contents",
    id: string,
    thumbnailUrl: string,
    categoryName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentsMutationVariables = {
  input: DeleteContentsInput,
  condition?: ModelContentsConditionInput | null,
};

export type DeleteContentsMutation = {
  deleteContents?:  {
    __typename: "Contents",
    id: string,
    thumbnailUrl: string,
    categoryName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCategoriesQueryVariables = {
  id: string,
};

export type GetCategoriesQuery = {
  getCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoriesConnection",
    items:  Array< {
      __typename: "Categories",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContentsQueryVariables = {
  id: string,
};

export type GetContentsQuery = {
  getContents?:  {
    __typename: "Contents",
    id: string,
    thumbnailUrl: string,
    categoryName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContentsQueryVariables = {
  filter?: ModelContentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentsQuery = {
  listContents?:  {
    __typename: "ModelContentsConnection",
    items:  Array< {
      __typename: "Contents",
      id: string,
      thumbnailUrl: string,
      categoryName: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCategoriesSubscription = {
  onCreateCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategoriesSubscription = {
  onUpdateCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategoriesSubscription = {
  onDeleteCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContentsSubscription = {
  onCreateContents?:  {
    __typename: "Contents",
    id: string,
    thumbnailUrl: string,
    categoryName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentsSubscription = {
  onUpdateContents?:  {
    __typename: "Contents",
    id: string,
    thumbnailUrl: string,
    categoryName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentsSubscription = {
  onDeleteContents?:  {
    __typename: "Contents",
    id: string,
    thumbnailUrl: string,
    categoryName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
