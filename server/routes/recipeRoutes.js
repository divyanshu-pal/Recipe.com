const express = require('express');
const router = express.Router();// create a new router object. 

const recipeController = require('../controllers/recipeController');

router.get('/', recipeController.homepage);
router.get('/categories', recipeController.exploreCategories);
//for detail view of recipe
router.get('/recipe/:id',recipeController.exploreRecipe);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
 router.post('/submit-recipe', recipeController.submitRecipeOnPost);



module.exports = router;