exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("user_username", 200).notNullable().unique();
      users.string("user_password", 200).notNullable();
      users.string("user_email", 320).notNullable();
      users.boolean("user_account_type").defaultTo(0);
      users.timestamps(false, true);
    })
    .createTable("users_information", (users) => {
      users.increments("information_id");
      users.string("information_firstName", 200).notNullable();
      users.string("information_lastName", 200).notNullable();
      users.string("information_phone", 200);
      users.date("information_birthdate").notNullable();
      users.string("information_medical_id", 200).notNullable();
      users
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE");
    })
    .createTable("users_orders", (users) => {
      users.increments("order_id");
      users.specificType("order_product_names", "text[]");
      users.integer("order_price");
      users
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE");
    })
    .createTable("admin_orders", (users) => {
      users.increments("admin_order_id");
      users
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE");
      users
        .integer("information_id")
        .unsigned()
        .notNullable()
        .references("information_id")
        .inTable("users_information")
        .onDelete("CASCADE");

      users
        .integer("order_id")
        .unsigned()
        .notNullable()
        .references("order_id")
        .inTable("users_orders")
        .onDelete("CASCADE");
    })

    .createTable("product_companys", (users) => {
      users.increments("company_id");
      users.string("company_name", 400).notNullable();
    })
    .createTable("product_items", (users) => {
      users.increments("item_id");
      users.string("item_name", 400).notNullable();
      users.integer("item_price").notNullable();
      users.string("item_type", 200).notNullable();
      users
        .string("item_img", 750)
        .defaultTo("https://makitweb.com/demo/broken_image/images/noimage.png");
      users.integer("item_thc");
      users.integer("item_cbd");
      users.text("item_description");
    })

    .createTable("view_products", (users) => {
      users.increments("view_product_id");
      users
        .integer("company_id")
        .unsigned()
        .notNullable()
        .references("company_id")
        .inTable("product_companys")
        .onDelete("CASCADE");
      users
        .integer("item_id")
        .unsigned()
        .notNullable()
        .references("item_id")
        .inTable("product_items")
        .onDelete("CASCADE");
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("users_information")
    .dropTableIfExists("users_orders")
    .dropTableIfExists("admin_orders")
    .dropTableIfExists("product_companys")
    .dropTableIfExists("product_items")
    .dropTableIfExists("view_products");
};
