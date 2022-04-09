const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

// const mocks = {
//     Query: () => ({
//         Categories: () => [...new Array(6)],
//     }),
//     Track: () => ({
//         categoryId: () => 'Category_01',
//         categoryName: () => 'categoryName_01',
//         contents: () => {
//             return {
//                 contentId: 'contentId_01',
//                 language: 'japanese',
//                 thumbnail: 'https://.....jpg',
//             };  
//         },
//         //     }),
// };

const server = new ApolloServer({ 
    typeDefs,
    mocks: true,
});

server.listen().then(() =>{
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
    `);
});