import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './schema';

const app = express();

app.get('/', (req, res) => {
  res.send('Alive!')
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen('9090', () => console.log('Running server on 9090'))
