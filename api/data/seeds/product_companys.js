exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("product_companys")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("product_companys").insert([
        { company_id: 1, company_name: "GROW OHIO" },
        { company_id: 2, company_name: "BUCKEYE RELIEF" },
        { company_id: 3, company_name: "STANDARD WELLNESS" },
        { company_id: 4, company_name: "KLUTCH" },
      ]);
    });
};
