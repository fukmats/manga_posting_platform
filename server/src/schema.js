const { gql } = require('apollo-server');
const typeDefs = gql`
    type Query {
        Categories: [Category!]!
    }
    type Category {
        categoryId: ID!
        categoryName: String!
        contents: [Content!]!
    }
    "Information to be displayed on the homepage"
    type Content {
        contentId: ID!
        "Thumbnail page must include the title logo"
        thumbnail: String!
        "Text information is not displayed on the homepage"
        contentInfo: [ContentInfo!]!
    }
    "Character information"
    type ContentInfo {
        ContentId: ID!
        title: String!
        year: Int!
        numberOfVolumes: Int
        creator: String!
        categoryID:ID!
        tags: [String]
        volumes: [Volume]
        chapters: [Chapter]
    }
    type Volume {
        volumeId: ID!
        thumbnail:String!
        duration: Float
        numberOfVolume: Int
        pages: [Page!]!
    }
    type Chapter{
        chapterId: ID!
        chapterName: String!
        thumbnail:String!
        duration: Float
        numberOfChapter: Int
        pages: [Page!]!
    }
    type Page {
        pageId: ID!
        page: String!
    }
`;
module.exports = typeDefs;