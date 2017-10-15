var express = require('express');
var graphqlHTTP = require('express-graphql');
var schema = require('./graphql/schema');

var mongoose = require('mongoose');
var rootResolver = require('./mongoose/recipe')

// Connect to the 'test' database.
mongoose.connect('mongodb://localhost/test', { useMongoClient: true, promiseLibrary: global.Promise });


// Create the app, attach middleware and start the app
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');