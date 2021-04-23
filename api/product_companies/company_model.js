const db = require("../../api/data/db-config");

//Get all companies
const getAll = () => {
  return db("product_companys");
};
//Get a company by ID
const getByID = (id) => {
  return db("product_companys").where("company_id", id);
};
//Post a new company
const post = (data) => {
  return db("product_companys").insert(data).returning("company_id");
};
//Edit a company by ID
const edit = (id, changes) => {
  return db("product_companys").where("company_id", id).update(changes);
};
//Remove a company by ID
const remove = (id) => {
  return db("product_companys").where("company_id", id).del();
};
//Find a company by filter
const findBy = (filter) => {
  return db("product_companys").where(filter);
};
module.exports = {
  getAll,
  getByID,
  post,
  edit,
  remove,
  findBy,
};
