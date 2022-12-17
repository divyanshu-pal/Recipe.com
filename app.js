const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');



const app = express();


const moment = require("moment");




const port = process.env.PORT || 3000;

require('dotenv').config();
//middleware

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());



app.use((req, res, next)=>{
  res.locals.moment = moment;
  next();
});


app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));//add css
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
 const routes = require('./server/routes/recipeRoutes.js')
 app.use('/', routes);

app.listen(port, ()=> console.log(`Listening to port ${port}`));
