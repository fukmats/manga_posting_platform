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
        "Thumbnail image must include the title logo"
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
    }
    type Volume {
        volumeId: ID!
        thumbnail:String!
        duration: Float
        plot: String
        numberOfVolume: Int
        images: [Image!]!
    }
    type Image {
        imageId: ID!
        image: String!
    }
`;
module.exports = typeDefs;