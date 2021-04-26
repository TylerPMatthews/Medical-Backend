const db = require("../../api/data/db-config");

const getAll = () => {
  return db("view_products as vp")
    .join("product_companys as pc", "pc.company_id", "vp.company_id")
    .join("product_items as pi", "pi.item_id", "vp.item_id")
    .select(
      "pc.company_name",
      "pi.item_id",
      "pi.item_name",
      "pi.item_price",
      "pi.item_type",
      "pi.item_img",
      "pi.item_thc",
      "pi.item_cbd",
      "pi.item_description",
    );
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
  return db("view_products as vp")
  .join("product_companys as pc", "pc.company_id", "vp.company_id")
  .join("product_items as pi", "pi.item_id", "vp.item_id")
  .where(filter)
  .select(
    "pc.company_name",
    "pi.item_id",
    "pi.item_name",
    "pi.item_price",
    "pi.item_type",
    "pi.item_img",
    "pi.item_thc",
    "pi.item_cbd",
    "pi.item_description",
  );
};
module.exports = {
  getAll,
  getByID,
  post,
  edit,
  remove,
  findBy,
};
