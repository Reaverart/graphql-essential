import mongoose from 'mongoose';
import { Friends } from './dbConnectors';

class Friend {
  constructor(id, { firstName, lastName, gender, age, language, email, contacts }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.language = language;
    this.email = email;
    this.contacts = contacts;
  }
}

const friendDatabase = {};

export const resolvers = {
  Query: {
    getFriend: ({ id }) => new Friend(id, friendDatabase[id]),
  },
  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
          firstName: input.firstName,
          lastName: input.lastName,
          gender: input.gender,
          age: input.age,
          language: input.language,
          email: input.email,
          contacts: input.contacts,
      })
      newFriend.id = newFriend._id;
      
      return new Promise((resolve, reject) => {
        newFriend.save(err => {
          if (err) {
            reject(err);
          } else {
            resolve(newFriend);
          }
        })
      })
    },
  },
};
