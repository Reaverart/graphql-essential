import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    language: String
    email: String
    contacts: [Contact]
  }

  type Alien {
    id: ID
    firstName: String
    lastName: String
    gender: String
  }

  type Contact {
    firstName: String
    lastName: String
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type Query {
    getFriend(id: ID): Friend
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
    updateFriend(input: FriendInput): Friend
    deleteFriend(id: ID!): String
  }

  input FriendInput {
    id: ID
    firstName: String!
    lastName: String
    gender: Gender
    age: Int
    language: String
    email: String
    contacts: [ContactInput]
  }

  input ContactInput {
    firstName: String
    lastName: String
  }
`;

export const schema = makeExecutableSchema({ typeDefs, resolvers });