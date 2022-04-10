import { gql } from "@apollo/client";

const CONTENTS = gql`
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