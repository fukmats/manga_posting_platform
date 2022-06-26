/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategories = /* GraphQL */ `
  mutation CreateCategories(
    $input: CreateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    createCategories(input: $input, condition: $condition) {
      id
      name
      contents {
        id
        thumbnail
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCategories = /* GraphQL */ `
  mutation UpdateCategories(
    $input: UpdateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    updateCategories(input: $input, condition: $condition) {
      id
      name
      contents {
        id
        thumbnail
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategories = /* GraphQL */ `
  mutation DeleteCategories(
    $input: DeleteCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    deleteCategories(input: $input, condition: $condition) {
      id
      name
      contents {
        id
        thumbnail
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createContents = /* GraphQL */ `
  mutation CreateContents(
    $input: CreateContentsInput!
    $condition: ModelContentsConditionInput
  ) {
    createContents(input: $input, condition: $condition) {
      id
      thumbnail
      createdAt
      updatedAt
    }
  }
`;
export const updateContents = /* GraphQL */ `
  mutation UpdateContents(
    $input: UpdateContentsInput!
    $condition: ModelContentsConditionInput
  ) {
    updateContents(input: $input, condition: $condition) {
      id
      thumbnail
      createdAt
      updatedAt
    }
  }
`;
export const deleteContents = /* GraphQL */ `
  mutation DeleteContents(
    $input: DeleteContentsInput!
    $condition: ModelContentsConditionInput
  ) {
    deleteContents(input: $input, condition: $condition) {
      id
      thumbnail
      createdAt
      updatedAt
    }
  }
`;
