const db = require("../../api/data/db-config");

const getAll = () => {
  return db("view_products");
};

const getByID = (id) => {
  return db("view_products").where("item_id", id);
};

const post = (data) => {
  return db("view_products").insert(data).returning("view_products_id");
};

const edit = (id, changes) => {
  return db("view_products").where("view_products_id", id).update(changes);
};

const remove = (id) => {
  return db("view_products").where("view_products_id", id).del();
};

const findBy = (filter) => {
  return db("view_products").where(filter);
};
module.exports = {
  getAll,
  getByID,
  post,
  edit,
  remove,
  findBy,
};
