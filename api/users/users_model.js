const db = require("../../api/data/db-config");

//Get all users from DB
const getAll = () => {
  return db("users");
};
//Get a user by ID from DB
const getByID = (id) => {
  return db("users").where("user_id", id);
};
//Post a new user to DB
const post = (data) => {
  return db("users").insert(data).returning("user_id");
};
//Edit a user in DB by ID
const edit = (id, changes) => {
  return db("users").where("user_id", id).update(changes);
};
//Remove a user from DB by ID
const remove = (id) => {
  return db("users").where("user_id", id).del();
};
//Find a user in DB by filter
const findBy = (filter) => {
  return db("users").where(filter);
};
module.exports = {
  getAll,
  getByID,
  post,
  edit,
  remove,
  findBy,
};
