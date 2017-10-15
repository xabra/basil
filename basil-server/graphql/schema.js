var { buildSchema } = require('graphql');


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type Recipe {
    id: ID,
    author: String,
    ingredient: String,
    servings: Int, 
}
type Query {
  recipe (id: ID): Recipe,
  recipes: [Recipe],
  recipeCount: Int, 
}

type Mutation {
    recipeCreate(author: String, ingredient: String, servings: Int): Recipe,
    recipeDelete(id: ID, author: String, ingredient: String, servings: Int): Int,
    recipeUpdate(id: ID, author: String, ingredient: String, servings: Int): Recipe,
}

`); 

module.exports = schema;