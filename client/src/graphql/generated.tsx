import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  categoryId: Scalars['ID'];
  categoryName: Scalars['String'];
  contents: Array<Content>;
};

/** Information to be displayed on the homepage */
export type Content = {
  __typename?: 'Content';
  contentId: Scalars['ID'];
  /** Text information is not displayed on the homepage */
  contentInfo: Array<ContentInfo>;
  /** Thumbnail image must include the title logo */
  thumbnail: Scalars['String'];
};

/** Character information */
export type ContentInfo = {
  __typename?: 'ContentInfo';
  ContentId: Scalars['ID'];
  categoryID: Scalars['ID'];
  creator: Scalars['String'];
  numberOfVolumes?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
  volumes?: Maybe<Array<Maybe<Volume>>>;
  year: Scalars['Int'];
};

export type Image = {
  __typename?: 'Image';
  image: Scalars['String'];
  imageId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  Categories: Array<Category>;
};

export type Volume = {
  __typename?: 'Volume';
  duration?: Maybe<Scalars['Float']>;
  images: Array<Image>;
  numberOfVolume?: Maybe<Scalars['Int']>;
  plot?: Maybe<Scalars['String']>;
  thumbnail: Scalars['String'];
  volumeId: Scalars['ID'];
};

export type GetContentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContentsQuery = { __typename?: 'Query', Categories: Array<{ __typename?: 'Category', categoryId: string, categoryName: string, contents: Array<{ __typename?: 'Content', contentId: string, thumbnail: string }> }> };


export const GetContentsDocument = gql`
    query getContents {
  Categories {
    categoryId
    categoryName
    contents {
      contentId
      thumbnail
    }
  }
}
    `;

/**
 * __useGetContentsQuery__
 *
 * To run a query within a React component, call `useGetContentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContentsQuery(baseOptions?: Apollo.QueryHookOptions<GetContentsQuery, GetContentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContentsQuery, GetContentsQueryVariables>(GetContentsDocument, options);
      }
export function useGetContentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContentsQuery, GetContentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContentsQuery, GetContentsQueryVariables>(GetContentsDocument, options);
        }
export type GetContentsQueryHookResult = ReturnType<typeof useGetContentsQuery>;
export type GetContentsLazyQueryHookResult = ReturnType<typeof useGetContentsLazyQuery>;
export type GetContentsQueryResult = Apollo.QueryResult<GetContentsQuery, GetContentsQueryVariables>;