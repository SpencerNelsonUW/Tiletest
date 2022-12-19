const gql = require('graphql-tag');

const typeDefs = gql`
    type User{
        id:ID!
        username:String!
        password:String!
    }
    type Query{
            getUsers:[User]
        }
`;

module.exports = typeDefs;