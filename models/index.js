// import models
const User = require('./User');
const Post = require('./Post');

// Products belongsTo User
Post.belongsTo(User, {
  foreignKey: 'User_id'
})
// Categories have many Products
User.hasMany(Post, {
  foreignKey: 'User_id',
  onDelete: 'CASCADE',
})
// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   through: {
//     model: ProductTag, 
//     unique: false,
//   },
//   as: 'product_tags'
// })
// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: {
//     model: ProductTag, 
//     unique: false,
//   },
//   as: 'tag_products'
// })

module.exports = {
  User, 
  Post
};