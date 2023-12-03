const express = require('express');
const routes = require('./routes');
// import sequelize connection

const Category = require('./models/Category');
const Product = require('./models/Product');
const ProductTag = require('./models/ProductTag');
const Tag = require('./models/Tag');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);



sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});




