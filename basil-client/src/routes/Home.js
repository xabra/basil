import React from 'react';
import {gql, graphql} from 'react-apollo';

const Home = ({data: { recipes = []}}) => recipes.map(u => <h1 key={u.id}> {u.author} </h1>);

const recipesQuery = gql`
{
    recipes {
        id
        author
        ingredient
        servings
    }
}
`

export default graphql(recipesQuery)(Home); 
