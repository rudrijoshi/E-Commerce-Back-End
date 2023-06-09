// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
foreignKey: 'product_id',
OnDelete: 'Cascade',
});

// Categories have many Products
Category.belongsToMany(Product, {
  foreignKey: 'category_id',
  OnDelete: 'Cascade',
  },
);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: 'product_id',
  },
  // Define an alias for when data is retrieved
  as: 'product_tags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: 'tag_id',
  },
  // Define an alias for when data is retrieved
  as: 'tag_products'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
