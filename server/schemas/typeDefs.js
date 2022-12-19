const gql = require('graphql-tag');

const typeDefs = gql`
    type User{
        id:ID!
        email:String!
        username:String!
        password:String!
    }
    type Auth {
        token: ID!
        user: User
    }

    type Query{
        getUsers:[User]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;