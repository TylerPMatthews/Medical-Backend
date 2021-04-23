const db = require("../../api/data/db-config");

//Get all users information from DB
const getAll = () => {
  return db("users_information");
};
//Get a users information by ID from DB
const getByID = (id) => {
  return db("users_information").where("user_id", id);
};
//Post a new users information to DB
const post = (data) => {
  return db("users_information").insert(data).returning("users_information_id");
};
//Edit a users information in DB by ID
const edit = (id, changes) => {
  return db("users_information").where("users_information_id", id).update(changes);
};
//Remove a users information from DB by ID
const remove = (id) => {
  return db("users_information").where("users_information_id", id).del();
};
//Find a users information in DB by filter
const findBy = (filter) => {
  return db("users_information").where(filter);
};
module.exports = {
  getAll,
  getByID,
  post,
  edit,
  remove,
  findBy,
};
