const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String
     
  },
  description: {
    type: String
     
  },
  email: {
    type: String
     
  },
  ingredients: {
    type: Array
     
  },
  category: {
    type: String,
    enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian']
   
  },
  image: {
    type: String
    
  },
 });

 recipeSchema.index({ name: 'text', description: 'text' });


module.exports = mongoose.model('Recipe', recipeSchema);


