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
    recipeCreate(author: String, ingredient: String, servings: Int): Recipe,    #Works, returns new recipe object
    recipeDelete(id: ID): String, #Works but return values not understood.
    recipeUpdate(id: ID, author: String, ingredient: String, servings: Int): Recipe, #Works butreturns null
}

`); 

module.exports = schema;