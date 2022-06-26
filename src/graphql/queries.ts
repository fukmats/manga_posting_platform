/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategories = /* GraphQL */ `
  query GetCategories($id: ID!) {
    getCategories(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getContents = /* GraphQL */ `
  query GetContents($id: ID!) {
    getContents(id: $id) {
      id
      thumbnail
      createdAt
      updatedAt
    }
  }
`;
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        thumbnail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
