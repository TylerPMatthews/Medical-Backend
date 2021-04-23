const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const Users = require("./users/users_routes");
const UserAuth = require("./users_auth/user_auth");
const Userinformation = require("./users_information/information_routes");
const UserOrder = require("./users_orders/orders_routes");
const ProductCompanies = require("./product_companies/company_routes");
const ProductItems = require("./product_items/item_routes");
const ProductInventory = require("./product_inventory/product_routes");
const ViewProducts = require("./view_products/view_routes");
const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

//View products
server.use("/viewproducts", ViewProducts);

//Product inventory
server.use("/product/inventory", ProductInventory);

//Product items
server.use("/product/items", ProductItems);

//Product companies
server.use("/product/companies", ProductCompanies);

//Users orders
server.use("/users/orders", UserOrder);

//Users information
server.use("/users/information", Userinformation);

//Users auth
server.use("/auth", UserAuth);

//Users
server.use("/users", Users);

server.get("/", (req, res) => {
  res.json({ MedicalBackend: "ONLINE" });
});

module.exports = server;
