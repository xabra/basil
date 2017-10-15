var mongoose = require('mongoose');

// Mongoose recipe schema
const recipeSchema = mongoose.Schema({
    author: String,
    ingredient: String,
    servings: Number, 
});

// Mongoose recipe model
const RecipeModel = mongoose.model('recipe', recipeSchema);

// Root Resolvers - should be broken up
// need to understnd and use promises, err handling
var rootResolver = {  
    recipes: function () {
        return RecipeModel.find({}, function (err, recipes) {
            if (err) return console.error(err);
        });
    },

    recipe: function (args) {
        return RecipeModel.findById(args.id, function (err, recipe) {
            if (err) return console.error(err);
        });
    },

    recipeCount: function () {
        return RecipeModel.count({}, function (err, count) {
            if (err) return console.error(err);
            console.log("recipeCount", count);
        });

    },

    recipeCreate: function (args) { 

        // Stuff the query arguments into a new db document
        var recipe = new RecipeModel({
            author: args.author,
            ingredient: args.ingredient,
            servings: args.servings,
        })

        // Save the db document, returning the saved object (?)
        return recipe.save(function (err, rec) {
            if (err) return console.error(err);
            console.log("recipe.save", rec);
        });
    },

    recipeDelete: function (args) {
        return RecipeModel.findByIdAndRemove(args.id, function (err, result) {
            if (err) return console.error(err);
            console.log("err: ", err, "deleted: ", result)
        });
    },

    recipeUpdate: function (args) {
        var update = {};
        update.author = args.author;
        update.ingredient = args.ingredient;
        update.servings = args.servings;

        return RecipeModel.findByIdAndUpdate(args.id, update, function (err, result) {
            if (err) return console.error(err);
            console.log("err: ", err, "updated: ", result)
        });
    },

};

module.exports = rootResolver;