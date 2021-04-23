const db = require("../../api/data/db-config");

//Get all items
const getAll = () => {
  return db("product_items");
};
//Get items by company ID
const getByID = (id) => {
  return db("product_items").where("item_id", id);
};
//Post a new item
const post = (data) => {
  return db("product_items").insert(data).returning("item_id");
};
//Edit a item by ID
const edit = (id, changes) => {
  return db("product_items").where("item_id", id).update(changes);
};
//Remove a item by ID
const remove = (id) => {
  return db("product_items").where("item_id", id).del();
};
//Find a item by filter
const findBy = (filter) => {
  return db("product_items").where(filter);
};
module.exports = {
  getAll,
  getByID,
  post,
  edit,
  remove,
  findBy,
};
