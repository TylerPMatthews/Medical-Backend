exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("view_products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("view_products").insert([
        { view_product_id: 1, company_id: 1, item_id: 1, inventory_id: 1 },
        { view_product_id: 2, company_id: 1, item_id: 2, inventory_id: 2 },
        { view_product_id: 3, company_id: 1, item_id: 3, inventory_id: 3 },
        { view_product_id: 4, company_id: 1, item_id: 4, inventory_id: 4 },
        { view_product_id: 5, company_id: 1, item_id: 5, inventory_id: 5 },
        { view_product_id: 6, company_id: 1, item_id: 6, inventory_id: 6 },
        { view_product_id: 7, company_id: 2, item_id: 7, inventory_id: 7 },
        { view_product_id: 8, company_id: 2, item_id: 8, inventory_id: 8 },
        { view_product_id: 9, company_id: 2, item_id: 9, inventory_id: 9 },
        { view_product_id: 10, company_id: 2, item_id: 10, inventory_id: 10 },
        { view_product_id: 11, company_id: 2, item_id: 11, inventory_id: 11 },
        { view_product_id: 12, company_id: 3, item_id: 12, inventory_id: 12 },
        { view_product_id: 13, company_id: 3, item_id: 13, inventory_id: 13 },
        { view_product_id: 14, company_id: 3, item_id: 14, inventory_id: 14 },
        { view_product_id: 15, company_id: 3, item_id: 15, inventory_id: 15 },
        { view_product_id: 16, company_id: 3, item_id: 16, inventory_id: 16 },
        { view_product_id: 17, company_id: 4, item_id: 17, inventory_id: 17 },
        { view_product_id: 18, company_id: 4, item_id: 18, inventory_id: 18 },
      ]);
    });
};
