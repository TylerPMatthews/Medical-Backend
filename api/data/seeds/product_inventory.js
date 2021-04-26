exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("product_inventory")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("product_inventory").insert([
        { inventory_id: 1, inventory_count: 90},
        { inventory_id: 2, inventory_count: 100},
        { inventory_id: 3, inventory_count: 80},
        { inventory_id: 4, inventory_count: 90},
        { inventory_id: 5, inventory_count: 90},
        { inventory_id: 6, inventory_count: 90},
        { inventory_id: 7, inventory_count: 100},
        { inventory_id: 8, inventory_count: 100},
        { inventory_id: 9, inventory_count: 100},
        { inventory_id: 10, inventory_count: 90 },
        { inventory_id: 11, inventory_count: 90 },
        { inventory_id: 12, inventory_count: 80 },
        { inventory_id: 13, inventory_count: 90 },
        { inventory_id: 14, inventory_count: 100 },
        { inventory_id: 15, inventory_count: 90 },
        { inventory_id: 16, inventory_count: 90 },
        { inventory_id: 17, inventory_count: 90 },
        { inventory_id: 18, inventory_count: 90 },
      ]);
    });
};
