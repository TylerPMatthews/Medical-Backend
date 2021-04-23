const db = require("../../api/data/db-config");

//Get all orders from DB
const getAll = () => {
  return db("users_orders");
};
//Get a order by ID from DB
const getByID = (id) => {
  return db("users_orders").where("user_id", id);
};
//Post a new order to DB
const post = (data) => {
  return db("users_orders").insert(data).returning("order_id");
};
//Edit a order in DB by ID
const edit = (id, changes) => {
  return db("users_orders").where("order_id", id).update(changes);
};
//Remove a  from DB by ID
const remove = (id) => {
  return db("users_orders").where("order_id", id).del();
};
//Find a  in DB by filter
const findBy = (filter) => {
  return db("users_orders").where(filter);
};
module.exports = {
  getAll,
  getByID,
  post,
  edit,
  remove,
  findBy,
};
